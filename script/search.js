$(document).ready(function(){
    $(".search-button").click(function(){
        $(".search-number").toggle();
        $(".search-box").toggleClass("col-11");
        $(".search-button i").toggleClass("color-btn-change");
    });    
    $('#user-select').change(function(){
        $("#widthTempOption").html($('#user-select option:selected').text());
        $(this).width($("#selectTagWidth").width()); 
    });
    $('#price-select').change(function(){
        $("#widthTempOption2").html($('#price-select option:selected').text());
        $(this).width($("#selectTagWidth2").width()); 
    });
    $('[data-toggle="popover"]').popover();
});