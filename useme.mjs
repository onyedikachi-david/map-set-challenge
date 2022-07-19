import { loadStdlib } from '@reach-sh/stdlib';
import * as backend from './build/index.main.mjs';
import {ask} from '@reach-sh/stdlib';

if (process.argv.length < 3 || ['deployer', 'nobody'].includes(process.argv[2]) == false) {
    console.log('Usage: reach run index [deployer|nobody]');
    process.exit(0);
  }
const role = process.argv[2];
console.log(`Your role is ${role}`);

const stdlib = loadStdlib(process.env);
const suStr = stdlib.standardUnit;
const toAU = (su) => stdlib.parseCurrency(su);
const toSU = (au) => stdlib.formatCurrency(au, 4);
const iBalance = toAU(1000);
const showBalance = async (acc) => console.log(`Your balance is ${toSU(await stdlib.balanceOf(acc))} ${suStr}.`);
console.log(`The atomic unit is ${stdlib.atomicUnit}`);

// Deployer
if (role === 'deployer') {
    const sellerInteract = { 
    //   ...commonInteract(role),
    //   price: toAU(5),
    //   wisdom: await ask.ask('Enter a wise phrase, or press Enter for default:', (s) => {
    //     let w = !s ? 'Build healthy communities.' : s;
    //     if (!s) { console.log(w); }
    //     return w;
    //   }),
      ready: async () => {
        // console.log(`Your wisdom is for sale at ${toSU(price)} ${suStr}.`);
        console.log(`Contract is ready, info: ${JSON.stringify(await ctc.getInfo())}`);
      },
      log: async (addr, ...args) => {
        console.log(`Address ${addr} was whitelisted ${args}`)
      },
      tokenDetails: async () => {
        return myToken.id
      }
    };
    const myToken = await stdlib.launchToken(acc, "Awoftok", "AFT");
          
    const accd = await stdlib.newTestAccounts(iBalance);
    console.log("List of addresses that can be added to whitelist")
    // console.log(`${stdlib.}`)
    for ( const who of [ accA, accB, accC ]) {
        console.warn(stdlib.formatAddress(who), 'has',
          stdlib.formatCurrency(await stdlib.balanceOf(who)));
          who.tokenAccept(myToken.id)
      }
    accd.tokenAccept(myToken.id);
    await showBalance(accd);
    const ctc = accd.contract(backend);
    await ctc.participants.Seller(sellerInteract);
    async () => {ctc.a.Whitelist.addAddress(await ask.ask(`Paste the address you wanna add:`, (s) => JSON.parse(s)))}
    const userAddr = await ask.ask(`Paste the address you wanna add:`, (s) => JSON.parse(s))
    async () => {ctc.a.Any.sendAza()}

    await showBalance(accd);
      
  // Anybody
  } else {

  }