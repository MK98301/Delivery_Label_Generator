//page redirection code for new order button
function gotodash() {
    window.location.href = "dashboard.html";
}

//function to create a unique delivery id
function generateDeliveryId() {
    const timestamp = Date.now(); // current time in ms
    const randomPart = Math.floor(Math.random() * 1000000); // random 6-digit number
    return `DLV-${timestamp}-${randomPart}`; //final delivery id
}

//below function will get executed when confirm button is clicked
document.getElementById("confirm").addEventListener("click", function (e) {
    let sendername = document.getElementById("sendername").value;        //reads sender name from dashboard
    let senderaddress = document.getElementById("senderaddress").value;  //reads sender address from dashboard
    let receivername = document.getElementById("receivername").value;    //reads receiver name from dashboard
    let receiveraddress = document.getElementById("receiveraddress").value;   //reads sender address from dashboard

//checks that any box should not be empty
    if (!sendername || !senderaddress || !receivername || !receiveraddress) {
        alert("Please provide all details");
    }

    else {
        const deliveryId = generateDeliveryId();
        console.log(deliveryId);

        const date = new Date().toLocaleString(); //generate current time and date

        //print the order details or label output
        const container = document.getElementById('orderDetails');
        container.innerHTML = `
                <p><strong>Delivery Id:</strong> ${deliveryId}</p>
                <p><strong>Sender Name:</strong> ${sendername}</p>
                <p><strong>Sender Address:</strong> ${senderaddress}</p>
                <p><strong>Receiver Name:</strong> ${receivername}</p>
                <p><strong>Receiver Address:</strong> ${receiveraddress}</p>
                <p><strong>Date:</strong> ${date}</p>
                `;
    }
//to hide the containers according to the requirement
    document.getElementById("orderdashboard").classList.add("hidden");
    document.getElementById("logo").classList.add("hidden");
    document.getElementById("tags").classList.add("hidden");
    document.getElementById("orderdetail").classList.remove("hidden");

});