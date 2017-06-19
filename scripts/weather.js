$(function(){

    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(function (position){
            var loong = position.coords.longitude;
            var lat = position.coords.latitude;
            console.log(loong);
            console.log(lat);
            $.getJSON('http://api.openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+loong+'&appid=b395284605d107a3cdd248d0ab3bef53',function(response){
            console.log(response);
            console.log(response.main.temp);
            console.log(response.name);
            console.log(response.weather[0].description);
            $('#deg').html(Math.ceil(response.main.temp));
            $('#cloud').html(response.name);
            $('#location').html(response.weather[0].description);
        });
        })
        
    }
    

    var fahrenheit = true;

   $('#degree').click(function() {
       var x = Number($('#deg').html());
       console.log(x);
       if (fahrenheit == true) {
           console.log('you');
        var newCelcius = cel(x);
        $('#deg').html(newCelcius);
        $('#degree').html('&deg;C')
        fahrenheit = false;
  } else {
      console.log('me');
      var newFahrenheit = fah(x);
      $('#deg').html(newFahrenheit);
      $('#degree').html('&deg;F');
      fahrenheit = true;
  }
        
   })

   $('#degree').click(function(){

   })

    function fah(c){
        var c,f;
        f = c * 1.8 + 32;
        return f
    }

    function cel(f){
        var f,c;
     c = (f-32)*(5/9);
     return c
    }

    


})