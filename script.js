web3.currentProvider.sendAsync({
  method: 'metamask_watchAsset',
  params: {
    "type":"ERC20",
    "options":{
      "address":"0x49B9a2D12845bda30B516247d1B7f552eB4de982",
      "symbol":"SEAS",
      "decimals":9,
      "image":'https://i.ibb.co/R950hTT/Logo-Big750.png'
    },
  },
  id: 20,
}, console.log)
  
 
