$(".img-item").click(function(w){
    let y = $(w.target).attr("src");
    $(".parent").attr("src", y)
})