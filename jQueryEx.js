
// element find
$el.find('.class').each(function (index, item) {
    console.log(item); //dom element
    console.log($(this).outerWidth( true )); // contain Margin element width 
    console.log($(this).outerWidth()); // except Margin element width 
});

// css 설정
var max = 200;
$el.find('.class').css('width',(max / 10) + 'rem');
