requirejs.config({
    //By default load any module IDs from js/lib
    baseUrl: '../javascripts/lib',
    //except, if the module ID starts with "app",
    //load it from the js/app directory. paths
    //config is relative to the baseUrl, and
    //never includes a ".js" extension since
    //the paths config could be for a directory.
  

    paths: {
        'page' : '../page',
        'app' : '../app',

        'jquery' :[
            '//ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min',
            //if the CDN location fails, load from:
            'jquery.min'
        ],

        // path to folder with individual bootstrap files 
        'bootstrap': 'bootstrap', 

        'bigTitles' : '../app/bigTitles', 
        'dropdown' : '../app/dropdown',
        'eq' : 'eq.min',
        'jquery-smoothScroll': 'jquery.smooth-scroll.min',
        //'smoothScroll' : '../app/smoothScroll', 
        //'utils' : '../app/utils',
        //'jquery-mobile' : 'jquery-mobile/jquery.mobile.custom.min',
    },
      shim: {
        'bootstrap/affix':      { deps: ['jquery'], exports: '$.fn.affix' }, 
        'bootstrap/alert':      { deps: ['jquery'], exports: '$.fn.alert' },
        'bootstrap/button':     { deps: ['jquery'], exports: '$.fn.button' },
        'bootstrap/carousel':   { deps: ['jquery'], exports: '$.fn.carousel' },
        'bootstrap/collapse':   { deps: ['jquery'], exports: '$.fn.collapse' },
        'bootstrap/dropdown':   { deps: ['jquery'], exports: '$.fn.dropdown' },
        'bootstrap/modal':      { deps: ['jquery'], exports: '$.fn.modal' },
        'bootstrap/popover':    { deps: ['jquery'], exports: '$.fn.popover' },
        'bootstrap/scrollspy':  { deps: ['jquery'], exports: '$.fn.scrollspy' },
        'bootstrap/tab':        { deps: ['jquery'], exports: '$.fn.tab'        },
        'bootstrap/tooltip':    { deps: ['jquery'], exports: '$.fn.tooltip' },
        'bootstrap/transition': { deps: ['jquery'], exports: '$.fn.transition' },
        'bigTitles' :           { deps: ['jquery'], exports: '$.fn.bigTitles'},
        'jquery-smoothScroll':  { deps: ['jquery']},
        //'smoothScroll' :        { deps: ['jquery'], exports: '$.fn.smoothScroll'},
        //'utils' :               { deps: ['jquery'], exports: '$.fn.utils'},
        //'jquery-mobile' :       { deps: ['jquery'], exports: '$.fn.utils'},
        'default' :             { deps: ['jquery', 'bigTitles', 'bootstrap/carousel', 'bootstrap/dropdown']}
    },
});

requirejs(['page/default']);
   
// Start the main app logic.
//requirejs(['jquery.min','app/affix','app/alert','app/button','app/carousel','app/collapse','app/dropdown','app/tab','app/transition','app/scrollspy','app/tooltip','app/modal','app/popover' ],
//function   ($,        affix,         alert,	     button,	  carousel,      collapse,      dropdown,      tab,      transition,      scrollspy,      tooltip,      modal,      popover) {
    //jQuery, canvas and the app/sub module are all
    //loaded and can be used here now.

   
  //      $('.collapse').collapse(); //bootstrap solution for navigation "navbar"
        //hamburger();  uncomment for mobile nav (if not using bootstrap)
    //    alert("hello world");
     
  
//});

  


