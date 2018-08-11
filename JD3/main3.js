/**
 * Created by dell on 2016/9/29.
 */
window.onload=function(){
    selCard();
    clear();
    yin();
    card();
    lead();
}
function selCard(){
    var Dl=document.getElementById("Dls");
    var dls=Dl.getElementsByTagName("div");
    var lists=document.getElementById("lists");
    var lis=lists.getElementsByTagName("li");
    var but=document.getElementById("but");
    var txt=document.getElementById("txt");
    for(var i=0;i<lis.length;i++){
        lis[i].index=i;
        lis[i].onclick=function(){
            for(var j=0;j<lis.length;j++){
                dls[j].style.display="none";
            }
            dls[this.index].style.display="block";
        }
        but.onclick=function(){
            for(var n=0;n<lis.length;n++){
                dls[n].style.display="none";
            }
            dls[txt.value].style.display="block";
        }
    }
}


function car(){
    var carban=document.getElementById("carban");
    carban.style.display="block";
}
function clearCar(){
    var carban=document.getElementById("carban");
    carban.style.display="none";
}
function obey(){
    var txt1=document.getElementById("txt1");
    txt1.value="";
}
function disobey(){
    var txt1=document.getElementById("txt1");
    txt1.value="what are you want";
}
function clear(){
    var white1=document.getElementById("white1");
    white1.style.display="none";
    var white2=document.getElementById("white2");
    white2.style.display="none";
    var white3=document.getElementById("white3");
    white3.style.display="none";
    var white4=document.getElementById("white4");
    white4.style.display="none";
    var white5=document.getElementById("white5");
    white5.style.display="none";
    var carban=document.getElementById("carban");
    carban.style.display="none";
}
function clear1(){
    var white1=document.getElementById("white1");
    white1.style.display="none";
    var m1=document.getElementById("p1");
    m1.style.background="none";
    m1.style.border="none";
    m1.style.paddingLeft=13+"px";
    var white2=document.getElementById("white2");
    white2.style.display="none";
    var m2=document.getElementById("m2");
    m2.style.background="none";
    m2.style.border="none";
    var white3=document.getElementById("white3");
    white3.style.display="none";
    var m3=document.getElementById("m3");
    m3.style.background="none";
    m3.style.border="none";
    m3.style.paddingLeft=+"px";
    var white4=document.getElementById("white4");
    white4.style.display="none";
    var m4=document.getElementById("m4");
    m4.style.background="none";
    m4.style.border="none";
    m4.style.paddingLeft=+"px";
    var white5=document.getElementById("white5");
    white5.style.display="none";
    var m5=document.getElementById("m5");
    m5.style.background="none";
    m5.style.border="none";
    m5.style.paddingLeft=+"px";
}
function over(){
    var white1=document.getElementById("white1");
    var m1=document.getElementById("p1");
    white1.style.display="block";
    m1.style.paddingLeft=12+"px";
    m1.style.border="1px darkgray solid";
    m1.style.borderBottom="none";
    m1.style.borderTop="none";
    m1.style.backgroundColor="white";
}
function over2(){
    var white2=document.getElementById("white2");
    white2.style.display="block";
    var m2=document.getElementById("m2");
    m2.style.paddingLeft=12+"px";
    m2.style.border="1px darkgray solid";
    m2.style.borderBottom="none";
    m2.style.borderTop="none";
    m2.style.backgroundColor="white";
}
function over3(){
    var white3=document.getElementById("white3");
    white3.style.display="block";
    var m3=document.getElementById("m3");
    m3.style.paddingLeft=12+"px";
    m3.style.border="1px darkgray solid";
    m3.style.borderBottom="none";
    m3.style.borderTop="none";
    m3.style.backgroundColor="white";
}
function over4(){
    var white4=document.getElementById("white4");
    white4.style.display="block";
    var m4=document.getElementById("m4");
    m4.style.paddingLeft=12+"px";
    m4.style.border="1px darkgray solid";
    m4.style.borderBottom="none";
    m4.style.borderTop="none";
    m4.style.backgroundColor="white";
}
function over5(){
    var white5=document.getElementById("white5");
    white5.style.display="block";
    var m5=document.getElementById("m5");
    m5.style.paddingLeft=12+"px";
    m5.style.border="1px darkgray solid";
    m5.style.borderBottom="none";
    m5.style.borderTop="none";
    m5.style.backgroundColor="white";
}

/**
 * Created by dell on 2016/10/20.
 */

