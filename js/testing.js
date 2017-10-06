 function loadcss(url) {
     var head = document.getElementsByTagName('head')[0],
         link = document.createElement('link');
     link.type = 'text/css';
     link.rel = 'stylesheet';
     link.href = url;
     head.appendChild(link);
     return link;
 }
 loadcss('https://immense-brook-56331.herokuapp.com/css/styles.css');
 $(document).ready(function() {
     $('.tomofull').each(function() {
         var currClasses = $(this).prop("classList");
         var currId = currClasses[1];
         $.ajax({
             url: 'https://immense-brook-56331.herokuapp.com/php/fetch.php',
             type: 'POST',
             dataType: '',
             data: {
                 callParam: ['GET', 'canonical_places/', currId, 'full']
             },
             success: function(data) {
                 var parsed = $.parseJSON(data);
                 mainData = parsed.data;
                 $('.' + currId).empty();
                 var imgUrl = mainData.images[0].image_url;
                 $('.' + currId).append('<div class="placeName"><h3>' + mainData.name + '</h3></div><div class="placeDescription">' + mainData.description + '</div><div class="placeImage"><img src="' + imgUrl + '"></div><div class="tomoAttribution">Powered by <a href="https://tomo.co">Tomo</a></div>');
             }
         });
     });
     $('.tomolite').each(function() {
         var currClasses = $(this).prop("classList");
         var currId = currClasses[1];
         $.ajax({
             url: 'https://immense-brook-56331.herokuapp.com/php/fetch.php',
             type: 'POST',
             dataType: 'JSON',
             data: {
                 callParam: ['GET', 'canonical_places/', currId, 'full']
             },
             success: function(data) {
                // var parsed = $.parseJSON(data);
                 mainData = data.data;
                 $('.' + currId).empty();
                 var imgUrl = mainData.images[0].image_url;
                 $('.' + currId).append('<div class="placeName"><h3>' + mainData.name + '</h3></div><div class="placeImage"><img src="' + imgUrl + '"></div><div class="tomoAttribution">Powered by <a href="https://tomo.co">Tomo</a></div>');
             }
         });
     });
       $('.tomoimg').each(function() {
         var currClasses = $(this).prop("classList");
         var currId = currClasses[1];
         $.ajax({
             url: 'https://immense-brook-56331.herokuapp.com/php/fetch.php',
             type: 'POST',
             dataType: 'JSON',
             data: {
                 callParam: ['GET', 'canonical_places/', currId, 'full']
             },
             success: function(data) {
                // var parsed = $.parseJSON(data);
                 mainData = data.data;
                 $('.' + currId).empty();
                 if(mainData.images[0]){
                 var imgUrl1 = mainData.images[0].image_url;

                 }
                 if(mainData.images[1]){
                 var imgUrl2 = mainData.images[1].image_url;

                 }
                 if(mainData.images[2]){
                 var imgUrl3 = mainData.images[2].image_url;
console.log("hi")
                 }

                 $('.' + currId).append('<div class="placeName"><h3>' + mainData.name + '</h3></div><div class="placeImage"><img class="imgBuff" src="' + imgUrl1 + '"><img class="imgBuff" src="' + imgUrl2 + '"><img class="imgBuff" src="' + imgUrl3 + '"></div><div class="tomoAttribution">Powered by <a href="https://tomo.co">Tomo</a></div>');
             }
         });
     });
 });//ready
 /*jQueryCode = function(){

 }

 if(window.jQuery)  jQueryCode();
 else{   
     var script = document.createElement('script'); 
     document.head.appendChild(script);  
     script.type = 'text/javascript';
     script.src = "//ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js";

     script.onload = jQueryCode;
 }*/