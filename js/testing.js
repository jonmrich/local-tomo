 
//TO DO

//Pick place thing with here's your code
//pick styles (load the right css)
//code you've got? Need jquery or bootstrap?
//run locally? we can package it up for download.

//ready
jQueryCode = function(){
 function loadcss(url) {
     var head = document.getElementsByTagName('head')[0],
         link = document.createElement('link');
     link.type = 'text/css';
     link.rel = 'stylesheet';
     link.href = url;
     head.appendChild(link);
     return link;
 }
 //loadcss('https://immense-brook-56331.herokuapp.com/css/styles.css');
 jQuery(document).ready(function($) {

     $('.tomo').each(function() {
         var tomoClass = $(this).prop("classList");
         var firstClass = tomoClass[1];
         var split = firstClass.split("-");
         var currId = split[0];
         var pickedStyle = split[1];
         console.log(pickedStyle)
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
                 $('.' + firstClass).empty();
                 if (pickedStyle == "full") {
                        if (mainData.images[0]){
                     var imgLoc = mainData.images[0].image_url;
                    var imgUrl ='<img src="' + imgLoc + '">';
                 }
                 else {
                    var imgUrl ="NO IMAGE AVAILABLE";
                }
                     $('.' + firstClass).append('<div class="placeName"><h3>' + mainData.name + '</h3></div><div class="placeDescription">' + mainData.description + '</div><div class="placeImage">'+imgUrl+'</div><div class="tomoAttribution">Powered by <a href="https://tomo.co">Tomo</a></div>');
                 } else if (pickedStyle == "lite") {
                     $('.' + firstClass).append('<div class="placeName"><h3>' + mainData.name + '</h3></div><div class="placeDescription">' + mainData.description + '</div><div class="tomoAttribution">Powered by <a href="https://tomo.co">Tomo</a></div>');
                 } else if (pickedStyle == "imgs") {
                     if (mainData.images[0]) {
                         var imgUrl1 = mainData.images[0].sizes.square.url;
                     }
                     if (mainData.images[1]) {
                         var imgUrl2 = mainData.images[1].sizes.square.url;
                     }
                     if (mainData.images[2]) {
                         var imgUrl3 = mainData.images[2].sizes.square.url;
                     }
                     $('.' + firstClass).append('<div class="placeName"><h3>' + mainData.name + '</h3></div><div class="placeImage"><img class="imgBuff" src="' + imgUrl1 + '"><img class="imgBuff" src="' + imgUrl2 + '"><img class="imgBuff" src="' + imgUrl3 + '"></div><div class="tomoAttribution">Powered by <a href="https://tomo.co">Tomo</a></div>');
                 }
             }
         });
     });
 }); 
 }

 if(window.jQuery)  jQueryCode();
 else{   
     var script = document.createElement('script'); 
     document.head.appendChild(script);  
     script.type = 'text/javascript';
     script.src = "//ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js";

     script.onload = jQueryCode;
 }