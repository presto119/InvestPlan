$(document).ready(function(){
    var $sec3_arr = [
        ["invest-01.jpg", "Newyork in USA", "Our vision is to be one of the most trusted providers of investment management expertise and long-term financial security."],
        ["invest-02.jpg", "Tokyo in Japan", "Japan is transforming – the world’s third largest economy is actively opening its doors to foreign business. It is creating the best possible environment for..."],
        ["invest-03.jpg", "Sydney in Australia", "The Australian Government welcomes foreign investment. As the Australian Government's investment promotion agency, Austrade works to inform ..."],
        ["invest-04.jpg", "Istanbul in Turkey", "If you are looking to raise money for a fund or build relationships for future opportunities, then this is the place to be."]
    ];

    var $bongdari = ``;
    var $box = `
        <div class="box">
            <div class="img_part"></div>
            <div class="txt_part">
                <h3></h3>
                <p></p>
            </div>
            <div class="more_btn">
                <img src="./img/arrow_right.svg" alt="더보기 버튼 이미지">
            </div>
        </div>
    `;
    for(i in $sec3_arr){
        $bongdari += $box;
    };
    $("#sec3 .cont").append($bongdari);
    $("#sec3 .box").each(function(index){
        $(this).find(".img_part").css("background-image",`url(./img/${$sec3_arr[index][0]})`);
        $(this).find("h3").text($sec3_arr[index][1]);
        $(this).find("p").text($sec3_arr[index][2]);
    });
    
});