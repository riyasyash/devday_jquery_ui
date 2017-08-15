$(function(){

  console.log("loaded");
   $.get("http://localhost:8000/events",function(data, status){
        console.log(data);
    });
    console.log("loaded");
  $("#sample").click(function(){
    $("button").hide();
});

});
