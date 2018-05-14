
var users = [
    {
        name: "Alice",
        balance: 100
    },
    {
        name: "Bob",
        balance: 100
    },
    {
        name: "Jack",
        balance: 100
    }];

function getUserObject(username){
    for(var i = 0; i < users.length; i++){
        if (users[i].name == username){
            return users[i];
        }
    }
    return null;
}

function decrement(balance, amount){
  balance = balance - amount;
}

function increment(balance, amount){
    balance = balance + amount;
 }

function transferMoney(user1, user2, amount){
    var userObj1 = getUserObject(user1);
    var userObj2 = getUserObject(user2);
    if (!userObj1 || !userObj2){
        console.log("Error!")
        return;
    }
    decrement(userObj1.balance, amount);
    increment(userObj2.balance, amount);
}

//Alice transfers money  to Bob
transferMoney("Alice", "Bob", 50);
transferMoney("Bob", "Jack", 50);
transferMoney("Jack", "Alice", 50);

//print all
console.log(users[0].balance);
console.log(users[1].balance);
console.log(users[2].balance);