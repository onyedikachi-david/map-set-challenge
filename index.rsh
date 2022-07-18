'reach 0.1';
/* eslint-disable */
// 'use strict'
/*

Level 1 ($20 USDC)
--> Write a program that stores a whitelisted wallet Address. 
--> Address must be stored in Map or Set 
--> Hardcode this address, or set it to the known Bob address
--> Read about Untrustworthy Maps
--> Display status messages to the console
--> Deploying / attaching notifications
--> Display wallet network token balance
--> Display whitelisted wallet address

*/

export const main = Reach.App(() => {
  setOptions({ untrustworthyMaps: true });
  const D = Participant('Deployer', {
    ready: Fun([], Null),
    log: Fun(true, Null)
  });
  const W = API('Whitelist', {
    addAddress: Fun([], Null) // Recieves an address from the frontend, Should it
  });
  // const AddrView = View('Address', {
  //   addr: Address,
  // });
  init();

  D.publish();
  D.interact.ready();
  // commit()

  const whitelistMap = new Set()
  // const count = 0

  // Using API to recieve and store an address
  // var [] = []
  // {AddrView.addr.set(this)}
  // invariant( balance() == 0 );
  // while (true) {
  //   commit();

  //   const [_, k1] = 
  //     call(W.addAddress)
  //     check(!whitelistMap.member(this))
  //       whitelistMap.insert(this)
  //       // AddrView.addr.set(this)
  //       k1(null)
       
  //   continue
  // }
  // <-----------------------------------------------> 
  // The previous code gives a theorem formalization error
  // when I add line 47 
  // <----------------------------------------------->
  // ================================================
  // ------ Lets try using parallelReduce -----------
  // ================================================

  const [keepGoing] = 
  parallelReduce([true])
    .invariant(balance()==0)
    .while(keepGoing)
    .api_(W.addAddress, () => {
      check( ! whitelistMap.member(this), "Address added");
      return [(k) => {
        k(null);
        whitelistMap.insert(this);
        D.interact.log(this, " was added")
        return [keepGoing]
      }]
    })
    .timeout(false)
  commit()
  exit();
});
