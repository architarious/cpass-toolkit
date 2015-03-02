function bookmarker(){
     $(function() {
        $(".bookmark").click(function() {
            // Mozilla Firefox Bookmark
            if ('sidebar' in window && 'addPanel' in window.sidebar) { 
                window.sidebar.addPanel(location.href,document.title,"");
            } else if( /*@cc_on!@*/false) { // IE Favorite
                window.external.AddFavorite(location.href,document.title); 
            } else { // webkit - safari/chrome
                alert('Press ' + (navigator.userAgent.toLowerCase().indexOf('mac') != - 1 ? 'Command/Cmd' : 'CTRL') + ' + D to bookmark this page.');
            }
        });
    });
}


function tweet(){
!function(d,s,id){
    var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';
    
    if(!d.getElementById(id)){
        js=d.createElement(s);
        js.id=id;js.src=p+'://platform.twitter.com/widgets.js';
        fjs.parentNode.insertBefore(js,fjs);
    }
}
(document, 'script', 'twitter-wjs');

}


function facebook_share(){
    var theHref = window.location.href;
    var theTitle = document.title;

   $('a.fb__share').attr("href", "https://www.facebook.com/sharer/sharer.php?"+theHref);
}


function popup(){
    $('a.popup').click(function(event){
        event.preventDefault();
        window.open($(this).attr('href'), "popupWindow", 'height=350, width=600');
        
    });
}





/**
function fbshare(){
  (function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.0";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));
}
function fbs_click()
{
    u=location.href;t=document.title;window.open
        ('http://www.facebook.com/sharer.php?u='
            +encodeURIComponent(u)
            +'&t='+encodeURIComponent(t),
            'sharer',
            'toolbar=0, status=0, width=626,height=436'
            );
    return false;
    https://www.facebook.com/sharer/sharer.php?
}**/