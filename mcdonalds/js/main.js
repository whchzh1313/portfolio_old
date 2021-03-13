$(document).ready(function () {
    // 1] #nav > ul > li > a 에 마우스가 들어가면 ul에 class active
    // 1] #nav > ul > li > a 에 마우스가 들어가면 #headerBg height 520px;
    // 1-1] ul에 active가 들어가면 흰색 밑줄(top: 140px) 한개 노란밑줄 한개(top: 390px) //css제어
    // 1-2] li에 마우스가 들어가면 바로옆 a ::after 노란밑줄 //css제어
    var _nav = $('#gnb');
    var _headerBg = $('#headerBg');
    
    _nav.find('>ul >li').on('mouseenter focusin', function () {
        $(this).find('a').addClass('on');
        _headerBg.addClass('active');
    });
    _nav.find('>ul li').on('mouseleave focusout', function () {
        $(this).children().removeClass('on');
    });
    _headerBg.on('mouseleave focusout', function () {
        _headerBg.removeClass('active');
    });
    // 2] search btn 클릭시 모달 열기
    var _searchBtn = $('#search_modal');
    var _search = $('#search');
    var _searchClose = $('#btnSearchClose');
    _searchBtn.on('click', function() {
        _search.addClass('active');
        $('body, html').css('overflow-y', 'hidden');
    });
    _searchClose.on('click', function () {
        _search.removeClass('active');
        $('body, html').css('overflow-y', 'inherit');
    });
    // 3] 스크롤 내리면(140px) nav fixed
    $(window).on('scroll', function(){
        var scrollY = $(this).scrollTop();
        if (scrollY >= 140) $('#header').addClass('fixed')
        else $('#header').removeClass('fixed');
    });
    // 4] 슬라이더 구현
    var _slide = $('#slide');
    var _slideImg = $('#slideImg');
    var _slidePrev = $('#slidePrev');
    var _slideNext = $('#slideNext');
    var _slideStoper = $('#slideStoper');
    // 슬라이드 다음페이지
    // margin값을 100vw만큼 뺀 다음 클론을 만들어 뒤로 넘긴다.
    function slideNext () {
        _slideImg.animate({marginLeft: '-100vw'}, 400, function () {
            _slideImg.append(_slideImg.children().eq(0).clone());
            _slideImg.css({marginLeft: 0});
            _slideImg.children().eq(0).remove();
        });
    };
    _slideNext.on('click', function () {
        slideNext();
    });
    // 슬라이드 이전페이지 
    // margin값을 100vw만큼 빼는것과 동시에 마지막 페이지의 클론을 만들어 앞으로 넘긴후 마진값을 0으로 바꾼다.
    function slidePrev () {
        _slideImg.css({marginLeft: '-100vw'}).prepend(_slideImg.children().eq(2).clone()).animate({marginLeft: 0}, 400, function () {
            _slideImg.children().eq(3).remove();
        });
    };
    _slidePrev.on('click', function () {
        slidePrev();
    });
    // 일정 시간이 지날떄마다 슬라이드가 다음페이지로.
    var _slideOrangeBar = $('#slideOrangeBar');
    var _slideStoper = $('#slideStoper');
    
    var autoSlide = setInterval (function () {
        _slideOrangeBar.animate({width: '100%'}, 3000, function () {
            slideNext();
            _slideOrangeBar.css({width: 0});
        });
    });
    
    _slideStoper.on('click', function () {
        if ($(this).hasClass('play')) {
            $(this).removeClass('play').addClass('pause');
            _slideOrangeBar.css({width: 0});
            clearInterval(autoSlide);
        } else {
            $(this).removeClass('pause').addClass('play');
        }
    });
    // 5] noticeViewMore 클릭시 li 6개씩 더 공개
    var _notice = $('#notice');
    var _noticeHeight = $('#notice').height(); // top고정떄 사용
    var _noticeViewMore = $('#noticeViewMore');
    var _noticeContent = $('#notice').children('#noticeContent').children();
    var _viewMoreIdx = 0
    _noticeViewMore.on('click', function () {
        console.log('hide_notice'+_viewMoreIdx);
        _noticeContent.removeClass('hide_notice'+_viewMoreIdx);
        _viewMoreIdx++;
        if (_viewMoreIdx === 2) {
            $(this).remove();
        }
        docHeight = $(document).height();
    });
    // 6] 일정스크롤까지 내려가면 맥딜리버리아이콘 TOP 버튼 고정
    var docHeight = $(document).height();
    var footerHeight = $('#footer').height();
    var _quickMenu = $('#quickMenu');
    $('#quickHold').css({height: _noticeHeight});
    $(window).on('scroll', function () {
        var scrollY = $(this).scrollTop();
        scrollY += scrollY;
        var footerHold = docHeight - footerHeight + 70 + _viewMoreIdx*876
        
        if (scrollY >= footerHold) {
            _quickMenu.addClass('quick_absolute');
        } else {
            _quickMenu.removeClass('quick_absolute');
        }
    });
});