const doctorContainer = document.getElementById("doctorContainer");


fetch("http://localhost:5000/api/doctors")

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