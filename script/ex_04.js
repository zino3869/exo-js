window.onload = function() {
    var foot = document.getElementsByTagName('footer')[0].getElementsByTagName('div')[0];
    var str = "";

    document.addEventListener('keydown', function(e) {
        str = str + (e.key);
        foot.innerHTML = str.slice(-42);
    });
};