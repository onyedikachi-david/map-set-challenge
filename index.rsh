'reach 0.1';
/* eslint-disable */
// 'use strict'

/*
Level 2 ($40 USDC)
--> Make the program interactive. Create 3 Participants, with at least one address failing the whitelist check and one passing.
--> Incorporate a non-network token.
--> Use launchToken to create a new token
--> Distribute your tokens to the whitelisted wallet address
--> Display status messages to the console
--> Was the wallet address approved?
--> Display token properties (name, unit, quantity)
--> Did your tokens successfully deliver?
--> This should be done in 2 files, index.rsh and index.mjs
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
    sendAza: Fun([UInt, Address], UInt)
  })
  const V = View({ getUserBalance: Fun([Address], UInt) })
  init();

  D.only(() => {
    const myToken = declassify(interact.tokenDetails());
  });
  D.publish(myToken);
  D.interact.ready();

  const whitelistAddrBal = new Map(UInt);
  V.getUserBalance.set((m) => myFromMaybe(whitelistAddrBal[m]));
  const whitelistMap = new Set();

  const [keepGoing, totalTokens, numOfAddr] = 
  parallelReduce([true, 0, 0])
    // .invariant(balance() >= hmm)
    .invariant(balance(myToken) >= totalTokens)
    .while(keepGoing)
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
    // .timeout(false)
    transfer(balance()).to(D);
    transfer([ 0, [ balance(myToken), myToken ] ]).to(D);
  commit()
  exit();
});
