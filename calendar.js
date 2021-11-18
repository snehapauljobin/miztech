document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendar');
    var calendar = new FullCalendar.Calendar(calendarEl, {
        headerToolbar: {
            left: 'prev,next',
            center: 'title',
            right: 'dayGridWeek'
           
          },
          initialView: 'dayGridWeek'
          
    });
    calendar.render();
  });
