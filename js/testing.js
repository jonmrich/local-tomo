
var tpcId;


   $(document).ready(function() {
	$('.12345').append("hello");
	$('.67890').append("goodbye");
	var currClasses = $(".tomo").prop("classList");
	tpcId = currClasses[1];

	  $.ajax({
            url: 'https://immense-brook-56331.herokuapp.com/php/fetch.php',
            type: 'POST',
            dataType: '',
            data: {
                callParam: ['GET','canonical_places/',tpcId,'full']
            },
            success: function(data) {
            	console.log(data)
            }
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