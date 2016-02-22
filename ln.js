$('body').css('background','#fff');

elementos = [
    '#nacion-login-bar',
    '#teja-login-bar',
    '.md-breakingnews-wrapper',
    '#ad',
    '.md-advertisement',
    '.ad-split',
    '.gna-corp-onsite-bar',
    '.ad-wrap',
    '#LNA_background_paywall',
    '#LNA_contenidoTotal',
    '.per-plata-publicidad-plata',
    '.per-advertisement-plata',
    'div[style*="opacity: 0.9; position: absolute; top: 0px; left: 0px;"]',
    '#LNA_paywall_modal',
    '.alerta_susc_out',
    '#conteo_notas_paywall',
    '.suscribase',
    '#ground_right_x57',
    '#ground_left_x57',
    '.outbrain-wrapper',
    "[id*='ad-clicker']",
    "#ToolbarWrap",
    ".ToolbarInnerWrap",
    ".gna_footer_background",
    ".suscribase",
    "#conteo_notas_paywall"
    ]

$.each(elementos, function(index,element){
    $(element).ready(function() {
        $(element).remove();
    });
});


// Manage Cookies
// http://stackoverflow.com/questions/2144386/javascript-delete-cookie
function createCookie(name, value, days) {
    var expires = '';
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toGMTString();
    }
    document.cookie = name + "=" + value + expires + "; path=/";
}

function readCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

function eraseCookie(name) {
    createCookie(name, "", - 1);
    console.log('Eliminado Cookies de Nacion: erasedCookie %s', name);
}

eraseCookie('lanacion_session_id');

var allCookies = document.cookie.split(';');
for (var j = 0; j < allCookies.length; j++) {
    var name = allCookies[j].split('=')[0].trim(),
        value = readCookie(name);

    try {
        value = decodeURIComponent(value.replace(/\+/g, " "));
        value = JSON.parse(value);
        value['lw-allowed'] && eraseCookie(name);
        value['gnpw-allowed'] && eraseCookie(name);
    } catch (e) {}
}


