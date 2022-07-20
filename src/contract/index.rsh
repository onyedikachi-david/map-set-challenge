'reach 0.1';
/* eslint-disable */
// 'use strict'

/*
Level 3 ($60 USDC)
--> Build out a front end GUI
--> Use the framework of your choice
--> It will contain as many files as you need to complete the task
--> Use a testnet token
--> Create your own testnet token and import the asset ID number from the Deployer UI
--> Allow users to submit their wallets to the application
--> The first 5 users to submit their wallets are whitelisted
--> Users after 5 receive an error message stating the list is full
The whitelisted addresses receive tokens

*/

// An api that recieves address from frontend [done]
// stores address to the set [done]
// recieves token details from frontend. [done]
// sends a token to an address, which is stored in a set. [done]
// A view that shows the address balance in contract. 

const myFromMaybe = (m) => fromMaybe(m, (() => 0), ((x) => x));

export const main = Reach.App(() => {
  setOptions({ untrustworthyMaps: true });
  const D = Participant('Deployer', {
    ready: Fun([], Null),
    log: Fun(true, Null),
    tokenDetails: Fun([], Token),
  });
  const W = API('Whitelist', {
    addAddress: Fun([Address], Null), // Recieves an address from the frontend, Should it
  });
  const A = API('Any', {
    sendAza: Fun([UInt, Address], UInt),
    withdraw: Fun([UInt], UInt), // returns updated current balance
  })
  const V = View({ getUserBalance: Fun([Address], UInt) })
  init();

  D.only(() => {
    const myToken = declassify(interact.tokenDetails());
  });
  D.publish(myToken);
  commit();
  D.pay([[50000000, myToken]]);
  
  D.interact.ready();

  const whitelistAddrBal = new Map(UInt);
  V.getUserBalance.set((m) => myFromMaybe(whitelistAddrBal[m]));
  const whitelistMap = new Set();

  const [keepGoing, totalTokens, numOfAddr] = 
  parallelReduce([true, 0, 0])
    // .invariant(balance() >= hmm)
    .invariant(balance(myToken) >= totalTokens)
    .while( keepGoing && numOfAddr <= 5 )
    .paySpec([ myToken ])
    .api_(W.addAddress, (addr) => {
      check( ! whitelistMap.member(addr), "Address added");
      return [( k) => {
        k(null);
        whitelistMap.insert(addr);
        D.interact.log(addr, " was added")
        return [keepGoing, totalTokens, numOfAddr + 1]
      }]
    })
    .api(
      A.sendAza,
      (depositAmt,addr) => {
        assume(depositAmt > 0 && whitelistMap.member(addr));
      },
      (depositAmt,_) => [ 0, [ depositAmt, myToken ]],
      (depositAmt,depositAddr,returnFunc) => {
        require(depositAmt > 0 && whitelistMap.member(depositAddr));

        const curBalance = myFromMaybe(whitelistAddrBal[depositAddr]);
        whitelistAddrBal[depositAddr] = curBalance + depositAmt;

        returnFunc(myFromMaybe(whitelistAddrBal[depositAddr]));
        return [ keepGoing, totalTokens + depositAmt, numOfAddr ];
      }
    )
    .api(
      A.withdraw,
      (withdrawAmt) => {
        assume(withdrawAmt > 0);
        assume(withdrawAmt <= balance(myToken));
      },
      (_) => [ 0, [ 0, myToken ] ],
      (withdrawAmt,returnFunc) => {
        require(withdrawAmt > 0);
        require(withdrawAmt <= balance(myToken));

        const curBalance = myFromMaybe(whitelistAddrBal[this]);
        const maxWithdrawAmt = array(UInt, [ curBalance , withdrawAmt ]).min();
        whitelistAddrBal[this] = curBalance - maxWithdrawAmt;

        returnFunc(myFromMaybe(whitelistAddrBal[this]));
        transfer([0, [maxWithdrawAmt, myToken]]).to(this);

        return [ keepGoing, totalTokens - maxWithdrawAmt, numOfAddr ];
      }
    )
    // .timeout(false)
    transfer(balance()).to(D);
    transfer([ 0, [ balance(myToken), myToken ] ]).to(D);
  commit()
  exit();
});
