ibacor_repos(username);

function ibacor_repos(user) {
    $.ajax({
        url: 'https://api.github.com/users/'+user+'/repos',
        crossDomain: true,
        dataType: 'json'
    }).done(function (data) {
        var html = '';
        $.each(data, function(i, item) {
            html += '<li><a href="'+data[i].html_url+'" title="'+data[i].description+'">'+data[i].name+'</a><br><span class="description">'+data[i].description+'</span><br><span class="update">Dernière mise à jour: '+relative_time(data[i].pushed_at)+'</span></li>';
        });
        $('#github_repos').html(html);
    });
}

  // Afficher la dates des dépots //  
function relative_time(date_str) {
    if (!date_str) {return;}
    date_str = $.trim(date_str);
    date_str = date_str.replace(/\.\d\d\d+/,"");
    date_str = date_str.replace(/-/,"/").replace(/-/,"/");
    date_str = date_str.replace(/T/," ").replace(/Z/," UTC");
    date_str = date_str.replace(/([\+\-]\d\d)\:?(\d\d)/," $1$2");
    var parsed_date = new Date(date_str);
    var relative_to = (arguments.length > 1) ? arguments[1] : new Date(); 
    var delta = parseInt((relative_to.getTime()-parsed_date)/1000);
    delta=(delta<2)?2:delta;
    var r = '';
    if (delta < 60) {
        r = 'Maintenant';
    } else if(delta < 120) {
        r = '1 minute';
    } else if(delta < (45*60)) {
        r = (parseInt(delta / 60, 10)).toString() + ' minutes';
    } else if(delta < (2*60*60)) {
        r = '1 heure';
    } else if(delta < (24*60*60)) {
        r = '' + (parseInt(delta / 3600, 10)).toString() + ' heures';
    } else if(delta < (48*60*60)) {
        r = '1 jour';
    } else {
        r = (parseInt(delta / 86400, 10)).toString() + ' jours';
    }
    return r;
}

function addCommas(nStr)
{
    nStr += '';
    x = nStr.split('.');
    x1 = x[0];
    x2 = x.length > 1 ? '.' + x[1] : '';
    var rgx = /(\d+)(\d{3})/;
    while (rgx.test(x1)) {
        x1 = x1.replace(rgx, '$1' + ',' + '$2');
    }
    return x1 + x2;
}

