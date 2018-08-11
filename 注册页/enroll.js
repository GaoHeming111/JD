/**
 * Created by dell on 2016/11/9.
 */
var u_name=false;
var name_reg = /^[a-z-A-Z-0-9-\u4e00-\u9fa5]{4,20}|^[\dA-Za-z_\-]{4,20}$/;
function t1(){
    var txt1=document.getElementById("txt1");
    var p1=document.getElementById("p1");
    var cont1=document.getElementById("cont1");
    cont1.style.border="1px solid #ccc";
    txt1.value="";
    p1.innerHTML="支持中文、字母、数字、'_''-'的组合,4-20个字符 ";
}
function t11(){
    var txt1=document.getElementById("txt1");
    var cont1=document.getElementById("cont1");
    var p1=document.getElementById("p1");
    var val=txt1.value;
    var reg=name_reg.test(val);
    if(val==""){
        p1.innerHTML="";
        u_name=false;
    } else if (val.length < 4 || val.length > 20){
        p1.innerHTML="长度只能在4-20个字符内";
        cont1.style.border="1px solid red";
        p1.style.color="red";
        u_name=false;
    }else if(reg==false){
        p1.innerHTML=("格式错误, 仅支持中文, 字母, 数字, \"-\", \"_\"的组合");
        cont1.style.border="1px solid red";
        p1.style.color="red";
        u_name=false;
        reg=true;
    }else{
        u_name=true;
        p1.innerHTML=("用户名正确可以使用");
    }
}
function t2(){
    var txt2=document.getElementById("txt2");
    txt2.value="";
}
function t22(){
    var txt2=document.getElementById("txt2");
    var val=txt2.value;
    txt2.value=val;
}
function t3(){
    var txt3=document.getElementById("txt3");
    txt3.value="";
}

function t33(){
    var txt2=document.getElementById("txt2");
    var val2=txt2.value;
    var txt3=document.getElementById("txt3");
    var val=txt3.value;
    var p2=document.getElementById("p2");
    if(val == val2){
        p2.style.display="block";
        p2.innerHTML="密码一致，可以使用";
        p2.style.color="#ccc";
    }else{
        p2.style.display="block";
        p2.innerHTML="两次密码输入不一致，请检查";
        p2.style.color="red";
        if(val == val2){
            return true;
        }
    }
}
function t4(){
    var txt4=document.getElementById("txt4");
    txt4.value="";
}
function t44(){
    var txt4=document.getElementById("txt4");
    var val=txt4.value;
    if(val==""){
        txt4.value="您的帐号名和用户名";
    }else{
        txt4.value=val;
    }
}
function t5(){
    var txt5=document.getElementById("txt5");
    txt5.value="";
}
function t55(){
    var txt5=document.getElementById("txt5");
    var val=txt5.value;
    if(val==""){
        txt5.value="您的帐号名和用户名";
    }else{
        txt5.value=val;
    }
}
function t6(){
    var txt6=document.getElementById("txt6");
    txt6.value="";
}
function t66(){
    var txt6=document.getElementById("txt6");
    var val=txt6.value;
    if(val==""){
        txt6.value="您的帐号名和用户名";
    }else{
        txt6.value=val;
    }
}
function fix(){
    var fixed=document.getElementById("fixed");
    fixed.src="img/fex1.jpg";
    fixed.style.cursor="pointer";
}
function fix1(){
    var fixed=document.getElementById("fixed");
    fixed.src="img/fex.jpg";
}
