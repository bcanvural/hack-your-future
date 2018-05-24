## Simple Bank App

The server.js file contains a simple nodejs webapp that lets users manage their money in their accounts.

## Get Started

Run the following for installing node package dependencies (within this directory):


        npm install express node-fetch config

You should now be able to run the server by selecting the Debug tab in VS Code and clicking on the green play button

## Explore the app

After running the app, visit 

        localhost:3000/balances

to see the userId and balance information.

To add some money to a user's account you can visit:

        localhost:3000/updatebalance?userId=USER_ID_HERE&amount=AMOUNT

USER_ID_HERE should be set to userId we want to update, and AMOUNT should be set to the amount of money this person should receive.

So, if we want to update user with id 0's account balance by 100, we visit:

        localhost:3000/updatebalance?userId=0&amount=100

You can see that there's already a bug! We expected user 0's balance to increase by 100! (Bug #1 !)

## Debugging the app

You can set breakpoints in VS Code and trigger them by visiting the urls mentioned above.

## Known Bugs

1) Visit 

        localhost:3000/updatebalance?userId=0&amount=100

in your browser. Did the user 0's money increase by 100?

2) Visit

        localhost:3000/updatebalance?userId=&amount=100
    
 note that user with id 0 still got its balance updated. Why?

3) Visit

        http://localhost:3000/updatebalance?userId=0&amount=million

 note that the user with id 0 got its balance updated. Would you want the app to update your app by 1000000 if you type in million? How can you prevent the null value in the balance when a random string is inserted?

4) Visit

        http://localhost:3000/updatebalance?userId=42&amount=10

User 42 didn't exist yet, check the debug console log. How to prevent this TypeError? What should the app do here?

5) Are there any other bugs you can trigger?


6) Update the file the "blackbox-server-url" property  in "config/default.json" file. This value will be provided. Now there's a new endpoint at:

        localhost:3000/blackbox

 This endpoint invokes an external service and from the response from this service, it updates our userbalances database. However, it turns out sometimes the database is corrupted! Figure out what's happening and think of a workaround.
 


