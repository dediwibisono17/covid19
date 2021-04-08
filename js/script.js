// time
function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('txt').innerHTML =
        h + ":" + m + ":" + s;
    var t = setTimeout(startTime, 500);
}

function checkTime(i) {
    if (i < 10) {
        i = "0" + i
    }; // add zero in front of numbers < 10
    return i;
}
// endtime

var url = 'https://api.kawalcorona.com/indonesia/';

var url_new = "https://api.covid19api.com/live/country/indonesia";
console.log(url_new);

var newDate = new Date();
var senin = newDate.getDay();
var getHari = newDate.getDate();
var getBulan = newDate.getMonth() + 1;
var getTahun = newDate.getFullYear();

var monthWording = {
    '1': 'Januari',
    '2': 'Februari',
    '3': 'Maret',
    '4': 'April',
    '5': 'Mei',
    '6': 'Juni',
    '7': 'Juli',
    '8': 'Agustus',
    '9': 'September',
    '10': 'Oktober',
    '11': 'November',
    '12': 'Desember',
}

var hariWording = {
    '1': 'Senin',
    '2': 'Selasa',
    '3': 'Rabu',
    '4': 'Kamis',
    '5': 'Jumat',
    '6': 'Sabtu',
    '0': 'Ahad'
}

var timeHighlight = `
    <div>${hariWording[senin]}, ${getHari} ${monthWording[getBulan]} ${getTahun}</div>
`

$("#waktu").append(timeHighlight);

$.ajax({
    url: url_new,
    type: 'GET',
    beforeSend: function() {
        $('body').addClass('opacity');
        $('.container').hide();
        $("#loading").show();
    },
    complete: function() {
        $("#loading").hide();
        $('.container').show();
        $('body').removeClass('opacity');
    },
    success: (response) => {


        var last_ = response.pop();
        var deaths = last_.Deaths.toLocaleString('en');
        var recovered = last_.Recovered.toLocaleString('en');
        var active = last_.Confirmed.toLocaleString('en');
        var dates = last_.Date.slice(0, 10);

        var minOne = response[83].Confirmed;
        var totalAct = last_.Confirmed;
        var totalActiveToday = totalAct - minOne;

        var minOne_die = response[83].Deaths;
        var totaldie = last_.Deaths;
        var totalDieToday = totaldie - minOne_die;

        var minOne_Recovered = response[83].Recovered;
        var totalRecovered = last_.Recovered;
        var totalRecoveredToday = totalRecovered - minOne_Recovered;


        $('#data').append(`
            
            <div class="row">
                <div class="col s12 m6 l6 xl4">
                        <div class="blocking card gradient-green white-text">
                            <div class="row">
                                <div class="col s4 m4">
                                    <i class="material-icons background-round mt-5">accessibility</i>
                                    <div class="text-center">${totalRecoveredToday.toLocaleString('en')}</div>
                                </div>
                                
                                <div class="col s8 m8 right-align">
                                    <h2>Sembuh</h2>
                                    <div class="value">${recovered}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                <div class="col s12 m6 l6 xl4">
                    <div class="blocking card gradient-cyan white-text">
                        
                        <div class="row">
                            <div class="col s4 m4">										
                                <i class="material-icons background-round mt-5">show_chart</i>
                                <div class="text-center">${totalActiveToday.toLocaleString('en')}</div>
                            </div>
                            
                            <div class="col s8 m8 right-align">
                                <h2>Positif</h2>
                                <div class="value">${active}</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col s12 m6 l6 xl4">
                    <div class="blocking card gradient-red white-text">
                        <div class="row">
                            <div class="col s4 m4">
                                <i class="material-icons background-round mt-5">warning</i>
                                <div class="text-center">${totalDieToday.toLocaleString('en')}</div>
                            </div>
                            
                            <div class="col s8 m8 right-align">
                                <h2>Meninggal</h2>
                                <div class="value">${deaths}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            `)



    }
});