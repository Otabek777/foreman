$(".header__burgir").click(function() {
    $(this).toggleClass("active");
    $(".header__navbar").toggleClass("active");
});
$(".header .city p").click(function() {
    $(this).toggleClass("active");
});
if(document.querySelector(".switching")) {
    $(".switching #btn1").click(function() {
        $(".switching #btn1").addClass("active");
        $(".switching #btn2").removeClass("active");
    });
    $(".switching #btn2").click(function() {
        $(".switching #btn2").addClass("active");
        $(".switching #btn1").removeClass("active");
    });
};
if(document.querySelector(".cabinet__content_switch")) {
    $(".cabinet__content_switch #btn1").click(function() {
        $(".cabinet__content_switch #btn1").addClass("active");
        $(".cabinet__content_switch #btn2").removeClass("active");
    });
    $(".cabinet__content_switch #btn2").click(function() {
        $(".cabinet__content_switch #btn2").addClass("active");
        $(".cabinet__content_switch #btn1").removeClass("active");
    });
}
if(document.querySelector(".open-admin-menu")) {
    $(".open-admin-menu").click(function() {
        $(".cabinet__aside").addClass("active")
    });
    $(".cabinet__aside_close").click(function() {
        $(".cabinet__aside").removeClass("active")
    });
};

if(document.querySelector(".btn_open")) {
    $(".btn_open").click(function() {
        $(this).toggleClass("active");
    });
}
if(document.querySelector(".technique__block")) {
    $(".technique__block .like").click(function() {
        $(this).toggleClass("active");
    });
}
if(document.querySelector(".open_filter")) {
    $(".open_filter").click(function() {
        $(".equipment__aside").toggleClass("active");
    });
    $(".close_filter").click(function() {
        $(".equipment__aside").removeClass("active");
    });
}

if(document.querySelector(".modal")) {
    $(".modal_close").click(function() {
        $(".modal").removeClass("active");
    });
    $(".modal__btn2").click(function() {
        $(".modal").removeClass("active");
    });
    $(".modal__btn").click(function() {
        $(".modal").removeClass("active");
    });
    $(".card__right .btn1").click(function() {
        $("#modal-card1").addClass("active")
    });
    $(".card__right .btn2").click(function() {
        $("#modal-card2").addClass("active")
    });
};
if(document.querySelector(".cabinet_ads__item .options")) {
    $(".cabinet_ads__item .options .btn").click(function() {
        $(this).toggleClass("active")
    });
};
if(document.querySelector(".open_date")) {
    $(".open_date").click(function() {
        $(".create_ads__right").addClass("open");
    });
};

if(document.querySelector(".chat_content")) {
    jQuery(".chat_content").scrollTop($(".chat_content")[0].scrollHeight);
}

if(document.querySelector('.input_phone')) {
    window.addEventListener("DOMContentLoaded", function() {
        [].forEach.call( document.querySelectorAll('.tel'), function(input) {
        var keyCode;
        function mask(event) {
            event.keyCode && (keyCode = event.keyCode);
            var pos = this.selectionStart;
            if (pos < 3) event.preventDefault();
            var matrix = "+7 (___) ___ ____",
                i = 0,
                def = matrix.replace(/\D/g, ""),
                val = this.value.replace(/\D/g, ""),
                new_value = matrix.replace(/[_\d]/g, function(a) {
                    return i < val.length ? val.charAt(i++) || def.charAt(i) : a
                });
            i = new_value.indexOf("_");
            if (i != -1) {
                i < 5 && (i = 3);
                new_value = new_value.slice(0, i)
            }
            var reg = matrix.substr(0, this.value.length).replace(/_+/g,
                function(a) {
                    return "\\d{1," + a.length + "}"
                }).replace(/[+()]/g, "\\$&");
            reg = new RegExp("^" + reg + "$");
            if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) this.value = new_value;
            if (event.type == "blur" && this.value.length < 5)  this.value = ""
        }
    
        input.addEventListener("input", mask, false);
        input.addEventListener("focus", mask, false);
        input.addEventListener("blur", mask, false);
        input.addEventListener("keydown", mask, false)
    
      });
    
    });
}

$('.select').each(function() {
    const _this = $(this),
        selectOption = _this.find('option'),
        selectOptionLength = selectOption.length,
        selectedOption = selectOption.filter(':selected'),
        duration = 450; // длительность анимации 

    _this.hide();
    _this.wrap('<div class="select"></div>');
    $('<div>', {
        class: 'new-select',
        text: _this.children('option:disabled').text()
    }).insertAfter(_this);

    const selectHead = _this.next('.new-select');
    $('<div>', {
        class: 'new-select__list'
    }).insertAfter(selectHead);

    const selectList = selectHead.next('.new-select__list');
    for (let i = 1; i < selectOptionLength; i++) {
        $('<div>', {
            class: 'new-select__item',
            html: $('<span>', {
                text: selectOption.eq(i).text()
            })
        })
        .attr('data-value', selectOption.eq(i).val())
        .appendTo(selectList);
    }

    const selectItem = selectList.find('.new-select__item');
    selectList.slideUp(0);
    selectHead.on('click', function() {
        if ( !$(this).hasClass('on') ) {
            $(this).addClass('on');
            selectList.slideDown(duration);

            selectItem.on('click', function() {
                let chooseItem = $(this).data('value');

                $('select').val(chooseItem).attr('selected', 'selected');
                selectHead.text( $(this).find('span').text() );

                selectList.slideUp(duration);
                selectHead.removeClass('on');
            });

        } else {
            $(this).removeClass('on');
            selectList.slideUp(duration);
        }
    });
});

if(document.querySelector("#calendar")) {
    function calendar(id, year, month) {
        var Dlast = new Date(year, month + 1, 0).getDate(),
          D = new Date(year, month, Dlast),
          DNlast = new Date(D.getFullYear(), D.getMonth(), Dlast).getDay(),
          DNfirst = new Date(D.getFullYear(), D.getMonth(), 1).getDay(),
          calendar = '<tr>',
          month = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
        if (DNfirst != 0) {
          for (var i = 1; i < DNfirst; i++) calendar += '<td>';
        } else {
           for (var i = 0; i < 6; i++) calendar += '<td>';
        }
        for (var i = 1; i <= Dlast; i++) {
           if (i == new Date().getDate() && D.getFullYear() == new Date().getFullYear() && D.getMonth() == new Date().getMonth()) {
            calendar += '<td class="today">' + i;
           } else {
             calendar += '<td>' + i;
           }
           if (new Date(D.getFullYear(), D.getMonth(), i).getDay() == 0) {
             calendar += '<tr>';
           }
        }
        for (var i = DNlast; i < 7; i++) calendar += '<td> ';
        document.querySelector('#' + id + ' tbody').innerHTML = calendar;
        document.querySelector('#' + id + ' thead td:nth-child(2)').innerHTML = month[D.getMonth()] + ' ' + D.getFullYear();
        document.querySelector('#' + id + ' thead td:nth-child(2)').dataset.month = D.getMonth();
        document.querySelector('#' + id + ' thead td:nth-child(2)').dataset.year = D.getFullYear();
        if (document.querySelectorAll('#' + id + ' tbody tr').length < 6) { 
            // чтобы при перелистывании месяцев не "подпрыгивала" вся страница, добавляется ряд пустых клеток. Итог: всегда 6 строк для цифр
        document.querySelector('#' + id + ' tbody').innerHTML += '<tr><td> <td> <td> <td> <td> <td> <td> ';
        }
      }
      calendar("calendar", new Date().getFullYear(), new Date().getMonth());
            // переключатель минус месяц
      document.querySelector('#calendar thead tr:nth-child(1) td:nth-child(1)').onclick = function() {
        calendar("calendar", document.querySelector('#calendar thead td:nth-child(2)').dataset.year, parseFloat(document.querySelector('#calendar thead td:nth-child(2)').dataset.month) - 1);
      }
            // переключатель плюс месяц
      document.querySelector('#calendar thead tr:nth-child(1) td:nth-child(3)').onclick = function() {
        calendar("calendar", document.querySelector('#calendar thead td:nth-child(2)').dataset.year, parseFloat(document.querySelector('#calendar thead td:nth-child(2)').dataset.month) + 1);
      }
}