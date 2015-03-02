function hamburger(){

  var active = false;

  $("#navWrapper").addClass("js").before('<div id="hamburger"></div>');

  $("#hamburger").click(function(){
     $("#navWrapper").toggle();

      if(!active){
        active = true;         
         $("#hamburger").toggleClass("active");          
      }else{
        if(active){            
          $("#hamburger").toggleClass("active");    

        }
      }
  });//end #hamburger.click

  $("#navWrapper > ul > li > a").click(function(){
     $("#hamburger").toggleClass("active");
     $("#navWrapper").toggle();

  });//end primary_nav > a .click

  $(window).resize(function(){
      if(window.innerWidth > 768){
        $("#navWrapper").removeAttr("style");
      }
  });//end window.resize
}//end hamburger