$(document).ready(function(){
    $('[data-toggle="popover"]').popover();

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


// function openNav(){
// 	document.getElementById("mysidebar2").style.opacity = "1";
// 	document.getElementById("mysidebar2").style.width = "250px";
	
// }
// function closeNav(){
// 	document.getElementById("mysidebar2").style.opacity = "0";
// 	document.getElementById("mysidebar2").style.width = "0px";
	
// }

// function placeH(){
	
// 	document.getElementsByName("search")[0].placeholder="Name, email or phone number";
// 	document.getElementById("close11").style.opacity = "1";
// }