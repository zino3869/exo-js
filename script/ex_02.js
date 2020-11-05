var cnt=0;
function CountFun(){
    cnt=parseInt(cnt)+parseInt(1);
    var divData=document.getElementsByTagName("footer")[0];
    divData.childNodes[1].addEventListener('click', function(){
        cnt++
        var divData=document.getElementsByTagName("footer")[0];
        divData.childNodes[1].innerHTML=cnt;
    });
}
CountFun()