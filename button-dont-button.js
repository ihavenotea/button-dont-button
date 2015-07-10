$.fn.buttonDontButton = function() {
    dontButton = function(event) {
        event.preventDefault();
        event.stopPropagation();
        alert("Button Don't Button!");
    }
    this.click(dontButton);
    return this;
};
