

(function(){
	vald.addEventListener("click",TesterAge,false);
	age.addEventListener("keypress", function(event)
	 {
		                             if(event.keyCode===13)
									 {
									   
									   document.getElementById("vald").click();
									 }
	});
}());
	

 
function TesterAge(){

     var ageUser=document.getElementById("age");
     var  ageUserY=parseInt(ageUser.value);
	    
if( ageUserY < 18 &&  ageUserY > 0 ) 
	{
		    alert("Le programme est reservée aux personnes majeurs")
 
     }
	 else 
	 {		 
	    if( ageUserY >= 18 && ageUserY <=26)               
		   
		  {
               alert("vous avez un statut jeune")
          }

		 else 
		  {
	        if( ageUserY >= 27 &&  ageUserY <= 65) 
		     {
				alert("vous avez un statut adulte")

             }
				else
				{					
                   if( ageUserY > 65 &&  ageUserY <= 120 ) 
			           {
							alert("Le programme n'est pas reservée aux personnes retraités")
						}     
					else 
					{						
				
				            {
								alert("Vous vous etes  trompés dans votre saisie")
							}

					}
				}
		  }
	 }
 };
