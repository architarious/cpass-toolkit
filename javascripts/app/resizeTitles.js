define(['jquery'], function($){

function resizeSegmentTitles(){
  //var titleSelector = "li.title h2";

  var baseWidth = 320;
  var baseFontSize = 67;

  var baseHeight = 480;  
  var baseLineHeight = 67;

  var baseVertMargin = 42;

  var gRatio = 1.618;



  //determins and returns a percentage value for ideal font-size vs screen width
  function getPercentageWidth(){ 
     var displayWidth = $(window).innerWidth();
     var percentageWidth = displayWidth / baseWidth;

      
     return percentageWidth;
  }
  //determins and returns a percentage value for ideal line-height vs screen height
  function getPercentageHeight(){
    var displayHeight = $(window).height();
    var percentageHeight = displayHeight / baseHeight;

      
    return percentageHeight;
  }

  //determins and returns a percentage value for the ideal vertical margins vs screen height
  function getPercentageVertMargin(){
    var displayHeight = $(window).height();
    var percentageVertMargin = displayHeight / baseVertMargin;

      
    return percentageVertMargin*0.1;
  }


  function resizeTitleAttributes(){
   

    var percentageHeight = getPercentageHeight();
    var newLineHeight = Math.floor(baseLineHeight * percentageHeight);    

    var percentageVertMargin = getPercentageVertMargin();
    var newVertMargin = Math.floor(baseVertMargin * percentageVertMargin) ;
 
    var percentageWidth = getPercentageWidth();
    var newFontSize = Math.floor(baseFontSize * percentageWidth) ;

    var fontCoefficient = (newFontSize/newLineHeight);

    var statementCounter =0;


   
    //where the magic happens
    if( fontCoefficient < 5){

     if( percentageWidth < percentageHeight){
      statementCounter =1;

        $(this).css("line-height", newLineHeight+"px");
        $(this).css("margin", newVertMargin+"px" + " auto");
        $(this).css("font-size", newFontSize+"px");
     
     }else if( Math.log(percentageWidth) >= percentageHeight){
      statementCounter =2;
        newFontSize = Math.max(Math.floor(baseFontSize * Math.log(percentageWidth) * gRatio) , 48);
        newLineHeight = Math.max(Math.floor(baseLineHeight * Math.log(percentageWidth) * gRatio), 49);  

        $(this).css("line-height", newLineHeight+"px");
        $(this).css("margin", newVertMargin+"px" + " auto");
        $(this).css("font-size", newFontSize+"px");
     }else if( percentageWidth/Math.log(percentageWidth) >= percentageHeight){
      statementCounter =3;
        newFontSize = Math.max(Math.floor(baseFontSize * Math.log(percentageWidth) * gRatio) , 48);
        newLineHeight = Math.max(Math.floor(baseLineHeight * Math.log(percentageWidth) * gRatio), 49);  
        newVertMargin = Math.floor(newVertMargin * gRatio);

        $(this).css("line-height", newLineHeight+"px");
        $(this).css("margin", newVertMargin+"px" + " auto");
        $(this).css("font-size", newFontSize+"px");
        
     }else {
      statementCounter =4;
        newLineHeight = Math.max(Math.floor(newLineHeight * gRatio), newFontSize);  

        $(this).css("line-height", newLineHeight+"px");
        $(this).css("margin", newVertMargin+"px" + " auto");
        $(this).css("font-size", newFontSize+"px");
     }//end else if


    }else if( fontCoefficient < 7){
      statementCounter =5;
        newLineHeight = Math.floor(baseLineHeight * percentageHeight *gRatio );  
        newFontSize = Math.floor(baseFontSize * Math.log(percentageWidth) *gRatio);

        $(this).css("line-height", newLineHeight+"px");
        $(this).css("margin", newVertMargin+"px" + " auto");
        $(this).css("font-size", newFontSize+"px");

    }else{
      statementCounter =6;
        $(this).css("line-height", 247+"px");
        $(this).css("margin", newVertMargin+"px" + " auto");
        $(this).css("font-size", 303+"px");
    }


    /*//Debug tools
    console.log("DisplayWidth: "+$(window).innerWidth()+"px");
    console.log("percentageWidth: "+getPercentageWidth()+"%");
    console.log("percentageWidthlog: "+Math.log(getPercentageWidth())+"%");
    console.log("DisplayHeight: "+$(window).height()+"px");
    console.log("PercentageHeight: "+getPercentageHeight()+"%");
    console.log("percentageHeightlog: "+Math.log(getPercentageHeight())+"%");
    console.log("percentageVertMargin: "+getPercentageVertMargin()*0.1+"%");
    console.log("font-size: "+newFontSize+"px");
    console.log("line-height: "+newLineHeight+"px");
    console.log("Vertical Margins: "+newVertMargin+"px");
    console.log("fontCoefficient: "+fontCoefficient);
    console.log("Statement Counter: "+statementCounter);
    */
  }//end resizeLineHeight()


  
 
  //Detects change in the viewport and runs the above function
  $(window).bind('resize', function()
    { resizeTitleAttributes(); }).trigger('resize');

  
}//end resizeTitles

});//end define call
