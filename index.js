
$(document).ready(function()
{
    $("span").hide();
        $("#add").click(function()
        {
            $("#new").toggleClass("hidden");
            $( "input" ).blur(function() 
            {
                $( "input" ).css( "border","none" );

            });
        });
    
    $("#new").keypress(function(event)
        { 
             if(event.which == 13)
             {
                $("ul").append('<li class="list-group-item"><span class="bg-danger text-light trash"><i class="fa fa-trash"></i></span>'+$("#new").val()+'</li>');
                $("span").hide();
                $('#new').val('');
                $("li").on("click","span",function()
                {
                    $(this).parent().remove();
                });
             } 
        
        });

    $("li").on("click","span",function()
        {
            $(this).parent().remove();
        });                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         
   
    $("ul").on("click","li",function()
        {
            $(this).toggleClass("done");
        });
    $("ul").on("mouseenter", "li", function()
        {
            $(this).find("span").show();
        });
    $("ul").on("mouseleave", "li", function()
        {
            $(this).find("span").hide();
        });

    $( "input" ).focus(function() 
        {
            $( "input" ).css( "border-color","none" );

        });
    $( "input" ).blur(function() 
        {
            $( "input" ).css( "border","none" );

        });
});


