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

if(document.querySelector(".btn_open")) {
    $(".btn_open").click(function() {
        $(this).toggleClass("active");
    });
}

if(document.querySelector("#modal-card1")) {
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