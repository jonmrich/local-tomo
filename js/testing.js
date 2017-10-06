 /**
 * Loads a CSS file from the supplied URL
 * @param {String} url    The URL of the CSS file, if its relative
                          it will be to the current page's url
 * @return {HTMLElement}  The <link> which was appended to the <head>
 */

   var head = document.getElementsByTagName('head')[0],
   link = document.createElement('link');
   link.type = 'text/css';
   link.rel = 'stylesheet';
   link.href = 'https://immense-brook-56331.herokuapp.com/css/styles.css';
   head.appendChild(link);
   return link;
 
 
 

   $(document).ready(function() {

   $('.tomo').each(function () {

      var currClasses = $(this).prop("classList");
      console.log(currClasses)
	 var currId = currClasses[1];

	  $.ajax({
            url: 'https://immense-brook-56331.herokuapp.com/php/fetch.php',
            type: 'POST',
            dataType: '',
            data: {
                callParam: ['GET','canonical_places/',currId,'full']
            },
            success: function(data) {

            	var parsed = $.parseJSON(data);
                mainData = parsed.data;
                $('.'+currId).empty(); 
                var imgUrl = mainData.images[0].image_url;
              
            $('.'+currId).append('<div class="placeName">'+mainData.name+'</div><div class="placeDescription">'+mainData.description+'</div><div class="placeImage"><img src="'+imgUrl+'"></div><div class="tomoAttribution">Powered by <a href="https://tomo.co">Tomo</a></div>');
       
            }
        });
});
});




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