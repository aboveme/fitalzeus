$(document).ready(function() {
    var plinks = [{
        name: 'nerve',
        plink: 'https://steamcommunity.com/profiles/76561197964620722'
    }, {
        name: 'nimble',
        plink: 'https://steamcommunity.com/profiles/76561198360097342'
    }, {
        name: 'carter',
        plink: 'https://steamcommunity.com/profiles/76561198254782322'
    }, {
        name: 'foxo',
        plink: 'https://steamcommunity.com/profiles/76561198339130603'
    },
	];
    for (var i in plinks) {
        var plink = plinks[i];
        $('#marquee').append('<a href="' + plink.plink + '"target="_blank">' + plink.name + '</a>');
        var plink = $('#marquee').children('a').last();
        if (i != plinks.length - 1) {
            $('#marquee').append(' // ')
        }
    }
    $('#marquee').marquee({
        duration: 11000,
        gap: 310,
        delayBeforeStart: 0,
        direction: 'left',
        duplicated: true
    })
});