
jQuery(document).ready(function ($) {
    $('#text_box').val('Hi');

    $("#text_box").on("propertychange input", function () {
        console.log("hi");
        // Save current value of the text box
        $('#text_box').data("oldVal", $('#text_box').val);
        // Look for changes in value
        $('#text_box').val('changed');

        $('#text_box').data("oldVal", $('#text_box').val);

    
    })
})


