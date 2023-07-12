function submitEvent() {
  var eventDate = document.getElementById('event-date').value;
  var eventName = document.getElementById('event-name').value;
  var eventDescription = document.getElementById('event-description').value;

  // Send the event data to the other dynamic web page
  // You can use AJAX, fetch, or other methods to send the data to the server or update the other page's timeline dynamically.
  // This example only shows an alert with the event data.
  alert('Event Date: ' + eventDate + '\nEvent Name: ' + eventName + '\nEvent Description: ' + eventDescription);

  // Clear the form fields
  document.getElementById('event-form').reset();
}
