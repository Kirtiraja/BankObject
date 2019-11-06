// BUSINESS LOGIC FOR BANK LEDGER------------

// Account.prototype.math = function(initialDeposit, deposit, withdraw) {
//   return this.initialDeposit + this.deposit;
//
// }

// Business logic for individual bank accounts------

function Account() {
  this.name;
  this.balance = 0;
};

Account.prototype.createAccount = function (name,initialDeposit) {
  this.name = name;
  this.balance = initialDeposit;
}














// USER LOGIC //
$(document).ready(function() {
  var newAccount = new Account();

  $("form#userAccount").submit(function(event) {
    event.preventDefault();
    var initialDeposit = parseInt($("#initialDeposit").val());
    var name = $("#name").val();
    console.log(Account);
  });

  $("form#userBalance").submit(function(event) {
    event.preventDefault();
    var deposit = parseInt($("#deposit").val());
    var withdraw = parseInt($("#withdraw").val());
    var newBalance = new balance()


  // console.log(balance);
  // console.log(newAccount);
  // BankLedger.addAccount(newAccount);

});
});
