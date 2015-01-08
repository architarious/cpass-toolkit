function dropdown(){
  

  $(".more").click( function(event){
     
    //determine if this element or other elements have been selected yet, 
    //if-so: hide them
    if($(".long-menu").hasClass('selected')){
      $(".long-menu").slideUp(750);
      $(".long-menu").removeClass("selected");
    }else{
      $(".long-menu").slideUp(750);
      $(".long-menu ").removeClass("selected");

      //determine if there is ".details" is a sibling of this element
      //if-so: display it
      if($(".long-menu")){
        $(this).parent().addClass("selected");
        $(this).parent().children(".long-menu").slideDown(1000);
      }//end if
    }//end if-else
    
    //prevent parents from being notified of an event              
    event.stopPropagation();  
  });//end initial click function

  
}