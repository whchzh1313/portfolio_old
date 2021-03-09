$(document).ready(function () {
    // 0] 페이지 이동시 로딩화면 반복
    var _loadBg = $('#load_bg');
    var _filter = $('#filter li');
    var _gallery = $('#gallery');

    function loadEvent() {
        _loadBg.fadeIn();
        setTimeout(function () {
            _loadBg.fadeOut(1000);
        }, 1400);
    }
    loadEvent();
    _gallery.find('li').eq(3).addClass('gal_mr');
    _gallery.find('li').eq(7).addClass('gal_mr');

    // 1] nav li 클릭시 page 이동 = margin-left - i"00vw"
    var _navBtn = $('#nav ul li a');
    var pageIdx
    _navBtn.on('click', function () {
        var pageIdx = $(this).parent('li').index();

        _loadBg.fadeIn(400);
        setTimeout(function () {

            if ($('#section .page').width() > 1400) {
                $('#section').css({
                    marginLeft: "-" + pageIdx + "00vw"
                });
            } else {
                $('#section').css({
                    marginLeft: -1400 * pageIdx + "px"
                });
            }

            /* nav 버튼 색상 변경 이벤트 */
            function makeViewPage() {
                _navBtn.removeClass('view_page view_page_orange');
                _navBtn.eq(pageIdx).addClass('view_page');
            }

            function makeViewPageOrange() {
                _navBtn.removeClass('view_page view_page_orange');
                _navBtn.eq(pageIdx).addClass('view_page_orange');
            }
            if (pageIdx === 0) {
                makeViewPage();
            } else if (pageIdx === 1) {
                makeViewPageOrange();
            } else if (pageIdx === 2) {
                makeViewPage();
            } else if (pageIdx === 3) {
                makeViewPageOrange();
            } else {
                makeViewPageOrange();
            }
            if (pageIdx === 2) {
                $('#header > h1 > a > img').attr('src', 'images/hm_w.png');
            } else {
                $('#header > h1 > a > img').attr('src', 'images/hm_b.png');
            }

        }, 400);
        loadEvent();


        return false;

    });
    // 1-1] resize 이벤트가 안됩니다!
    $(window).resize(function () {
        if ($('#section .page').width() > 1400) {
            $('#section').css({
                marginLeft: "-" + pageIdx + "00vw"
            });
        } else {
            $('#section').css({
                marginLeft: -1400 * pageIdx + "px"
            });
        }
    });
    // 2] page2 화면 생성이펙트
    // 3] page3 포트폴리오 페이지 이동

    // 4] page4 design 필터에 따라 보여지는 이미지 교체
    _filter.on('click', function (e) {
        e.preventDefault();
        console.log($(this).children());
        if ($(this).index() === 0) {
            _gallery.find('li').fadeOut(600, function() {
                _gallery.find('li').removeClass('gal_mr')
            }).delay(800).siblings('.gal_banner').fadeIn(600, function () {
                _gallery.find('.gal_banner').eq(3).addClass('gal_mr');
            });
            

        } else if ($(this).index() === 1) {
            _gallery.find('li').fadeOut(600, function() {
                _gallery.find('li').removeClass('gal_mr')
            }).delay(800).siblings('.gal_event').fadeIn(600, function () {
                _gallery.find('.gal_event').eq(3).addClass('gal_mr');
            });
            

        } else if ($(this).index() === 2) {
            _gallery.find('li').fadeOut(600, function() {
                _gallery.find('li').removeClass('gal_mr');
            }).delay(800).siblings('.gal_design').fadeIn(600, function () {
                _gallery.find('.gal_design').eq(3).addClass('gal_mr');
            });
            

        }

        function galleryMr() {
           eq(3).addClass('gal_mr');
           eq(7).addClass('gal_mr');
        }


        _filter.children().removeClass('view_page');
        $(this).children().addClass('view_page');
    });
});