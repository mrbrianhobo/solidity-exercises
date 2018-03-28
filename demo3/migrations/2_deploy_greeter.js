var Greeter = artifacts.require("./Greeter.sol");
var SimpleBank = artifacts.require("./SimpleBank.sol");

module.exports = function(deployer) {
	/* Input value to constructor on contract deployment */
	var testGreeting = "Hello, World!";
    deployer.deploy(Greeter, testGreeting);
    deployer.deploy(SimpleBank);
};
