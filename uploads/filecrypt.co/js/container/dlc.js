var DownloadDLC = function(dlc_id) {
    try {
        var $season = $('season_select').getValue();
        var $episode = $('episode_select').getValue();

        if ($episode != '' || $season != '') {
            window.open(_DOMAIN + 'DLC/' + dlc_id + '.dlc?episode=' + $episode + '&season=' + $season);
        } else {
            window.open(_DOMAIN + 'DLC/' + dlc_id + '.dlc');
        }
    } catch (e) {
        window.open(_DOMAIN + 'DLC/' + dlc_id + '.dlc');
    }
}