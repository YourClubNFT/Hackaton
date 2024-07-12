// SPDX-License-Identifier: MIT
// Compatible with OpenZeppelin Contracts ^5.0.0
pragma solidity ^0.8.20;
 
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol"; 

contract TheCompetenciesOfTheFuture is ERC721, Ownable {
    uint256 private _nextTokenId;
 
    uint256 public cost = 0; // This will be the cost of the nft minting
 
    constructor(address initialOwner, uint256 initialCost)
        ERC721("The Competencies of The Future", "TCTF")
        Ownable(initialOwner)
    {
        cost = initialCost;
    }
 
    modifier mintPriceCompliance() {
        require(msg.value >= cost, "Insufficient funds!");
        _;
    }

    function changePrice(uint256 _price) public onlyOwner {
        cost = _price;
    }
 
    function mint() mintPriceCompliance public payable {
        uint256 tokenId = _nextTokenId++;
        _safeMint(msg.sender, tokenId);
    }
 
    function _baseURI() internal pure override returns (string memory) {
        return "ipfs://QmcuQakPULMy1MJtGjxA3PWyCfXcTewWk2TuwGDHr8GgAX";
    }
 
    function safeMint(address to) public onlyOwner {
        uint256 tokenId = _nextTokenId++;
        _safeMint(to, tokenId);
    }
 
    function tokenURI(uint256 tokenId) public view override  virtual returns (string memory) {
        _requireOwned(tokenId);
 
        return _baseURI();
    }
}