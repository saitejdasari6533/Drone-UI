// script.js
document.getElementById('emergency-abort').addEventListener('click', function() {
    alert('Emergency Abort Initiated!');
    // In a real application, this would trigger the drone's emergency landing procedure.
});

// Function to simulate updating drone data
function updateDroneData() {
    document.getElementById('altitude').innerText = Math.floor(Math.random() * 100) + ' m';
    document.getElementById('cubesat-health').innerText = Math.random() > 0.5 ? 'Good' : 'Warning';
    document.getElementById('obstacle-detection').innerText = Math.random() > 0.5 ? 'None' : 'Detected';
    document.getElementById('battery').innerText = Math.floor(Math.random() * 100) + '%';
    // In a real application, you would fetch this data from the drone.
}

// Update drone data every 5 seconds (for demonstration purposes)
setInterval(updateDroneData, 5000);

// Initial data update
updateDroneData();
