// Automatically generated with Reach 0.1.11 (578589af)
/* eslint-disable */
export const _version = '0.1.11';
export const _versionHash = '0.1.11 (578589af)';
export const _backendVersion = 17;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const map0_ctc = ctc1;
  
  
  return {
    infos: {
      },
    views: {
      3: []
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc2 = stdlib.T_Tuple([ctc1]);
  return {
    mapDataTy: ctc2
    };
  };
export async function Deployer(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Deployer expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Deployer expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc2 = stdlib.T_Tuple([]);
  
  const map0_ctc = ctc1;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: false,
    ty: map0_ctc
    });
  
  
  const txn1 = await (ctc.sendrecv({
    args: [],
    evt_cnt: 0,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:32:5:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:32:5:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [], secs: v166, time: v165, didSend: v22, from: v164 } = txn1;
      
      ;
      
      const v168 = true;
      const v169 = v165;
      
      if (await (async () => {
        
        return v168;})()) {
        sim_r.isHalt = false;
        }
      else {
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        }
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v166, time: v165, didSend: v22, from: v164 } = txn1;
  ;
  stdlib.protect(ctc0, await interact.ready(), {
    at: './index.rsh:33:19:application',
    fs: ['at ./index.rsh:33:19:application call to [unknown function] (defined at: ./index.rsh:33:19:function exp)', 'at ./index.rsh:33:19:application call to "liftedInteract" (defined at: ./index.rsh:33:19:application)'],
    msg: 'ready',
    who: 'Deployer'
    });
  
  let v168 = true;
  let v169 = v165;
  
  while (await (async () => {
    
    return v168;})()) {
    const txn2 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 2,
      out_tys: [ctc2],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v187], secs: v189, time: v188, didSend: v108, from: v186 } = txn2;
    undefined /* setApiDetails */;
    ;
    const v191 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v186), null);
    let v192;
    switch (v191[0]) {
      case 'None': {
        const v193 = v191[1];
        v192 = false;
        
        break;
        }
      case 'Some': {
        const v194 = v191[1];
        v192 = true;
        
        break;
        }
      }
    const v195 = v192 ? false : true;
    stdlib.assert(v195, {
      at: 'reach standard library:57:5:application',
      fs: ['at ./index.rsh:68:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:69:19:application call to [unknown function] (defined at: ./index.rsh:69:19:function exp)'],
      msg: 'Address added',
      who: 'Deployer'
      });
    const v197 = null;
    await txn2.getOutput('Whitelist_addAddress', 'v197', ctc0, v197);
    await stdlib.mapSet(map0, v186, null);
    const v205 = ' was added';
    stdlib.protect(ctc0, await interact.log(v186, v205), {
      at: './index.rsh:72:23:application',
      fs: ['at ./index.rsh:72:23:application call to [unknown function] (defined at: ./index.rsh:72:23:function exp)', 'at ./index.rsh:72:23:application call to "liftedInteract" (defined at: ./index.rsh:72:23:application)', 'at ./index.rsh:69:19:application call to [unknown function] (defined at: ./index.rsh:69:19:function exp)'],
      msg: 'log',
      who: 'Deployer'
      });
    
    const cv168 = true;
    const cv169 = v188;
    
    v168 = cv168;
    v169 = cv169;
    
    continue;
    
    }
  return;
  
  
  };
export async function _Whitelist_addAddress3(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Whitelist_addAddress3 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Whitelist_addAddress3 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc2 = stdlib.T_Tuple([]);
  
  const map0_ctc = ctc1;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  
  const [] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), []);
  const v175 = ctc.selfAddress();
  const v177 = stdlib.protect(ctc2, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:67:28:application call to [unknown function] (defined at: ./index.rsh:67:28:function exp)', 'at ./index.rsh:67:28:application call to [unknown function] (defined at: ./index.rsh:67:28:function exp)'],
    msg: 'in',
    who: 'Whitelist_addAddress'
    });
  const v178 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v175), null);
  let v179;
  switch (v178[0]) {
    case 'None': {
      const v180 = v178[1];
      v179 = false;
      
      break;
      }
    case 'Some': {
      const v181 = v178[1];
      v179 = true;
      
      break;
      }
    }
  const v182 = v179 ? false : true;
  stdlib.assert(v182, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:68:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:67:28:application call to [unknown function] (defined at: ./index.rsh:67:28:function exp)', 'at ./index.rsh:67:28:application call to [unknown function] (defined at: ./index.rsh:67:28:function exp)'],
    msg: 'Address added',
    who: 'Whitelist_addAddress'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v177],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc2],
    pay: [stdlib.checkedBigNumberify('./index.rsh:67:10:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v187], secs: v189, time: v188, didSend: v108, from: v186 } = txn1;
      
      sim_r.txns.push({
        kind: 'api',
        who: "Whitelist_addAddress"
        });
      ;
      stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v186), null);
      const v197 = null;
      const v198 = await txn1.getOutput('Whitelist_addAddress', 'v197', ctc0, v197);
      
      await stdlib.simMapSet(sim_r, 0, v186, null);
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc2],
    waitIfNotPresent: false
    }));
  const {data: [v187], secs: v189, time: v188, didSend: v108, from: v186 } = txn1;
  undefined /* setApiDetails */;
  ;
  const v191 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v186), null);
  let v192;
  switch (v191[0]) {
    case 'None': {
      const v193 = v191[1];
      v192 = false;
      
      break;
      }
    case 'Some': {
      const v194 = v191[1];
      v192 = true;
      
      break;
      }
    }
  const v195 = v192 ? false : true;
  stdlib.assert(v195, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:68:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:69:19:application call to [unknown function] (defined at: ./index.rsh:69:19:function exp)'],
    msg: 'Address added',
    who: 'Whitelist_addAddress'
    });
  const v197 = null;
  const v198 = await txn1.getOutput('Whitelist_addAddress', 'v197', ctc0, v197);
  if (v108) {
    stdlib.protect(ctc0, await interact.out(v187, v198), {
      at: './index.rsh:67:11:application',
      fs: ['at ./index.rsh:67:11:application call to [unknown function] (defined at: ./index.rsh:67:11:function exp)', 'at ./index.rsh:70:10:application call to "k" (defined at: ./index.rsh:69:19:function exp)', 'at ./index.rsh:69:19:application call to [unknown function] (defined at: ./index.rsh:69:19:function exp)'],
      msg: 'out',
      who: 'Whitelist_addAddress'
      });
    }
  else {
    }
  
  await stdlib.mapSet(map0, v186, null);
  return;
  
  
  
  };
export async function Whitelist_addAddress(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Whitelist_addAddress expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Whitelist_addAddress expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 3) {return _Whitelist_addAddress3(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
const _ALGO = {
  ABI: {
    impure: [`Whitelist_addAddress()byte[0]`],
    pure: [],
    sigs: [`Whitelist_addAddress()byte[0]`]
    },
  appApproval: `BiAEAAECAyYCAQAAIjUAMRhBAS4pZEkiWzUBgQhbNQIxGSMSQQAIMQAoKGZCAPw2GgAXSUEAEiI1BCM1BoHslMyBDRJEKUIAFjYaAhc1BDYaAzYaARdJJAxAAFokEkQlNAESRDQESSISTDQCEhFESTUFNf+ABCU8t9c0/1CwMQCIANxJNf0iVUAABiI1/kIABiM1/kIAADT+FESACAAAAAAAAADFsCk1BzEAKIABAWYjMgZCACciEkSBoI0GiACsIjQBEkQ0BEkiEkw0AhIRRIAEXw2r+rAjMgZCAAA1/0k1/kEACiU1ATIGNQJCAB9CAAAxGYEFEkSxIrIBIrIII7IQMgmyCTIKsgezQgAFMRkiEkQpNAEWNAIWUGc0BkEACoAEFR98dTQHULA0AEkjCDIEEkQxFhJEI0MxGSISREL/3yIxNBJEIzE1EkQiMTYSRCMxNxJEIjUBIjUCQv+vSTEYYUAAA0goiShiiTQASUojCDUAOAcyChJEOBAjEkQ4CBJEiQ==`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 1,
  mapDataSize: 1,
  stateKeys: 0,
  stateSize: 0,
  unsupported: [],
  version: 10,
  warnings: []
  };
const _ETH = {
  ABI: `[
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T4",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "msg",
        "type": "uint256"
      }
    ],
    "name": "ReachError",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T4",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e0",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "bool",
                "name": "v187",
                "type": "bool"
              }
            ],
            "internalType": "struct T6",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e2",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "bool",
        "name": "v0",
        "type": "bool"
      }
    ],
    "name": "_reach_oe_v197",
    "type": "event"
  },
  {
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "inputs": [],
    "name": "Whitelist_addAddress",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCreationTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentState",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "",
        "type": "bytes"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "addr",
        "type": "address"
      }
    ],
    "name": "_reachMap0Ref",
    "outputs": [
      {
        "components": [
          {
            "internalType": "enum _enum_T0",
            "name": "which",
            "type": "uint8"
          },
          {
            "internalType": "bool",
            "name": "_None",
            "type": "bool"
          },
          {
            "internalType": "bool",
            "name": "_Some",
            "type": "bool"
          }
        ],
        "internalType": "struct T0",
        "name": "res",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "bool",
                "name": "v187",
                "type": "bool"
              }
            ],
            "internalType": "struct T6",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m2",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x608060405260405162000c3338038062000c33833981016040819052620000269162000257565b600080554360035560408051338152825160208083019190915283015115158183015290517faf3102e4a96b239a2811210526ca19adcde1af3e2876a2c9a5886a5a887a2dcb9181900360600190a16200008334156007620000b0565b6200008d6200013e565b60208082018051600190525143910152620000a881620000da565b5050620002ff565b81620000d65760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b602081015151156200012357600360009081554360015560408051602080820184905282518083038201815291830190925280516200011e92600292019062000177565b505050565b600080805560018190556200013b9060029062000206565b50565b6040518060400160405280600015158152602001620001726040518060400160405280600015158152602001600081525090565b905290565b8280546200018590620002c2565b90600052602060002090601f016020900481019282620001a95760008555620001f4565b82601f10620001c457805160ff1916838001178555620001f4565b82800160010185558215620001f4579182015b82811115620001f4578251825591602001919060010190620001d7565b506200020292915062000240565b5090565b5080546200021490620002c2565b6000825580601f1062000225575050565b601f0160209004906000526020600020908101906200013b91905b5b8082111562000202576000815560010162000241565b6000604082840312156200026a57600080fd5b604080519081016001600160401b03811182821017156200029b57634e487b7160e01b600052604160045260246000fd5b6040528251815260208301518015158114620002b657600080fd5b60208201529392505050565b600181811c90821680620002d757607f821691505b60208210811415620002f957634e487b7160e01b600052602260045260246000fd5b50919050565b610924806200030f6000396000f3fe6080604052600436106100565760003560e01c80631e93b0f11461005f5780633bc5b7bf146100835780633e59bac4146100b057806383230757146100c3578063ab53f2c6146100d8578063df9f0510146100fb57005b3661005d57005b005b34801561006b57600080fd5b506003545b6040519081526020015b60405180910390f35b34801561008f57600080fd5b506100a361009e3660046106de565b610113565b60405161007a9190610724565b61005d6100be36600461076b565b61013f565b3480156100cf57600080fd5b50600154610070565b3480156100e457600080fd5b506100ed61016a565b60405161007a929190610783565b610103610207565b604051901515815260200161007a565b604080516060810182526000808252602082018190529181019190915261013982610239565b92915050565b604080516020810190915260008152610166610160368490038401846107ee565b82610311565b5050565b60006060600054600280805461017f9061089c565b80601f01602080910402602001604051908101604052809291908181526020018280546101ab9061089c565b80156101f85780601f106101cd576101008083540402835291602001916101f8565b820191906000526020600020905b8154815290600101906020018083116101db57829003601f168201915b50505050509050915091509091565b60006102116105ad565b60208082015160009081905260408051928301905281526102328282610311565b5192915050565b604080516060810182526000808252602082018190529181019190915260016001600160a01b03831660009081526004602052604090205460ff1660018111156102855761028561070e565b1415610302576001600160a01b038216600090815260046020526040908190208151606081019092528054829060ff1660018111156102c6576102c661070e565b60018111156102d7576102d761070e565b8152905460ff6101008204811615156020840152620100009091041615156040909101529050919050565b60008082526020820152919050565b610321600360005414600a610529565b815161033c90158061033557508251600154145b600b610529565b60008080556002805461034e9061089c565b80601f016020809104026020016040519081016040528092919081815260200182805461037a9061089c565b80156103c75780601f1061039c576101008083540402835291602001916103c7565b820191906000526020600020905b8154815290600101906020018083116103aa57829003601f168201915b50505050508060200190518101906103df91906108d1565b604080516020808201835260008252825133815287518183015290870151511515818401529151929350917fea301fa16f4bb7851ebe70b97d841398dfcfaffcc5b90514d4df21d88b62c5bd9181900360600190a161044034156008610529565b600061044b33610239565b51600181111561045d5761045d61070e565b141561046c5760008152610494565b600161047733610239565b5160018111156104895761048961070e565b141561049457600181525b80516104af906104a55760016104a8565b60005b6009610529565b604051600081527fb1dceeca5f005ce6ad5d8904273795c91f26c7e7e05824a5881895c1cc1fd3859060200160405180910390a16000808452338152600460205260409020805462ff00ff191660011790556105096105dc565b602080820180516001905251439101526105228161054e565b5050505050565b816101665760405163100960cb60e01b81526004810182905260240160405180910390fd5b60208101515115610594576003600090815543600155604080516020808201849052825180830382018152918301909252805161058f92600292019061060f565b505050565b600080805560018190556105aa90600290610693565b50565b6040518060400160405280600081526020016105d760405180602001604052806000151581525090565b905290565b60405180604001604052806000151581526020016105d76040518060400160405280600015158152602001600081525090565b82805461061b9061089c565b90600052602060002090601f01602090048101928261063d5760008555610683565b82601f1061065657805160ff1916838001178555610683565b82800160010185558215610683579182015b82811115610683578251825591602001919060010190610668565b5061068f9291506106c9565b5090565b50805461069f9061089c565b6000825580601f106106af575050565b601f0160209004906000526020600020908101906105aa91905b5b8082111561068f57600081556001016106ca565b6000602082840312156106f057600080fd5b81356001600160a01b038116811461070757600080fd5b9392505050565b634e487b7160e01b600052602160045260246000fd5b815160608201906002811061074957634e487b7160e01b600052602160045260246000fd5b8083525060208301511515602083015260408301511515604083015292915050565b60006040828403121561077d57600080fd5b50919050565b82815260006020604081840152835180604085015260005b818110156107b75785810183015185820160600152820161079b565b818111156107c9576000606083870101525b50601f01601f191692909201606001949350505050565b80151581146105aa57600080fd5b600081830360408082121561080257600080fd5b805181810167ffffffffffffffff828210818311171561083257634e487b7160e01b600052604160045260246000fd5b818452863583526020601f198601121561084b57600080fd5b83519450602085019150848210818311171561087757634e487b7160e01b600052604160045260246000fd5b5090915260208401359061088a826107e0565b90825260208101919091529392505050565b600181811c908216806108b057607f821691505b6020821081141561077d57634e487b7160e01b600052602260045260246000fd5b6000602082840312156108e357600080fd5b8151610707816107e056fea2646970667358221220a09eb8824c2bf3338ce5773989ba823cbc88cace900a1ec24044fc918c8f973464736f6c634300080c0033`,
  BytecodeLen: 3123,
  Which: `oD`,
  version: 7,
  views: {
    }
  };
export const _stateSourceMap = {
  2: {
    at: './index.rsh:77:3:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:64:17:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    }
  };
export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };
export const _Participants = {
  "Deployer": Deployer,
  "Whitelist_addAddress": Whitelist_addAddress
  };
export const _APIs = {
  Whitelist: {
    addAddress: Whitelist_addAddress
    }
  };
