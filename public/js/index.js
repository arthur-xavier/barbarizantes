// index.js

$(document).ready(function() {

  var reload = function() {
    $('.nav li a').click(function() {
      loadView($(this).attr('href').substr($(this).attr('href').indexOf("#") + 1));
      $('.nav li').removeClass('active');
      $(this).parent().addClass('active');
    })

    $('.featurette').click(function() {
      if($(this).hasClass('show')) {
        $(this).fadeTo("medium", 1.0);
        $(this).find('.hide').slideDown("medium");
      } else {
        $(this).fadeTo("medium", 0.75);
        $(this).find('.hide').slideUp("medium");
      }
      $(this).toggleClass('show');
    });
  };

  var loadView = function(view) {
    $.ajax({
      url: "/views/" + view + ".html",
      beforeSend: function() {
        $('#content').html('<img class="loader" src="/img/loader.gif" />');
      },
      success: function(data) {
        $('#content').html(data);

        reload();
      }
    });
  };

  if(location.href.indexOf("#") < 0)
    loadView("inicio");
  else
    loadView(location.href.substr(location.href.indexOf("#") + 1));
});
