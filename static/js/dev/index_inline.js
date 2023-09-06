
/* 
 * script loaded inline page in order to prepare data
 * for next operations
 * Moreover, add an event to the button of the filter form
 */
//var my_adxo_events=jQuery.parseJSON(my_adxo_events_json.replaceAll("\t",""));

var my_adxo_events=JSON.parse(my_adxo_events_json.replaceAll('\t',''));

// refresh_timer(); //run first data fetch
var myRefresh = setInterval(refresh_timer, timer_interval_json);
window.onload = () => {
	document.getElementById('form-filters').addEventListener('submit', mySearch);
};

document.getElementById('MyClockDisplay').addEventListener('load',showTime());

$(document).ready(function() {
    var filterIds = ["dxcalls","band", "mode", "exclft8", "exclft4","de_re", "dx_re", "cqdeInput", "cqdeInput", "cqdxInput"];
    filterIds.forEach(function(filterId) {
        var $thisFilter = $('#' + filterId);
        var thisKey = 'filter:' + filterId;
        var value = Cookies.get(thisKey);
        if (value) {
            if (filterId === "exclft8" || filterId === "exclft4") {
                $thisFilter.prop("checked", value === "true");
            } else {
                $thisFilter.val(JSON.parse(value));
            }
        }
        if (filterId ==="dxcalls") {
            $( '#dxcalls' ).select2( {
                theme: "bootstrap-5",
                width: $( this ).data( 'width' ) ? $( this ).data( 'width' ) : $( this ).hasClass( 'w-100' ) ? '100%' : 'style',
                placeholder: $( this ).data( 'placeholder' ),
                closeOnSelect: true,
                selectionCssClass: 'select2--small',
                dropdownCssClass: 'select2--small',
                tags: true
            } );
        }
        $thisFilter.change(function() {
            Cookies.set(thisKey, filterId === "exclft8" || filterId === "exclft4" ? $(this).prop("checked") ? "true" : "false" : JSON.stringify($(this).val()));
        })
    })
    refresh_timer();
})