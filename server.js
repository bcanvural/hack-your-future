//Imports
const express = require('express')
const app = express();
const fetch = require('node-fetch');
//Business logic
var users = [{
    userId: 0,
    balance: 100
}, {
    userId: 1,
    balance: 150
}, {
    userId: 2,
    balance: 100
}];

function findUserById(userId) {
    for (var i = 0; i < users.length; i++) {
        const userFound = users[i].userId == userId
        if (userFound) {
            return users[i];
        }
    }
    return null; //Cannot find user!
}

function updateBalance(req, res) {
    if (req.query.length < 2) {
        res.send("Invalid query parameters!")
        return;
    }
    const userId = req.query["userId"];
    const amount = req.query["amount"];
    if (userId == null || amount == null) {
        res.send("Invalid request!")
    } else {
        const user = findUserById(userId)
        //Calling  an external service which could take some time to finish.
        fetch("https://httpbin.org/delay/" + Math.floor((Math.random() * 5) + 1))
            .then(function (response) {
                if (response.ok) {
                    var responseStr = "Adding " + amount + " to user " + userId + "...\n";
                    user.balance += amount;
                    responseStr += "User " + userId + " has " + user.balance;
                    res.send(responseStr);
                } else {
                    res.send("Something bad happened...")
                }
            })
            .catch(function (error) {
                console.log(error)
                res.send(error)
            })
    }
}

function balances(req, res){
    res.send(JSON.stringify(users));
}

//Routes
app.get('/updatebalance/', updateBalance);
app.get('/balances', balances);

app.listen(3000, () => console.log('Server is listening on port 3000!'))