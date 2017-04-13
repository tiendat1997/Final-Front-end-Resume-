// scrolling to top
var toTop;
var count = 1;
function moveTop(){
    toTop = document.body.scrollTop;

        count = 1 + 1/(count++);


        var scrollTop = setTimeout(function(){
            timeOutTop(toTop)}, count);


}
function timeOutTop(){
        window.scrollBy(0, -60);

        if (toTop > 0) moveTop();
        else {
            count = 0;
            console.log("go");
        }

}

// window.onscroll = function(){
//     console.log("hihi");
// };
// var section;
// var toTopSec;


// function moveToSection(id){
//     toTopSec =  document.body.scrollTop;
//
//     var scrollSection = setTimeout(function(){
//           moveSec(id);
//     },1);
//
// }
// var posPara;
//
// function moveSec(id){
//     var posSec = id.offsetTop;
//      posPara = document.getElementById('para');
//     // console.log(posParallax);
//
//     window.scrollBy(0, -60);
//     if (toTopSec > posSec + 120) moveToSection(id);
//     else {
//         console.log("go");
//     }
// }


var flagScroll = 1;
/* ---- scrolling ----- */
var arr;
function countUp(numDiv,timer, y){
    setTimeout(function(){numDiv.innerHTML = y}, timer);
}


var y = 0;
function changeNum(numDiv,dataNum){

        var  timer = 0;
        for (y = 0; y <= dataNum ; y++){

            timer+=10;

            countUp(numDiv, timer, y);
        }


}


window.onscroll = function(){
    var scrollnav = document.getElementById("nav-scroll");
    //console.log(document.body.scrollTop);
    var heightClient = document.body.clientHeight;

    if (document.body.scrollTop > heightClient - 5 ) {
        scrollnav.classList.add("scroll-to-fixed");
        // console.log("Go");
    }
    else scrollnav.classList.remove("scroll-to-fixed");

    // 623  : About
    // 1625 : Resume
    // 2469 : Service
    // 3347 : Skill
    // 4475 : Client
    var bgFixCol = document.getElementById('bg-scroll');
    var bgTitle= document.getElementById('bg-title');


    // var ulScroll = document.getElementById('ul-scroll');
    // console.log(ulScroll);
    // var liScroll = ulScroll.getElementsByTagName('li');
    // console.log(liScroll);
    // var aScroll = liScroll.child;
    // console.log(aScroll);

    arr = document.getElementsByClassName('scroll-link');









    // style="background-image: url(img/1.jpg);"

    var scrollTop = document.body.scrollTop;
    // if (scrollTop > 0 && scrollTop < 623)  {bgFixCol.style.backgroundImage = "none";}
    // else
    if (scrollTop < 625) {
        for (i = 0; i< arr.length; i++) arr[i].children[0].style.width = "0";
    }

    else
    if (scrollTop >= 625 && scrollTop < 1499) {
        bgFixCol.style.backgroundImage = "url('img/1.jpg')";
        bgTitle.innerHTML = 'about me';
        for (i = 0; i< arr.length; i++)
            if (arr[i].children[0].style.width = "100%") arr[i].children[0].style.width = "0";
        arr[0].children[0].style.width = "100%";

        if (flagScroll == 1 && scrollTop >= 800){
            flagScroll = 0;
            // run for one time

            var number = document.getElementsByClassName('num');

            for (var z = 0; z < number.length; z ++) {
                var dataNum = number[z].getAttribute('data-num');
                changeNum(number[z],dataNum);
            }




        }

    }
    else if (scrollTop >= 1499 && scrollTop < 2165){
        bgFixCol.style.backgroundImage = "url('img/2.jpg')";
        bgTitle.innerHTML = 'resume';
        for (i = 0; i< arr.length; i++)
        if (arr[i].children[0].style.width = "100%") arr[i].children[0].style.width = "0";
        arr[1].children[0].style.width = "100%";
    }
    else if (scrollTop >= 2165 && scrollTop < 3000){
        bgFixCol.style.backgroundImage = "url('img/3.jpg')";
        bgTitle.innerHTML = 'service';
        for (i = 0; i< arr.length; i++)
        if (arr[i].children[0].style.width = "100%") arr[i].children[0].style.width = "0";
        arr[2].children[0].style.width = "100%";
    }
    else if (scrollTop >= 3000 && scrollTop < 4087){
        bgFixCol.style.backgroundImage = "url('img/4.jpg')";
        bgTitle.innerHTML = 'skill';
        for (i = 0; i< arr.length; i++)
        if (arr[i].children[0].style.width = "100%") arr[i].children[0].style.width = "0";
        arr[3].children[0].style.width = "100%";
        // rotate value bar
        var circle = document.getElementsByClassName('value-bar');
        for (var j = 0; j < circle.length; j++){
            console.log(circle[j].style);
            var dataRotate = circle[j].getAttribute('data-rotate');
            console.log(dataRotate);
            circle[j].style.transform = "rotate(" + dataRotate + "deg)";
        }

        // skill bar transition
        var skillbar = document.getElementsByClassName('skillbar-bg');

        for(var i = 0; i<skillbar.length; i++){
            var percent = skillbar[i].getAttribute('data-percent');
            console.log(percent);
            var custom = skillbar[i].childNodes;

            custom[1].style.width = percent;


        }


    }
    else if (scrollTop >= 4087 ) {
        bgFixCol.style.backgroundImage = "url('img/1.jpg')";
        bgTitle.innerHTML = 'client';
        for (i = 0; i< arr.length; i++)
        if (arr[i].children[0].style.width = "100%") arr[i].children[0].style.width = "0";
        arr[4].children[0].style.width = "100%";
    }

//631;

};

