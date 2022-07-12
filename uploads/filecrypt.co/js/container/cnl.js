var CNL = function(container_id) {
    new Ajax.Request(location.protocol + '//' + location.hostname + '/CNL/' + container_id + '.html');
}
var receiveMessage = function(event) {
    //CNL(event.data);
}

function isChromeLike() {
    // Chrome/93.0.4577.82
    try {
        var m = String(navigator.appVersion).toLowerCase().match(/chrome\/(\d+)/);
        if (m && Number(m[1]) > 92) {
            return true;
        }
        return false;
    } catch (e) {
        return false;
    }
}

function get_browser() {
    var ua = navigator.userAgent,
        tem, M = ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
    if (/trident/i.test(M[1])) {
        tem = /\brv[ :]+(\d+)/g.exec(ua) || [];
        return {
            name: 'IE',
            version: (tem[1] || '')
        };
    }
    if (M[1] === 'Chrome') {
        tem = ua.match(/\bOPR|Edge\/(\d+)/)
        if (tem != null) {
            return {
                name: 'Opera',
                version: tem[1]
            };
        }
    }
    M = M[2] ? [M[1], M[2]] : [navigator.appName, navigator.appVersion, '-?'];
    if ((tem = ua.match(/version\/(\d+)/i)) != null) {
        M.splice(1, 1, tem[1]);
    }
    return {
        name: M[0],
        version: M[1]
    };
}

window.addEventListener('message', receiveMessage, false);
var CNLPOP = function(cnl, data0, data1, name) {
    var x = (window.innerWidth - 600) / 2;
    var y = (window.innerHeight - 280) / 2;

    var popLocation = _DOMAIN.replace('https:', 'http:') + 'helper.html?' + new Date().getTime();
    var br = get_browser();
    if (isChromeLike()) {
        popLocation = _DOMAIN.replace('http:', 'https:') + 'helper.html?' + new Date().getTime()
    }

    var win = window.open(popLocation, 'CNL', 'height=280,width=600,left=200,top=' + y + ',titlebar=no,toolbar=no,menubar=no,location=no,directories=no,status=no');

    var $season = '';
    var $episode = '';
    try {

        $season = $('season_select').getValue();
        $episode = $('episode_select').getValue();
    } catch (e) {}
    if ($episode != '' || $season != '') {
        CNL(cnl);
        new Ajax.Request(location.protocol + '//' + location.hostname + '/_CNL/' + $$('[name="hidden_cnl_id"]')[0].getValue() + '.html?season=' + $season + '&episode=' + $episode, {
            onComplete: function(js) {
                var json = js.responseText.evalJSON();
                console.log(json)
                if ('success' in json) {
                    console.log([json.data[0], json.data[1], cnl, name])
                    console.log(win.postMessage([json.data[0], json.data[1], cnl, name], '*'))
                    setTimeout(function() {
                        win.postMessage([json.data[0], json.data[1], cnl, name], '*')
                    }, 1000);
                } else {
                    win.postMessage([data0, data1, cnl, name], '*');
                }
            }
        });
    } else {
        try {
            win.onload = function() {
                win.postMessage([data0, data1, cnl, name], '*');
            };
        } catch (e) {}
        CNL(cnl);
        win.postMessage([data0, data1, cnl, name], '*');
        setTimeout(function() {
            win.postMessage([data0, data1, cnl, name], '*');
        }, 1000);
    }
}
/*new Ajax.Request(_DOMAIN+'GetCNLPopup', {
		parameters : {
			cnl : cnl,
			data0 : data0,
			data1 : data1
		},
		onComplete : function(js) {
			win.location = _DOMAIN+''
		}
	})*/