function openDownloadModal(e, actionUrl) {
    e.preventDefault();

    $('.download-form').attr('action', actionUrl);
    $('#downloadModal').modal('show');

    return false;
}

function handleDownloadButton() {
    // Parse the needed data.
    let downloadForm = $('.download-form');
    let data = downloadForm.serialize();
    let url = downloadForm.attr('action');

    const buttonDownload = $('.download-button');
    const getKeyButton = $('.get-key-button');
    buttonDownload.prop('disabled', true);
    getKeyButton.prop('disabled', true);

    // Send the request to the backend.
    $.ajax({
        url: url,
        data: data,
        method: 'POST'
    }).done(function(data) {
        new swal({
            'icon': data.success ? 'success' : 'error',
            'html': data.message
        });
        buttonDownload.prop('disabled', false);
        getKeyButton.prop('disabled', false);
    }).fail(function() {
        new swal({
            'icon': 'error',
            'text': 'Unknown error.'
        });
        buttonDownload.prop('disabled', false);
        getKeyButton.prop('disabled', false);
    })
}