/**
 * Created by dell on 2016/9/29.
 */


function yin(){
    var oa=document.getElementById("card");
    oa.style.display="none";
}
function card(){
    var oa=document.getElementById("card");
    var oul=oa.getElementsByTagName("ul")[0];
    var lis=oul.getElementsByTagName("li");
    var divs=oa.getElementsByTagName("div");
    for( var i=0;len=lis.length,i<len;i++){
        lis[i].index=i;
        lis[i].onclick=function(){
            for( var n=0; n<len; n++)
            {
                lis[n].className="";
                divs[n].style.display="none";
                lis[n].style.borderTop="none";
            }
            divs[this.index].style.display="block";
            lis[this.index].style.borderTop="2px solid red";
        }
    }
}


/*ͷ��*/
function del(){
    var advtop=document.getElementById("advtop");
    var menutop=document.getElementById("menutop")
    advtop.style.display="none";
    menutop.style.top=0+"px";
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
/*��ҳ��*/
/*���ͼƬչʾ*/
function link(i){
    var arr=["img/centerbanner1.jpg","img/centerbanner2.jpg","img/centerbanner3.jpg","img/centerbanner4.jpg"];
    var img=document.getElementById("img");
    img.src=arr[i];
}
function overqushi(){
    var qushi=document.getElementById("qushi");
    qushi.style.display="block";
}
function outqushi(){
    var qushi=document.getElementById("qushi");
    qushi.style.display="none";
}
window.onload=function(){
    var lis=document.getElementById("card5").getElementsByTagName("li");
    var divs=document.getElementById("adBanner").getElementsByTagName("div");
    for(var i= 0,len=lis.length;i<len;i++){
        lis[i].index=i;
        lis[i].onclick=function(){
            for(var a=0;a<len;a++){
                lis[a].className="";
                divs[a].style.display="none";
                lis[a].style.borderTop="1px solid white";
                lis[a].style.borderLeft="1px solid white";
                lis[a].style.borderRight="1px solid white";
            }
            divs[this.index].style.display="block";
            lis[this.index].style.border="1px solid #e9d783"
        }
    }
    var objDemo = document.getElementById("demo");
    var objSmallBox = document.getElementById("small-box");
    var objMark = document.getElementById("mark");
    var objFloatBox = document.getElementById("float-box");
    var objBigBox = document.getElementById("big-box");
    var objBigBoxImage = objBigBox.getElementsByTagName("img")[0];

    objMark.onmouseover = function () {
        objFloatBox.style.display = "block"
        objBigBox.style.display = "block"
    }

    objMark.onmouseout = function () {
        objFloatBox.style.display = "none"
        objBigBox.style.display = "none"
    }

    objMark.onmousemove = function (ev) {
        var img2 = document.getElementById("img2");
        var img = document.getElementById("img");
        img2.src = img.src;
        var _event = ev || window.event;  //兼容多个浏览器的event参数模式

        var left = _event.clientX - objDemo.offsetLeft - objSmallBox.offsetLeft - objFloatBox.offsetWidth / 2 + 55;
        var top = _event.clientY - objDemo.offsetTop - objSmallBox.offsetTop - objFloatBox.offsetHeight / 2 + 30;

        if (left < 0) {
            left = 0;
        } else if (left > (objMark.offsetWidth - objFloatBox.offsetWidth)) {
            left = objMark.offsetWidth - objFloatBox.offsetWidth;
        }

        if (top < 0) {
            top = 0;
        } else if (top > (objMark.offsetHeight - objFloatBox.offsetHeight)) {
            top = objMark.offsetHeight - objFloatBox.offsetHeight;

        }

        objFloatBox.style.left = left-50 + "px";   //oSmall.offsetLeft的值是相对什么而言
        objFloatBox.style.top = top-50 + "px";

        var percentX = left / (objMark.offsetWidth - objFloatBox.offsetWidth);
        var percentY = top / (objMark.offsetHeight - objFloatBox.offsetHeight);

        objBigBoxImage.style.left = -percentX * (objBigBoxImage.offsetWidth - objBigBox.offsetWidth) + "px";
        objBigBoxImage.style.top = -percentY * (objBigBoxImage.offsetHeight - objBigBox.offsetHeight) + "px";
    }
    var white=document.getElementById("white");
    white.style.display="none";
    var qushi=document.getElementById("qushi");
    qushi.style.display="none";
    var adBanner=document.getElementById("adBanner");
    adBanner.style.display="none";
    banCard();
    yin();
    card();
    clear();
    addSale();
    addMenu();
    lead();
}
function f(obj){
    var img = document.getElementById("img");
    img.src = obj.src;
}
function addDressBanner(){
    var adBanner=document.getElementById("adBanner");
    adBanner.style.display="block";
}
function delDressBanner(){
    var adBanner=document.getElementById("adBanner");
    adBanner.style.display="none";
}
function addSale(){
    var sel=document.getElementById("sel");
    var li1s=document.getElementById("ul1").getElementsByTagName("li");
    var li2s=document.getElementById("ul2").getElementsByTagName("li");
    for(var i=0;i<li1s.length;i++){
        li1s[i].index=i;
        li1s[i].onclick=function(){
            sel.value=this.innerHTML;
        }
    }
}
var i=1;
function addNum(){
    var number=document.getElementById("number");
    number.value = ++i;
}
function delNum(){
    var number=document.getElementById("number");
    if(i<1){
        var del=document.getElementById("del");
        del.style.cursor="not-allowed";
    }else{
        number.value = --i;
        var del=document.getElementById("del");
        del.style.cursor="pointer";
    }
}

/*�Ŵ�Ч��*/
function f1(e,obj){
    var box=document.getElementById("box");
    box.style.display="block";
    var x= e.clientX;
    var y= e.clientY;
    var box1=document.getElementById("box1");
    box1.style.left=-x+"px";
    box1.style.top=-y+"px";
    var img1=document.getElementById("img1");
    img1.src=obj.src;
}
function f2(){
    var box=document.getElementById("box");
    box.style.display="none";
}
/*�����ڷŴ����ƶ�*/
var flag=false;
function up(){
    flag=false;  //̧������ʱ�� ��������
}
function down(){
    flag=true;  //����ȥ��ʱ�� ������ȷ
}
function m(){
    document.onmousemove=function(e){
        if(flag){
            var move=document.getElementById("move");
            var x= e.clientX;
            var y= e.clientY;
            move.style.left=x-50+"px";
            move.style.top=y-30+"px";
        }
    }
}
function addMenu(){
    var lis=document.getElementById("menu").getElementsByTagName("li");
        for(var i=0;i<lis.length;i++){
            lis[i].index=i;
            lis[i].onclick=function(){
                for(var n=0;n<lis.length;n++){
                    lis[n].style.border= "1px solid #cbcbcb";
                    lis[n].style.borderTop="2px solid #cbcbcb";
                }
                lis[this.index].style.borderTop="2px solid red";
            }
        }
}
function banCard(){
    var lis=document.getElementById("head").getElementsByTagName("li");
    var divs=document.getElementById("ban").getElementsByTagName("span");
    for(var i=0;i<lis.length;i++)
    {
        lis[i].index=i;
        lis[i].onclick=function()
        {
            for(var j=0;j<lis.length;j++)
            {
                divs[j].style.display="none";
                lis[j].style.color="black";
                lis[j].style.borderTop="";
            }
            divs[this.index].style.display="block";
            lis[this.index].style.color="red";
            lis[this.index].style.borderTop="2px red solid";
        }
    }
}
/*评价板*/
var t=0;
function say(){
    var divs=document.getElementById("cont").getElementsByTagName("div");
    var time=document.getElementById("time");
    var tx1=document.getElementById("tx1");
    var tx2=document.getElementById("tx2");
    var t2=document.getElementById("t2");
    var t1=document.getElementById("t1");
    var name=document.getElementById("name");
    var s1=document.getElementById("s1");
    var cont=document.getElementById("cont");
    var wrap1=document.getElementById("wrap1");
    var data=new Date();
    var m=data.getMonth()+1;
    var d=data.getDate();
    var h=data.getHours();
    var s=data.getMinutes();
    var date=m+"月"+d+"日"+h+"时"+s+"分";
    divs[2].innerHTML=date;
    divs[4].innerHTML=tx1.value;
    divs[0].innerHTML=tx2.innerHTML;
    divs[3].innerHTML="食品口味：奶油味";
    t++;
    s1.innerHTML=t;
    var nodes=cont.cloneNode(true);
    nodes.style.display="block";
    nodes.id="cont"+t;
    wrap1.appendChild(nodes);
    tx1.value="";
    tx2.value="";
}
function delSay(obj){
    var wrap1=document.getElementById("wrap1");
    var s1=document.getElementById("s1");
    t--;
    s1.innerHTML=t;
    var div=obj.parentNode;
    wrap1.removeChild(div);
}
/**
 * Created by dell on 2016/10/20.
 */
