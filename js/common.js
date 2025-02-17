// append
$('body').append('<div class="t1"></div>');
$('body').append('<div class="t2"></div>');
$('.t1').load('./include.html header')
$('.t2').load('./include.html footer',inc)


// include
function  inc() {
    // header script
    $('body').prepend($('.t1').html());
    $('body').append($('.t2').html());
    $('.t1, .t2').remove();

    $('.navigation > li').each(function () {
        let hideTimer;

        $(this).hover(
            function () {
                clearTimeout(hideTimer);
                $(this).find('> div').stop(true, true).slideDown(200); // <div> 내부의 서브 메뉴를 열기
            },
            function () {
                const submenu = $(this).find('> div');
                hideTimer = setTimeout(function () {
                    submenu.stop(true, true).slideUp(200);
                }, 400); // 0.5초 뒤에 숨김
                $(this).data('hideTimer', hideTimer);
            }
        );
    });


    const hamMenu = document.querySelector('.header-icons');
        const navDown = document.querySelector('.nav-down');
        const body = document.body;

        hamMenu.onclick = () => {
            const isActive = navDown.classList.toggle('active');
            hamMenu.classList.toggle('active');

            if (isActive) {
                body.style.overflow = 'hidden'; // 스크롤 방지
            } else {
                body.style.overflow = 'auto'; // 스크롤 활성화
            }
        };



        // footer script
        document.querySelectorAll('.dropbtn').forEach(button => {
            button.addEventListener('click', function(event) {
                const dropdownContent = event.target.nextElementSibling;

                document.querySelectorAll('.dropdown-content1, .dropdown-content2, .dropdown-content3').forEach(content => {
                    if (content !== dropdownContent) {
                        content.style.display = 'none';
                    }
                });

                if (dropdownContent.style.display === 'block') {
                    dropdownContent.style.display = 'none';
                } else {
                    dropdownContent.style.display = 'block';
                }
            });
        });

        window.addEventListener('click', function(event) {
            if (!event.target.closest('.dropdown1, .dropdown2, .dropdown3')) {
                document.querySelectorAll('.dropdown-content1, .dropdown-content2, .dropdown-content3').forEach(content => {
                    content.style.display = 'none';
                });
            }
        });
}

