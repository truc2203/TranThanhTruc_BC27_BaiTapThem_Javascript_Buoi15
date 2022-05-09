function tax() {
  var userName = document.getElementById("userName").value;
  var totalIncome = +document.getElementById("totalIncome").value;
  var people = +document.getElementById("people").value;

  var mustPay = document.getElementById("mustPay");
  var customer = document.getElementById("customer");

  var total = incomeTax(totalIncome, people);

  var percentTax = perTax(total).toLocaleString();
  customer.innerHTML = `Họ Tên : ${userName}`
  mustPay.innerHTML = `Phải trả : ${percentTax} VND`;
}

function incomeTax(totalIncome, people) {
  return totalIncome - 4000000 - people * 1600000;
}

function perTax(total) {
  if (total <= 60000000) {

    return (total = (total * 5) / 100);
  } 
  else if (total > 60000000 && total <= 120000000) {
    return (total = (total * 10) / 100);
  } 
  else if (total > 120000000 && total <= 210000000) {
    return (total = (total * 15) / 100);
  } 
  else if (total > 210000000 && total <= 384000000) {
    return (total = (total * 20) / 100);
  } 
  else if (total > 384000000 && total <= 624000000) {
    return (total = (total * 25) / 100);
  } 
  else if (total > 624000000 && total <= 960000000) {
    return (total = (total * 30) / 100);
  } else {
    return (total = (total * 35) / 100);
  }
}
