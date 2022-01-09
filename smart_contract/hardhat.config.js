require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/67EO9E-ivZGBNUrC8kZ-XT0dv5_3M_BJ',
      accounts: [ '837d21992ee3a6ab4df320dc57a5f0099e36c8d90aca0675f59f1f2360b0774f' ]
    }
  }
}