function exo3(){
    var divData=document.getElementsByTagName("footer")[0],
        div = divData.querySelector('div')
    divData.childNodes[1].addEventListener('click', function(){
        let rep = prompt("What's your name")
        while (rep === null || rep === "") {
            rep = prompt("What's your name")
        }
        if (rep !== null || rep !== "") {
            var txt;
            var r = confirm("Are you sure that "+rep+" is your name ?");
            if (r === true) {
                alert("Hello "+rep+" !");
                div.innerHTML += `Hello ${rep} !`;
            }
        }
    });
}
exo3();