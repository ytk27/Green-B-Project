
// ************************
// index 전체 마우스 휠 이벤트
// ************************

$(document).ready(function () {
    // 모바일 사이즈 등록하기
    let mql = window.matchMedia("(max-width: 480px)");

    function handleScrollEvent(e) {
        e.preventDefault();

        const sections = $("section");
        const footer = $("footer");
        let currentSection = 0;

        sections.each(function (index) {
            if ($(window).scrollTop() >= $(this).offset().top - $(window).height() / 2) {
                currentSection = index;
            }
        });

        if (e.originalEvent.deltaY > 0) {
            if (currentSection < sections.length - 1) {
                $("html, body").stop().animate(
                    { scrollTop: $(sections[currentSection + 1]).offset().top },
                    600
                );
            } else {
                $("html, body").stop().animate({ scrollTop: footer.offset().top }, 600);
            }
        } else {
            if ($(window).scrollTop() >= footer.offset().top - $(window).height() / 2) {
                $("html, body").stop().animate(
                    { scrollTop: $(sections[sections.length - 1]).offset().top },
                    600
                );
            } else if (currentSection > 0) {
                $("html, body").stop().animate(
                    { scrollTop: $(sections[currentSection - 1]).offset().top },
                    600
                );
            }
        }
    }

    function checkMobile() {
        if (mql.matches) {
            // 모바일이면 wheel 끄기
            $(document).off("wheel", handleScrollEvent);
        } else {
            // 데스크톱이면 wheel 키기
            $(document).on("wheel", handleScrollEvent);
        }
    }

    checkMobile();
    mql.addEventListener("change", checkMobile);
});


// *************
// section2 슬라이드
// *************

// 첫 번째 이미지에 'active' 클래스 추가
const imgWraps = document.querySelectorAll(".img-wrap");
imgWraps[0].classList.add("active");

function clearActiveImage() {
    imgWraps.forEach(wrap => wrap.classList.remove("active"));
}

imgWraps.forEach((wrap) => {
    wrap.onclick = function (event) {
        event.stopPropagation();
        if (!wrap.classList.contains("active")) {
            clearActiveImage();
            wrap.classList.add("active");
        }
    };
});

window.addEventListener("click", () => {
    clearActiveImage();
    imgWraps[0].classList.add("active");
});

// *************
// section4 탭 메뉴
// *************

$(document).ready(function(){
    
    $('ul.tabs li').click(function(){
        var tab_id = $(this).attr('data-tab');

        $('ul.tabs li').removeClass('current');
        $('.tab-content').removeClass('current');
        
        $(this).addClass('current');
        $("#"+tab_id).addClass('current');
    })

})

// *************
// section4 탭 메뉴 사운드버튼
// *************

var track3 = new Audio();
track3.src = './srcs/music/foodsong.wav';

var customPlayButton = document.getElementById("customPlayButton");
var playButtonImage = customPlayButton.querySelector("img");

customPlayButton.addEventListener("click", function () {
    if (track3.paused) {
        track3.play();
        playButtonImage.src = "./img/index/index_tabcontsong_02.png";
    } else {
        track3.pause();
        playButtonImage.src = "./img/index/index_tabcontsong_01.png";
    }
});


// *************
// section5 swiper 
// *************

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

// **********************
// section6 random image
// **********************

$(document).ready(function () {
    // imglist-1 배열
    const imglist1Data = [
        { link: "https://news.pulmuone.co.kr/pulmuone/newsroom/viewNewsroom.do?id=1312", imgSrc: "./img/index/index_mediaimg_01.jpg" },
        { link: "https://news.pulmuone.co.kr/pulmuone/newsroom/viewNewsroom.do?id=1777", imgSrc: "./img/index/index_mediaimg_02.jpg" },
        { link: "https://news.pulmuone.co.kr/pulmuone/newsroom/viewNewsroom.do?id=1313", imgSrc: "./img/index/index_mediaimg_03.jpg" },
        { link: "https://news.pulmuone.co.kr/pulmuone/newsroom/viewNewsroom.do?id=1314", imgSrc: "./img/index/index_mediaimg_04.jpg" },
        { link: "https://news.pulmuone.co.kr/pulmuone/newsroom/viewNewsroom.do?id=1826", imgSrc: "./img/index/index_mediaimg_05.jpg" }
    ];

    // imglist-2 배열
    const imglist2Data = [
        { link: "https://youtu.be/fjiPWNKNJIU", imgSrc: "./img/index/index_mediaimgs_01.jpg" },
        { link: "https://youtu.be/2urLsOOWtQA", imgSrc: "./img/index/index_mediaimgs_02.jpg" },
        { link: "https://youtu.be/6e2jXPPMN7Y", imgSrc: "./img/index/index_mediaimgs_03.jpg" },
        { link: "https://youtu.be/dW05jeXvZDY?si=COmerhs4q4pA6Zk_", imgSrc: "./img/index/index_mediaimgs_04.jpg" },
        { link: "https://youtu.be/1eSHnEpyk7U?si=5O-wwHNrtmqWjJK_", imgSrc: "./img/index/index_mediaimgs_05.jpg" },
        { link: "https://youtu.be/rRiv7DcazXc?si=w39uyc3_ztK8ki_C", imgSrc: "./img/index/index_mediaimgs_06.jpg" },
        { link: "https://youtu.be/jOb6HQAtjcY?si=B1tG-1LtjkM14Dbe", imgSrc: "./img/index/index_mediaimgs_07.jpg" },
        { link: "https://youtu.be/NaZByPA1Ng0?si=XzbgozMtnty8Ydjf", imgSrc: "./img/index/index_mediaimgs_08.jpg" },
        { link: "https://youtu.be/bjMr00cTzg0?si=MeFUNLpgVeMfJRj5", imgSrc: "./img/index/index_mediaimgs_09.jpg" },
        { link: "https://youtu.be/zM_CgYPTD5Y?si=W0eXElla0XGKk7YM", imgSrc: "./img/index/index_mediaimgs_10.jpg" },
        { link: "https://youtu.be/dSIuzbIazC8?si=x0dKDhIs9ziPsY_1", imgSrc: "./img/index/index_mediaimgs_11.jpg" },
        { link: "https://youtu.be/KYLvO9ldrQk?si=j9A7NchKNk8Y8ZHV", imgSrc: "./img/index/index_mediaimgs_12.jpg" }
    ];

    // imglist-1
    const randomImglist1 = imglist1Data[Math.floor(Math.random() * imglist1Data.length)];
    $(".imglist-1 a").attr("href", randomImglist1.link);
    $(".imglist-1 img").attr("src", randomImglist1.imgSrc);

    // imglist-2 중복없이 4개 넣기
    function getRandomImages(arr, num) {
        let result = [];
        let tempArr = [...arr];

        for (let i = 0; i < num; i++) {
            const randomIndex = Math.floor(Math.random() * tempArr.length);
            result.push(tempArr[randomIndex]);
            // 선택한거 삭제 (중복방지)
            tempArr.splice(randomIndex, 1);
        }

        return result;
    }

    // 랜덤으로 4개 선택
    const randomImages = getRandomImages(imglist2Data, 4);

    // li에 넣기
    $(".imglist-2 ul li").each(function(index) {
        const selectedImage = randomImages[index];
        $(this).find("a").attr("href", selectedImage.link);
        $(this).find("img").attr("src", selectedImage.imgSrc);
    });
});


// *****************
// *****************
// 반응형 스크립트 모음
// *****************
// *****************



// **********************
// tablet section2 slider
// **********************

$(document).ready(function() {
    $(".small-img").click(function() {
        var newSrc = $(this).attr("data-img");
        var newTitle = $(this).attr("data-title");
        var newDesc = $(this).attr("data-desc");

        $("#main-img").attr("src", newSrc);
        $("#main-title").text(newTitle);
        $("#main-desc").text(newDesc);

        $(".small-img").removeClass("active");
        $(this).addClass("active");
    });
});

// section5 뉴스 데이터 관리

const newsData = [
    [
        {
            link: "https://www.industrynews.co.kr/news/articleView.html?idxno=60203",
            imgSrc: "./img/index/index_newsimg_01.jpg",
            text: "풀무원, 새만금 김 육상 양식 사업 위해\n민·관·학 협약 체결…“기술개발 및 확산”"
        },
        {
            link: "https://www.metroseoul.co.kr/article/20250213500203",
            imgSrc: "./img/index/index_newsimg_02.jpg",
            text: "풀무원, S&P Global 2024년\n지속가능성 평가에서 2년 연속 Top5 선정"
        }
    ],
    [
        {
            link: "https://www.foodnews.co.kr/news/articleView.html?idxno=111705",
            imgSrc: "./img/index/index_newsimg_03.jpg",
            text: "풀무원 뮤지엄김치간, \n올해 7500명 대상 ‘김치학교’ 운영"
        },
        {
            link: "https://www.k-health.com/news/articleView.html?idxno=76965",
            imgSrc: "./img/index/index_newsimg_04.jpg",
            text: "풀무원투게더, ‘올해의 편한 일터’\n 고용노동부 장관상 수상"
        }
    ],
    [
        {
            link: "https://www.asiae.co.kr/article/2025021008411049835",
            imgSrc: "./img/index/index_newsimg_05.jpg",
            text: "풀무원다논, '액티비아 150g'\n 출시…한 컵으로 아침식사 해결"
        },
        {
            link: "https://www.insightkorea.co.kr/news/articleView.html?idxno=218261",
            imgSrc: "./img/index/index_newsimg_06.jpg",
            text: "올가홀푸드, 정월대보름 \n안심먹거리 기획전 진행"
        }
    ]
];

let currentPage = 0;

function updateNews() {
    const newsWrapper = document.getElementById("newsWrapper");
    const pageNumberElement = document.querySelector(".news-page-number");
    
    // 기존 뉴스 없앰
    newsWrapper.innerHTML = "";

    // 현재 페이지 뉴스 추가
    newsData[currentPage].forEach(news => {
        const newsContainer = document.createElement("div");
        newsContainer.classList.add("news-container");

        newsContainer.innerHTML = `
            <a href="${news.link}" target="_blank">
                <img src="${news.imgSrc}" alt="뉴스 이미지">
                <div class="news-text">
                    <b>${news.text}</b>
                </div>
            </a>
        `;

        newsWrapper.appendChild(newsContainer);
    });

    pageNumberElement.textContent = `${currentPage + 1} / ${newsData.length}`;

    document.getElementById("prevBtn").disabled = currentPage === 0;
    document.getElementById("nextBtn").disabled = currentPage === newsData.length - 1;
}

document.getElementById("prevBtn").addEventListener("click", () => {
    if (currentPage > 0) {
        currentPage--;
        updateNews();
    }
});

document.getElementById("nextBtn").addEventListener("click", () => {
    if (currentPage < newsData.length - 1) {
        currentPage++;
        updateNews();
    }
});

updateNews();
