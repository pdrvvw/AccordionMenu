$(document).ready(function () {
    $(".accordion ul").hide()
    $(".accordion article").hide()
    $(".accordion div.title").click(function () {
        $(this).next().toggle(150)
    })
    $(".accordion div.inner-title").click(function () {
        $(this).next().toggle(150)
    })
})