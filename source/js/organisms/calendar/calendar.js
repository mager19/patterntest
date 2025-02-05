jQuery(document).ready(function() {

    var closedialog;

    function overlayclickclose() {
        if (closedialog) {
            jQuery('#dialog').dialog('close');
        }

        //set to one because click on dialog box sets to zero
        closedialog = 1;
    }

    jQuery("#dialog").dialog({
        autoOpen: false,
        modal: false,
        resizable: false,
        draggable: false,
        open: function() {
            closedialog = 1;
            jQuery(document).bind('click', overlayclickclose);
        },
        focus: function() {
            closedialog = 0;
        },
        close: function() {
            jQuery(document).unbind('click');
        }
    });

    jQuery('#calendar').fullCalendar({
        header: {
            left: 'prev, next, title',
            center: '',
            right: 'agendaDay, agendaWeek, month'
        },
        defaultDate: '2016-10-27',
        views: {
          day: {
            columnFormat: 'dddd D',
            minTime: '07:00',
            maxTime: '21:00',
          },
          week: {
            columnFormat: 'ddd D',
            minTime: '07:00',
            maxTime: '21:00',
          }
        },
        slotLabelFormat: 'HH:mm',
        allDaySlot: false,
        navLinks: true, // can click day/week names to navigate views
        editable: false,
        eventLimit: true, // allow "more" link when too many events,*/
        events: [{"title":"Evento 2","start":"2016-10-27T14:30:00","place":"Cualquiera!!!","hour":"14:30","url_event":"http:\/\/externado.sim\/evento\/evento-2\/"},{"title":"Evento 3","start":"2016-10-08T04:02:00","place":"El lugar mi pay","hour":"04:02","url_event":"http:\/\/externado.sim\/evento\/evento-3\/"},{"title":"Evento 1","start":"2016-10-15T07:40:00","place":"El lugar del evento es mi casa","hour":"07:40","url_event":"http:\/\/externado.sim\/evento\/evento-1\/"},{"title":"Programa Internacional en Alta Gerencia en Administraci\u00f3n de Intangibles: la nueva visi\u00f3n del siglo XXI","start":"2016-10-20T08:45:00","end":"2016-10-22","place":"Calle 21 No. 9-50 Casa Hijas de la Iglesia","hour":"08:45","url_event":"http:\/\/externado.sim\/evento\/programa-internacional-alta-gerencia-administracion-intangibles-la-nueva-vision-del-siglo-xxi\/"},{"title":"Desaf\u00edos y Perspectivas del Derecho Comercial","start":"2016-10-17T08:30:00","end":"2016-10-20","place":"Calle 21 No. 9-50 Casa Hijas de la Iglesia","hour":"08:30","url_event":"http:\/\/externado.sim\/evento\/desafios-perspectivas-del-derecho-comercial\/"},{"title":"Figura Mundial de la prospectiva estrat\u00e9gica, visitar\u00e1 el Externado","start":"2016-10-26T08:30:00","end":"2016-10-26","place":"Calle 21 No. 9-50 Casa Hijas de la Iglesia","hour":"08:30","url_event":"http:\/\/externado.sim\/evento\/figura-mundial-la-prospectiva-estrategica-visitara-externado\/"},{"title":"Seminario C\u00f3digo General del Proceso","start":"2016-10-27T08:30:00","place":"Calle 21 No. 9-50 Casa Hijas de la Iglesia","hour":"08:30","url_event":"http:\/\/externado.sim\/evento\/seminario-codigo-general-del-proceso\/"},{"title":"Evento 4","start":"2016-10-27T05:05:00","place":"Este es el lugar","hour":"05:05","url_event":"http:\/\/externado.sim\/evento\/evento-4\/"}],
        eventClick: function(calEvent, jsEvent, view) {
          jQuery("#title").html(calEvent.title);
            jQuery("#hour").html(calEvent.hour);
            jQuery("#place").html(calEvent.place);
            jQuery('#dialog .moreButton').remove();
            jQuery("#dialog").append('<a href="'+calEvent.url_event+'" class="moreButton">Ver más</a>')
          if(view.name == 'month' || view.name == 'agendaWeek'){
            if(jQuery(window).width() < 950) {
               //jQuery('#dialog').dialog("option", "position", "center").dialog('open');
               jQuery('#dialog').dialog("option", "position", {my: "center", at: "center", of: window}).dialog('open');
            }
            else {
              jQuery('#dialog').dialog("option", "position", {
                at: "right top",
                of: this // this refers to the cliked element
              }).dialog("open");
            }

          }
          else if(view.name == 'agendaDay'){
            jQuery('#dialog').dialog("option", "position", {my: "center", at: "center", of: this}).dialog('open');
          }
          closedialog = 0;
        }


    });

});
