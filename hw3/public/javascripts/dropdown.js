// Author: Joshua Krasnogorov
// JavaScript/JQuery code for dropdown, Credit to ChatGPT for outline

$(document).ready(function() {
    var defaultMonth = 'Jan'; // Default month
        $('#dropdownButton').text(defaultMonth); // Set default month
    
    // Enable scrolling with mouse wheel when hovering over the dropdown
    $('.dropdown-content').on('mousewheel DOMMouseScroll', function(e) {
        var scrollTo = null;
        if (e.type === 'mousewheel') {
            scrollTo = (e.originalEvent.wheelDelta * -1);
        } else if (e.type === 'DOMMouseScroll') {
            scrollTo = 40 * e.originalEvent.detail;
        }
        if (scrollTo) {
            e.preventDefault();
            $(this).scrollTop(scrollTo + $(this).scrollTop());
        }
    });

    // Set selected month when an item is clicked
    $('.dropdown-content a').click(function(event) {
        event.preventDefault(); // Prevent default link behavior
        var selectedMonth = $(this).data('value'); // Get the data-value attribute
        $('#dropdownButton').text(selectedMonth); // Update the button text
    });
});