// $(document).ready(function() {
//     $('.rating .fa-star').click(function() {
//         $('.rating .active-rating').removeClass('active-rating');
//         $(this).toggleClass('active-rating');
//     });
// });

$(document).ready(function() {
    let rating = 0;

    $('.rating .fa-star').click(function() {
        rating = $(this).index() + 1;  // Get the index of the clicked star and add 1 to get the rating value
        $('#rating-value').val(rating);  // Set the value of the hidden input

        // Remove 'active-rating' class from all stars
        $('.rating .fa-star').removeClass('active-rating');

        // Add 'active-rating' class to all stars up to the clicked one
        $(this).prevAll().addBack().addClass('active-rating');
    });
});
