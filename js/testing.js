

jQueryCode = function(){
   $(document).ready(function() {
	$('.12345').append("hello");
	$('.67890').append("goodbye");

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