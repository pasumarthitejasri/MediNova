const doctorContainer = document.getElementById("doctorContainer");


const API = "https://medinova-b2p0.onrender.com/api/doctors";

.then(response => response.json())

.then(doctors => {

    console.log(doctors);


    doctors.forEach(doctor => {

        doctorContainer.innerHTML += `

        <div class="card">

            <h3>${doctor.name}</h3>

            <p>Department: ${doctor.department}</p>

            <p>Experience: ${doctor.experience}</p>

            <p>Available Time: ${doctor.availableTime}</p>

        </div>

        `;

    });

})


.catch(error => {

    console.log(error);

});
