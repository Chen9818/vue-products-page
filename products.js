function hideLoader() {
    $('#loading').fadeOut('slow');
}

$(window).on("load",hideLoader);

// Strongly recommended: Hide loader after 20 seconds, even if the page hasn't finished loading
setTimeout(hideLoader, 20 * 1000);