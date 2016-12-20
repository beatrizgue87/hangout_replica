$(document).ready(function(){
    //To do..... $('[data-toggle="popover"]').popover();

    //Search WhiteDiv

    $("#s").on("click", function(){
    	  event.stopPropagation();

    	$(this).attr("placeholder", "Name, email or phone number");
    	$("#close11").fadeIn('fast');    	
    	
    });

    $("#generalContent").on("click", function(){

    	if ($("#close11").is(":visible")) {    		
    		$("#s").attr("placeholder", "New conversation");
    		$("#close11").fadeOut('fast');
    		
    	};
    	if ($("#mysidebar2").is(":visible")) {    		
    		$("#mysidebar2").hide();	   		
    		
    	};

    });

    //Sidebar 2

    $("#toggleSide").on("click", function(){
    	  event.stopPropagation();
    	$("#mysidebar2").show();	
    	
    }); 
    	  
      
});


