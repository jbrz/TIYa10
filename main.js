// Define a function to hide / show each paragraph on 'click.'

$('.minionz').toggleClass('gtfo',true);
$('.savage').toggleClass('gtfo',true);
$('.sadness').toggleClass('gtfo',true);

$('#topdown').on('click', function(){
  $('.minionz').toggleClass('gtfo').addClass('sup');
  $('.sadness').toggleClass('gtfo',true);
  $('.savage').toggleClass('gtfo',true);
})

$('#middleout').on('click', function(){
  $('.minionz').toggleClass('gtfo',true);
  $('.savage').toggleClass('gtfo').addClass('sup');
  $('.sadness').toggleClass('gtfo',true);
})

$('#bottomup').on('click', function(){
  $('.minionz').toggleClass('gtfo',true);
  $('.savage').toggleClass('gtfo',true);
  $('.sadness').toggleClass('gtfo').addClass('sup');
})