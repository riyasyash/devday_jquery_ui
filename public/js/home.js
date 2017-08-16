
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
  $('#events').append('<div class="card" style="width: 20rem;"><img class="card-img-top" src="" alt="image"><div class="card-block"><h4 class="card-title">'+v.title+'</h4><p class="card-text">'+v.description+'</p><a href="'+v.meetup_link+'" class="btn btn-primary">Register</a></div></div>');
  });
}

});
