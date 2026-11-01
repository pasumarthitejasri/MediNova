const container =
document.getElementById("appointmentContainer");



async function loadAppointments(){


    const response = await fetch(
        "http://localhost:5000/api/appointments"
    );


    const appointments =
    await response.json();



    appointments.forEach((appointment)=>{


        const card =
        document.createElement("div");


        card.className="card";


        card.innerHTML = `

        <h3>${appointment.doctor}</h3>

        <p>
        Department:
        ${appointment.department}
        </p>


        <p>
        Date:
        ${appointment.date}
        </p>


        <p>
        Time:
        ${appointment.time}
        </p>


        <p>
        Reason:
        ${appointment.reason}
        </p>


        <p>
        Status:
        Pending
        </p>

        `;


        container.appendChild(card);


    });


}


loadAppointments();