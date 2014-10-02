function stickNav()
{
  var fixed = false;

$(document).scroll(function() {
    if( $(this).scrollTop() >= 72 ) {
        if( !fixed ) {
            fixed = true;
            
            $('.header').addClass("stickNav");         

        }
    } else {
        if( $(this).scrollTop() <= 71  ) {
            if(fixed){
            fixed = false;
            
            $('.header').removeClass("stickNav"); }
        }// end else if for fixed deteriminant
   
    }//end if .scrollTop >= 72

    
});//end document.scroll

}//end stickNav