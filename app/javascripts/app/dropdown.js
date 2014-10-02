function dropdown(){
  

  $("#drop > li > h3").click( function(event){
     
    //determine if this element or other elements have been selected yet, 
    //if-so: hide them
    if($(this).parent().hasClass('selected')){
      $("#drop > .selected > .details").slideUp(750);
      $("#drop > .selected").removeClass("selected");
    }else{
      $("#drop > .selected > .details").slideUp(750);
      $("#drop > .selected").removeClass("selected");

      //determine if there is ".details" is a sibling of this element
      //if-so: display it
      if($(this).parent().children(".details")){
        $(this).parent().addClass("selected");
        $(this).parent().children(".details").slideDown(1000);
      }//end if
    }//end if-else
    
    //prevent parents from being notified of an event              
    event.stopPropagation();  
  });//end initial click function

  
}