$(function(){
    //함수를 실행한다.
    start();
    var imgs=2;//0,1,2까지 총 3장의 이미지를 변수에 저장한다.
    var now=2;//0번째 사진부터 시작한다.

    //시작함수만들기
    function start(){
        //이미지의 첫번째 요소와 형제들에게 이미지를 나타나게 하는 구문
        $('.brewery_left img').eq(0).siblings().fadeIn(5000);
        //3초마다 fade 된다.
        setInterval(function(){slide();},5000);
    };

    //slide함수만들기
    function slide(){
        //변수 now와 변수 img의 값이 같다면 now의 값에 1을 더한 값을 대입한다.
        now=now==imgs?0:now+=1;
        //이전이미지는 사라진다.
        $('.brewery_left img').eq(now-1).fadeOut(3000);
        //현재이미지는 나타난다.
        $('.brewery_left img').eq(now).fadeIn(3000);
    };
});

$(function(){
    //함수를 실행한다.
    start();
    var imgs=2;//0,1,2까지 총 3장의 이미지를 변수에 저장한다.
    var now=2;//0번째 사진부터 시작한다.

    //시작함수만들기
    function start(){
        //이미지의 첫번째 요소와 형제들에게 이미지를 나타나게 하는 구문
        $('.brewery_mobile_photo1 img').eq(0).siblings().fadeIn(5000);
        //3초마다 fade 된다.
        setInterval(function(){slide();},5000);
    };

    //slide함수만들기
    function slide(){
        //변수 now와 변수 img의 값이 같다면 now의 값에 1을 더한 값을 대입한다.
        now=now==imgs?0:now+=1;
        //이전이미지는 사라진다.
        $('.brewery_mobile_photo1 img').eq(now-1).fadeOut(3000);
        //현재이미지는 나타난다.
        $('.brewery_mobile_photo1 img').eq(now).fadeIn(3000);
    };
});