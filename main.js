$(document).ready(function () {
    $("#text_box").each(function () {
        var text = $(this);

        // Save current value of the text box
        text.data("oldVal", text.val());

        // Look for changes in value
        text.on("propertychange", function (event) {
            if (text.data("oldVal") != text.val) {
                text.val = "hi";
                text.data("oldVal", text.val());
            }

        })
    })
});
