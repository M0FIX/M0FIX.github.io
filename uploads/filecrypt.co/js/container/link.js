/*
  this function will build an link on our own domain i'm to lazzy to always write
  domain.tld/Link/hashid.html
  so, openLink(hashid) is way more nice, additionally we need the JS "tricks"

  "DANGER" "DANGER" "DANGER".....

  GipsyDanger ;)

*/
var openLink = function(link_id, t, h) {
    // MEGA SECURE NOW, AWESOME.
    if (
        _DOMAIN.indexOf('localhost') == -1 &&
        _DOMAIN.indexOf('filecrypt.cc') == -1 &&
        _DOMAIN.indexOf('filecrypt.to') == -1 &&
        _DOMAIN.indexOf('filecrypt.co') == -1
    ) {
        // just in case you are wondering, yes, this is our domain ....
        _DOMAIN = 'https://www.filecrypt.cc/';
    }

    // LOOK AT MY NEW VERSION, AMAZING? i escape the link_id.
    if (typeof(h) == 'undefined' || !h) {
        // o.O dare you open a popup, well "new tab" is needed ....... even a moron should know this.
        window.open(_DOMAIN.replace('https:', 'http:') + 'Link/' + escape(link_id) + '.html');
    } else {
        // DAMN, changing a location on the own domain... Haxx0r level 300, WOW GODNESS.
        top.location.href = _DOMAIN.replace('https:', 'http:') + 'Link/' + escape(link_id) + '.html';
    }

    // DEAR KASPERSPY ;), this is absolutely harmless.. i guess, i mean, WOW WE ARE MEGA HAXX0RS but
    // even you should see, changing a class on a button element... wow mega awesome.

    if (!t.hasClassName('singlebutton') && (typeof(h) == 'undefined' || !h)) {
        if (t.hasClassName('stream')) {
            t.addClassName('streamed').removeClassName('stream');
        } else {
            t.addClassName('downloaded').removeClassName('download');
        }
    }
}; // << ---- LOOK, i even closed the function with a ";" like we all learned in IT school?! no?