const form =
document.getElementById("appointmentForm");


form.addEventListener("submit", async(e)=>{


e.preventDefault();



const appointment={


doctor:
document.getElementById("doctor").value,


department:
document.getElementById("department").value,


date:
document.getElementById("date").value,


time:
document.getElementById("time").value,


reason:
document.getElementById("reason").value


};



const response = await fetch(
"https://medinova-b2p0.onrender.com/api/appointments",
{

method:"POST",

headers:{
"Content-Type":"application/json"
},

body:JSON.stringify(appointment)

}

);



const data = await response.json();


alert(data.message);


form.reset();


});
