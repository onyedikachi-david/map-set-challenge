import { loadStdlib } from '@reach-sh/stdlib';
import * as backend from './build/index.main.mjs';
import { util } from '@reach-sh/stdlib';
const { thread, Signal } = util;
const stdlib = loadStdlib(process.env);

  const startingBalance = stdlib.parseCurrency(100);

  const [ accA, accB, accC ] =
    await stdlib.newTestAccounts(3, startingBalance);
  accA.setDebugLabel('A');
  accB.setDebugLabel('B');
  accC.setDebugLabel('C');

  const ctcA = accA.contract(backend);
  const ctcB = accB.contract(backend, ctcA.getInfo());
  const ctcC = accC.contract(backend, ctcA.getInfo());
  const ready = new Signal();

  const LOG = (...args) => {
    console.log("");
    console.log("");
    console.log(...args);
    console.log("");
    console.log("");
  };

  const aP = ctcA.p.Deployer({
    ready: () => {
      LOG(`A says its ready`);
      ready.notify();
    },
    log: (...args) => LOG(`A sees`, ...args),
  });

  await ready.wait();

  await ctcB.a.Whitelist.addAddress();
  await ctcA.a.Whitelist.addAddress();
  await ctcC.a.Whitelist.addAddress();


  await aP;
