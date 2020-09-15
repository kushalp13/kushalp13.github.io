$(document).ready(function(){
    //# is id selector 
    //initially hiding the contet to be shown if user clicks read more
    $('#hide').hide();
    $('#readmore').hide();

    //user clicks Read more (id = show) onclick we'll hide Read more button and show the hidden content
    $("#show").click(function(){
        $('#show').hide();
        $("#readmore").show();
        $('#hide').show();
    });

    //this is vice versa of above situation
    $("#hide").click(function(){
        $('#show').show();
        $("#readmore").hide();
        $('#hide').hide();
    });
});