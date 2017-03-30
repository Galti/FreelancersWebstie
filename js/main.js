var portfolioItems = [
    {
        name: 'Mercedes-Benz',
        image: 'img/portfolio/mersedes-benz.jpg',
        linkToGo: 'http://www.google.com'
    }, {
        name: 'Metro',
        image: 'img/portfolio/metro.jpg',
        linkToGo: 'http://www.google.com'
    }, {
        name: 'National Gallery',
        image: 'img/portfolio/national-gallery.jpg',
        linkToGo: 'http://www.google.com'
    }, {
        name: 'Zvartnoc',
        image: 'img/portfolio/zvartnoc.jpg',
        linkToGo: 'http://www.google.com'
    }
];

$(document).ready(function(){
    insertPortfolios();
    test();
    $(window).resize(function () {
        test();
    });
    $('.project').on('click', function() {
        var name = $(this).text().replace(' ', '');
        portfolioItems.forEach(function (obj){
            if(obj.name === name) {
                // window.location.replace(obj.linkToGo);
                window.location.href = obj.linkToGo;
            }
            console.log(obj);
        })
    });

    // $('#menu-button').on('click', function(){
    //     alert('aa');
    // });
});



$('#menu-button-open').on('click', function(){
    if(!isMenuOpen){
        isMenuOpen = !isMenuOpen;
        $nav.css('left', 0);
        $nav.css('top', 0);
        $body.css('overflow-y', 'hidden');
    }
});

$('#menu-button-close').on('click', function(){
    if(isMenuOpen){
        isMenuOpen = !isMenuOpen;
        $nav.css('left', '-100%');
        $nav.css('top', '-100%');
        $body.css('overflow-y', 'auto');
    }
});

$('#arrow-down').on('click', function() {
    $('html, body').animate({
        scrollTop: $("section").offset().top
    }, 500);
});

function test(){
    $('header').css('height', window.innerHeight - 120 + 'px');
    $('#portfolios').css('margin-left', window.innerWidth - 587 - 50 + 'px');
    $('#arrow-down').css('margin-top', window.innerHeight - 160 + 'px');
    $('#welcome-text').css('width', window.innerWidth - 587 - 50 + 'px');
}

function insertPortfolios() {
    portfolioItems.forEach(function (obj) {
        $('#portfolios').append(
            "<div class='project'>" +
                "<img class='projectImage' src=" + obj.image + "> " +
                "<div class='projectName'><span>" + obj.name + "</span></div>" +
            "</div>"
        )
    });

    var content = "<ul>";

    portfolioItems.forEach(function(obj){
        content += "<li><a href=" +obj.linkToGo + ">" + obj.name + "</a>" + "</li>";
    });

    content += "</ul>";
    $('#portfolios-list').append(content);
}

function aaa(){
    if(isMenuOpen) {
        // var value =

    } else if(!isMenuOpen){

    }
}
