$("document").ready(function(){
    var number = 0;
    function addItem(name){
        if (/^\s*$/.test($("#new").val()) == false){
            $("#todoItems").append('<li class="items"><input class="check" type="checkbox">'+name+'<button type="button" class="delete">Delete</button></li>');
        }};

    $("body").on("click",".delete",function(){
        $(this).parent().remove();
    });

    $("#addTodo").click(function(){
        var name = $("#new").val();
        addItem(name);
        $("#new").val("")
    })

    $("body").on("click",".check",function(){
        if ($(this).is(":checked")){
            $(this).parent().css("background-color","green")
        }
        else{
            $(this).parent().css("background-color","white")
        }
    })
});