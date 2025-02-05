var changeView = function(date) {
  jQuery('#calendar').fullCalendar('gotoDate', date);
  jQuery('#calendar').fullCalendar('changeView', "agendaDay");
};



