(function(){
    if(window.location.href.indexOf('localhost:5557/ui') == -1) return;

    if (window.chrome && !window.chrome.cast) {
    
        var script = document.createElement('script');
        script.src = 'https://www.gstatic.com/cv/js/sender/v1/cast_sender.js?loadCastFramework=1';
        document.head.appendChild(script);

        console.log("Videostream has been patched");
    }
}());