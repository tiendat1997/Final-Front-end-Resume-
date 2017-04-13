

/* Show and Hide Side menu */
var navbutton = document.getElementById('nav-btn');
var navinner = document.getElementById('inner-nav');
var helloTitle = document.getElementById('hello-title');
var beginTitle = document.getElementById('begin-title');

function showmenu(){



    console.log(navbutton.classList);
    console.log(navinner.classList);
    setTimeout(function(){
        navinner.classList.add("vismen");
    }, 120);
    navbutton.classList.add("cmenu");
    navinner.classList.remove("isDown");
    // blur title
    helloTitle.classList.add('opacity-title');
    beginTitle.classList.add('opacity-title');

}

function hidemenu() {
    navinner.classList.add("isDown");
    navbutton.classList.remove("cmenu");
    navinner.classList.remove("vismen");
    helloTitle.classList.remove('opacity-title');
    beginTitle.classList.remove('opacity-title');
}

// click function

navbutton.addEventListener("click",function() {

        if (navinner.classList.contains("isDown")) {
            console.log("go if");
            showmenu();
        }
        else {
            console.log("Go else");
            hidemenu();
        }
    }
);


// scroll-nav then fixed top



// scrollNav.addEventListener("scroll", function(){
//    console.log(this.scrollTop);
// });



/* client - carousel  */


// var prevBtn = document.getElementById('prev-btn');
//
// var nextBtn = document.getElementById('next-btn');
//
// var slide;
// var offset = 0;
// var curImg = 1;
// var flag = 1;
//
//
//
//         slide = document.getElementById('slide');
//         // console.log(slide);
//         var arr = slide.children;
//
//         var slideNgoai = document.getElementById('slide-ngoai');
//         offset = slideNgoai.offsetHeight;
//         var widthSet = slideNgoai.offsetWidth;
//
//
//
//         for (i = 0; i < arr.length; i++) {
//             arr[i].style.width =  widthSet + 'px';
//             arr[i].style.height = offset + 'px';
//         }
//         res = slideNgoai.offsetHeight;
//         console.log(res);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// nextBtn.onclick = function() {
//     // console.log("go next");
//     //console.log(slide.offsetWidth);
//     console.log(res);
//     if (curImg < 3){
//         if (flag == 0 ) {
//             flag = 1;
//             offset+= res;
//         }
//         slide.style.transform = "translateY(-" + offset + "px)";
//         offset += res;
//         slide.style.transition = "all 1s";
//         console.log("next" + offset);
//         curImg++;
//     }
//
//
//
// };
//
// prevBtn.onclick = function() {
//
//     if (curImg > 1) {
//             offset-=res;
//             flag = 0;
//         }
//         offset-=res;
//
//         slide.style.transform = "translateY(-" + offset + "px)";
//         curImg--;
//         slide.style.transition = "all 1s";
//
//
//
// };

/* ---------- Accordition ------------- */



var acc = document.getElementsByClassName('accordion-title');
console.log(acc);

var i ;

for (i = 0; i < acc.length; i++) {
    acc[i].onclick = function(){

        var accInner = document.getElementsByClassName('accordion-inner');
        console.log(accInner);
        for ( j = 0; j< accInner.length; j++)
            if (accInner[j].style.maxHeight != null) {
                accInner[j].style.maxHeight = null;
            }

        var innerAcc = this.nextElementSibling;

        if (innerAcc.style.maxHeight){
            innerAcc.style.maxHeight = null;
        } else {
            innerAcc.style.maxHeight = innerAcc.scrollHeight + "px";
        }

    }
}










