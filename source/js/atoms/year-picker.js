$(document).ready(function(e) {
  var dateFormat = "yy-mm-dd";
  // ---------------------------------------------------------
  // Picker year function
  // ---------------------------------------------------------
  $(function() {
    var from = $(".type-date input#form")
        .datepicker({
          dateFormat: dateFormat,
          changeMonth: true,
          changeYear: true
        })
        .on("change", function() {
          to.datepicker(
            "option",
            "minDate",
            $.datepicker.parseDate(dateFormat, this.value)
          );
        }),
      to = $(".type-date input#to")
        .datepicker({
          dateFormat: dateFormat,
          changeMonth: true,
          changeYear: true
          
        })
        .on("change", function() {
          from.datepicker(
            "option",
            "maxDate",
            $.datepicker.parseDate(dateFormat, this.value)
          );
        });
  });
});

function addDisableRange(){
  document.getElementById('form').setAttribute('disabled', true);
  document.getElementById('to').setAttribute('disabled', true);
}

function removeDisableRange(){
  document.getElementById('form').removeAttribute('disabled'); 
  document.getElementById('to').removeAttribute('disabled');
}