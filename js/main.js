var radioknopki = document.querySelectorAll('.radioknopka');
var text = document.getElementById('textblock');
var text2 = document.getElementById('textblock2');
var text3 = document.getElementById('textblock3');
var slide1 = document.getElementById('fonslider');
var slide2 = document.getElementById('ridth');
var slide3 = document.getElementById('ridth2');

//Script Slider//


function myfunc (){
    slide3.style.right = -100 + '%';
    //slide1.style.right = -100 + '%';
    slide2.style.right = -100 + '%';
    text.style.opacity = 0;
    text2.style.marginLeft= -100 +'%';
    text3.style.marginBottom=-100+'%';
    text3.style.opacity= 0;
    
    setTimeout(backfunc, 500);
    setTimeout(backfunc2, 700);
}
function backfunc ( ){
    slide3.style.right = 20 + '%';
    text2.style.marginLeft= 37 +'%';
    text3.style.marginBottom = 0+'%';
    //slide1.style.right = 0 + '%';
}

function backfunc2 (){
    slide2.style.right = 32 + '%';
    text.style.opacity = 1;
    text3.style.opacity= 1;
}

			function slowScroll(id) {
					 var offset = 10;
					 $('html,body').animate ({
						 scrollTop:$(id).offset ().top - offset
					 },1000);
					 return false ;  
				  }
			
		




    
     




