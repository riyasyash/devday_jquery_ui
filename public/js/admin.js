
$(function(){


//get events list
$.ajax({
  "url": "http://localhost:8000/events",
  "method": "GET",
  success: function(result){
    display_events_as_cards(result);
  }
});

function display_events_as_cards(results){
  $.each(results, function(k,v){
  $('#list').append('<li><img src="https://static.pexels.com/photos/356056/pexels-photo-356056.jpeg" width="70px" height="70px"/><h3 class="name">'+v.title+'</h3><p class="born">'+v.description+'</p></li>');
  });
}

});
