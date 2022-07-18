import { loadStdlib } from '@reach-sh/stdlib';
import * as backend from './build/index.main.mjs';
import { util } from '@reach-sh/stdlib';
const { thread, Signal } = util;
const stdlib = loadStdlib(process.env);

  const startingBalance = stdlib.parseCurrency(100);

  console.log("Creating Test accounts .... ")

  const [ accA, accB, accC ] =
    await stdlib.newTestAccounts(3, startingBalance);
  accA.setDebugLabel('A');
  accB.setDebugLabel('B');
  accC.setDebugLabel('C');

  console.log("Account balances ...")
  for ( const who of [ accA, accB, accC ]) {
    console.warn(stdlib.formatAddress(who), 'has',
      stdlib.formatCurrency(await stdlib.balanceOf(who)));
  }
  const ctcA = accA.contract(backend);
  const ctcB = accB.contract(backend, ctcA.getInfo());
  const ctcC = accC.contract(backend, ctcA.getInfo());
  const ready = new Signal();

  const LOG = (...args) => {
    console.log("-------------");
    console.log(...args);
    console.log("-------------");
  };

  const aP = ctcA.p.Deployer({
    ready: () => {
      LOG(`Contract deployed and ready...`);
      ready.notify();
    },
    log: (...args) => LOG(`Deployer sees this address:`, ...args),
  });

  await ready.wait();

  console.log("Adding three accounts to the contract ....")
  await ctcB.a.Whitelist.addAddress();
  await ctcA.a.Whitelist.addAddress();
  await ctcC.a.Whitelist.addAddress();


  await aP;
  console.log(("Done!"))
