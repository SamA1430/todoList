$("document").ready(function(){
    var number = 0;
    function addItem(name){
        if (/^\s*$/.test($("#new").val()) == false){
            $("#todoItems").append('<li class="items"><input type="checkbox">'+name+'<button type="button" class="delete">Delete</button></li>');
        }};

    $("body").on("click",".delete",function(){
        $(this).parent().remove();
    });

    $("#addTodo").click(function(){
        var name = $("#new").val();
        addItem(name);
        $("#new").val("")
    })
});