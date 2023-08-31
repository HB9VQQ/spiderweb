
/* 
 * script loaded inline page in order to prepare data
 * for next operations
 * Moreover, add an event to the button of the filter form
 */
//var my_adxo_events=jQuery.parseJSON(my_adxo_events_json.replaceAll("\t",""));

var my_adxo_events=JSON.parse(my_adxo_events_json.replaceAll('\t',''));

refresh_timer(); //run first data fetch
var myRefresh = setInterval(refresh_timer, timer_interval_json);
window.onload = () => {
	document.getElementById('form-filters').addEventListener('submit', mySearch);
};

document.getElementById('MyClockDisplay').addEventListener('load',showTime());

$( '#dxcalls' ).select2( {
    theme: "bootstrap-5",
    width: $( this ).data( 'width' ) ? $( this ).data( 'width' ) : $( this ).hasClass( 'w-100' ) ? '100%' : 'style',
    placeholder: $( this ).data( 'placeholder' ),
    closeOnSelect: true,
	selectionCssClass: 'select2--small',
	dropdownCssClass: 'select2--small',
    tags: true
} );