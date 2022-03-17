// cannibalized from activity 19.3-3

// $(".searchButton").on("click", function(){
//     $(".searchButton").toggleClass("active");
//     if ($(".searchButton").hasClass("active")) {
//         $(".searchBar").css("height", "100vh");
//         $("#searchForm").css("opacity","1");
//         $(".searchIcon").removeClass("fa-search").addClass("fa-times");
//     } 
//     else {
//         $(".searchBar").css('height', "0vh");
//         $("#searchForm").css("opacity","0");
//         $(".searchIcon").removeClass("fa-times").addClass("fa-search");
//     }
// });

// $(".toggle").click(function(){
//     $(this).find(".toggleContainer").toggleClass("active");
//     $(this).siblings(".toggle").find(".toggleContainer").removeClass("active");
// });


// $(".card").on("click", function(){
//     $(".searchButton").toggleClass("active");
//     if ($(".searchButton").hasClass("active")) {
//         $(".searchBar").css("height", "100vh");
//         $("#searchForm").css("opacity","1");
//         $(".searchIcon").removeClass("fa-search").addClass("fa-times");
//     } 
//     else {
//         $(".searchBar").css('height', "0vh");
//         $("#searchForm").css("opacity","0");
//         $(".searchIcon").removeClass("fa-times").addClass("fa-search");
//     }
// });

// this isnt going to be an if-else thing if its just a click and animaiton on loading... but I SHOULD be able to make it fade out after a time. just not sure why it aint doing that yet. //

// I'm thinking about this wrong. It needs to just appear when you transition, like the preload spinner on activity 19.3-3.//



// $(".toggle").click(function(){
//     $(this).find(".toggleContainer").toggleClass("active");
//     $(this).siblings(".toggle").find(".toggleContainer").removeClass("active");
// });

function fade (){
    $(".batBun").fadeOut("slow");
}
setTimeout(fade, 550);
