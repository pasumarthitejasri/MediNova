const API = "http://localhost:5000/api";


// REGISTER

async function register(){

let user = {

name: document.getElementById("name").value,

email: document.getElementById("email").value,

phone: document.getElementById("phone").value,

age: document.getElementById("age").value,

gender: document.getElementById("gender").value,

password: document.getElementById("password").value

};


let response = await fetch(`${API}/users/register`,{

method:"POST",

headers:{
"Content-Type":"application/json"
},

body:JSON.stringify(user)

});


let data = await response.json();


alert(data.message);


window.location.href="login.html";


}




// LOGIN

async function login(){


let user={

email:document.getElementById("loginEmail").value,

password:document.getElementById("loginPassword").value

};


let response = await fetch(`${API}/users/login`,{

method:"POST",

headers:{
"Content-Type":"application/json"
},

body:JSON.stringify(user)

});


let data = await response.json();



if(response.ok){

alert("Login Successful");

window.location.href="dashboard.html";

}

else{

alert(data.message);

}


}




// BOOK APPOINTMENT

async function bookAppointment(){


let appointment={


doctor:document.getElementById("doctor").value,

department:document.getElementById("department").value,

date:document.getElementById("date").value,

time:document.getElementById("time").value,

reason:document.getElementById("reason").value


};



let response = await fetch(`${API}/appointments/book`,{


method:"POST",

headers:{
"Content-Type":"application/json"
},

body:JSON.stringify(appointment)


});



let data = await response.json();


alert(data.message);


displayAppointments();


}





// DISPLAY APPOINTMENTS

async function displayAppointments(){


let response = await fetch(`${API}/appointments`);


let appointments = await response.json();



let list=document.getElementById("appointmentList");


if(!list)
return;


list.innerHTML="";


appointments.forEach((a)=>{


list.innerHTML += `

<div class="appointment-card">

<h3>${a.doctor}</h3>

<p>${a.department}</p>

<p>${a.date}</p>

<p>${a.time}</p>

<p>${a.reason}</p>

</div>

`;

});


}



window.onload=function(){

displayAppointments();

}