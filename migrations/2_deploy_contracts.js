var DegenDinoz = artifacts.require("./DegenDinoz.sol");

module.exports = function(deployer) {
    const name = 'Degen Dinoz';
    const symbol = 'DD';
    const initBaseUri = '';

    deployer.then(async() => {
        await deployer.deploy(DegenDinoz, name, symbol, initBaseUri);
    });
}