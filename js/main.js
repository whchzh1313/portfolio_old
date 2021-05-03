$(document).ready(function () {
    // 0] 페이지 이동시 로딩화면 반복
    var _loadBg = $('#load_bg');
    var _filter = $('#filter li');
    var _gallery = $('#gallery');
    var _pageAll = $('#section .page');

    function loadEvent() {
        _loadBg.fadeIn();
        setTimeout(function () {
            _loadBg.fadeOut(1000);
        }, 1400);
    }
    loadEvent();

    $('#page2').find('p').fadeOut();
    // 1] nav li 클릭시 page 이동 = margin-left - i"00vw"
    var _navBtn = $('#nav ul li a');
    var pageIdx
    _navBtn.on('click', function () {
        var pageIdx = $(this).parent('li').index();
        var pageNum = pageIdx + 1;
        var _page = $('#page' + pageNum);

        _loadBg.fadeIn(400);
        setTimeout(function () {
            /* 좌우 이동형식 */
            /* if ($('#section .page').width() > 1400) {
                $('#section').css({
                    marginLeft: "-" + pageIdx + "00vw"
                });
            } else {
                $('#section').css({
                    marginLeft: "-100" * pageIdx + "vw"
                });
            } */

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
                $('#page2').find('p').each(function (idx) {
                    $(this).stop().delay(idx*300 + 2000).fadeIn(400);
                });
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
        setTimeout (function () {    
            window.scrollTo({top:0})
            _pageAll.addClass('hide_scroll');
            _page.removeClass('hide_scroll');
        }, 1000);

        return false;

    });
    // 1-1] resize 이벤트
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
    var pofIdx = 1;
    var _pofContent = $('#page3 > .wrap > .pof');
    $('#pof_page a').on('click', function (e) {
        e.preventDefault();
        if ($(this).index() === 0 && pofIdx > 1) {
            pofIdx--
        }else if ($(this).index() === 1) {
            pofIdx = 1;
        }else if ($(this).index() === 2) {
            pofIdx = 2;
        }else if ($(this).index() === 3) {
            pofIdx = 3;
        }else if ($(this).index() === 4) {
            pofIdx = 4;
        }else if ($(this).index() === 5 && pofIdx < 4) {
            pofIdx++
        }
        console.log(pofIdx);
        $('#pof_page a').removeClass('on');
        $('#pof_page a').eq(pofIdx).addClass('on');
        function hide () {
            _pofContent.children().animate({opacity: 0}, 600).delay(600);
        }
        function show () {
            _pofContent.children().animate({opacity: 1}, 600);
        }
        if (pofIdx === 1){
            hide();
            setTimeout (function () {
                _pofContent.removeClass('pof_1 pof_2 pof_hide');
            $('#pof3').addClass('pof_hide').removeClass('pof_1effect pof_2effect');
            $('#pof4').addClass('pof_hide').removeClass('pof_1effect pof_2effect');
            $('#pof5').addClass('pof_hide').removeClass('pof_1effect pof_2effect');
            $('#pof1').addClass('pof_1 pof_1effect');
            $('#pof2').addClass('pof_2 pof_2effect');
            }, 600);
            
            show();
        }else if (pofIdx === 2){
            hide();
            setTimeout (function () {
                _pofContent.removeClass('pof_1 pof_2 pof_hide');
            $('#pof1').addClass('pof_hide').removeClass('pof_1effect pof_2effect');
            $('#pof4').addClass('pof_hide').removeClass('pof_1effect pof_2effect');
            $('#pof5').addClass('pof_hide').removeClass('pof_1effect pof_2effect');
            $('#pof2').addClass('pof_1 pof_1effect');
            $('#pof3').addClass('pof_2 pof_2effect');
            }, 600);
            
            show();
        }else if (pofIdx === 3){
            hide();
            setTimeout (function () {
                _pofContent.removeClass('pof_1 pof_2 pof_hide');
            $('#pof1').addClass('pof_hide').removeClass('pof_1effect pof_2effect');
            $('#pof2').addClass('pof_hide').removeClass('pof_1effect pof_2effect');
            $('#pof5').addClass('pof_hide').removeClass('pof_1effect pof_2effect');
            $('#pof3').addClass('pof_1 pof_1effect');
            $('#pof4').addClass('pof_2 pof_2effect');
            }, 600);
            
            show();
        }else if (pofIdx === 4){
            hide();
            setTimeout (function () {
                _pofContent.removeClass('pof_1 pof_2 pof_hide');
            $('#pof1').addClass('pof_hide').removeClass('pof_1effect pof_2effect');
            $('#pof2').addClass('pof_hide').removeClass('pof_1effect pof_2effect');
            $('#pof3').addClass('pof_hide').removeClass('pof_1effect pof_2effect');
            $('#pof4').addClass('pof_1 pof_1effect');
            $('#pof5').addClass('pof_2 pof_2effect');
            }, 600);
            
            show();
        }
    });
    /* 
        .pof_1 포트폴리오 왼쪽
        .pof_2 포트폴리오 오른쪽 사진만 보이는것
        .pof_hide 포트폴리오 숨기기
        #pof_page 의 a로 이동
     */
    // 4] page4 design 필터에 따라 보여지는 이미지 교체

        _filter.children().on('click', function (e) {
            e.preventDefault();
            var viewItem = $(this).attr('href');
            _gallery.find('.gal_content').fadeOut();
            _gallery.find(viewItem).each(function (idx) {
                $(this).stop().delay(idx*200 + 1000).fadeIn(400);
            });

        _filter.children().removeClass('view_page');
        $(this).children().addClass('view_page');
    });

    // 5] page4 이미지 클릭시 큰 이미지 보기, 보기 종료
    _gallery.find('.gal_content').on('click', function () {
        /* console.log($(this).children().attr("src"));
        console.log($(this).children().attr("src").slice(-4));
        console.log($(this).children().attr("src").slice(0, -4));
        console.log('<div id="bigImg">'+'<img src="'+$(this).children().attr("src").slice(0, -4+"_b"+$(this).children().attr("src").slice(-4)+'" alt="">'+'</div>'); */
        $('#section').after(
            '<div id="bigImg">'+'<img src="'+$(this).children().attr("src").slice(0, -4)+"_b"+(this).children().attr("src").slice(-4)+'" alt="">'+'</div>'
        );
        // bigImg 변수저장
        var _bigImg = $('#bigImg');
        _bigImg.on('click', function () {
            $(this).remove();
        });
        
        $(document).on('keydown', function (e) {
            console.log(e.keyCode);
            if (e.keyCode == 27) {
                _bigImg.remove();
            }
        });
    });
    
    $(window).on('keydown', function (e) {
        
        console.log(e.keyCode);
            left = 37
            right = 39
        
       if (e.keyCode === 37 || e.keyCode === 39) {
           e.preventDefault();
       }
    });
});