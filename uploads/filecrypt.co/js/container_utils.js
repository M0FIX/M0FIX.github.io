var Navegador_ = (window.navigator.userAgent || window.navigator.vendor || window.opera),
    Firfx = /Firefox/i.test(Navegador_),
    Mobile_ = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(Navegador_),
    FirfoxMobile = (Firfx && Mobile_);

var li = new Array();

function crear_select() {
    var div_cont_select = $$("[data-mate-select='active']");
    var select_ = '';
    for (var e = 0; e < div_cont_select.length; e++) {
        div_cont_select[e].setAttribute('data-indx-select', e);
        div_cont_select[e].setAttribute('data-selec-open', 'false');
        var ul_cont = $$("[data-indx-select='" + e + "'] > .cont_list_select_mate > ul");
        ul_cont[0].update('')

        select_ = $$("[data-indx-select='" + e + "'] >select")[0];
        //console.log("select_ is : ", select_, select_.value)
        if (Mobile_ || FirfoxMobile) {
            select_.addEventListener('change', function() {
                _select_option(select_.selectedIndex, e);
            });
        }
        var select_optiones = select_.options;
        $$("[data-indx-select='" + e + "']  > .selecionado_opcion ")[0].setAttribute('data-n-select', e);
        $$("[data-indx-select='" + e + "']  > .icon_select_mate ")[0].setAttribute('data-n-select', e);
        for (var i = 0; i < select_optiones.length; i++) {
            li[i] = document.createElement('li');
            //console.log("i", i, select_optiones[i].selected, select_.selectedIndex, select_.options)
            if (select_optiones[i].selected == true || select_.value == select_optiones[i].innerHTML) {
                li[i].className = 'active';
                document.querySelector("[data-indx-select='" + e + "']  > .selecionado_opcion ").innerHTML = select_optiones[i].innerHTML;
            };
            li[i].setAttribute('data-index', i);
            li[i].setAttribute('data-selec-index', e);
            // funcion click al selecionar
            li[i].addEventListener('click', function() {
                _select_option(this.getAttribute('data-index'), this.getAttribute('data-selec-index'));
            });

            li[i].innerHTML = select_optiones[i].innerHTML;
            ul_cont[0].appendChild(li[i]);

        }; // Fin For select_optiones
    }; // fin for divs_cont_select
} // Fin Function



var cont_slc = 0;

function open_select(idx) {
    var idx1 = idx.getAttribute('data-n-select');
    var ul_cont_li = $$("[data-indx-select='" + idx1 + "'] .cont_select_int > li");
    var hg = 0;
    var slect_open = $$("[data-indx-select='" + idx1 + "']")[0].getAttribute('data-selec-open');
    var slect_element_open = $$("[data-indx-select='" + idx1 + "'] select")[0];
    if (Mobile_ || FirfoxMobile) {
        if (window.document.createEvent) { // All
            var evt = window.document.createEvent("MouseEvents");
            evt.initMouseEvent("mousedown", false, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
            slect_element_open.dispatchEvent(evt);
        } else if (slect_element_open.fireEvent) { // IE
            slect_element_open.fireEvent("onmousedown");
        }
    } else {


        for (var i = 0; i < ul_cont_li.length; i++) {
            hg += ul_cont_li[i].offsetHeight;
        };
        if (slect_open == 'false') {
            $$("[data-indx-select='" + idx1 + "']")[0].setAttribute('data-selec-open', 'true');
            $$("[data-indx-select='" + idx1 + "'] > .cont_list_select_mate > ul")[0].style.maxHeight = Math.min(200, hg) + "px";
            $$("[data-indx-select='" + idx1 + "'] > .cont_list_select_mate > ul")[0].style.marginTop = '-80px'
            $$("[data-indx-select='" + idx1 + "'] > .cont_list_select_mate > ul")[0].style.opacity = 1;

            $$("[data-indx-select='" + idx1 + "'] > .icon_select_mate")[0].style.transform = 'rotate(180deg)';
        } else {
            $$("[data-indx-select='" + idx1 + "']")[0].setAttribute('data-selec-open', 'false');
            $$("[data-indx-select='" + idx1 + "'] > .icon_select_mate")[0].style.transform = 'rotate(0deg)';
            $$("[data-indx-select='" + idx1 + "'] > .cont_list_select_mate > ul")[0].style.maxHeight = "0px";
            $$("[data-indx-select='" + idx1 + "'] > .cont_list_select_mate > ul")[0].style.marginTop = "20px";
            $$("[data-indx-select='" + idx1 + "'] > .cont_list_select_mate > ul")[0].style.opacity = 0;
        }
    }

} // fin function open_select

function salir_select(indx) {
    var select_ = $$("[data-indx-select='" + indx + "'] > select")[0];
    $$("[data-indx-select='" + indx + "'] > .cont_list_select_mate > ul")[0].style.maxHeight = "0px";
    $$("[data-indx-select='" + indx + "'] > .cont_list_select_mate > ul")[0].style.marginTop = "20px";
    $$("[data-indx-select='" + indx + "'] > .cont_list_select_mate > ul")[0].style.opacity = 0;

    document.querySelector("[data-indx-select='" + indx + "'] > .icon_select_mate").style.transform = 'rotate(0deg)';
    $$("[data-indx-select='" + indx + "']")[0].setAttribute('data-selec-open', 'false');
}


function _select_option(indx, selc) {
    if (Mobile_ || FirfoxMobile) {
        selc = selc - 1;
    }
    var li_s = $$("[data-indx-select='" + selc + "'] .cont_select_int > li");
    var p_act = $$("[data-indx-select='" + selc + "'] > .selecionado_opcion")[0].innerHTML = li_s[indx].innerHTML;
    var select_optiones = $$("[data-indx-select='" + selc + "'] > select > option");
    for (var i = 0; i < li_s.length; i++) {
        if (li_s[i].className == 'active') {
            li_s[i].className = '';
        };
        li_s[indx].className = 'active';

    };
    select_optiones[indx].selected = true;
    salir_select(selc);
    try {
        selectionHasChanged($$("[data-indx-select='" + selc + "']")[0]);
    } catch (e) {}

}