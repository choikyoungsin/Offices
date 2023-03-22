$(function(){
    const slideLists=$('.imgslide_wrap li')
    const prevbtn=$('.btnSlidePrev1')
    const nextbtn=$('.btnSlideNext1')
    const btnSlidepp=$('.btnSlidepp1')
    const pagerBtn=$('.pager-num1>span')
    let current=0;
    let setIntervalId=undefined;
    let ppbtn=true;
    
    
    timer();
    function timer(){
        setIntervalId=setInterval(function(){
            let prev=slideLists.eq(current);
            let prevBtn=pagerBtn.eq(current);
            move(prev, 0, '-478px');
            prevBtn.removeClass('fonton1');

            
            current++;
            if(current==slideLists.size()){
                current=0;
            }
            let next=slideLists.eq(current);
            let nextBtn1=pagerBtn.eq(current);
            move(next, '478px', 0)
            
            nextBtn1.addClass('fonton1')
        },3000);
    }
    function move(tg,start,end){
        tg.css('left', start).stop().animate({left:end});
    }

    $('.btnSlidePrev1, .btnSlideNext1').hover(function(){
        clearInterval(setIntervalId)
    },function(){
        timer();
    });

    nextbtn.click(function(){
        let prve=slideLists.eq(current);
        let prevBtn=pagerBtn.eq(current);
        move(prve, 0,'-478px');
        prevBtn.removeClass('fonton1');
        current++;
        if(current==slideLists.size()){
            current=0;
        }
        let next=slideLists.eq(current);
        let nextBtn1=pagerBtn.eq(current);
        move(next,'478px', 0)
        nextBtn1.addClass('fonton1')
    });

    prevbtn.click(function(){
        let prve=slideLists.eq(current);
        let prevBtn=pagerBtn.eq(current);
        move(prve, 0,'478px');
        prevBtn.removeClass('fonton1');
        current--;
        if(current==-slideLists.size()){
            current=0;
        }
        let next=slideLists.eq(current);
        let nextBtn1=pagerBtn.eq(current);
        move(next,'-478px', 0);
        nextBtn1.addClass('fonton1')
        
    });

    btnSlidepp.click(function(){
       if(ppbtn==true){
        clearInterval(setIntervalId)    
        $(this).find('img').attr('src','./img/sl-play.png');
            ppbtn=false;
        }else{
            $(this).find('img').attr('src','./img/sl-pause.png');
            timer();
            ppbtn=true;   
        }
    })
    
})