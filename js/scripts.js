document.addEventListener("DOMContentLoaded", function () {
     var next = document.querySelector('.main-slider-next');
     console.log(next);
     var prev = document.querySelector('.main-slider-prev');
     console.log(prev);
    var list= document.querySelectorAll('.slider-list li');
    console.log(list);
    var idImg = 0;

/////////
//ustawienie class=visible do pierwszego zdjęcia
//////////
    function getVisible(arr) {
        for (var i = 0; i < 1; i++) {
            var firstChild= arr[0];
            // console.log(firstChild);
            firstChild.setAttribute('class', 'visible');
        }

    }
getVisible(list);
/////////
//eventy do guzików
//////////

    next.addEventListener('click', function () {
        console.log('mam n imię trlalalala');
        list[idImg].removeAttribute('class', 'visible');
        idImg++;
        if (idImg>=3) {
            idImg=0;

        }
        list[idImg].setAttribute('class', 'visible');


    });

    prev.addEventListener('click', function () {
        console.log('kliknęło się');
        list[idImg].removeAttribute('class', 'visible');
        idImg--;
        if (idImg== -1) {
            idImg= 3;
        }
        console.log(idImg);
        list[idImg].setAttribute('class', 'visible');

    });



 // inputs///
 ///////////

 var hideInput = document.querySelectorAll('.hide');
 console.log(hideInput);

    for (var i = 0; i < hideInput.length; i++) {


 hideInput[i].addEventListener('mouseover', function () {
      var hidden= this.querySelector('.input-bar');
      console.log(hidden);
      hidden.style.display='none';

  });


  hideInput[i].addEventListener('mouseout', function () {
      var hidden= this.querySelector('.input-bar');
      hidden.style.display= 'inline-block';

  });

 }


 //menu//
 ///////



 var menu = document.querySelectorAll('.page-nav li');
 var hoverMenu = menu[0];
 // console.log(hoverMenu);

 var submenu = document.querySelector('.page-nav-sublist');
 // console.log(submenu);

 hoverMenu.addEventListener('mouseover', function () {
     submenu.style.visibility= 'visible';
     submenu.style.opacity = '1';
     submenu.style.zIndex = "4";
 });

     hoverMenu.addEventListener('mouseout', function () {
     submenu.style.visibility= 'none';
     submenu.style.opacity = '0';
 });



  });
