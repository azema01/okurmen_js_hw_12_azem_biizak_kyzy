//#1
$(document).ready(function(){
    $("#hello").text("Салам, дүйнө!");
});


// #2

$(document).ready(function(){
    $("#button").click(function(){
        $("<p>").text("Бул текст динамикалык түрдө түзүлдү").appendTo("#hello");
    });
});

//#3

$(document).ready(function(){
    $("#myList li").addClass("list-item");

    const listItem = $('.list-item');

    listItem.each(function (index) {
        $(this).text(`Item ${index}`);
    });
    const input = $('input[type="text"]');

    console.log(input.val('i love js'));

});

//#4

$(document).ready(function(){
    $("a").attr("target", "_blank");
    
});



