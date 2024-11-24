$(document).ready(function(){
    function animateBird() {
        $("#bird").animate(
            {left: '100px',
            top: '200px',
            height: '20px'}
            , 2000);
    }

    animateBird();
}); // End document ready