const StarNotary = artifacts.require("StarNotary");

module.exports = function(deployer) {
  deployer.deploy(StarNotary, "RamonaTokensV1", "RMTsV1");
} ;

//0x23654Db3bc3dD6E08Bb91eEad909F449578DDe38  