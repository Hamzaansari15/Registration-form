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
    let cnicReg =/^[0-9]{5}-[-|]-[0-9]{7}-[-|]-[0-9]{1}/;
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
        icon: "warning",
    })
    return false;
    }
}
// var firstName = document.getElementById("first_name").value;
// console.log(firstName);
// function register() {


//     let firstName = document.getElementById("first_name").value;
//     let nameReg =   /(^[a-zA-Z]+$)/
//     if(!firstName.match(nameReg)){
//         swal("Invalid first name")
//         return false
//     }
    
//     let fatherName = document.getElementById("father_name").value;
//     if(!fatherName.match(nameReg)){
//         swal("Invalid Last name")
//         return false
//     }
//     let gender = document.getElementById("gender").value;
//     if(!gender.match(nameReg)){
//         swal("Invalid gender name")
//         return false
//     }
//     let age = document.getElementById("age").value;
//     let ageReg = /^(\+?\d{1,3}|\d{1,4})$/
//     if(!age.match(ageReg)){
//         swal("Invalid country age")
//         return false
//     }
//     let number = document.getElementById("number").value;
//     let numReg = /^((\+92)|(0092))-{0,1}\d{3}-{0,1}\d{7}$|^\d{11}$|^\d{4}-\d{7}/g
//     if(!number.match(numReg)){
//         swal("Invalid Phone number")
//         return false
//     }
//     let email = document.getElementById("email").value;
//     let emailReg = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g
//     if(!email.match(emailReg)){
//         swal("Invalid email")
//         return false
//     }
//     let country = document.getElementById("country").value;
//     if(!country.match(nameReg)){
//         swal("Invalid country name")
//         return false
//     }
//     let city = document.getElementById("city").value;
//     if(!city.match(nameReg)){
//         swal("Invalid city name")
//         return false
//     }else{
//         let name2 = name
//         let fathername2 = fathername
//         let gender2 = gender
//         let age2 = age
//         let number2 = number
//         let email2 = email
//         let country2 = country
//         let city2 = city
//         let newArry =[name2,fathername2,gender2,age2,number2,email2,country2,city2] 
//         console.log(newArry)
//         arr.push(newArry);
//         localStorage.setItem("data",JSON.stringify(arr)) 

//     }
//     swal("Registration Successful", "Your subscription is Successfully done!", "success"); 
// }   
    

