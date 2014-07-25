requirejs.config({
    //By default load any module IDs from js/lib
    baseUrl: '../js/lib',
    //except, if the module ID starts with "app",
    //load it from the js/app directory. paths
    //config is relative to the baseUrl, and
    //never includes a ".js" extension since
    //the paths config could be for a directory.
    paths: {
        app: '../app'
    }
});

// Start the main app logic.
requirejs(['jquery','app/affix','app/alert','app/button','app/carousel','app/collapse','app/dropdown','app/tab','app/transition','app/scrollspy','app/tooltip','app/modal','app/popover' ],
function   ($,        affix,         alert,	     button,	  carousel,      collapse,      dropdown,      tab,      transition,      scrollspy,      tooltip,      modal,      popover) {
    //jQuery, canvas and the app/sub module are all
    //loaded and can be used here now.

    $(function() {
        $('.collapse').collapse(); //bootstrap solution for navigation "navbar"
        //hamburger();  uncomment for mobile nav (if not using bootstrap)
    });
  
});

function hamburger(){

  var active = false;

  $("#navWrapper").addClass("js").before('<a id="hamburger" href="#">Menu</a>');
  
  $('#hamburger').click(function(){
        if($(this).next().css('display')=='block'){
            $(this).next().slideUp();
        }else{
            $(this).next().slideDown();
        }
    return false;
    });


}//end hamburger
  


