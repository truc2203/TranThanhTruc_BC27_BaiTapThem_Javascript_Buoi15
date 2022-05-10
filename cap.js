function cap()
{
    var customerCode = document.getElementById("customerCode").value 
    var highChannel = +document.getElementById("highChannel").value
    var connects = +document.getElementById("connects").value
    var totalPay = document.getElementById("totalPay")
    var customer2 = document.getElementById("customer2")

    // Hứng giá trị loại khách hàng
    var check = show(customerType,showConnect)
    // console.log(check)
    var total = chargeCap(check,highChannel,connects).toLocaleString()

    customer2.innerHTML = `Mã khách hàng : ${customerCode}`
    totalPay.innerHTML = `Tổng tiền : $${total}`
}

// Hàm kiểm tra loại khách hàng
function show(customerType,showConnect)
{
    var showConnect = document.getElementById("showConnect")
    var customerType = document.getElementById("customerType").value
    if(customerType === "ND")
    {
        showConnect.style.display = "None"
        return 0
    }
    else{
        showConnect.style.display = "Block"
        return 1
    }
}

// Hàm tính tiền 
function chargeCap(check,highChannel,connects)
{
    if(check === 0)
    {
        return highChannel * 7.5 + (4.5 + 20.5)
    }
    else{
        if(connects > 10)
        {
            return highChannel * 50 + (15 + 75 + ((connects -10) * 5))
        }
        else{
            return highChannel * 50 + (15 + 75)
        }
    }

}
