pragma solidity ^0.4.4;

contract Purchase {
    struct Transaction{
        string productRef;
        uint qty;
        uint subTotal;
        address customerRef;
    }
    
    Transaction[50] private txns;
    mapping (address => uint) customerTotals;
    uint public count = 0;
    
    function Buy(string prodRef, uint qty, uint amount) public {
        txns[count++] = Transaction(prodRef, qty, amount, msg.sender);
        customerTotals[msg.sender] += amount;
    }
    
   
    function TotalBillOfACustomer() public constant returns (uint total){
        if(txns.length>0)
            return customerTotals[msg.sender];
        else 
            return 0;
    }
}