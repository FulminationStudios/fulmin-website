var main = function() {
  var activeTab = $('.Tab').first();
  activeTab.addClass('ActiveTab');
  activeTab.removeClass('Tab');
  
  var nextTab = activeTab.next();
  nextTab.addClass('Tab');
  nextTab.removeClass('ActiveTab');
  $('.Tab').click(function () {
    activeTab = $(this);
  });
};
$(document).ready(main);
