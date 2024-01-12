$("#customize").on("click", function(){
    $(".customize__options").slideToggle();
  });
  
  $(function() {
    // Use event delegation to handle click events on .pages__tab
    $(document).on("click", ".pages__tab", function() {
      // Find the sibling div and toggle it
      $(this).siblings("div").first().slideToggle();
    });
  });