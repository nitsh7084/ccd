$(function(){

$('#price_title').parent().children('.option_body').hide();

$('.filter_option_title').bind('click',function(){
var option_body = $(this).parent().children('.option_body');
if(option_body.is(":visible")){
option_body.hide();
}else{
option_body.show();
}
});


$('.options_tab_single').bind('click',function(){
$('.options_tab_single').removeClass('selected_list');
$(this).addClass('selected_list');
var child = $(this).attr('data-product');
$('.options_body_single').removeClass('single_visible');
$('#options_'+child).addClass('single_visible');

});


});