$('.leftmainbox').each(function(){
    let tapDiv=$(this);
    let anchors=tapDiv.find('.cf li a');
    let panelDivs=tapDiv.find('.tabs');
    let lastAnchor;
    let lastPanel;

    lastAnchor=anchors.filter('.on1');
    lastPanel=$(lastAnchor.attr('href'));

    panelDivs.hide();
    lastPanel.show();

    anchors.click(function(e){
        e.preventDefault();
        let currentAnchor=$(this);
        let currentPanel=$(currentAnchor.attr('href'));
        lastAnchor.removeClass('on1');
        currentAnchor.addClass('on1');

        lastPanel.hide();
        currentPanel.show();

        lastAnchor=currentAnchor;
        lastPanel=currentPanel;
    })
})

// const targetLink=document.querySelectorAll('.leftmainbox_wrap a');
// const tabContent=document.querySelectorAll('.leftbottombox ul');
// // querySelectorAll 은 querySelect 과 동일하게 작동하나 차이점은 해당 선택자에 해당하는 모든 요소를 가져옵니다.
// // 반환객체는 nodeList이기때문에 for문 또는 foreach 문을 사용해야 합니다.
// // 또한 (',') 을 사용하면  여러요소를 한번에 가져올수있습니다.


// for(let i=0; i<targetLink.length; i++){
// //.length는 배열의 길이를 반환하는 속성입니다. 마지막 원소의 인덱스 값보다 1 큰 수를 반환합니다. 배열에 속한 원소의 개수와는 의미가 다릅니다.
//     targetLink[i].addEventListener('click',function(e){
//         e.preventDefault(); // 태그를 눌렀을때도 href 링크로 이동하지 않게함
//         let orgTarget=e.target.getAttribute('href');
        
//         //getAttribute 는 특정 요소노드 내에서 특정 한 속성값을 가져오는 메소드이다.
//         // console.log(orgTarget)

//         let tabTarget=orgTarget.replace('#',"")
//         // replace ex ) orgTarget.replace("찾을 문자열", "변경할 문자열")
//         for(let j=0; j<targetLink.length; j++){
//             targetLink[j].classList.remove('active');
//             e.target.classList.add('active');
            
//         }
//         for(let k=0; k<tabContent.length; k++){
//             tabContent[k].style.display='none'
//         }
//         document.getElementById(tabTarget).style.display='block';
        
//     });
// }



