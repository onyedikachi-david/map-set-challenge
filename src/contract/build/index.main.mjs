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
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_Token;
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Bool;
  const ctc4 = stdlib.T_Tuple([ctc2, ctc2, ctc3]);
  const ctc5 = stdlib.T_Array(ctc4, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc6 = stdlib.T_Null;
  const ctc7 = stdlib.T_Data({
    None: ctc6,
    Some: ctc2
    });
  const ctc8 = stdlib.T_Data({
    None: ctc6,
    Some: ctc6
    });
  const map0_ctc = ctc7;
  
  const map1_ctc = ctc8;
  
  
  return {
    infos: {
      getUserBalance: {
        decode: async (i, svs, args) => {
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
            const [v554, v555, v563] = svs;
            stdlib.assert(false, 'illegal view')
            }
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'))) {
            const [v554, v555, v584, v585, v593, v594] = svs;
            return (await ((async (_v579 ) => {
                const v579 = stdlib.protect(ctc0, _v579, null);
              
              const v580 = stdlib.protect(map0_ctc, await viewlib.viewMapRef(0, v579), null);
              let v581;
              switch (v580[0]) {
                case 'None': {
                  const v582 = v580[1];
                  v581 = stdlib.checkedBigNumberify('./src/contract/index.rsh:25:48:decimal', stdlib.UInt_max, '0');
                  
                  break;
                  }
                case 'Some': {
                  const v583 = v580[1];
                  v581 = v583;
                  
                  break;
                  }
                }
              
              return v581;}))(...args));
            }
          
          stdlib.assert(false, 'illegal view')
          },
        ty: ctc2
        }
      },
    views: {
      1: [ctc0, ctc1, ctc5],
      4: [ctc0, ctc1, ctc3, ctc2, ctc5, ctc2]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc4 = stdlib.T_Tuple([ctc2, ctc3]);
  return {
    mapDataTy: ctc4
    };
  };
export async function _Any_sendAza4(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Any_sendAza4 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Any_sendAza4 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc4 = stdlib.T_Address;
  const ctc5 = stdlib.T_Token;
  const ctc6 = stdlib.T_Bool;
  const ctc7 = stdlib.T_Tuple([ctc1, ctc1, ctc6]);
  const ctc8 = stdlib.T_Array(ctc7, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc9 = stdlib.T_Tuple([ctc1, ctc4]);
  const ctc10 = stdlib.T_Tuple([ctc1]);
  const ctc11 = stdlib.T_Tuple([ctc4]);
  const ctc12 = stdlib.T_Data({
    Any_sendAza0_62: ctc9,
    Any_withdraw0_62: ctc10,
    Whitelist_addAddress0_62: ctc11
    });
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  const map1_ctc = ctc3;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: true,
    ty: map1_ctc
    });
  
  
  const [v554, v555, v584, v585, v593, v594] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc4, ctc5, ctc6, ctc1, ctc8, ctc1]);
  const v602 = stdlib.protect(ctc9, await interact.in(), {
    at: './src/contract/index.rsh:1:23:application',
    fs: ['at ./src/contract/index.rsh:74:25:application call to [unknown function] (defined at: ./src/contract/index.rsh:74:25:function exp)', 'at ./src/contract/index.rsh:58:17:application call to "runAny_sendAza0_62" (defined at: ./src/contract/index.rsh:72:9:function exp)', 'at ./src/contract/index.rsh:58:17:application call to [unknown function] (defined at: ./src/contract/index.rsh:58:17:function exp)'],
    msg: 'in',
    who: 'Any_sendAza'
    });
  const v603 = v602[stdlib.checkedBigNumberify('./src/contract/index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v604 = v602[stdlib.checkedBigNumberify('./src/contract/index.rsh:1:23:application', stdlib.UInt_max, '1')];
  const v608 = stdlib.gt(v603, stdlib.checkedBigNumberify('./src/contract/index.rsh:75:29:decimal', stdlib.UInt_max, '0'));
  const v609 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v604), null);
  let v610;
  switch (v609[0]) {
    case 'None': {
      const v611 = v609[1];
      v610 = false;
      
      break;
      }
    case 'Some': {
      const v612 = v609[1];
      v610 = true;
      
      break;
      }
    }
  const v613 = v608 ? v610 : false;
  stdlib.assert(v613, {
    at: './src/contract/index.rsh:75:15:application',
    fs: ['at ./src/contract/index.rsh:74:25:application call to [unknown function] (defined at: ./src/contract/index.rsh:74:25:function exp)', 'at ./src/contract/index.rsh:74:25:application call to [unknown function] (defined at: ./src/contract/index.rsh:74:25:function exp)', 'at ./src/contract/index.rsh:58:17:application call to "runAny_sendAza0_62" (defined at: ./src/contract/index.rsh:72:9:function exp)', 'at ./src/contract/index.rsh:58:17:application call to [unknown function] (defined at: ./src/contract/index.rsh:58:17:function exp)'],
    msg: null,
    who: 'Any_sendAza'
    });
  const v618 = ['Any_sendAza0_62', v602];
  
  const txn1 = await (ctc.sendrecv({
    args: [v554, v555, v584, v585, v593, v594, v618],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc12],
    pay: [stdlib.checkedBigNumberify('./src/contract/index.rsh:77:27:decimal', stdlib.UInt_max, '0'), [[v603, v555]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [v685], secs: v687, time: v686, didSend: v307, from: v684 } = txn1;
      
      switch (v685[0]) {
        case 'Any_sendAza0_62': {
          const v688 = v685[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Any_sendAza"
            });
          const v693 = v688[stdlib.checkedBigNumberify('./src/contract/index.rsh:72:9:spread', stdlib.UInt_max, '0')];
          ;
          const v723 = v593[stdlib.checkedBigNumberify('./src/contract/index.rsh:58:17:dot', stdlib.UInt_max, '0')];
          const v724 = v723[stdlib.checkedBigNumberify('./src/contract/index.rsh:58:17:dot', stdlib.UInt_max, '0')];
          const v725 = stdlib.add(v724, v693);
          const v728 = v723[stdlib.checkedBigNumberify('./src/contract/index.rsh:58:17:dot', stdlib.UInt_max, '1')];
          const v729 = v723[stdlib.checkedBigNumberify('./src/contract/index.rsh:58:17:dot', stdlib.UInt_max, '2')];
          const v730 = [v725, v728, v729];
          const v731 = stdlib.Array_set(v593, stdlib.checkedBigNumberify('./src/contract/index.rsh:58:17:dot', stdlib.UInt_max, '0'), v730);
          sim_r.txns.push({
            amt: v693,
            kind: 'to',
            tok: v555
            });
          const v734 = v688[stdlib.checkedBigNumberify('./src/contract/index.rsh:72:9:spread', stdlib.UInt_max, '1')];
          stdlib.protect(map1_ctc, await stdlib.simMapRef(sim_r, 1, v734), null);
          const v741 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v734), null);
          let v742;
          switch (v741[0]) {
            case 'None': {
              const v743 = v741[1];
              v742 = stdlib.checkedBigNumberify('./src/contract/index.rsh:25:48:decimal', stdlib.UInt_max, '0');
              
              break;
              }
            case 'Some': {
              const v744 = v741[1];
              v742 = v744;
              
              break;
              }
            }
          const v745 = stdlib.add(v742, v693);
          await stdlib.simMapSet(sim_r, 0, v734, v745);
          const v747 = v745;
          const v750 = await txn1.getOutput('Any_sendAza', 'v747', ctc1, v747);
          
          const v1486 = v584;
          const v1487 = v585;
          const v1489 = v731;
          const v1490 = v594;
          const v1491 = stdlib.le(v585, stdlib.checkedBigNumberify('./src/contract/index.rsh:61:39:decimal', stdlib.UInt_max, '5'));
          const v1492 = v584 ? v1491 : false;
          if (v1492) {
            sim_r.isHalt = false;
            }
          else {
            sim_r.txns.push({
              kind: 'from',
              to: v554,
              tok: undefined /* Nothing */
              });
            const v1493 = v731[stdlib.checkedBigNumberify('./src/contract/index.rsh:111:28:application', stdlib.UInt_max, '0')];
            const v1494 = v1493[stdlib.checkedBigNumberify('./src/contract/index.rsh:111:28:application', stdlib.UInt_max, '0')];
            sim_r.txns.push({
              kind: 'from',
              to: v554,
              tok: v555
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: v555
              })
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }
          break;
          }
        case 'Any_withdraw0_62': {
          const v820 = v685[1];
          
          break;
          }
        case 'Whitelist_addAddress0_62': {
          const v952 = v685[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc4, ctc5, ctc6, ctc1, ctc8, ctc1, ctc12],
    waitIfNotPresent: false
    }));
  const {data: [v685], secs: v687, time: v686, didSend: v307, from: v684 } = txn1;
  switch (v685[0]) {
    case 'Any_sendAza0_62': {
      const v688 = v685[1];
      undefined /* setApiDetails */;
      const v693 = v688[stdlib.checkedBigNumberify('./src/contract/index.rsh:72:9:spread', stdlib.UInt_max, '0')];
      ;
      const v723 = v593[stdlib.checkedBigNumberify('./src/contract/index.rsh:58:17:dot', stdlib.UInt_max, '0')];
      const v724 = v723[stdlib.checkedBigNumberify('./src/contract/index.rsh:58:17:dot', stdlib.UInt_max, '0')];
      const v725 = stdlib.add(v724, v693);
      const v728 = v723[stdlib.checkedBigNumberify('./src/contract/index.rsh:58:17:dot', stdlib.UInt_max, '1')];
      const v729 = v723[stdlib.checkedBigNumberify('./src/contract/index.rsh:58:17:dot', stdlib.UInt_max, '2')];
      const v730 = [v725, v728, v729];
      const v731 = stdlib.Array_set(v593, stdlib.checkedBigNumberify('./src/contract/index.rsh:58:17:dot', stdlib.UInt_max, '0'), v730);
      ;
      const v734 = v688[stdlib.checkedBigNumberify('./src/contract/index.rsh:72:9:spread', stdlib.UInt_max, '1')];
      const v735 = stdlib.gt(v693, stdlib.checkedBigNumberify('./src/contract/index.rsh:79:30:decimal', stdlib.UInt_max, '0'));
      const v736 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v734), null);
      let v737;
      switch (v736[0]) {
        case 'None': {
          const v738 = v736[1];
          v737 = false;
          
          break;
          }
        case 'Some': {
          const v739 = v736[1];
          v737 = true;
          
          break;
          }
        }
      const v740 = v735 ? v737 : false;
      stdlib.assert(v740, {
        at: './src/contract/index.rsh:79:16:application',
        fs: ['at ./src/contract/index.rsh:78:43:application call to [unknown function] (defined at: ./src/contract/index.rsh:78:43:function exp)'],
        msg: null,
        who: 'Any_sendAza'
        });
      const v741 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v734), null);
      let v742;
      switch (v741[0]) {
        case 'None': {
          const v743 = v741[1];
          v742 = stdlib.checkedBigNumberify('./src/contract/index.rsh:25:48:decimal', stdlib.UInt_max, '0');
          
          break;
          }
        case 'Some': {
          const v744 = v741[1];
          v742 = v744;
          
          break;
          }
        }
      const v745 = stdlib.add(v742, v693);
      await stdlib.mapSet(map0, v734, v745);
      const v747 = v745;
      const v750 = await txn1.getOutput('Any_sendAza', 'v747', ctc1, v747);
      if (v307) {
        stdlib.protect(ctc0, await interact.out(v688, v750), {
          at: './src/contract/index.rsh:73:7:application',
          fs: ['at ./src/contract/index.rsh:73:7:application call to [unknown function] (defined at: ./src/contract/index.rsh:73:7:function exp)', 'at ./src/contract/index.rsh:84:19:application call to "returnFunc" (defined at: ./src/contract/index.rsh:78:43:function exp)', 'at ./src/contract/index.rsh:78:43:application call to [unknown function] (defined at: ./src/contract/index.rsh:78:43:function exp)'],
          msg: 'out',
          who: 'Any_sendAza'
          });
        }
      else {
        }
      
      const v1486 = v584;
      const v1487 = v585;
      const v1489 = v731;
      const v1490 = v594;
      const v1491 = stdlib.le(v585, stdlib.checkedBigNumberify('./src/contract/index.rsh:61:39:decimal', stdlib.UInt_max, '5'));
      const v1492 = v584 ? v1491 : false;
      if (v1492) {
        return;
        }
      else {
        ;
        const v1493 = v731[stdlib.checkedBigNumberify('./src/contract/index.rsh:111:28:application', stdlib.UInt_max, '0')];
        const v1494 = v1493[stdlib.checkedBigNumberify('./src/contract/index.rsh:111:28:application', stdlib.UInt_max, '0')];
        ;
        return;
        }
      break;
      }
    case 'Any_withdraw0_62': {
      const v820 = v685[1];
      return;
      break;
      }
    case 'Whitelist_addAddress0_62': {
      const v952 = v685[1];
      return;
      break;
      }
    }
  
  
  };
export async function _Any_withdraw4(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Any_withdraw4 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Any_withdraw4 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc4 = stdlib.T_Address;
  const ctc5 = stdlib.T_Token;
  const ctc6 = stdlib.T_Bool;
  const ctc7 = stdlib.T_Tuple([ctc1, ctc1, ctc6]);
  const ctc8 = stdlib.T_Array(ctc7, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc9 = stdlib.T_Tuple([ctc1]);
  const ctc10 = stdlib.T_Tuple([ctc1, ctc4]);
  const ctc11 = stdlib.T_Tuple([ctc4]);
  const ctc12 = stdlib.T_Data({
    Any_sendAza0_62: ctc10,
    Any_withdraw0_62: ctc9,
    Whitelist_addAddress0_62: ctc11
    });
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  const map1_ctc = ctc3;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: true,
    ty: map1_ctc
    });
  
  
  const [v554, v555, v584, v585, v593, v594] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc4, ctc5, ctc6, ctc1, ctc8, ctc1]);
  const v622 = stdlib.protect(ctc9, await interact.in(), {
    at: './src/contract/index.rsh:1:23:application',
    fs: ['at ./src/contract/index.rsh:90:21:application call to [unknown function] (defined at: ./src/contract/index.rsh:90:21:function exp)', 'at ./src/contract/index.rsh:58:17:application call to "runAny_withdraw0_62" (defined at: ./src/contract/index.rsh:88:9:function exp)', 'at ./src/contract/index.rsh:58:17:application call to [unknown function] (defined at: ./src/contract/index.rsh:58:17:function exp)'],
    msg: 'in',
    who: 'Any_withdraw'
    });
  const v623 = v622[stdlib.checkedBigNumberify('./src/contract/index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v626 = stdlib.gt(v623, stdlib.checkedBigNumberify('./src/contract/index.rsh:91:30:decimal', stdlib.UInt_max, '0'));
  stdlib.assert(v626, {
    at: './src/contract/index.rsh:91:15:application',
    fs: ['at ./src/contract/index.rsh:90:21:application call to [unknown function] (defined at: ./src/contract/index.rsh:90:21:function exp)', 'at ./src/contract/index.rsh:90:21:application call to [unknown function] (defined at: ./src/contract/index.rsh:90:21:function exp)', 'at ./src/contract/index.rsh:58:17:application call to "runAny_withdraw0_62" (defined at: ./src/contract/index.rsh:88:9:function exp)', 'at ./src/contract/index.rsh:58:17:application call to [unknown function] (defined at: ./src/contract/index.rsh:58:17:function exp)'],
    msg: null,
    who: 'Any_withdraw'
    });
  const v627 = v593[stdlib.checkedBigNumberify('./src/contract/index.rsh:92:38:application', stdlib.UInt_max, '0')];
  const v628 = v627[stdlib.checkedBigNumberify('./src/contract/index.rsh:92:38:application', stdlib.UInt_max, '0')];
  const v629 = stdlib.le(v623, v628);
  stdlib.assert(v629, {
    at: './src/contract/index.rsh:92:15:application',
    fs: ['at ./src/contract/index.rsh:90:21:application call to [unknown function] (defined at: ./src/contract/index.rsh:90:21:function exp)', 'at ./src/contract/index.rsh:90:21:application call to [unknown function] (defined at: ./src/contract/index.rsh:90:21:function exp)', 'at ./src/contract/index.rsh:58:17:application call to "runAny_withdraw0_62" (defined at: ./src/contract/index.rsh:88:9:function exp)', 'at ./src/contract/index.rsh:58:17:application call to [unknown function] (defined at: ./src/contract/index.rsh:58:17:function exp)'],
    msg: null,
    who: 'Any_withdraw'
    });
  const v633 = ['Any_withdraw0_62', v622];
  
  const txn1 = await (ctc.sendrecv({
    args: [v554, v555, v584, v585, v593, v594, v633],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc12],
    pay: [stdlib.checkedBigNumberify('./src/contract/index.rsh:94:16:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./src/contract/index.rsh:94:21:decimal', stdlib.UInt_max, '0'), v555]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [v685], secs: v687, time: v686, didSend: v307, from: v684 } = txn1;
      
      switch (v685[0]) {
        case 'Any_sendAza0_62': {
          const v688 = v685[1];
          
          break;
          }
        case 'Any_withdraw0_62': {
          const v820 = v685[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Any_withdraw"
            });
          ;
          const v855 = v593[stdlib.checkedBigNumberify('./src/contract/index.rsh:58:17:dot', stdlib.UInt_max, '0')];
          const v856 = v855[stdlib.checkedBigNumberify('./src/contract/index.rsh:58:17:dot', stdlib.UInt_max, '0')];
          const v860 = v855[stdlib.checkedBigNumberify('./src/contract/index.rsh:58:17:dot', stdlib.UInt_max, '1')];
          const v861 = v855[stdlib.checkedBigNumberify('./src/contract/index.rsh:58:17:dot', stdlib.UInt_max, '2')];
          const v862 = [v856, v860, v861];
          const v863 = stdlib.Array_set(v593, stdlib.checkedBigNumberify('./src/contract/index.rsh:58:17:dot', stdlib.UInt_max, '0'), v862);
          ;
          const v892 = v820[stdlib.checkedBigNumberify('./src/contract/index.rsh:88:9:spread', stdlib.UInt_max, '0')];
          const v894 = v863[stdlib.checkedBigNumberify('./src/contract/index.rsh:97:39:application', stdlib.UInt_max, '0')];
          const v895 = v894[stdlib.checkedBigNumberify('./src/contract/index.rsh:97:39:application', stdlib.UInt_max, '0')];
          const v897 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v684), null);
          let v898;
          switch (v897[0]) {
            case 'None': {
              const v899 = v897[1];
              v898 = stdlib.checkedBigNumberify('./src/contract/index.rsh:25:48:decimal', stdlib.UInt_max, '0');
              
              break;
              }
            case 'Some': {
              const v900 = v897[1];
              v898 = v900;
              
              break;
              }
            }
          const v902 = stdlib.lt(v898, v892);
          const v903 = v902 ? v898 : v892;
          const v904 = stdlib.lt(v892, v903);
          const v905 = v904 ? v892 : v903;
          const v906 = stdlib.sub(v898, v905);
          await stdlib.simMapSet(sim_r, 0, v684, v906);
          const v908 = v906;
          const v911 = await txn1.getOutput('Any_withdraw', 'v908', ctc1, v908);
          
          const v922 = stdlib.sub(v895, v905);
          const v925 = v894[stdlib.checkedBigNumberify('./src/contract/index.rsh:104:52:application', stdlib.UInt_max, '1')];
          const v926 = v894[stdlib.checkedBigNumberify('./src/contract/index.rsh:104:52:application', stdlib.UInt_max, '2')];
          const v927 = [v922, v925, v926];
          const v928 = stdlib.Array_set(v863, stdlib.checkedBigNumberify('./src/contract/index.rsh:104:52:application', stdlib.UInt_max, '0'), v927);
          sim_r.txns.push({
            kind: 'from',
            to: v684,
            tok: v555
            });
          const v1522 = v584;
          const v1523 = v585;
          const v1525 = v928;
          const v1526 = v594;
          const v1527 = stdlib.le(v585, stdlib.checkedBigNumberify('./src/contract/index.rsh:61:39:decimal', stdlib.UInt_max, '5'));
          const v1528 = v584 ? v1527 : false;
          if (v1528) {
            sim_r.isHalt = false;
            }
          else {
            sim_r.txns.push({
              kind: 'from',
              to: v554,
              tok: undefined /* Nothing */
              });
            const v1529 = v928[stdlib.checkedBigNumberify('./src/contract/index.rsh:111:28:application', stdlib.UInt_max, '0')];
            const v1530 = v1529[stdlib.checkedBigNumberify('./src/contract/index.rsh:111:28:application', stdlib.UInt_max, '0')];
            sim_r.txns.push({
              kind: 'from',
              to: v554,
              tok: v555
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: v555
              })
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }
          break;
          }
        case 'Whitelist_addAddress0_62': {
          const v952 = v685[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc4, ctc5, ctc6, ctc1, ctc8, ctc1, ctc12],
    waitIfNotPresent: false
    }));
  const {data: [v685], secs: v687, time: v686, didSend: v307, from: v684 } = txn1;
  switch (v685[0]) {
    case 'Any_sendAza0_62': {
      const v688 = v685[1];
      return;
      break;
      }
    case 'Any_withdraw0_62': {
      const v820 = v685[1];
      undefined /* setApiDetails */;
      ;
      const v855 = v593[stdlib.checkedBigNumberify('./src/contract/index.rsh:58:17:dot', stdlib.UInt_max, '0')];
      const v856 = v855[stdlib.checkedBigNumberify('./src/contract/index.rsh:58:17:dot', stdlib.UInt_max, '0')];
      const v860 = v855[stdlib.checkedBigNumberify('./src/contract/index.rsh:58:17:dot', stdlib.UInt_max, '1')];
      const v861 = v855[stdlib.checkedBigNumberify('./src/contract/index.rsh:58:17:dot', stdlib.UInt_max, '2')];
      const v862 = [v856, v860, v861];
      const v863 = stdlib.Array_set(v593, stdlib.checkedBigNumberify('./src/contract/index.rsh:58:17:dot', stdlib.UInt_max, '0'), v862);
      ;
      const v892 = v820[stdlib.checkedBigNumberify('./src/contract/index.rsh:88:9:spread', stdlib.UInt_max, '0')];
      const v893 = stdlib.gt(v892, stdlib.checkedBigNumberify('./src/contract/index.rsh:96:31:decimal', stdlib.UInt_max, '0'));
      stdlib.assert(v893, {
        at: './src/contract/index.rsh:96:16:application',
        fs: ['at ./src/contract/index.rsh:95:32:application call to [unknown function] (defined at: ./src/contract/index.rsh:95:32:function exp)'],
        msg: null,
        who: 'Any_withdraw'
        });
      const v894 = v863[stdlib.checkedBigNumberify('./src/contract/index.rsh:97:39:application', stdlib.UInt_max, '0')];
      const v895 = v894[stdlib.checkedBigNumberify('./src/contract/index.rsh:97:39:application', stdlib.UInt_max, '0')];
      const v896 = stdlib.le(v892, v895);
      stdlib.assert(v896, {
        at: './src/contract/index.rsh:97:16:application',
        fs: ['at ./src/contract/index.rsh:95:32:application call to [unknown function] (defined at: ./src/contract/index.rsh:95:32:function exp)'],
        msg: null,
        who: 'Any_withdraw'
        });
      const v897 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v684), null);
      let v898;
      switch (v897[0]) {
        case 'None': {
          const v899 = v897[1];
          v898 = stdlib.checkedBigNumberify('./src/contract/index.rsh:25:48:decimal', stdlib.UInt_max, '0');
          
          break;
          }
        case 'Some': {
          const v900 = v897[1];
          v898 = v900;
          
          break;
          }
        }
      const v902 = stdlib.lt(v898, v892);
      const v903 = v902 ? v898 : v892;
      const v904 = stdlib.lt(v892, v903);
      const v905 = v904 ? v892 : v903;
      const v906 = stdlib.sub(v898, v905);
      await stdlib.mapSet(map0, v684, v906);
      const v908 = v906;
      const v911 = await txn1.getOutput('Any_withdraw', 'v908', ctc1, v908);
      if (v307) {
        stdlib.protect(ctc0, await interact.out(v820, v911), {
          at: './src/contract/index.rsh:89:7:application',
          fs: ['at ./src/contract/index.rsh:89:7:application call to [unknown function] (defined at: ./src/contract/index.rsh:89:7:function exp)', 'at ./src/contract/index.rsh:103:19:application call to "returnFunc" (defined at: ./src/contract/index.rsh:95:32:function exp)', 'at ./src/contract/index.rsh:95:32:application call to [unknown function] (defined at: ./src/contract/index.rsh:95:32:function exp)'],
          msg: 'out',
          who: 'Any_withdraw'
          });
        }
      else {
        }
      
      const v922 = stdlib.sub(v895, v905);
      const v925 = v894[stdlib.checkedBigNumberify('./src/contract/index.rsh:104:52:application', stdlib.UInt_max, '1')];
      const v926 = v894[stdlib.checkedBigNumberify('./src/contract/index.rsh:104:52:application', stdlib.UInt_max, '2')];
      const v927 = [v922, v925, v926];
      const v928 = stdlib.Array_set(v863, stdlib.checkedBigNumberify('./src/contract/index.rsh:104:52:application', stdlib.UInt_max, '0'), v927);
      ;
      const v1522 = v584;
      const v1523 = v585;
      const v1525 = v928;
      const v1526 = v594;
      const v1527 = stdlib.le(v585, stdlib.checkedBigNumberify('./src/contract/index.rsh:61:39:decimal', stdlib.UInt_max, '5'));
      const v1528 = v584 ? v1527 : false;
      if (v1528) {
        return;
        }
      else {
        ;
        const v1529 = v928[stdlib.checkedBigNumberify('./src/contract/index.rsh:111:28:application', stdlib.UInt_max, '0')];
        const v1530 = v1529[stdlib.checkedBigNumberify('./src/contract/index.rsh:111:28:application', stdlib.UInt_max, '0')];
        ;
        return;
        }
      break;
      }
    case 'Whitelist_addAddress0_62': {
      const v952 = v685[1];
      return;
      break;
      }
    }
  
  
  };
export async function Deployer(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Deployer expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Deployer expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc4 = stdlib.T_Token;
  const ctc5 = stdlib.T_Address;
  const ctc6 = stdlib.T_Tuple([ctc1, ctc5]);
  const ctc7 = stdlib.T_Tuple([ctc1]);
  const ctc8 = stdlib.T_Tuple([ctc5]);
  const ctc9 = stdlib.T_Data({
    Any_sendAza0_62: ctc6,
    Any_withdraw0_62: ctc7,
    Whitelist_addAddress0_62: ctc8
    });
  const ctc10 = stdlib.T_Bool;
  const ctc11 = stdlib.T_Tuple([ctc1, ctc1, ctc10]);
  const ctc12 = stdlib.T_Array(ctc11, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: false,
    ty: map0_ctc
    });
  
  const map1_ctc = ctc3;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: false,
    ty: map1_ctc
    });
  
  
  const v546 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), false];
  const v547 = [v546];
  const v553 = stdlib.protect(ctc4, await interact.tokenDetails(), {
    at: './src/contract/index.rsh:45:53:application',
    fs: ['at ./src/contract/index.rsh:44:9:application call to [unknown function] (defined at: ./src/contract/index.rsh:44:13:function exp)'],
    msg: 'tokenDetails',
    who: 'Deployer'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v553],
    evt_cnt: 1,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./src/contract/index.rsh:47:5:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc4],
    pay: [stdlib.checkedBigNumberify('./src/contract/index.rsh:47:5:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [v555], secs: v557, time: v556, didSend: v27, from: v554 } = txn1;
      
      const v558 = v547[stdlib.checkedBigNumberify('./src/contract/index.rsh:47:5:dot', stdlib.UInt_max, '0')];
      const v560 = v558[stdlib.checkedBigNumberify('./src/contract/index.rsh:47:5:dot', stdlib.UInt_max, '1')];
      const v561 = v558[stdlib.checkedBigNumberify('./src/contract/index.rsh:47:5:dot', stdlib.UInt_max, '2')];
      const v562 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v560, v561];
      const v563 = stdlib.Array_set(v547, stdlib.checkedBigNumberify('./src/contract/index.rsh:47:5:dot', stdlib.UInt_max, '0'), v562);
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        kind: 'init',
        tok: v555
        });
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc4],
    waitIfNotPresent: false
    }));
  const {data: [v555], secs: v557, time: v556, didSend: v27, from: v554 } = txn1;
  const v558 = v547[stdlib.checkedBigNumberify('./src/contract/index.rsh:47:5:dot', stdlib.UInt_max, '0')];
  const v560 = v558[stdlib.checkedBigNumberify('./src/contract/index.rsh:47:5:dot', stdlib.UInt_max, '1')];
  const v561 = v558[stdlib.checkedBigNumberify('./src/contract/index.rsh:47:5:dot', stdlib.UInt_max, '2')];
  const v562 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v560, v561];
  const v563 = stdlib.Array_set(v547, stdlib.checkedBigNumberify('./src/contract/index.rsh:47:5:dot', stdlib.UInt_max, '0'), v562);
  ;
  ;
  const txn2 = await (ctc.sendrecv({
    args: [v554, v555, v563],
    evt_cnt: 0,
    funcNum: 1,
    lct: v556,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./src/contract/index.rsh:49:5:dot', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./src/contract/index.rsh:49:11:decimal', stdlib.UInt_max, '50000000'), v555]]],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [], secs: v567, time: v566, didSend: v34, from: v565 } = txn2;
      
      ;
      const v568 = v563[stdlib.checkedBigNumberify('./src/contract/index.rsh:49:5:dot', stdlib.UInt_max, '0')];
      const v569 = v568[stdlib.checkedBigNumberify('./src/contract/index.rsh:49:5:dot', stdlib.UInt_max, '0')];
      const v570 = stdlib.add(v569, stdlib.checkedBigNumberify('./src/contract/index.rsh:49:11:decimal', stdlib.UInt_max, '50000000'));
      const v573 = v568[stdlib.checkedBigNumberify('./src/contract/index.rsh:49:5:dot', stdlib.UInt_max, '1')];
      const v574 = v568[stdlib.checkedBigNumberify('./src/contract/index.rsh:49:5:dot', stdlib.UInt_max, '2')];
      const v575 = [v570, v573, v574];
      const v576 = stdlib.Array_set(v563, stdlib.checkedBigNumberify('./src/contract/index.rsh:49:5:dot', stdlib.UInt_max, '0'), v575);
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('./src/contract/index.rsh:49:11:decimal', stdlib.UInt_max, '50000000'),
        kind: 'to',
        tok: v555
        });
      
      const v584 = true;
      const v585 = stdlib.checkedBigNumberify('./src/contract/index.rsh:58:28:decimal', stdlib.UInt_max, '0');
      const v587 = v566;
      const v593 = v576;
      const v594 = stdlib.checkedBigNumberify('./src/contract/index.rsh:42:9:after expr stmt semicolon', stdlib.UInt_max, '0');
      
      if (await (async () => {
        const v598 = stdlib.le(v585, stdlib.checkedBigNumberify('./src/contract/index.rsh:61:39:decimal', stdlib.UInt_max, '5'));
        const v599 = v584 ? v598 : false;
        
        return v599;})()) {
        sim_r.isHalt = false;
        }
      else {
        sim_r.txns.push({
          kind: 'from',
          to: v554,
          tok: undefined /* Nothing */
          });
        const v1089 = v593[stdlib.checkedBigNumberify('./src/contract/index.rsh:111:28:application', stdlib.UInt_max, '0')];
        const v1090 = v1089[stdlib.checkedBigNumberify('./src/contract/index.rsh:111:28:application', stdlib.UInt_max, '0')];
        sim_r.txns.push({
          kind: 'from',
          to: v554,
          tok: v555
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: v555
          })
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
    tys: [ctc5, ctc4, ctc12],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v567, time: v566, didSend: v34, from: v565 } = txn2;
  ;
  const v568 = v563[stdlib.checkedBigNumberify('./src/contract/index.rsh:49:5:dot', stdlib.UInt_max, '0')];
  const v569 = v568[stdlib.checkedBigNumberify('./src/contract/index.rsh:49:5:dot', stdlib.UInt_max, '0')];
  const v570 = stdlib.add(v569, stdlib.checkedBigNumberify('./src/contract/index.rsh:49:11:decimal', stdlib.UInt_max, '50000000'));
  const v573 = v568[stdlib.checkedBigNumberify('./src/contract/index.rsh:49:5:dot', stdlib.UInt_max, '1')];
  const v574 = v568[stdlib.checkedBigNumberify('./src/contract/index.rsh:49:5:dot', stdlib.UInt_max, '2')];
  const v575 = [v570, v573, v574];
  const v576 = stdlib.Array_set(v563, stdlib.checkedBigNumberify('./src/contract/index.rsh:49:5:dot', stdlib.UInt_max, '0'), v575);
  ;
  const v577 = stdlib.addressEq(v554, v565);
  stdlib.assert(v577, {
    at: './src/contract/index.rsh:49:5:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Deployer'
    });
  stdlib.protect(ctc0, await interact.ready(), {
    at: './src/contract/index.rsh:51:19:application',
    fs: ['at ./src/contract/index.rsh:51:19:application call to [unknown function] (defined at: ./src/contract/index.rsh:51:19:function exp)', 'at ./src/contract/index.rsh:51:19:application call to "liftedInteract" (defined at: ./src/contract/index.rsh:51:19:application)'],
    msg: 'ready',
    who: 'Deployer'
    });
  
  let v584 = true;
  let v585 = stdlib.checkedBigNumberify('./src/contract/index.rsh:58:28:decimal', stdlib.UInt_max, '0');
  let v587 = v566;
  let v593 = v576;
  let v594 = stdlib.checkedBigNumberify('./src/contract/index.rsh:42:9:after expr stmt semicolon', stdlib.UInt_max, '0');
  
  while (await (async () => {
    const v598 = stdlib.le(v585, stdlib.checkedBigNumberify('./src/contract/index.rsh:61:39:decimal', stdlib.UInt_max, '5'));
    const v599 = v584 ? v598 : false;
    
    return v599;})()) {
    const txn3 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 3,
      out_tys: [ctc9],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v685], secs: v687, time: v686, didSend: v307, from: v684 } = txn3;
    switch (v685[0]) {
      case 'Any_sendAza0_62': {
        const v688 = v685[1];
        undefined /* setApiDetails */;
        const v693 = v688[stdlib.checkedBigNumberify('./src/contract/index.rsh:72:9:spread', stdlib.UInt_max, '0')];
        ;
        const v723 = v593[stdlib.checkedBigNumberify('./src/contract/index.rsh:58:17:dot', stdlib.UInt_max, '0')];
        const v724 = v723[stdlib.checkedBigNumberify('./src/contract/index.rsh:58:17:dot', stdlib.UInt_max, '0')];
        const v725 = stdlib.add(v724, v693);
        const v728 = v723[stdlib.checkedBigNumberify('./src/contract/index.rsh:58:17:dot', stdlib.UInt_max, '1')];
        const v729 = v723[stdlib.checkedBigNumberify('./src/contract/index.rsh:58:17:dot', stdlib.UInt_max, '2')];
        const v730 = [v725, v728, v729];
        const v731 = stdlib.Array_set(v593, stdlib.checkedBigNumberify('./src/contract/index.rsh:58:17:dot', stdlib.UInt_max, '0'), v730);
        ;
        const v734 = v688[stdlib.checkedBigNumberify('./src/contract/index.rsh:72:9:spread', stdlib.UInt_max, '1')];
        const v735 = stdlib.gt(v693, stdlib.checkedBigNumberify('./src/contract/index.rsh:79:30:decimal', stdlib.UInt_max, '0'));
        const v736 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v734), null);
        let v737;
        switch (v736[0]) {
          case 'None': {
            const v738 = v736[1];
            v737 = false;
            
            break;
            }
          case 'Some': {
            const v739 = v736[1];
            v737 = true;
            
            break;
            }
          }
        const v740 = v735 ? v737 : false;
        stdlib.assert(v740, {
          at: './src/contract/index.rsh:79:16:application',
          fs: ['at ./src/contract/index.rsh:78:43:application call to [unknown function] (defined at: ./src/contract/index.rsh:78:43:function exp)'],
          msg: null,
          who: 'Deployer'
          });
        const v741 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v734), null);
        let v742;
        switch (v741[0]) {
          case 'None': {
            const v743 = v741[1];
            v742 = stdlib.checkedBigNumberify('./src/contract/index.rsh:25:48:decimal', stdlib.UInt_max, '0');
            
            break;
            }
          case 'Some': {
            const v744 = v741[1];
            v742 = v744;
            
            break;
            }
          }
        const v745 = stdlib.add(v742, v693);
        await stdlib.mapSet(map0, v734, v745);
        const v747 = v745;
        await txn3.getOutput('Any_sendAza', 'v747', ctc1, v747);
        const cv584 = v584;
        const cv585 = v585;
        const cv587 = v686;
        const cv593 = v731;
        const cv594 = v594;
        
        v584 = cv584;
        v585 = cv585;
        v587 = cv587;
        v593 = cv593;
        v594 = cv594;
        
        continue;
        break;
        }
      case 'Any_withdraw0_62': {
        const v820 = v685[1];
        undefined /* setApiDetails */;
        ;
        const v855 = v593[stdlib.checkedBigNumberify('./src/contract/index.rsh:58:17:dot', stdlib.UInt_max, '0')];
        const v856 = v855[stdlib.checkedBigNumberify('./src/contract/index.rsh:58:17:dot', stdlib.UInt_max, '0')];
        const v860 = v855[stdlib.checkedBigNumberify('./src/contract/index.rsh:58:17:dot', stdlib.UInt_max, '1')];
        const v861 = v855[stdlib.checkedBigNumberify('./src/contract/index.rsh:58:17:dot', stdlib.UInt_max, '2')];
        const v862 = [v856, v860, v861];
        const v863 = stdlib.Array_set(v593, stdlib.checkedBigNumberify('./src/contract/index.rsh:58:17:dot', stdlib.UInt_max, '0'), v862);
        ;
        const v892 = v820[stdlib.checkedBigNumberify('./src/contract/index.rsh:88:9:spread', stdlib.UInt_max, '0')];
        const v893 = stdlib.gt(v892, stdlib.checkedBigNumberify('./src/contract/index.rsh:96:31:decimal', stdlib.UInt_max, '0'));
        stdlib.assert(v893, {
          at: './src/contract/index.rsh:96:16:application',
          fs: ['at ./src/contract/index.rsh:95:32:application call to [unknown function] (defined at: ./src/contract/index.rsh:95:32:function exp)'],
          msg: null,
          who: 'Deployer'
          });
        const v894 = v863[stdlib.checkedBigNumberify('./src/contract/index.rsh:97:39:application', stdlib.UInt_max, '0')];
        const v895 = v894[stdlib.checkedBigNumberify('./src/contract/index.rsh:97:39:application', stdlib.UInt_max, '0')];
        const v896 = stdlib.le(v892, v895);
        stdlib.assert(v896, {
          at: './src/contract/index.rsh:97:16:application',
          fs: ['at ./src/contract/index.rsh:95:32:application call to [unknown function] (defined at: ./src/contract/index.rsh:95:32:function exp)'],
          msg: null,
          who: 'Deployer'
          });
        const v897 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v684), null);
        let v898;
        switch (v897[0]) {
          case 'None': {
            const v899 = v897[1];
            v898 = stdlib.checkedBigNumberify('./src/contract/index.rsh:25:48:decimal', stdlib.UInt_max, '0');
            
            break;
            }
          case 'Some': {
            const v900 = v897[1];
            v898 = v900;
            
            break;
            }
          }
        const v902 = stdlib.lt(v898, v892);
        const v903 = v902 ? v898 : v892;
        const v904 = stdlib.lt(v892, v903);
        const v905 = v904 ? v892 : v903;
        const v906 = stdlib.sub(v898, v905);
        await stdlib.mapSet(map0, v684, v906);
        const v908 = v906;
        await txn3.getOutput('Any_withdraw', 'v908', ctc1, v908);
        const v922 = stdlib.sub(v895, v905);
        const v925 = v894[stdlib.checkedBigNumberify('./src/contract/index.rsh:104:52:application', stdlib.UInt_max, '1')];
        const v926 = v894[stdlib.checkedBigNumberify('./src/contract/index.rsh:104:52:application', stdlib.UInt_max, '2')];
        const v927 = [v922, v925, v926];
        const v928 = stdlib.Array_set(v863, stdlib.checkedBigNumberify('./src/contract/index.rsh:104:52:application', stdlib.UInt_max, '0'), v927);
        ;
        const cv584 = v584;
        const cv585 = v585;
        const cv587 = v686;
        const cv593 = v928;
        const cv594 = v594;
        
        v584 = cv584;
        v585 = cv585;
        v587 = cv587;
        v593 = cv593;
        v594 = cv594;
        
        continue;
        break;
        }
      case 'Whitelist_addAddress0_62': {
        const v952 = v685[1];
        undefined /* setApiDetails */;
        ;
        const v987 = v593[stdlib.checkedBigNumberify('./src/contract/index.rsh:58:17:dot', stdlib.UInt_max, '0')];
        const v988 = v987[stdlib.checkedBigNumberify('./src/contract/index.rsh:58:17:dot', stdlib.UInt_max, '0')];
        const v992 = v987[stdlib.checkedBigNumberify('./src/contract/index.rsh:58:17:dot', stdlib.UInt_max, '1')];
        const v993 = v987[stdlib.checkedBigNumberify('./src/contract/index.rsh:58:17:dot', stdlib.UInt_max, '2')];
        const v994 = [v988, v992, v993];
        const v995 = stdlib.Array_set(v593, stdlib.checkedBigNumberify('./src/contract/index.rsh:58:17:dot', stdlib.UInt_max, '0'), v994);
        ;
        const v1064 = v952[stdlib.checkedBigNumberify('./src/contract/index.rsh:63:10:spread', stdlib.UInt_max, '0')];
        const v1065 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v1064), null);
        let v1066;
        switch (v1065[0]) {
          case 'None': {
            const v1067 = v1065[1];
            v1066 = false;
            
            break;
            }
          case 'Some': {
            const v1068 = v1065[1];
            v1066 = true;
            
            break;
            }
          }
        const v1069 = v1066 ? false : true;
        stdlib.assert(v1069, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./src/contract/index.rsh:64:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./src/contract/index.rsh:65:20:application call to [unknown function] (defined at: ./src/contract/index.rsh:65:20:function exp)'],
          msg: 'Address added',
          who: 'Deployer'
          });
        const v1072 = null;
        await txn3.getOutput('Whitelist_addAddress', 'v1072', ctc0, v1072);
        await stdlib.mapSet(map1, v1064, null);
        const v1081 = ' was added';
        stdlib.protect(ctc0, await interact.log(v1064, v1081), {
          at: './src/contract/index.rsh:68:23:application',
          fs: ['at ./src/contract/index.rsh:68:23:application call to [unknown function] (defined at: ./src/contract/index.rsh:68:23:function exp)', 'at ./src/contract/index.rsh:68:23:application call to "liftedInteract" (defined at: ./src/contract/index.rsh:68:23:application)', 'at ./src/contract/index.rsh:65:20:application call to [unknown function] (defined at: ./src/contract/index.rsh:65:20:function exp)'],
          msg: 'log',
          who: 'Deployer'
          });
        
        const v1082 = stdlib.add(v585, stdlib.checkedBigNumberify('./src/contract/index.rsh:69:53:decimal', stdlib.UInt_max, '1'));
        const cv584 = v584;
        const cv585 = v1082;
        const cv587 = v686;
        const cv593 = v995;
        const cv594 = v594;
        
        v584 = cv584;
        v585 = cv585;
        v587 = cv587;
        v593 = cv593;
        v594 = cv594;
        
        continue;
        break;
        }
      }
    
    }
  ;
  const v1089 = v593[stdlib.checkedBigNumberify('./src/contract/index.rsh:111:28:application', stdlib.UInt_max, '0')];
  const v1090 = v1089[stdlib.checkedBigNumberify('./src/contract/index.rsh:111:28:application', stdlib.UInt_max, '0')];
  ;
  return;
  
  
  
  
  };
export async function _Whitelist_addAddress4(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Whitelist_addAddress4 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Whitelist_addAddress4 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc4 = stdlib.T_Address;
  const ctc5 = stdlib.T_Token;
  const ctc6 = stdlib.T_Bool;
  const ctc7 = stdlib.T_Tuple([ctc1, ctc1, ctc6]);
  const ctc8 = stdlib.T_Array(ctc7, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc9 = stdlib.T_Tuple([ctc4]);
  const ctc10 = stdlib.T_Tuple([ctc1, ctc4]);
  const ctc11 = stdlib.T_Tuple([ctc1]);
  const ctc12 = stdlib.T_Data({
    Any_sendAza0_62: ctc10,
    Any_withdraw0_62: ctc11,
    Whitelist_addAddress0_62: ctc9
    });
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  const map1_ctc = ctc3;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: true,
    ty: map1_ctc
    });
  
  
  const [v554, v555, v584, v585, v593, v594] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc4, ctc5, ctc6, ctc1, ctc8, ctc1]);
  const v637 = stdlib.protect(ctc9, await interact.in(), {
    at: './src/contract/index.rsh:1:23:application',
    fs: ['at ./src/contract/index.rsh:63:32:application call to [unknown function] (defined at: ./src/contract/index.rsh:63:32:function exp)', 'at ./src/contract/index.rsh:58:17:application call to "runWhitelist_addAddress0_62" (defined at: ./src/contract/index.rsh:63:10:function exp)', 'at ./src/contract/index.rsh:58:17:application call to [unknown function] (defined at: ./src/contract/index.rsh:58:17:function exp)'],
    msg: 'in',
    who: 'Whitelist_addAddress'
    });
  const v638 = v637[stdlib.checkedBigNumberify('./src/contract/index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v640 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v638), null);
  let v641;
  switch (v640[0]) {
    case 'None': {
      const v642 = v640[1];
      v641 = false;
      
      break;
      }
    case 'Some': {
      const v643 = v640[1];
      v641 = true;
      
      break;
      }
    }
  const v644 = v641 ? false : true;
  stdlib.assert(v644, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./src/contract/index.rsh:64:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./src/contract/index.rsh:63:32:application call to [unknown function] (defined at: ./src/contract/index.rsh:63:32:function exp)', 'at ./src/contract/index.rsh:58:17:application call to "runWhitelist_addAddress0_62" (defined at: ./src/contract/index.rsh:63:10:function exp)', 'at ./src/contract/index.rsh:58:17:application call to [unknown function] (defined at: ./src/contract/index.rsh:58:17:function exp)'],
    msg: 'Address added',
    who: 'Whitelist_addAddress'
    });
  const v651 = ['Whitelist_addAddress0_62', v637];
  
  const txn1 = await (ctc.sendrecv({
    args: [v554, v555, v584, v585, v593, v594, v651],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc12],
    pay: [stdlib.checkedBigNumberify('./src/contract/index.rsh:63:10:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./src/contract/index.rsh:62:14:decimal', stdlib.UInt_max, '0'), v555]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [v685], secs: v687, time: v686, didSend: v307, from: v684 } = txn1;
      
      switch (v685[0]) {
        case 'Any_sendAza0_62': {
          const v688 = v685[1];
          
          break;
          }
        case 'Any_withdraw0_62': {
          const v820 = v685[1];
          
          break;
          }
        case 'Whitelist_addAddress0_62': {
          const v952 = v685[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Whitelist_addAddress"
            });
          ;
          const v987 = v593[stdlib.checkedBigNumberify('./src/contract/index.rsh:58:17:dot', stdlib.UInt_max, '0')];
          const v988 = v987[stdlib.checkedBigNumberify('./src/contract/index.rsh:58:17:dot', stdlib.UInt_max, '0')];
          const v992 = v987[stdlib.checkedBigNumberify('./src/contract/index.rsh:58:17:dot', stdlib.UInt_max, '1')];
          const v993 = v987[stdlib.checkedBigNumberify('./src/contract/index.rsh:58:17:dot', stdlib.UInt_max, '2')];
          const v994 = [v988, v992, v993];
          const v995 = stdlib.Array_set(v593, stdlib.checkedBigNumberify('./src/contract/index.rsh:58:17:dot', stdlib.UInt_max, '0'), v994);
          ;
          const v1064 = v952[stdlib.checkedBigNumberify('./src/contract/index.rsh:63:10:spread', stdlib.UInt_max, '0')];
          stdlib.protect(map1_ctc, await stdlib.simMapRef(sim_r, 1, v1064), null);
          const v1072 = null;
          const v1073 = await txn1.getOutput('Whitelist_addAddress', 'v1072', ctc0, v1072);
          
          await stdlib.simMapSet(sim_r, 1, v1064, null);
          const v1082 = stdlib.add(v585, stdlib.checkedBigNumberify('./src/contract/index.rsh:69:53:decimal', stdlib.UInt_max, '1'));
          const v1558 = v584;
          const v1559 = v1082;
          const v1561 = v995;
          const v1562 = v594;
          const v1563 = stdlib.le(v1082, stdlib.checkedBigNumberify('./src/contract/index.rsh:61:39:decimal', stdlib.UInt_max, '5'));
          const v1564 = v584 ? v1563 : false;
          if (v1564) {
            sim_r.isHalt = false;
            }
          else {
            sim_r.txns.push({
              kind: 'from',
              to: v554,
              tok: undefined /* Nothing */
              });
            const v1565 = v995[stdlib.checkedBigNumberify('./src/contract/index.rsh:111:28:application', stdlib.UInt_max, '0')];
            const v1566 = v1565[stdlib.checkedBigNumberify('./src/contract/index.rsh:111:28:application', stdlib.UInt_max, '0')];
            sim_r.txns.push({
              kind: 'from',
              to: v554,
              tok: v555
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: v555
              })
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc4, ctc5, ctc6, ctc1, ctc8, ctc1, ctc12],
    waitIfNotPresent: false
    }));
  const {data: [v685], secs: v687, time: v686, didSend: v307, from: v684 } = txn1;
  switch (v685[0]) {
    case 'Any_sendAza0_62': {
      const v688 = v685[1];
      return;
      break;
      }
    case 'Any_withdraw0_62': {
      const v820 = v685[1];
      return;
      break;
      }
    case 'Whitelist_addAddress0_62': {
      const v952 = v685[1];
      undefined /* setApiDetails */;
      ;
      const v987 = v593[stdlib.checkedBigNumberify('./src/contract/index.rsh:58:17:dot', stdlib.UInt_max, '0')];
      const v988 = v987[stdlib.checkedBigNumberify('./src/contract/index.rsh:58:17:dot', stdlib.UInt_max, '0')];
      const v992 = v987[stdlib.checkedBigNumberify('./src/contract/index.rsh:58:17:dot', stdlib.UInt_max, '1')];
      const v993 = v987[stdlib.checkedBigNumberify('./src/contract/index.rsh:58:17:dot', stdlib.UInt_max, '2')];
      const v994 = [v988, v992, v993];
      const v995 = stdlib.Array_set(v593, stdlib.checkedBigNumberify('./src/contract/index.rsh:58:17:dot', stdlib.UInt_max, '0'), v994);
      ;
      const v1064 = v952[stdlib.checkedBigNumberify('./src/contract/index.rsh:63:10:spread', stdlib.UInt_max, '0')];
      const v1065 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v1064), null);
      let v1066;
      switch (v1065[0]) {
        case 'None': {
          const v1067 = v1065[1];
          v1066 = false;
          
          break;
          }
        case 'Some': {
          const v1068 = v1065[1];
          v1066 = true;
          
          break;
          }
        }
      const v1069 = v1066 ? false : true;
      stdlib.assert(v1069, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./src/contract/index.rsh:64:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./src/contract/index.rsh:65:20:application call to [unknown function] (defined at: ./src/contract/index.rsh:65:20:function exp)'],
        msg: 'Address added',
        who: 'Whitelist_addAddress'
        });
      const v1072 = null;
      const v1073 = await txn1.getOutput('Whitelist_addAddress', 'v1072', ctc0, v1072);
      if (v307) {
        stdlib.protect(ctc0, await interact.out(v952, v1073), {
          at: './src/contract/index.rsh:63:11:application',
          fs: ['at ./src/contract/index.rsh:63:11:application call to [unknown function] (defined at: ./src/contract/index.rsh:63:11:function exp)', 'at ./src/contract/index.rsh:66:10:application call to "k" (defined at: ./src/contract/index.rsh:65:20:function exp)', 'at ./src/contract/index.rsh:65:20:application call to [unknown function] (defined at: ./src/contract/index.rsh:65:20:function exp)'],
          msg: 'out',
          who: 'Whitelist_addAddress'
          });
        }
      else {
        }
      
      await stdlib.mapSet(map1, v1064, null);
      const v1082 = stdlib.add(v585, stdlib.checkedBigNumberify('./src/contract/index.rsh:69:53:decimal', stdlib.UInt_max, '1'));
      const v1558 = v584;
      const v1559 = v1082;
      const v1561 = v995;
      const v1562 = v594;
      const v1563 = stdlib.le(v1082, stdlib.checkedBigNumberify('./src/contract/index.rsh:61:39:decimal', stdlib.UInt_max, '5'));
      const v1564 = v584 ? v1563 : false;
      if (v1564) {
        return;
        }
      else {
        ;
        const v1565 = v995[stdlib.checkedBigNumberify('./src/contract/index.rsh:111:28:application', stdlib.UInt_max, '0')];
        const v1566 = v1565[stdlib.checkedBigNumberify('./src/contract/index.rsh:111:28:application', stdlib.UInt_max, '0')];
        ;
        return;
        }
      break;
      }
    }
  
  
  };
export async function Any_sendAza(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Any_sendAza expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Any_sendAza expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 4) {return _Any_sendAza4(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function Any_withdraw(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Any_withdraw expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Any_withdraw expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 4) {return _Any_withdraw4(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function Whitelist_addAddress(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Whitelist_addAddress expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Whitelist_addAddress expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 4) {return _Whitelist_addAddress4(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
const _ALGO = {
  ABI: {
    impure: [`Any_sendAza(uint64,address)uint64`, `Any_withdraw(uint64)uint64`, `Whitelist_addAddress(address)byte[0]`],
    pure: [`getUserBalance(address)uint64`],
    sigs: [`Any_sendAza(uint64,address)uint64`, `Any_withdraw(uint64)uint64`, `Whitelist_addAddress(address)byte[0]`, `getUserBalance(address)uint64`]
    },
  appApproval: `BiAOAAEECAIKx4C92Q2N19+RDoSMqa0LAyCA4esXoI0GBSYDAQAAAQEiNQAxGEEE4ylkSSJbNQElWzUCMRkjEkEACjEAKCEFr2ZCBLA2GgAXSUEAjyI1BCM1BkkhBgxAAC9JIQcMQAATIQcSRDYaATX/KjT/UDIDUEIAhiEGEkQ2GgE1/4ABAjT/UCWvUEIAcUkhCAxAADQhCBJENAEkEkQ2GgGIBItXAAlJNf4iVUAABiI1/0IADDT+I1tJNf01/0IAADT/FjUHQgRAgcmq/6MJEkQ2GgE2GgJQNf8oNP9QQgAeNhoCFzUENhoDNhoBF0kjDEAC0kkhCQxAAmchCRJEJDQBEkQ0BEkiEkw0AhIRRChkSTUDSUpKVwAgNf8hCls1/lcoARc1/YEpWzX8VzERNfuBQls1+kk1BTX5gARRfxw4NPlQsDT5IlVJIwxAAVVJIQQMQAB0IQQSRDT5VwEgNfg0+1cAETX3NPg19jT2iAO+VwkBSTX0IlVAAAYiNfVCAAYjNfVCAAA09RREgAgAAAAAAAAEMLApNQc09ig09ogDjSOBCUxWZjT/NP40/TT8IwgyBjT3VwAINPdXCAhQNPdXEAFQNPpCAnFINPlXAQg1+DT7VwARSTX3VwAINPdXCAhQNPdXEAFQNfY0+BdJNfUiDUQ09lcAEUk19CJbNfM09TTzDkQxAIgDJFcACUk18SJVQAAGIjXyQgAMNPEjW0k18DXyQgAANPU08kk09QxNSTXxNPVJNPEMTTXwNPI08Ak17zEAKDEAiALjKjTvFlA17lcJATTuTFBmgAgAAAAAAAADjDTvFlCwNO8WNQexIrIBNPCyEiSyEDEAshQ0/rIRszT/NP40/TT8MgY08zTwCRY09FcICFA09FcQAVA0+kIBl0g0+VcBKDX4NPgiWzX3NPtXABE19jT3NP6IApY0+FcIIDX1NPWIAmNXCQFJNfMiVUAABiI19EIABiM19EIAADT3Ig009BBENPWIAj9XAAlJNfIiVUAABiI180IADDTyI1tJNfE180IAADTzNPcINfI09Sg09YgCEyo08hZQNfFXCQE08UxQZoAIAAAAAAAAAus08hZQsDTyFjUHNP80/jT9NPwyBjT2Ils09wgWNPZXCAhQNPZXEAFQNPpCANkjEkQjNAESRDQESSISTDQCEhFEKGRJNQNJSVcAIDX/IQpbNf5XKBE1/YAEmouRdLA0/VcAETX8IQs0/ogBtjT/MQASRDT/NP4jIjIGNPwiWyELCBY0/FcICFA0/FcQAVAiQgB1SCEMiAFyIjQBEkQ0BEkiEkw0AhIRREk1BRc1/4AEgsRh/jT/FlCwgRGvSTX+VwARNf0lrzT9VwgIUDT9VxABUDX8IQyIATGxIrIBIrISJLIQMgqyFDT/shGzMQA0/xZQNPxQKEsBVwA5Z0gjNQEyBjUCQgCiNf81/jX9Nfw1+zX6Nfk0+zT8IQ0OEEEAKjT5NPoWUDT7FlEHCFA0/BZQNP5QNP8WUChLAVcASmdIJDUBMgY1AkIAX7EisgE0/7III7IQNPmyB7OxIrIBNP5XABEiW7ISJLIQNPmyFDT6shGzsSKyASKyEiSyEDIJshUyCrIUNPqyEbNCAAAxGSENEkSxIrIBIrIII7IQMgmyCTIKsgezQgAFMRkiEkQpNAEWNAIWUGc0BkEACoAEFR98dTQHULA0AEkjCDIEEkQxFhJEI0MxGSISREL/3yIxNBJEIQQxNRJEIjE2EkQjMTcSRCI1ASI1AkL/rkkxGGFAAAVIIQWviShiiTQASUojCDUAOAcyChJEOBAjEkQ4CBJEiTQASUpJIwg1ADgUMgoSRDgQJBJEOBFPAhJEOBISRIk=`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 1,
  mapDataSize: 10,
  stateKeys: 1,
  stateSize: 74,
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
            "components": [
              {
                "internalType": "address payable",
                "name": "v555",
                "type": "address"
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
            "components": [
              {
                "internalType": "address payable",
                "name": "v555",
                "type": "address"
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
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T12",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e1",
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
                "components": [
                  {
                    "internalType": "enum _enum_T16",
                    "name": "which",
                    "type": "uint8"
                  },
                  {
                    "components": [
                      {
                        "internalType": "uint256",
                        "name": "elem0",
                        "type": "uint256"
                      },
                      {
                        "internalType": "address payable",
                        "name": "elem1",
                        "type": "address"
                      }
                    ],
                    "internalType": "struct T13",
                    "name": "_Any_sendAza0_62",
                    "type": "tuple"
                  },
                  {
                    "components": [
                      {
                        "internalType": "uint256",
                        "name": "elem0",
                        "type": "uint256"
                      }
                    ],
                    "internalType": "struct T14",
                    "name": "_Any_withdraw0_62",
                    "type": "tuple"
                  },
                  {
                    "components": [
                      {
                        "internalType": "address payable",
                        "name": "elem0",
                        "type": "address"
                      }
                    ],
                    "internalType": "struct T15",
                    "name": "_Whitelist_addAddress0_62",
                    "type": "tuple"
                  }
                ],
                "internalType": "struct T16",
                "name": "v685",
                "type": "tuple"
              }
            ],
            "internalType": "struct T17",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T18",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e3",
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
    "name": "_reach_oe_v1072",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "v0",
        "type": "uint256"
      }
    ],
    "name": "_reach_oe_v747",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "v0",
        "type": "uint256"
      }
    ],
    "name": "_reach_oe_v908",
    "type": "event"
  },
  {
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_a0",
        "type": "uint256"
      },
      {
        "internalType": "address payable",
        "name": "_a1",
        "type": "address"
      }
    ],
    "name": "Any_sendAza",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_a0",
        "type": "uint256"
      }
    ],
    "name": "Any_withdraw",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address payable",
        "name": "_a0",
        "type": "address"
      }
    ],
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
            "internalType": "uint256",
            "name": "_Some",
            "type": "uint256"
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
        "internalType": "address",
        "name": "addr",
        "type": "address"
      }
    ],
    "name": "_reachMap1Ref",
    "outputs": [
      {
        "components": [
          {
            "internalType": "enum _enum_T1",
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
        "internalType": "struct T1",
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
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T12",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m1",
    "outputs": [],
    "stateMutability": "payable",
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
                "components": [
                  {
                    "internalType": "enum _enum_T16",
                    "name": "which",
                    "type": "uint8"
                  },
                  {
                    "components": [
                      {
                        "internalType": "uint256",
                        "name": "elem0",
                        "type": "uint256"
                      },
                      {
                        "internalType": "address payable",
                        "name": "elem1",
                        "type": "address"
                      }
                    ],
                    "internalType": "struct T13",
                    "name": "_Any_sendAza0_62",
                    "type": "tuple"
                  },
                  {
                    "components": [
                      {
                        "internalType": "uint256",
                        "name": "elem0",
                        "type": "uint256"
                      }
                    ],
                    "internalType": "struct T14",
                    "name": "_Any_withdraw0_62",
                    "type": "tuple"
                  },
                  {
                    "components": [
                      {
                        "internalType": "address payable",
                        "name": "elem0",
                        "type": "address"
                      }
                    ],
                    "internalType": "struct T15",
                    "name": "_Whitelist_addAddress0_62",
                    "type": "tuple"
                  }
                ],
                "internalType": "struct T16",
                "name": "v685",
                "type": "tuple"
              }
            ],
            "internalType": "struct T17",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T18",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m3",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address payable",
        "name": "v1567",
        "type": "address"
      }
    ],
    "name": "getUserBalance",
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
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x6080604052604051620026eb380380620026eb833981016040819052620000269162000398565b6000805543600355620000386200021d565b604080513381528351602080830191909152840151516001600160a01b03168183015290517f0d6fab7154ce0a94b131216395b92f2e84190b0a295f5e2d18b75b3f1a456c479181900360600190a180516000908190528151602090810182905282516040908101839052835182850180519190915281850180518590528151518401518151909401939093528051518201518351901515920191909152519051620000e5929062000170565b6060820152620000f834156008620001f3565b6200010262000284565b338152602080840151516001600160a01b0316818301526060830151604080840191909152600160008190554390555162000140918391016200046c565b6040516020818303038152906040526002908051906020019062000166929190620002a5565b5050505062000540565b6200017a62000334565b60005b6001811015620001d0578481600181106200019c576200019c62000456565b6020020151828260018110620001b657620001b662000456565b602002015280620001c781620004d9565b9150506200017d565b5081818460018110620001e757620001e762000456565b60200201529392505050565b81620002195760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b6040805160e0810190915260006080820181815260a0830182905260c08301919091528152602081016200025062000334565b815260408051606081018252600080825260208281018290529282015291019081526020016200027f62000334565b905290565b60408051606081018252600080825260208201529081016200027f62000334565b828054620002b39062000503565b90600052602060002090601f016020900481019282620002d7576000855562000322565b82601f10620002f257805160ff191683800117855562000322565b8280016001018555821562000322579182015b828111156200032257825182559160200191906001019062000305565b506200033092915062000381565b5090565b60405180602001604052806001905b6200036a604051806060016040528060008152602001600081526020016000151581525090565b815260200190600190039081620003435790505090565b5b8082111562000330576000815560010162000382565b6000818303604080821215620003ad57600080fd5b80518082016001600160401b038082118383101715620003dd57634e487b7160e01b600052604160045260246000fd5b818452865183526020601f1986011215620003f757600080fd5b8351945060208501915084821081831117156200042457634e487b7160e01b600052604160045260246000fd5b509091526020840151906001600160a01b03821682146200044457600080fd5b90825260208101919091529392505050565b634e487b7160e01b600052603260045260246000fd5b81516001600160a01b0390811682526020808401519091168183015260408084015160a08401929082850160005b6001811015620004ce578251805183528481015185840152850151151585830152918301916060909101906001016200049a565b505050505092915050565b6000600019821415620004fc57634e487b7160e01b600052601160045260246000fd5b5060010190565b600181811c908216806200051857607f821691505b602082108114156200053a57634e487b7160e01b600052602260045260246000fd5b50919050565b61219b80620005506000396000f3fe60806040526004361061009a5760003560e01c8063539bf92b11610061578063539bf92b1461014a5780635bbd1a561461015d5780638323075714610170578063a0eb3a8514610185578063ab53f2c614610198578063cadc2e7a146101bb57005b80631e93b0f1146100a35780632c10a159146100c75780633bc5b7bf146100da57806347734892146101075780634d2d81f11461012757005b366100a157005b005b3480156100af57600080fd5b506003545b6040519081526020015b60405180910390f35b6100a16100d5366004611a52565b6101e8565b3480156100e657600080fd5b506100fa6100f5366004611a7f565b61022a565b6040516100be9190611ac2565b34801561011357600080fd5b506100b4610122366004611a7f565b610256565b61013a610135366004611a7f565b61045c565b60405190151581526020016100be565b6100a1610158366004611af2565b6104b5565b6100b461016b366004611b04565b6104f3565b34801561017c57600080fd5b506001546100b4565b6100b4610193366004611b34565b610551565b3480156101a457600080fd5b506101ad6105a1565b6040516100be929190611b79565b3480156101c757600080fd5b506101db6101d6366004611a7f565b61063e565b6040516100be9190611bb3565b61020e604051806060016040528060008152602001600081526020016000151581525090565b61022661022036849003840184611c9b565b82610664565b5050565b60408051606081018252600080825260208201819052918101919091526102508261089a565b92915050565b6000600160005414156103135760006002805461027290611cf1565b80601f016020809104026020016040519081016040528092919081815260200182805461029e90611cf1565b80156102eb5780601f106102c0576101008083540402835291602001916102eb565b820191906000526020600020905b8154815290600101906020018083116102ce57829003601f168201915b50505050508060200190518101906103039190611daf565b90506103116000600761096c565b505b6004600054141561044b5760006002805461032d90611cf1565b80601f016020809104026020016040519081016040528092919081815260200182805461035990611cf1565b80156103a65780601f1061037b576101008083540402835291602001916103a6565b820191906000526020600020905b81548152906001019060200180831161038957829003601f168201915b50505050508060200190518101906103be9190611e02565b90506103dd604051806040016040528060008152602001600081525090565b60006103e88561089a565b5160018111156103fa576103fa611a9c565b14156104095760008152610443565b60016104148561089a565b51600181111561042657610426611a9c565b1415610443576104358461089a565b604001516020820181905281525b519392505050565b6104576000600761096c565b919050565b60006104666116bc565b60208181018051516002905251516060908101516001600160a01b038616905260408051918201815260008083529282018390528101919091526104aa8282610992565b604001519392505050565b6104db604051806060016040528060008152602001600081526020016000151581525090565b6102266104ed36849003840184611eef565b82610992565b60006104fd6116bc565b60208181018051516000908190528151518301518790529051518201516001600160a01b03861690830152604080516060810182528281529283018290528201526105488282610992565b51949350505050565b600061055b6116bc565b602081810180515160019052515160409081015185905280516060810182526000808252928101839052908101919091526105968282610992565b602001519392505050565b6000606060005460028080546105b690611cf1565b80601f01602080910402602001604051908101604052809291908181526020018280546105e290611cf1565b801561062f5780601f106106045761010080835404028352916020019161062f565b820191906000526020600020905b81548152906001019060200180831161061257829003601f168201915b50505050509050915091509091565b604080516060810182526000808252602082018190529181019190915261025082611231565b610674600160005414600c61096c565b815161068f90158061068857508251600154145b600d61096c565b6000808055600280546106a190611cf1565b80601f01602080910402602001604051908101604052809291908181526020018280546106cd90611cf1565b801561071a5780601f106106ef5761010080835404028352916020019161071a565b820191906000526020600020905b8154815290600101906020018083116106fd57829003601f168201915b50505050508060200190518101906107329190611daf565b905061075b60408051608081018252600060208201818152928201819052606082015290815290565b60408051338152855160208083019190915286015115158183015290517f400d21ea4e4a5e28b4ae5f0f476c201fc8036473fcf7c8cd252f38698020b4f19181900360600190a16107ae3415600961096c565b604082015151516107c4906302faf08090611fe1565b815152604082810180515160209081015184518201529051518201518351901515920191909152820151610809906108029033906302faf0806112fa565b600a61096c565b8151610821906001600160a01b03163314600b61096c565b6108296116db565b825181516001600160a01b0391821690526020808501518351921691810191909152808201805160019052805160009201829052514360409182015284015183516108749290611312565b6020820180516060019190915251600060809091015261089381611386565b5050505050565b604080516060810182526000808252602082018190529181019190915260016001600160a01b03831660009081526004602052604090205460ff1660018111156108e6576108e6611a9c565b141561095d576001600160a01b038216600090815260046020526040908190208151606081019092528054829060ff16600181111561092757610927611a9c565b600181111561093857610938611a9c565b81528154610100900460ff161515602082015260019091015460409091015292915050565b60008082526020820152919050565b816102265760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b6109a2600460005414601861096c565b81516109bd9015806109b657508251600154145b601961096c565b6000808055600280546109cf90611cf1565b80601f01602080910402602001604051908101604052809291908181526020018280546109fb90611cf1565b8015610a485780601f10610a1d57610100808354040283529160200191610a48565b820191906000526020600020905b815481529060010190602001808311610a2b57829003601f168201915b5050505050806020019051810190610a609190611e02565b9050610a6a611704565b7f8fe13add266e57c7db155cba046df7e6dfb4e4eb57f3f498db2f176d718363123385604051610a9b929190611ff9565b60405180910390a16000602085015151516002811115610abd57610abd611a9c565b1415610d5a576020808501515101518152610ada3415600e61096c565b80515160808301515151610aee9190611fe1565b602082810180519290925260808401805151820151835183015251516040908101519251921515920191909152820151815151610b3891610b31913391906112fa565b600f61096c565b6000815160200151610b4990611231565b516001811115610b5b57610b5b611a9c565b1415610b6d5760006040820152610b9e565b6001815160200151610b7e90611231565b516001811115610b9057610b90611a9c565b1415610b9e57600160408201525b805151610bbd90610bb0576000610bb6565b81604001515b601061096c565b6000815160200151610bce9061089a565b516001811115610be057610be0611a9c565b1415610bf25760006060820152610c3b565b6001815160200151610c039061089a565b516001811115610c1557610c15611a9c565b1415610c3b57805160200151610c2a9061089a565b604001516080820181905260608201525b8051516060820151610c4d9190611fe1565b60a0820190815281516020908101516001600160a01b039081166000908152600483526040808220805460ff191660019081179091558551875186015190941683529181902090910191909155915191519182527f28c1628173231e3cf573772e0afa5f2222557960f24fa5d2e222ea25033eb086910160405180910390a160a08101518352610cdb6116db565b825181516001600160a01b03918216905260208085015183519216918101919091526040808501518284018051911515909152606086015181518401525143910152608084015190830151610d339190600090611312565b6020820180516060019190915260a0840151905160800152610d5481611386565b5061122b565b6001602085015151516002811115610d7457610d74611a9c565b1415611029576020840151516040015160c0820152610d953415601161096c565b608082018051515160e08301805191909152815151602090810151825190910152815151604090810151825190151591015290519051610dd89190600090611312565b816101000181905250610dfb610df433846020015160006112fa565b601261096c565b60c081015151610e0e901515601361096c565b610100810151515160c082015151610e29911015601461096c565b6000610e343361089a565b516001811115610e4657610e46611a9c565b1415610e59576000610120820152610e98565b6001610e643361089a565b516001811115610e7657610e76611a9c565b1415610e9857610e853361089a565b6040015161014082018190526101208201525b60c08101515161012082015110610eb45760c081015151610ebb565b8061012001515b610160820181905260c08201515110610ed957806101600151610ee0565b60c0810151515b6101808201819052610120820151610ef8919061206f565b6101a0820190815233600090815260046020908152604091829020805460ff1916600190811782559351930183905590519182527f872000d9eee53f1dd6842906542a95c2eb42f4aa0a07f86c536611be4ae9b145910160405180910390a16101a081015160208401526101808101516101008201515151610f7a919061206f565b6101c08201805191909152610100820180515160209081015183518201529051516040908101519251921515920191909152820151610180820151610fc1919033906114c2565b610fc96116db565b825181516001600160a01b0391821690526020808501518351921691810191909152604080850151828401805191151590915260608601518151909301929092529051439101526101008201516101c0830151610d339190600090611312565b600260208501515151600281111561104357611043611a9c565b141561122b57602084015151606001516101e08201526110653415601561096c565b60808201805151516102008301805191909152815151602090810151825182015291515160409081015191519115159101528201516110b2906110ab90339060006112fa565b601661096c565b60006101e0820151516110c490611231565b5160018111156110d6576110d6611a9c565b14156110e957600061022082015261111c565b60016101e0820151516110fb90611231565b51600181111561110d5761110d611a9c565b141561111c5760016102208201525b61113a816102200151611130576001611133565b60005b601761096c565b604051600081527f01eca64888c1a54be688bac5c8e8938097607cc17be4995b4ec21b370cd592699060200160405180910390a1600060408481018290526101e083018051516001600160a01b0390811684526005602052828420805460ff191660011790559051511682529020805462ff0000191690556111ba6116db565b825181516001600160a01b0391821690526020808501518351921691810191909152604084015190820151901515905260608301516111fb90600190611fe1565b816020015160200181815250504381602001516040018181525050610d3383608001516000846102000151611312565b50505050565b604080516060810182526000808252602082018190529181019190915260016001600160a01b03831660009081526005602052604090205460ff16600181111561127d5761127d611a9c565b141561095d576001600160a01b038216600090815260056020526040908190208151606081019092528054829060ff1660018111156112be576112be611a9c565b60018111156112cf576112cf611a9c565b8152905460ff6101008204811615156020840152620100009091041615156040909101529050919050565b6000611308838530856114d6565b90505b9392505050565b61131a61183b565b60005b60018110156113665784816001811061133857611338611fb5565b602002015182826001811061134f5761134f611fb5565b60200201528061135e81612086565b91505061131d565b508181846001811061137a5761137a611fb5565b60200201529392505050565b6020810151516113975760006113a5565b600581602001516020015111155b15611447576113b2611886565b8151516001600160a01b039081168252825160209081015190911681830152808301805151151560408085019190915281518301516060808601919091528251015160808086019190915291519091015160a08401526004600055436001555161141e918391016120a1565b604051602081830303815290604052600290805190602001906114429291906118d6565b505050565b8051516020820151608001516040516001600160a01b039092169181156108fc0291906000818181858888f19350505050158015611489573d6000803e3d6000fd5b5080516020808201519151908301516060015151516114a99291906114c2565b600080805560018190556114bf9060029061195a565b50565b6114cd8383836115b0565b61144257600080fd5b604080516001600160a01b0385811660248301528481166044830152606480830185905283518084039091018152608490920183526020820180516001600160e01b03166323b872dd60e01b17905291516000928392839291891691839161153d9161212c565b60006040518083038185875af1925050503d806000811461157a576040519150601f19603f3d011682016040523d82523d6000602084013e61157f565b606091505b509150915061159082826001611681565b50808060200190518101906115a59190612148565b979650505050505050565b604080516001600160a01b038481166024830152604480830185905283518084039091018152606490920183526020820180516001600160e01b031663a9059cbb60e01b17905291516000928392839291881691839161160f9161212c565b60006040518083038185875af1925050503d806000811461164c576040519150601f19603f3d011682016040523d82523d6000602084013e611651565b606091505b509150915061166282826002611681565b50808060200190518101906116779190612148565b9695505050505050565b6060831561169057508161130b565b8251156116a05782518084602001fd5b60405163100960cb60e01b815260048101839052602401610989565b6040518060400160405280600081526020016116d6611994565b905290565b6040805160808101825260009181018281526060820192909252908152602081016116d66119a7565b6040805161028081019091526000610240820181815261026083019190915281908152604080516060810182526000808252602082810182905292820152910190815260200160001515815260200160008152602001600081526020016000815260200161177e6040518060200160405280600081525090565b815260408051606081018252600080825260208281018290529282015291019081526020016117ab61183b565b815260200160008152602001600081526020016000815260200160008152602001600081526020016117f9604051806060016040528060008152602001600081526020016000151581525090565b81526040805160208181019092526000815291019081526040805160608101825260008082526020828101829052928201529101908152600060209091015290565b60405180602001604052806001905b611870604051806060016040528060008152602001600081526020016000151581525090565b81526020019060019003908161184a5790505090565b6040518060c0016040528060006001600160a01b0316815260200160006001600160a01b03168152602001600015158152602001600081526020016118c961183b565b8152602001600081525090565b8280546118e290611cf1565b90600052602060002090601f016020900481019282611904576000855561194a565b82601f1061191d57805160ff191683800117855561194a565b8280016001018555821561194a579182015b8281111561194a57825182559160200191906001019061192f565b506119569291506119d1565b5090565b50805461196690611cf1565b6000825580601f10611976575050565b601f0160209004906000526020600020908101906114bf91906119d1565b60405180602001604052806116d66119e6565b6040518060a0016040528060001515815260200160008152602001600081526020016118c961183b565b5b8082111561195657600081556001016119d2565b60408051608081019091528060008152602001611a1f60405180604001604052806000815260200160006001600160a01b031681525090565b8152602001611a3a6040518060200160405280600081525090565b81526040805160208181019092526000815291015290565b600060408284031215611a6457600080fd5b50919050565b6001600160a01b03811681146114bf57600080fd5b600060208284031215611a9157600080fd5b813561130b81611a6a565b634e487b7160e01b600052602160045260246000fd5b600281106114bf576114bf611a9c565b81516060820190611ad281611ab2565b808352506020830151151560208301526040830151604083015292915050565b600060c08284031215611a6457600080fd5b60008060408385031215611b1757600080fd5b823591506020830135611b2981611a6a565b809150509250929050565b600060208284031215611b4657600080fd5b5035919050565b60005b83811015611b68578181015183820152602001611b50565b8381111561122b5750506000910152565b8281526040602082015260008251806040840152611b9e816060850160208701611b4d565b601f01601f1916919091016060019392505050565b81516060820190611bc381611ab2565b8083525060208301511515602083015260408301511515604083015292915050565b634e487b7160e01b600052604160045260246000fd5b6040516020810167ffffffffffffffff81118282101715611c1e57611c1e611be5565b60405290565b6040516060810167ffffffffffffffff81118282101715611c1e57611c1e611be5565b6040805190810167ffffffffffffffff81118282101715611c1e57611c1e611be5565b6040516080810167ffffffffffffffff81118282101715611c1e57611c1e611be5565b80151581146114bf57600080fd5b600060408284031215611cad57600080fd5b6040516040810181811067ffffffffffffffff82111715611cd057611cd0611be5565b604052823581526020830135611ce581611c8d565b60208201529392505050565b600181811c90821680611d0557607f821691505b60208210811415611a6457634e487b7160e01b600052602260045260246000fd5b600082601f830112611d3757600080fd5b611d3f611bfb565b80606080850186811115611d5257600080fd5b855b81811015611da357828189031215611d6c5760008081fd5b611d74611c24565b8151815260208083015181830152604080840151611d9181611c8d565b90830152908652909401938201611d54565b50919695505050505050565b600060a08284031215611dc157600080fd5b611dc9611c24565b8251611dd481611a6a565b81526020830151611de481611a6a565b6020820152611df68460408501611d26565b60408201529392505050565b60006101008284031215611e1557600080fd5b60405160c0810181811067ffffffffffffffff82111715611e3857611e38611be5565b6040528251611e4681611a6a565b81526020830151611e5681611a6a565b60208201526040830151611e6981611c8d565b604082015260608381015190820152611e858460808501611d26565b608082015260e0929092015160a083015250919050565b600060208284031215611eae57600080fd5b611eb6611bfb565b9135825250919050565b600060208284031215611ed257600080fd5b611eda611bfb565b90508135611ee781611a6a565b815292915050565b600081830360c0811215611f0257600080fd5b611f0a611c47565b8335815260a0601f1983011215611f2057600080fd5b611f28611bfb565b611f30611c6a565b602086013560038110611f4257600080fd5b81526040603f1985011215611f5657600080fd5b611f5e611c47565b9350604086013584526060860135611f7581611a6a565b80602086015250836020820152611f8f8760808801611e9c565b6040820152611fa18760a08801611ec0565b606082015281526020820152949350505050565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b60008219821115611ff457611ff4611fcb565b500190565b6001600160a01b038381168252825160208084019190915283015151805160e084019291906003811061202e5761202e611a9c565b806040860152506020810151805160608601528260208201511660808601525060408101515160a0850152816060820151511660c085015250509392505050565b60008282101561208157612081611fcb565b500390565b600060001982141561209a5761209a611fcb565b5060010190565b81516001600160a01b03908116825260208084015190911681830152604080840151151581840152606080850151818501526080808601516101008601949291860160005b600181101561211657825180518352858101518684015286015115158683015291840191908301906001016120e6565b50505050505060a083015160e083015292915050565b6000825161213e818460208701611b4d565b9190910192915050565b60006020828403121561215a57600080fd5b815161130b81611c8d56fea2646970667358221220bff89418d80437a01ce9740b715e03eca4dc2173135c7442c80a351b8a9dcbdf64736f6c634300080c0033`,
  BytecodeLen: 9963,
  Which: `oD`,
  version: 7,
  views: {
    getUserBalance: `getUserBalance`
    }
  };
export const _stateSourceMap = {
  1: {
    at: './src/contract/index.rsh:48:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './src/contract/index.rsh:112:3:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './src/contract/index.rsh:58:17:after expr stmt semicolon',
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
  "Any_sendAza": Any_sendAza,
  "Any_withdraw": Any_withdraw,
  "Deployer": Deployer,
  "Whitelist_addAddress": Whitelist_addAddress
  };
export const _APIs = {
  Any: {
    sendAza: Any_sendAza,
    withdraw: Any_withdraw
    },
  Whitelist: {
    addAddress: Whitelist_addAddress
    }
  };
