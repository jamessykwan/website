$(document).ready(function () {
    $("#text_box").on("propertychange", function (event) {
        // Save current value of the text box
        this.data("oldVal", this.val());
        // Look for changes in value
        if (this.data("oldVal") != this.val()) {
            this.data("oldVal", this.val());
        }
    })
})


