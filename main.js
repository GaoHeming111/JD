/**
 * Created by dell on 2016/9/29.
 */
/*contents加载函数*/
window.onload=function(){
    var white=document.getElementById("white");
    var wh1=document.getElementById("white");
    var wh2=document.getElementById("wh2");
    var overRed=document.getElementById("overRed");
    overRed.style.display="none";
    wh1.style.display="none";
    wh2.style.display="none";
    white.style.display="none";
    yin();
    card();
    card2()
    clear();
    lead();
    var ri1=document.getElementById("ri1");
    var ri2=document.getElementById("ri2");
    var ri3=document.getElementById("ri3");
    var ri4=document.getElementById("ri4");
    var ri5=document.getElementById("ri5");
    var ri6=document.getElementById("ri6");
    var ri7=document.getElementById("ri7");
    var ri8=document.getElementById("ri8");
    ri1.style.display="none";
    ri2.style.display="none";
    iTop();
}

/*选项卡隐藏函数*/
function yin(){
    var oa=document.getElementById("card");
    oa.style.display="none";
}
/*选项卡函数*/
function card(){
    var oa=document.getElementById("card");
    var oul=oa.getElementsByTagName("ul")[0];
    var lis=oul.getElementsByTagName("li");
    var divs=oa.getElementsByTagName("div");
    for( var i=0;len=lis.length,i<len;i++){
        lis[i].index=i;
        lis[i].onclick=function(){
            for(var n=0; n<len; n++)
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
function card2(){
    var menu3=document.getElementById("menu3");
    var lis=menu3.getElementsByTagName("li");
    var cont5=document.getElementById("contentss5");
    var spans=cont5.getElementsByTagName("span");
    for(var i=0;i<lis.length;i++){
        lis[i].index=i;
        lis[i].onmouseover=function(){
            for(var j=0;j<lis.length;j++){
                spans[j].style.display="none";
                lis[j].className="";
            }
            spans[this.index].style.display="block"
        }
    }
}
/*选项卡显示*/
function xian(){
    var oa=document.getElementById("card");
    oa.style.display="block";
}
/*选项卡加载函数*/
function load(){
    var card=document.getElementById("card");
    card.style.display="none";
}
function load2(){
    var card=document.getElementById("card");
    card.style.display="none";
}
function load3(){
    var card=document.getElementById("card");
    card.style.display="none";
}
function load4(){
    var card=document.getElementById("card");
    card.style.display="none";
}
/*换一批效果*/
var q=0;
var trr=[
    ["img/f0p6.jpg","img/f0p7.jpg","img/f0p9.jpg","img/f0p8.jpg","img/f0p11.jpg","img/f0p10.jpg"],
    ["img/f0p7.jpg","img/f0p6.jpg","img/f0p8.jpg","img/f0p9.jpg","img/f0p10.jpg","img/f0p11.jpg"],
    ["img/f0p8.jpg","img/f0p6.jpg","img/f0p7.jpg","img/f0p10.jpg","img/f0p11.jpg","img/f0p9.jpg"],
    ["img/f0p11.jpg","img/f0p10.jpg","img/f0p9.jpg","img/f0p6.jpg","img/f0p7.jpg","img/f0p8.jpg"],
];
function change(){
    var img=$(".div1 img");
    for(var i=0;i<img.length;i++){
        img[i].src=trr[q][i];
    }
    q++;
    if(q>=trr.length){
        q=0;
    }
}
/*删除*/
var tag=true;
function del(){
    var advtop=document.getElementById("advtop");
    advtop.style.display="none";
    var but=document.getElementById("but");
    but.style.display="none";
}

/*购物车*/
function car(){
    var carban=document.getElementById("carban");
    carban.style.display="block";
}
function clearCar(){
    var carban=document.getElementById("carban");
    carban.style.display="none";
}
/*搜索栏onfocus*/
function obey(){
    var txt1=document.getElementById("txt1");
    if(txt1.value != "大闸蟹满减"){
        txt1.value=txt1.value;
    }else{
        txt1.value="";
    }

}
/*搜索栏onblur*/
function disobey(){
    var txt1=document.getElementById("txt1");
    if(txt1.value != "大闸蟹满减"){
        txt1.value=txt1.value;
    }else{
        txt1.value = "大闸蟹满减"
    }
}
/*头部menu隐藏*/
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
/*头部menu分别隐藏函数*/
function clear1(){
    var white1=document.getElementById("white1");
    var m1=document.getElementById("p1");
    var white2=document.getElementById("white2");
    var m2=document.getElementById("m2");
    var white3=document.getElementById("white3");
    var m3=document.getElementById("m3");
    var white4=document.getElementById("white4");
    var m4=document.getElementById("m4");
    var white5=document.getElementById("white5");
    var m5=document.getElementById("m5");
    white1.style.display="none";
    m1.style.background="none";
    m1.style.border="none";
    m1.style.paddingLeft=13+"px";
    white2.style.display="none";
    m2.style.background="none";
    m2.style.border="none";
    white3.style.display="none";
    m3.style.background="none";
    m3.style.border="none";
    m3.style.paddingLeft=+"px";
    white4.style.display="none";
    m4.style.background="none";
    m4.style.border="none";
    m4.style.paddingLeft=+"px";
    white5.style.display="none";
    m5.style.background="none";
    m5.style.border="none";
    m5.style.paddingLeft=+"px";
}
/*头部menu单独设置*/
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
/*头部地点函数*/
function destination(){
    var home=document.getElementById("home");
    var lis=home.getElementsByTagName("li");
    var m1=document.getElementById("m1");
    for(var i=0;i<lis.length;i++){
        lis[i].onclick=function(){
            m1.innerHTML=this.innerHTML+" "+"^";
            for(var i=0;i<lis.length;i++){
                lis[i].style.background="none";
                lis[i].style.color="black";
            }
            this.style.backgroundColor="red";
            this.style.color="white";
        }
    }
}
/*左侧楼层fixed*/
var zrr=[];//命名一个空数组
var Floor=["1F","2F","3F","4F","5F","6F","7F","8F","9F","10F","11F","12F"];
var Name=new Array("服饰","个护","手机","电器","数码","运动","居家","母婴","保健","图书","整车","服务");
var num=["#one","#two","#three","#four","#five","#six","#seven","#eight","#nine","#ten","#eleven","#twelve"]
$(function(){
    var divs=$("#wrap > div[id^='contentss']");
    for(var i=0;i<divs.length;i++){
        // .offset() 获取匹配元素在当前视口的相对偏移
        zrr[i]=$(divs[i]).offset().top;
    }
})
$(window).scroll(function(){
    var top=$(window).scrollTop();//这里后面一定记得加括号
    var height=$(window).height();//指的是屏幕高度 因为电脑和电脑不一样 都用 $(window) 来取
    if(top>=1900-height){
        $("#LeftMenu").show();
    }else{
        $("#LeftMenu").hide();
    }
    console.log(zrr.length);
    for(var a=0;a<zrr.length;a++){
        $("#LeftMenu li:eq("+ a +")").html("<a href=num[a]>"+Floor[a]+ "</a>"); //使所有文字内容恢复原样
    }
    $("#LeftMenu li").css("background","white");
    $("#LeftMenu li").css("color","black");
    $("#LeftMenu li").css("border-radius","3px");
    for(var j=0;j<zrr.length;j++){
        if(top<=zrr[j]){
            $("#LeftMenu li:eq("+ j +")").css("background","red");
            $("#LeftMenu li:eq("+ j +")").html(Name[j]);
            break;
        }
    }
})
/*猜你喜欢下的滚动条*/
function Red(){
    $("#overRed").show();
    $("#overRed").animate({"width":1000},800).delay(300).fadeOut(800);
}
function outRed(){
    $("#overRed").hide();
    $("#overRed").animate({"width":0},0);
}
/*右侧固定*/
function mo1(){
    var ri1=document.getElementById("ri1");
    ri1.style.display="block";
    $("#ri1").animate({"width":100},300);
}
function mo2(){
    var ri2=document.getElementById("ri2");
    ri2.style.display="block";
    $("#ri2").animate({"width":100},300);
}
function mo3(){
    var ri3=document.getElementById("ri3");
    ri3.style.display="block";
    $("#ri3").animate({"width":100},300);
}
function mo4(){
    var ri4=document.getElementById("ri4");
    ri4.style.display="block";
    $("#ri4").animate({"width":100},300);
}
function mo5(){
    var ri5=document.getElementById("ri5");
    ri5.style.display="block";
    $("#ri5").animate({"width":100},300);
}
function mo6(){
    var ri6=document.getElementById("ri6");
    ri6.style.display="block";
    $("#ri6").animate({"width":100},300);
}
function mo7(){
    var ri7=document.getElementById("ri7");
    ri7.style.display="block";
    $("#ri7").animate({"width":100},300);
}
function mo8(){
    var ri8=document.getElementById("ri8");
    ri8.style.display="block";
    $("#ri8").animate({"width":100},300);
}
function m2(){
    var ri1=document.getElementById("ri1");
    ri1.style.display="none";
}
function m3(){
    var ri2=document.getElementById("ri2");
    ri2.style.display="none";
}
function m4(){
    var ri3=document.getElementById("ri3");
    ri3.style.display="none";
}
function m5(){
    var ri4=document.getElementById("ri4");
    ri4.style.display="none";
}
function m6(){
    var ri5=document.getElementById("ri5");
    ri5.style.display="none";
}
function m7(){
    var ri6=document.getElementById("ri6");
    ri6.style.display="none";
}
function m8(){
    var ri7=document.getElementById("ri7");
    ri7.style.display="none";
}
function m9(){
    var ri8=document.getElementById("ri8");
    ri8.style.display="none";
}
function mm3(){
    $("#ri1").animate({"width":0},300);
}
function mm5(){
    $("#ri3").animate({"width":0},300);
}
function mm4(){
    $("#ri2").animate({"width":0},300);
}
function mm6(){
    $("#ri4").animate({"width":0},300);
}
function mm7(){
    $("#ri5").animate({"width":0},300);
}
//回到顶部按钮
var timer=null;
var sTop=true;
function iTop(){
    var ri7=document.getElementById("ri7");
    //滚动条滚动时触发
    window.onscroll=function(){
        if(!sTop){
            clearInterval(timer);
        }
        sTop=false;
    }
    ri7.onclick=function(){
        timer=setInterval(function(){
            var top=document.documentElement.scrollTop || document.body.scrollTop;
            var speed =Math.floor(-top / 6);
            document.documentElement.scrollTop = document.body.scrollTop = top + speed;
            sTop=true;
            if(top==0){
                clearInterval(timer);
            }
        },30);
    }
}
function mm8(){
    $("#ri6").animate({"width":0},300);
}
function mm9(){
    $("#ri7").animate({"width":0},300);
}
function mm10(){
    $("#ri8").animate({"width":0},300);
}

/*contents左侧导航栏显示函数*/
function mouse(){
    var wh1=document.getElementById("white");
    wh1.style.display="block";
}
function mouse2(){
    var wh2=document.getElementById("wh2");
    wh2.style.display="block";
    wh2.style.height=465+"px";
}
function leave(){
    var wh1=document.getElementById("white");
    wh1.style.display="none";
}
function leave2(){
    var wh2=document.getElementById("wh2");
    wh2.style.display="none";
}

/*自动轮播*/
var c = 0;
var arr1=["img/center.jpg","img/center1.jpg","img/center2.jpg","img/center3.jpg","img/center4.jpg","img/center5.jpg"];
function img1(){
    c++;
    if(c>=arr1.length){
        c=0;
    }
    var img=document.getElementById("advpic");
    img.src=arr1[c];
    var lists=document.getElementById("lists").getElementsByTagName("li");
    for(var j=0;j<lists.length;j++){
        lists[j].style.backgroundColor="darkgray";
    }
    lists[c].style.backgroundColor="red";
    lists[c].style.borderRadius=12+"px";
}
var h = setInterval("img1()",1000);
function leftjian(){
    clearInterval(h);
    var pic=document.getElementById("advpic");
    c==0 ? c=arr1.length-1 : c-- ;
    pic.src=arr1[c];
    var lis=document.getElementById("lists").getElementsByTagName("li");
    for(var a=0;a<lis.length;a++){
        lis[a].style.backgroundColor="darkgray";
    }
    lis[c].style.backgroundColor="red";
}
function rightjian(){
    clearInterval(h);
    var pic=document.getElementById("advpic");
    c==arr1.length-1?c=0:c++;
    pic.src=arr1[c];
    var lis=document.getElementById("lists").getElementsByTagName("li");
    for(var a=0;a<lis.length;a++){
        lis[a].style.backgroundColor="darkgray";
    }
    lis[c].style.backgroundColor="red";
}
function next(b){
    //先清除计时器 让当前序号相等
    clearInterval(h);
    c = b;
    var img=document.getElementById("advpic");
    img.src=arr1[b];
    var lists=document.getElementById("lists").getElementsByTagName("li");
    for(var j=0;j<lists.length;j++){
        lists[j].style.background="darkgray";
    }
    lists[b].style.background="red";
    lists[b].style.borderRadius=12+"px";
}

function a0(){
    clearInterval(h);
    var left = document.getElementById("leftjian");
    var right = document.getElementById("rightjian");
    left.style.display = "block";
    right.style.display = "block";
}
function a1(){
    h = setInterval("img1()",1000);
    var left = document.getElementById("leftjian");
    var right = document.getElementById("rightjian");
    left.style.display = "none";
    right.style.display = "none";
}
function a2(){
    //这时候 不要 用var来命名h ;
    h = setInterval ("img1()",1000);
}
/*轮播上左右箭头*/
function lead(){
    var left=document.getElementById("leftjian");
    var right=document.getElementById("rightjian");
    left.style.display="none";
    right.style.display="none";
    var Left=document.getElementById("imgLeft");
    var Right=document.getElementById("imgRight");
    Left.style.display="none";
    Right.style.display="none";
}
function leadout(){
    var left=document.getElementById("leftjian");
    var right=document.getElementById("rightjian");
    left.style.display="none";
    right.style.display="none";
    setInterval(h);
}
function leadout1(){
    var Left=document.getElementById("imgLeft");
    var Right=document.getElementById("imgRight");
    Left.style.display="none";
    Right.style.display="none";
}
function leadover(){
    var left=document.getElementById("leftjian");
    var right=document.getElementById("rightjian");
    left.style.display="block";
    right.style.display="block";
}
function leadover1(){
    var Left=document.getElementById("imgLeft");
    var Right=document.getElementById("imgRight");
    Left.style.display="block";
    Right.style.display="block";
}
/*左右箭头判断是第一张还是最后一张*/
var i=0;
var j=0;
var BottomPic=["img/bottomban1.jpg","img/bottomban2.jpg","img/bottomban3.jpg"];
function leftjian1(){
    var pic=document.getElementById("bottomban");
    j==0?j=BottomPic.length-1:j--;
    pic.src=BottomPic[j];
}
function rightjian1(){
    var pic=document.getElementById("bottomban");
    j==BottomPic.length-1?j=0:j++;
    pic.src=BottomPic[j];
}