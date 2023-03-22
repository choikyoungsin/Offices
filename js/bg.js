let close=true;
$('.olol').click(function(){
   if(close==true){
    $('.bg100').css({display:'block'});

    close=false;
   }else{
    $('.bg100').css({display:'none'});
    close=true;
   }
})