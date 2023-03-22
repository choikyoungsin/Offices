const $right=$('.btnSlideNext');
const $left=$('.btnSlidePrev');
const $moving=$('.bbbox>.slideList')
const $moving2=$('.rightboxbottom>.imgslide_wrap')
const $right1=$('.btnSlideNext1');
const $left1=$('.btnSlidePrev1');

$right.click(function(){
    $moving.stop().animate({left:610*-1},500,function(){
        $(this).children('li:first').insertAfter ( $(this).children('li:last'))
        $(this).css({left:0})
    });
    
});
$left.click(function(){
    $moving.children('li:last').insertBefore ( $moving.children('li:first'));
    $moving.css({left:-610})
    $moving.stop().animate({left:0},500)
});

$right1.click(function(){
    $moving2.stop().animate({left:478*-1},500,function(){
        $(this).children('li:first').insertAfter ( $(this).children('li:last'))
        $(this).css({left:0})
    });
    
});
$left1.click(function(){
    $moving2.children('li:last').insertBefore ( $moving2.children('li:first'));
    $moving2.css({left:-478})
    $moving2.stop().animate({left:0},500)
});