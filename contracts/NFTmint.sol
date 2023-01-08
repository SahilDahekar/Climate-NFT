// SPDX-License-Identifier: MIT
pragma solidity ^0.8.3;

import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@chainlink/contracts/src/v0.8/ChainlinkClient.sol";

contract FactoryNFT is ERC721URIStorage,ChainlinkClient { 
    using Chainlink for Chainlink.Request;
    using Counters for Counters.Counter; 
    Counters.Counter private _tokenIds;
    bytes32 private JobId;
    string public vol;
    string public wildfire;
    string public tempExt;
    string public floods;
    uint256 private fee;
    uint public count;

    event Vol(string _result);
    event Flood(string _result);
    event Wildfire(string _result);
    event TempExt(string _result);
    
    string[] IpfsUri = [
        "https://ipfs.io/ipfs/bafybeicji5s776xyaltso3u6ipba5usfhcndxi54i7kuyplgtsnbyunizq/normal.json",
        "https://ipfs.io/ipfs/bafybeieg3qohje4gxiqujrfy3dsu27vbluvihyj42c5i55gsit3po36uxa/Volcano.json",
        "https://ipfs.io/ipfs/bafybeihxig3py7k7fbs3y2qaqqrttai4ioi5z5jesjrdxh4t2bdfg5d43a/Wildfire.json",
        "https://ipfs.io/ipfs/bafybeiexnci5wnawkordb5ivdtxvbvrcevb54osjb7mhmp4l6deau53ada/Flood.json",
        "https://ipfs.io/ipfs/bafybeia6gsriym3iiyzur6q42t5lko4uxzxdqcp5rluv5ey2ziqj4wkjqy/ExtTemp.js"
    ];

    constructor() ERC721("Climate-NFT", "DNFT") {
        setChainlinkToken(0x326C977E6efc84E512bB9C30f76E30c160eD06FB);
        setChainlinkOracle(0x40193c8518BB267228Fc409a613bDbD8eC5a97b3); 
        JobId = "7d80a6386ef543a3abb52817f6707e3b";
        fee = 0.1 * 10 ** 18;
    }

    function createToken() public returns (uint) {
        _tokenIds.increment();
        uint256 newItemId = _tokenIds.current();

        _mint(msg.sender, newItemId);
        string memory defaultUri = IpfsUri[0]; 
        _setTokenURI(newItemId, defaultUri);

        return newItemId;
    }
        
    function requestVolcanoes() external {
        Chainlink.Request memory req = buildChainlinkRequest(
            JobId,
            address(this),
            this.fulfillVolcanoes.selector
        );
        req.add("get","https://eonet.gsfc.nasa.gov/api/v3/events/geojson?days=20%20&%20category=Volcanoes");
        req.add("path", "features,0,properties,title");
        sendChainlinkRequest(req, fee);
    }

    function fulfillVolcanoes(
        bytes32 _requestId,
        string memory _result
    ) external recordChainlinkFulfillment(_requestId) {
        vol = _result;
        emit Vol(_result);
    }

     function requestfloods() external {
        Chainlink.Request memory req = buildChainlinkRequest(
            JobId,
            address(this),
            this.fulfillfloods.selector
        );
        req.add("get","https://eonet.gsfc.nasa.gov/api/v3/events/geojson?days=20%20&%20category=floods");
        req.add("path", "features,0,properties,title");
        sendChainlinkRequest(req, fee);
    }

    function fulfillfloods(
        bytes32 _requestId,
        string memory _result
    ) external recordChainlinkFulfillment(_requestId) {
        floods = _result;
        emit Flood(_result);
    }

    function requestWildFire() external {
        Chainlink.Request memory req = buildChainlinkRequest(
            JobId,
            address(this),
            this.fulfillWildfire.selector
        );
        req.add("get","https://eonet.gsfc.nasa.gov/api/v3/events/geojson?days=20%20&%20category=Wildfires");
       req.add("path", "features,0,properties,title");
       sendChainlinkRequest(req, fee);
    }

    function fulfillWildfire(
        bytes32 _requestId,
        string memory _result
    ) external recordChainlinkFulfillment(_requestId) {
        wildfire  = _result;
        emit Wildfire(_result);
    }
  function requestTempExt() external {
        Chainlink.Request memory req = buildChainlinkRequest(
            JobId,
            address(this),
            this.fulfillTempExt.selector
        );
        req.add("get","https://eonet.gsfc.nasa.gov/api/v3/events/geojson?category=Wildfires");
        req.add("path", "features,0,properties,title");
        sendChainlinkRequest(req, fee);
    }

    function fulfillTempExt(
        bytes32 _requestId,
        string memory _result
    ) external recordChainlinkFulfillment(_requestId) {
        tempExt = _result;
        emit TempExt(_result);
    }

    
    function compare(uint256 _tokenId)public{
        bytes memory tempEmptyStringTest = bytes(vol);
        if (tempEmptyStringTest.length == 0) {
            count = 0;
        } else {    
            count = 1;
        }
         string memory newUri = IpfsUri[count];
        _setTokenURI(_tokenId,newUri);
    }
}