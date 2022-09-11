var arr = [];
function register(){
    let firstName = document.getElementById("first_name").value;
    let nameReg = /(^[a-zA-Z]+$)/;
    if(!nameReg.test(firstName)){
        swal({
        text: "Invalid First Name!",
        icon: "warning",
    })
    return false;
    }
    let lastName = document.getElementById("last_name").value;
    if(!nameReg.test(lastName)){
        swal({
        text: "Invalid Last Name!",
        icon: "warning",
    })
    return false;
    }
    let fatherName = document.getElementById("father_name").value;
    if(!nameReg.test(fatherName)){
        swal({
        text: "Invalid Father Name!",
        icon: "warning",
    })
    return false;
    }
    let fatherOccupation = document.getElementById("father_occupation").value;
    let userNameReg = /(^[a-zA-Z]+$)/;
    if(!userNameReg.test(fatherOccupation)){
        swal({
        text: "Invalid  Username!",
        icon: "warning",
    })
    return false;
    }
    let cnicNo = document.getElementById("cnic_no").value;
    let cnicReg =/^[0-9]{5}[0-9]{7}[0-9]{1}/;
    if(!cnicNo.match(cnicReg)){
        swal({
        text: "Invalid  CNIC No.!",
        icon: "warning",
    })
    return false;
    }
    let fatherCnicNo = document.getElementById("father_cnic_no").value;
    let numReg = /^((\+92)|(0092))-{0,1}\d{3}-{0,1}\d{7}$|^\d{11}$|^\d{4}-\d{7}/g;
    if(!fatherCnicNo.match(numReg)){
        swal({
        text: "Invalid  Phone No.!",
        icon: "warning",
    })
    return false;
    }
    let email = document.getElementById("email").value;
    let emailReg = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    if(!email.match(emailReg)){
        swal({
            text: "Invalid  email address!",
            icon: "warning",
        })
        return false;
    }
    let password = document.getElementById("password").value;
    let passwordReg =/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
    if(!password.match(passwordReg)){
        swal({
        text: "Invalid  Password.!",
        icon: "warning"
    })
    return false;
    }
    else{
        
          let name2 = firstName + lastName;
          let cnic2 = cnicNo;
          let email2 = email;
          let Phone2 = fatherCnicNo;
          let newArry = [name2,cnic2,Phone2,email2];
          arr.push(newArry);
          localStorage.setItem( "data_" + Math.random(),JSON.stringify(arr));
          swal({
            title: "Good job!",
            text: "Your form is successfully submitted ",
            icon: "success",
            button: "Ok!"
        }).then(function(){
            location.reload();
        })
          
 }
 
}
// function showData(){
//     for(let i = 0; i < Object.keys(localStorage).length; i++){
//         let getData = localStorage.getItem( Object.keys(localStorage)[i] )
//         let newData =  JSON.parse(getData)
//         console.log(newData);
//         for(let j of newData){
//             console.log(j);
          
//     }
// }
// }
// showData()
function loadAll() {

    var values = [],
        keys = Object.keys(localStorage),
        i = keys.length;
        console.log(keys)

    let index = 1
    for ( let i = 0; i < Object.keys(localStorage).length; i++) {

        let getData = localStorage.getItem( Object.keys(localStorage)[i] )
        let newData =  JSON.parse(getData)  
        
        let x = 0;
        for ( let x = 0; x < newData.length; x++ ) {
            
            let row = table.insertRow()
            let cell1 = row.insertCell()
            let cell2 = row.insertCell()
            let cell3 = row.insertCell()
            let cell4 = row.insertCell()
            let cell5 = row.insertCell()
            // let cell6 = row.insertCell()
            // let cell7 = row.insertCell()
            // let cell8 = row.insertCell()
            // let cell9 = row.insertCell()
            cell1.innerHTML =  index++;
            cell2.innerHTML = newData[x][0]
            cell3.innerHTML = newData[x][1]
            cell4.innerHTML = newData[x][2]
            cell5.innerHTML = newData[x][3]
            // cell6.innerHTML = newData[x][4]
            // cell7.innerHTML = newData[x][5]
            // cell8.innerHTML = newData[x][6]
            // cell9.innerHTML = newData[x][7]
        }
    }
}
loadAll();
document.getElementById("shows").style.display = "none"



function login(){
    let pass1 = document.getElementById("pass").value
    let username1 = document.getElementById("username").value
    let pass = "admin";
    let username = "admin"
    if( !username == username1){
        swal("Invalid username")
        
    }else if(!pass == pass1){
        swal("Invalid password")
    }else{
        window.location.href = "admin.html"
        
    }
}

