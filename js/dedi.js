/*function totalCovid() {
            return new Promise(function(resolve) {
                $.ajax({
                    url: url,
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
                    success: function(response) {
                        var all_die = `${response[0].meninggal}`;
                        var all_positive = `${response[0].positif}`;
                        var all_recover = `${response[0].sembuh}`;

                        var proses_positive = all_positive.replace(/,/g, "");
                        var proses_die = all_die.replace(/,/g, "");
                        var proses_recover = all_recover.replace(/,/g, "");

                        var pars_die = parseInt(proses_die);
                        var pars_recover = parseInt(proses_recover);
                        var pars_positive = parseInt(proses_positive);

                        var persen_meninggal = pars_die / pars_positive * 100;
                        var persen_sembuh = pars_recover / pars_positive * 100;
                        var string_recover = persen_sembuh.toString();
                        var string_die = persen_meninggal.toString();
                        var substr_recover = string_recover.substring(0, 4)
                        var substr_die = string_die.substring(0, 4)
                        console.log(substr_die)
                        var style = `
							<div class="row">
								<div class="col s12 m6 l6 xl4">
										<div class="blocking card gradient-green white-text">
											<div class="row">
												<div class="col s7 m7">
													<i class="material-icons background-round mt-5">accessibility</i>
													<span class="small">${substr_recover}%</span>
												</div>
												
												<div class="col s5 m5 right-align">
													<h2>Sembuh</h2>
													<div class="value">${response[0].sembuh}</div>
												</div>
											</div>
										</div>
									</div>
								<div class="col s12 m6 l6 xl4">
									<div class="blocking card gradient-cyan white-text">
										
										<div class="row">
											<div class="col s7 m7">										
												<i class="material-icons background-round mt-5">show_chart</i>
											</div>
											
											<div class="col s5 m5 right-align">
												<h2>Positif</h2>
												<div class="value">${response[0].positif}</div>
											</div>
										</div>
									</div>
								</div>
								<div class="col s12 m6 l6 xl4">
									<div class="blocking card gradient-red white-text">
										<div class="row">
											<div class="col s7 m7">
												<i class="material-icons background-round mt-5">warning</i>
												<span class="small">${substr_die}%</span>
											</div>
											
											<div class="col s5 m5 right-align">
												<h2>Meninggal</h2>
												<div class="value">${response[0].meninggal}</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						`
                        $("#data").append(style);
                        resolve({
                            all_recover,
                            all_positive,
                            all_die
                        })
                    },
                    error: function(resp) {
                        $("#data, #provinsi, .center-align, #canvas, .sumber").hide();
                        $("body").append(`
								<div class="center-align error-code">
									<i class="large material-icons">cloud_off</i>
									<h1 class="center-align">Data belum tersedia</h1>
									<p>Silahkan coba beberapa menit lagi</p>
								</div> 
							`)
                    }

                });
            })
        } */

/*$.ajax({
            url: url + 'provinsi/',
            type: 'GET',
            success: function(response) {
                // console.log(response[0].attributes);
                var resp = response;
                var text = "";
                var daerah = "";
                var a;
                for (a = 0; a < response.length; a++) {
                    var prov = response[a].attributes.Provinsi;
                    var sembuh = response[a].attributes.Kasus_Semb;
                    var positif = response[a].attributes.Kasus_Posi;
                    var meninggal = response[a].attributes.Kasus_Meni;
                    daerah += `
					<div class="col s6 xl3">
						<div class="card horizontal">
			      			<div class="card-stacked">				
								<div class="card-action">
						          <span>${prov}</span>
						        </div>
						        <div class="card-content">
						          <p>Sembuh: <b>${sembuh}</b></p>
						          <p>Positif: <b>${positif}</b></p>
						          <p>Meninggal: <b>${meninggal}</b></p>
						        </div>
					        </div>
				        </div>
			        </div>  
								     
						`;
                }

                $("#provinsi").append(daerah);
            }
        })*/


// return Promise
/*totalCovid().then((resultCovid) => {
    console.log(resultCovid)
        // chart js
    var ctx = document.getElementById('canvas').getContext('2d');

    // function date
    Date.prototype.AddDays = function(_this) {
        this.setTime(this.getTime() + (_this * (1000 * 60 * 60 * 24)));
        return this;
    }

    // Day - 1
    var minOne = new Date().AddDays(-1);
    var datetoString = minOne.toDateString();
    var dayOne = datetoString.split(" ");
    var getOneDay = dayOne[2];
    var getOneMonth = dayOne[1];
    var oneDay = `${getOneDay} ${getOneMonth}`

    // Day -2
    var minTwo = new Date().AddDays(-2);
    var newDatetoString = minTwo.toDateString();
    var dayTwo = newDatetoString.split(" ");
    var getTwoDay = dayTwo[2];
    var getTwoMonth = dayTwo[1];
    var twoDay = `${getTwoDay} ${getTwoMonth}`

    // Day - 3
    var minThree = new Date().AddDays(-3);
    var datetoString = minThree.toDateString();
    var dayThree = datetoString.split(" ");
    var getThreeDay = dayThree[2];
    var getThreeMonth = dayThree[1];
    var ThreeDay = `${getThreeDay} ${getThreeMonth}`

    // Day -4
    var minFour = new Date().AddDays(-4);
    var newDatetoString = minFour.toDateString();
    var dayFour = newDatetoString.split(" ");
    var getFourDay = dayFour[2];
    var getFourMonth = dayFour[1];
    var FourDay = `${getFourDay} ${getFourMonth}`

    // Day - 5
    var minFive = new Date().AddDays(-5);
    var datetoString = minFive.toDateString();
    var dayFive = datetoString.split(" ");
    var getFiveDay = dayFive[2];
    var getFiveMonth = dayFive[1];
    var FiveDay = `${getFiveDay} ${getFiveMonth}`

    // Today
    var thisDay = new Date();
    var thisDatetoString = thisDay.toDateString();
    var thisIs = thisDatetoString.split(" ");
    var thisIsDay = thisIs[2];
    var thisIsMonth = thisIs[1];
    var thisIsDate = `${thisIsDay} ${thisIsMonth}`

    function checkTime(i) {
        if (i < 10) {
            i = "0" + i
        }; // add zero in front of numbers < 10
        return i;
    }
    // endtime

    var check_hour = newDate.getHours();
    var mi = newDate.getMinutes();
    var se = newDate.getSeconds();
    var check_minutes = checkTime(mi);
    var check_seconds = checkTime(se);

    var chart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: [`02 Mar`, `${FiveDay}`, `${FourDay}`, `${ThreeDay}`, `${twoDay}`, `${oneDay}`, `${thisIsDate}`],
            datasets: [{
                label: 'Meninggal',
                data: [0, 8, 11, 8, 8, 31, 0],
                borderColor: 'rgba(255, 99, 132, 0.8)',
                fill: false
            }, {
                label: 'Sembuh',
                data: [0, 103, 137, 131, 69, 74, 0],
                borderColor: 'rgba(255, 206, 86, 0.8)',
                fill: false
            }, {
                label: 'Positif',
                data: [2, 415, 260, 347, 433, 292, 0],
                borderColor: 'rgba(54, 162, 235, 0.8)',
                fill: false
            }]
        },
        options: {
            tooltips: {
                mode: 'index',
                intersect: false
            },
            hover: {
                mode: 'index',
                intersect: false
            }
        }

    });

    // if condition
    if (check_hour == 1) {
        var i;
        var new_datasets = chart.data.datasets;
        // console.log(new_datasets[0]);

        for (i = 0; i < new_datasets.length; i++) {
            var test = new_datasets[i];
            var datatest = test.data;
            datatest.splice(1, 1);
            datatest.push(0);
            // console.log(datatest)
        }
    } else {
        // console.log(chart.data.datasets)
    }
    // if condition
})*/