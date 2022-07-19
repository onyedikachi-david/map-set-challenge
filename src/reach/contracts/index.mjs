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
    const deployerInteract = {
        ready: async () => {
            console.log(`Contract is ready...${JSON.stringify(await ctc.getInfo())}`);
        },
        log: async (addr, ...args) => {
            console.log(`Address ${addr} was whitelisted ${args}`)
        },
        tokenDetails: async () => {
            return myToken.id
        }
    }

    const accD = await stdlib.newTestAccount(iBalance);
    await showBalance(accD)

    const myToken = await stdlib.launchToken(accD, "AwofTok", "AFT");
    const ctc = accD.contract(backend);
    // console.log(`Contract lauched successfully, id: ${JSON.stringify(ctc.getInfo())}, copy and paste in another terminal.`)
    // console.log(`Token details: ${await accD.tokenMetadata(myToken.id)}`)
    accD.tokenAccept(myToken.id);
    await ctc.participants.Deployer(deployerInteract);
    const aza = await ask.ask(`Paste the address you wanna add:`, (s) => JSON.parse(s))
    const amt = await ask.ask(`Write the amount you wanna send to the address:`, (s) => JSON.parse(s))
    const userBalance = await ctc.v.getUserBalance(aza);
    await ctc.a.Any.sendAza(aza, amt)
    console.log(`Bob can see his withdrawable balance of SWP in the contract is: ${userBalance[1]}`);

    // const bobBalance = await ctcBob.v.getUserBalance(addrBob);
} else {
    // Join contract.
    // Run the first api by pasting an address.
    // 
    const accAny = await stdlib.newTestAccount(iBalance);
    console.log(`Your address: ${stdlib.formatAddress(accAny)}`)
    const info = await ask.ask('Paste contract info:', (s) => JSON.parse(s));
    const ctca = accAny.contract(backend, info);
    await ctca.a.Whitelist.addAddress(await ask.ask(`Paste the address you wanna add to whitelist:`, (s) => s))
    const yourBalance = await ctca.v.getUserBalance(accAny);
    console.log(`Your balace of token in contract ${yourBalance}`)


}