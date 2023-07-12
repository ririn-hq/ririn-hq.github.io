var timelineData = []; // Store timeline events

function addTimelineEvent(date, name, description) {
  var event = {
    date: date,
    name: name,
    description: description
  };
  timelineData.unshift(event); // Add the event to the beginning of the array
  displayTimeline();
}

function displayTimeline() {
  var timelineElement = document.getElementById('timeline');
  timelineElement.innerHTML = '';
  for (var i = 0; i < timelineData.length; i++) {
    var event = timelineData[i];
    var item = document.createElement('div');
    item.classList.add('timeline-item');
    item.innerHTML = '<h3>' + event.name + '</h3><div class="description">' + event.description + '</div>';
    item.addEventListener('click', toggleDescription);
    timelineElement.appendChild(item);
  }
}

function toggleDescription() {
  this.classList.toggle('expanded');
}

// Example events
addTimelineEvent('2023-07-01', 'Event 1', 'Description of Event 1');
addTimelineEvent('2023-07-05', 'Event 2', 'Description of Event 2');
