$('.slider').each(function() {
  var $this = $(this);
  var $group = $this.find('.slide_group');
  var $slides = $this.find('.slide');
  var bulletArray = [];
  var currentIndex = 0;
  var timeout;
  
  function move(newIndex) {
    var animateTop, slideTop;
    
    advance();
    
    if ($group.is(':animated') || currentIndex === newIndex) {
      return;
    }
    
    bulletArray[currentIndex].removeClass('active');
    bulletArray[newIndex].addClass('active');
    
    if (newIndex > currentIndex) {
      slideTop = '100%';
      animateTop = '-100%';
    } else {
      slideTop = '-100%';
      animateTop = '100%';
    }
    
    $slides.eq(newIndex).css({
      display: 'block',
      top: slideTop
    });
    $group.animate({
      top: animateTop
    }, function() {
      $slides.eq(currentIndex).css({
        display: 'none'
      });
      $slides.eq(newIndex).css({
        top: 0
      });
      $group.css({
        top: 0
      });
      currentIndex = newIndex;
    });
  }
  
  function advance() {
    clearTimeout(timeout);
    timeout = setTimeout(function() {
      if (currentIndex < ($slides.length - 1)) {
        move(currentIndex + 1);
      } else {
        move(0);
      }
    }, 4000);
  }
  
  $('.next_btn').on('click', function() {
    if (currentIndex < ($slides.length - 1)) {
      move(currentIndex + 1);
    } else {
      move(0);
    }
  });
  
  $('.previous_btn').on('click', function() {
    if (currentIndex !== 0) {
      move(currentIndex - 1);
    } else {
      move(3);
    }
  });
  
  $.each($slides, function(index) {
    var $button = $('<a class="slide_btn">&bull;</a>');
    
    if (index === currentIndex) {
      $button.addClass('active');
    }
    $button.on('click', function() {
      move(index);
    }).appendTo('.slide_buttons');
    bulletArray.push($button);
  });
  
  advance();
});

$(function () {
    $('.menu_icon').click(function () {
        $('.mobile_menu').slideToggle('show');
    });
    $(window).resize(function() {      
      $('.mobile_menu').removeAttr('style');
    });
});
$(document).ready(function(){
    $('.bth_top').click(function (){
        if(!$('.search').parents('.header_bottm').children('.search').hasClass('search_transfotm')){
            $(this).parents('.header_bottm').children('.search').addClass('search_transfotm');
            $('.bth_top').addClass('op');
        }
    });
});
$(document).ready(function(){
    $('.bth_bottom').click(function (){
        if($('.search').parents('.header_bottm').children('.search').hasClass('search_transfotm')){
          $(this).parents('.header_bottm').children('.search').removeClass('search_transfotm');
          $('.bth_top').removeClass('op');
        } 
    });
});

$(document).ready(function(){
    $('.menu_item a').click(function(){
        if($(this).parents('.navbar').children('.menu_mobile').hasClass('show')){
          $(this).parents('.navbar').children('.menu_mobile').removeClass('show');
        } 
    });
});
$(document).ready(function(){
    $('.menu_icon').click(function (){
        if(!$('.menu_icon').hasClass('menu_transform')){
            $(this).addClass('menu_transform');
            $(this).children('.line').hide();
        } else {
            $('.menu_icon').removeClass('menu_transform');
            $('.line').show();
        }
    });
});

$(document).ready(function(){
    $('.menu_item a').click(function(){
        if($(this).parents('.menu_mobile').hasClass('show')){
          $(this).parents('.navbar').children('.menu_mobile').removeClass('show');
        } 
    });
});