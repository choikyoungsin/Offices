const id1=document.getElementById('id1');


let pw1=document.getElementById('pw1');
let pw2=document.getElementById('pw2');
let name1=document.getElementById('name1');
let email1=document.getElementById('email1');
let tel1=document.getElementById('tel1');

let id1Msg=document.getElementById('id1Msg');
let pw1Msg=document.getElementById('pw1Msg');
let pw2Msg=document.getElementById('pw2Msg');
let name1Msg=document.getElementById('name1Msg');

let email1Msg=document.getElementById('email1Msg');
let tel1Msg=document.getElementById('tel1Msg');
let gender1Msg=document.getElementById('gender1Msg')

let regId=/^[a-zA-Z][a-zA-Z0-9]{4,}$/; //아이디
let regPw1=/^.*(?=^.{8,16})(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&*]).*$/;//비밀번호
let regName1=/[a-zA-Z가-힣ㄱ-ㅎㅏ-ㅣ]{3,}/;
let regEmail1=/^[a-zA-Z0-9]([-_.]?\w+)*@[a-zA-Z0-9]([-_.]?[a-zA-Z0-9])*.[a-zAZ]{2,3}$/g;
let regPhone1=/(^01[016789]{1})([0-9]{3,4})[0-9]{4}$/g;-

id1.addEventListener("blur", function(){
    if(!regId.test(id1.value)){
        id1Msg.style.color='red';
        id1Msg.style.fontSize='13px'
        id1Msg.style.marginLeft='100px'
        id1Msg.innerHTML="아이디는 5글자 이상이고 첫글자가 대문자이고 영문자, 숫자만 가능"
        id1.value=""; 
    }else{
        id1Msg.style.color='aquamarine';
        id1Msg.style.marginLeft='230px'
        id1Msg.innerHTML="사용가능한 아이디입니다."
    }
});

pw1.addEventListener("blur", function(){
    if(!regPw1.test(pw1.value)){
        pw1Msg.style.color="red";
        pw1Msg.style.fontSize='13px'
        pw1Msg.style.marginLeft='100px'
        pw1Msg.innerHTML="특수문자, 문자, 숫자 포함하고 8~16 이내의 값만 가능합니다";
        pw1.value="";

    }else{
        pw1Msg.innerHTML="";
    }
});

pw2.addEventListener("focus", function(){
    if(document.getElementById('pw1').value==""){
        alert("패스워드를 입력해주세요");
        document.getElementById('pw1').focus();
    }
});

pw2.addEventListener("blur",function(){
    if(pw1.value !=pw2.value){
        pw2Msg.style.color="red";
        pw2Msg.style.fontSize='13px'
        pw2Msg.style.marginLeft='240px'
        pw2Msg.innerHTML="비밀번호가 일치하지 않습니다."
        return false;
    
    }else{

        if((pw1.value=='') && (pw2.value =='')){
            pw2Msg.innerHTML="";
        }else{
            pw2Msg.style.color="green";
            pw2Msg.style.color='aquamarine';
            pw2Msg.style.marginLeft='230px'
            pw2Msg.innerHTML="비밀번호가 일치합니다."
        }
    }
});
name1.addEventListener("blur", function(){
    if(!regName1.test(name1.value)){
        name1Msg.style.color='red';
        name1Msg.innerHTML="이름은 3글자 이상입력"
        name1.value=""; 
    }else if(name1.value<=1) {
        name1Msg.style.color='red';
        name1Msg.innerHTML="다시입력하세요"
    }else{
        name1Msg.style.color='aquamarine';
        name1Msg.style.marginLeft='230px'
        name1Msg.innerHTML="사용 가능한 이름입니다."
    }

});


email1.addEventListener("blur", function(){
    if(!regEmail1.test(email1.value)){
        email1Msg.style.color='red';
        email1Msg.innerHTML="올바른형식이 아닙니다"
        email1.value=""; 
    }else {  
        email1Msg.style.color='aquamarine';
        email1Msg.innerHTML="사용 가능한 이메일입니다."
    }

});
tel1.addEventListener("blur", function(){
    if(!regPhone1.test(tel1.value)){
        tel1Msg.style.color='red';
        tel1Msg.innerHTML="올바른 전화번호를 입력하세요"
       tel1.value="";
    }else {  
        tel1Msg.style.color='aquamarine';
        tel1Msg.innerHTML="올바른 전화번호입니다."
    }
});