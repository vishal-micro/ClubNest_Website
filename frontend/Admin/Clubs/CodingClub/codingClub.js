//alert("robotics js is working")
document.addEventListener('DOMContentLoaded', () => {
    // Fetch data from the API
    fetch('http://localhost:3000/coding-club') // Replace with your actual API endpoint
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            // Render the data in the HTML
            renderEventData(data);
           console.log(data)
        })
        .catch(error => {
            console.error('Error:', error.message);
        });
  
    // Function to render event data
    function renderEventData(data) {
        console.log("g");
        const eventListDiv = document.getElementById('eventList');
  
        // Check if data is available
        if (data.length === 0) {
            eventListDiv.innerHTML = '<p>No events available</p>';
            return;
        }
  
        // Create an HTML list to display the events
        const eventList = document.createElement('ul');
  
        // Iterate through the data and create list items
        data.forEach(event => {
            const listItem = document.createElement('li');
            const farItem = document.createElement('img');
  
            farItem.src=`../../backend/club_images/${event.Upload_image}club_.jpeg`;
            listItem.innerHTML = `
                <strong>${event.name_of_events}</strong><br>
                Host Institute: ${event.name_of_host_department}<br>
                Participants: ${event.no_of_student_of_participated_in_event}<br>
                Date: ${event.Date_of_event_start}<br>
                Date: ${event.Date_of_event_end}<br>
                Prizes: ${event.Price_Certification}<br>
                Venue: ${event.Venue}<br>
                Speaker: ${event.Speaker}<br>
                Objective: ${event.Objective}<br><br>
            `;
            eventList.appendChild(listItem);
            eventList.appendChild(farItem);
        });
  
        // Append the list to the container
        eventListDiv.appendChild(eventList);
        console.log("Hello World")
    }
  });
  