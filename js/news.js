$(document).ready(function(){
    var $box_arr = [
        ["news_01.jpg", "Uranium market not yet ready for Cameco restarts, says CEO", "Although uranium market challenges are easing, Cameco CEO Tim Gitzel says there is still far to go before the Canadian uranium company restarts operations at McArthur River/Key Lake. Gitzel made the comment during the presentation of its second quarter results yesterday...", "Jul-29-2019 03:32:55 PM"],
        ["news_02.jpg", "Nuclear remains UK’s main low-carbon energy source, despite outages", "The UK obtained 19% of its primary energy from low-carbon sources last year, with 39% of this from nuclear power, but this was 7% lower than in 2017 due to outages at Dungeness B and Hunterston B towards the end of 2018, official statistics published today show. Nuclear capacity was broadly the same as in 2017, at 9.3 GW...", "ul-26-2019 06:54:26 PM"],
        ["news_03.jpg", "Ohio clean energy bill becomes law", "Ohio's House of Representatives passed House Bill 6 yesterday at a session held earlier than the 1 August date that had been expected, and it was signed into law by Governor Mike DeWine. The law will provide clean energy credits to zero-emission power producers, including nuclear power plants...", "Jul-26-2019 06:54:26 PM"],
        ["news_04.jpg", "Olkiluoto faces further delay to July 2020", "Commissioning of the EPR at Olkiluoto in Finland has been delayed again, this time by six months to July 2020, utility Teollisuuden Voima Oyj (TVO) said yesterday. The new date was given in an updated schedule for the OL3 EPR plant unit from the plant supplier Areva-Siemens Consortium...", "ul-22-2019 11:29:24 AM"],
        ["news_05.jpg", "Welcome to InvestPlan LTD!", "Dear clients, We are glad to welcome you to our investment service. We started our company with a great idea for long cooperation. Energy Invest Corporation LTD investment service totally prepared for a long-term and mutually beneficial service for our clients...", "ul-16-2019 05:55:40 AM"]
    ];

    var $bongdari = ``;
    var $box = `
        <div class="box">
            <div class="img_part"></div>
            <div class="txt_part">
                <h3></h3>
                <p></p>
                <span></span>
            </div>
        </div>
    `;
    for(i in $box_arr){
        $bongdari += $box;
    };
    $("section .wrap .cont").append($bongdari);
    $("section .wrap .box").each(function(index){
        $(this).find(".img_part").css("background-image",`url(./img/sub/${$box_arr[index][0]})`);
        $(this).find("h3").text($box_arr[index][1]);
        $(this).find("p").text($box_arr[index][2]);
        $(this).find("span").text($box_arr[index][3]);
    });
});