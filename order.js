$(document).ready(function(){ 
    $('input[type="radio"]').click(function(){//
        var inputValue = $(this).attr("value"); //get the selected value for radio input
        var targetBox = $("." + inputValue); // select element with inputValue as class
        $(".box").not(targetBox).hide(); //hide all other elements
        $(targetBox).show(); //make sure to show the element
    });
});