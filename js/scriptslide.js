$(function(){
    const slideLists=$('.slideList li')
    const prevbtn=$('.btnSlidePrev')
    const nextbtn=$('.btnSlideNext')
    const btnSlidepp=$('.btnSlidepp')
    const pagerBtn=$('.pager-num>span')
    let current=0;
    let setIntervalId=undefined;
    let ppbtn=true;
    
    
    timer();
    function timer(){
        setIntervalId=setInterval(function(){
            let prev=slideLists.eq(current);
            let prevBtn=pagerBtn.eq(current);
            move(prev, 0, '-610px');
            prevBtn.removeClass('fonton');

            
            current++;
            if(current==slideLists.size()){
                current=0;
            }
            let next=slideLists.eq(current);
            let nextBtn1=pagerBtn.eq(current);
            move(next, '610px', 0)
            
            nextBtn1.addClass('fonton')
        },3000);
    }
    function move(tg,start,end){
        tg.css('left', start).stop().animate({left:end});
    }

    $('.btnSlidePrev, .btnSlideNext').hover(function(){
        clearInterval(setIntervalId)
    },function(){
        timer();
    });

    nextbtn.click(function(){
        let prve=slideLists.eq(current);
        let prevBtn=pagerBtn.eq(current);
        move(prve, 0,'-610px');
        prevBtn.removeClass('fonton');
        current++;
        if(current==slideLists.size()){
            current=0;
        }
        let next=slideLists.eq(current);
        let nextBtn1=pagerBtn.eq(current);
        move(next,'610px', 0)
        nextBtn1.addClass('fonton')
    });

    prevbtn.click(function(){
        let prve=slideLists.eq(current);
        let prevBtn=pagerBtn.eq(current);
        move(prve, 0,'610px');
        prevBtn.removeClass('fonton');
        current--;
        if(current==-slideLists.size()){
            current=0;
        }
        let next=slideLists.eq(current);
        let nextBtn1=pagerBtn.eq(current);
        move(next,'-610px', 0);
        nextBtn1.addClass('fonton')
        
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

