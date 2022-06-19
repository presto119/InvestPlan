$(document).ready(function(){
    //$("지정한 대상의 선택자").load("가져올 외부파일", 콜백함수);
    //지정한 대상의 선택자에 가져올 외부파일을 넣고 그 이후에 콜백함수 내부의 실행문을 진행시켜라

    //외부파일을 가져왔을 때는 이벤트 걸기 위한 시점이 늦기때문에 콜백함수를 활용
    $("#header").load("./header.html", function(){
        var $hash = location.hash;
        console.log($hash);
        var $num_hash = $hash.replace("#","");
        console.log($num_hash);

        //var $href = location.href;
        //console.log($href);
    });
    

    $("#footer").load("./footer.html");

    $(window).scroll(function(){
        if($(document).scrollTop() > 0) {
        $("header").addClass("scroll");
        $("header .wrap .logo").addClass("scroll");
        $("header .wrap .logo img").addClass("scroll");
        $("header .wrap ul li a").addClass("scroll");
        } else {
        $("header").removeClass("scroll");
        $("header .wrap .logo").removeClass("scroll");
        $("header .wrap .logo img").removeClass("scroll");
        $("header .wrap ul li a").removeClass("scroll");
        }
    });
});