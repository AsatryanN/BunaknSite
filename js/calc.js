/**
 * Created by vazgen on 3/26/17.
 */
$(function () {


    var data = [
        {
            "ankum": 1,
            "result": [
                {
                    "barcr": 5,
                    "result": 144
                },
                {
                    "barcr": 7.5,
                    "result": 77
                },
                {
                    "barcr": 10,
                    "result": 65
                },
                {
                    "barcr": 15,
                    "result": 33
                },
                {
                    "barcr": 20,
                    "result": 29
                },
                {
                    "barcr": 30,
                    "result": 19.5
                },
                {
                    "barcr": 40,
                    "result": 12.5
                }
            ]
        },
        {
            "ankum": 1.5,
            "result": [
                {
                    "barcr": 7.5,
                    "result": 135
                },
                {
                    "barcr": 10,
                    "result": 96.5
                },
                {
                    "barcr": 15,
                    "result": 70
                },
                {
                    "barcr": 20,
                    "result": 54
                },
                {
                    "barcr": 30,
                    "result": 36
                },
                {
                    "barcr": 40,
                    "result": 19
                },
                {
                    "barcr": 50,
                    "result": 15
                }
            ]
        },
        {
            "ankum": 2.0,
            "result": [
                {
                    "barcr": 7.5,
                    "result": 220
                },
                {
                    "barcr": 10,
                    "result": 156
                },
                {
                    "barcr": 15,
                    "result": 105
                },
                {
                    "barcr": 20,
                    "result": 79
                },
                {
                    "barcr": 30,
                    "result": 53
                },
                {
                    "barcr": 40,
                    "result": 33
                },
                {
                    "barcr": 50,
                    "result": 25
                },
                {
                    "barcr": 60,
                    "result": 19.5
                },
                {
                    "barcr": 80,
                    "result": 12.5
                }
            ]
        },
        {
            "ankum": 2.5,
            "result": [
                {
                    "barcr": 7.5,
                    "result": 280
                },
                {
                    "barcr": 10,
                    "result": 200
                },
                {
                    "barcr": 15,
                    "result": 125
                },
                {
                    "barcr": 20,
                    "result": 100
                },
                {
                    "barcr": 30,
                    "result": 66
                },
                {
                    "barcr": 40,
                    "result": 40.5
                },
                {
                    "barcr": 50,
                    "result": 32.5
                },
                {
                    "barcr": 60,
                    "result": 24
                },
                {
                    "barcr": 80,
                    "result": 15.5
                }
            ]
        },
        {
            "ankum": 3.0,
            "result": [
                {
                    "barcr": 10,
                    "result": 260
                },
                {
                    "barcr": 15,
                    "result": 180
                },
                {
                    "barcr": 20,
                    "result": 130
                },
                {
                    "barcr": 30,
                    "result": 87
                },
                {
                    "barcr": 40,
                    "result": 65
                },
                {
                    "barcr": 50,
                    "result": 51
                },
                {
                    "barcr": 60,
                    "result": 40
                },
                {
                    "barcr": 80,
                    "result": 27
                }
            ]
        },
        {
            "ankum": 3.5,
            "result": [
                {
                    "barcr": 15,
                    "result": 215
                },
                {
                    "barcr": 20,
                    "result": 150
                },
                {
                    "barcr": 30,
                    "result": 100
                },
                {
                    "barcr": 40,
                    "result": 75
                },
                {
                    "barcr": 50,
                    "result": 60
                },
                {
                    "barcr": 60,
                    "result": 46
                },
                {
                    "barcr": 80,
                    "result": 31.5
                }
            ]
        },
        {
            "ankum": 4.0,
            "result": [
                {
                    "barcr": 15,
                    "result": 255
                },
                {
                    "barcr": 20,
                    "result": 173
                },
                {
                    "barcr": 30,
                    "result": 115
                },
                {
                    "barcr": 40,
                    "result": 86
                },
                {
                    "barcr": 50,
                    "result": 69
                },
                {
                    "barcr": 60,
                    "result": 43
                },
                {
                    "barcr": 80,
                    "result": 36
                }
            ]
        },
        {
            "ankum": 5.0,
            "result": [
                {
                    "barcr": 15,
                    "result": 310
                },
                {
                    "barcr": 20,
                    "result": 236
                },
                {
                    "barcr": 30,
                    "result": 155
                },
                {
                    "barcr": 40,
                    "result": 118
                },
                {
                    "barcr": 50,
                    "result": 94
                },
                {
                    "barcr": 60,
                    "result": 71.5
                },
                {
                    "barcr": 80,
                    "result": 50
                }
            ]
        },
        {
            "ankum": 6.0,
            "result": [
                {
                    "barcr": 20,
                    "result": 282
                },
                {
                    "barcr": 30,
                    "result": 185
                },
                {
                    "barcr": 40,
                    "result": 140
                },
                {
                    "barcr": 50,
                    "result": 112
                },
                {
                    "barcr": 60,
                    "result": 93.5
                },
                {
                    "barcr": 80,
                    "result": 64.5
                }
            ]
        },
        {
            "ankum": 7.0,
            "result": [
                {
                    "barcr": 30,
                    "result": 216
                },
                {
                    "barcr": 40,
                    "result": 163
                },
                {
                    "barcr": 50,
                    "result": 130
                },
                {
                    "barcr": 60,
                    "result": 109
                },
                {
                    "barcr": 80,
                    "result": 82
                }
            ]
        },
        {
            "ankum": 8.0,
            "result": [
                {
                    "barcr": 40,
                    "result": 187
                },
                {
                    "barcr": 50,
                    "result": 149
                },
                {
                    "barcr": 60,
                    "result": 125
                },
                {
                    "barcr": 80,
                    "result": 94
                }
            ]
        },
        {
            "ankum": 9.0,
            "result": [
                {
                    "barcr": 40,
                    "result": 212
                },
                {
                    "barcr": 50,
                    "result": 168
                },
                {
                    "barcr": 60,
                    "result": 140
                },
                {
                    "barcr": 80,
                    "result": 105
                }
            ]
        },
        {
            "ankum": 10.0,
            "result": [
                {
                    "barcr": 40,
                    "result": 245
                },
                {
                    "barcr": 50,
                    "result": 187
                },
                {
                    "barcr": 60,
                    "result": 156
                },
                {
                    "barcr": 80,
                    "result": 117
                }
            ]
        },
        {
            "ankum": 12.0,
            "result": [
                {
                    "barcr": 40,
                    "result": 295
                },
                {
                    "barcr": 50,
                    "result": 225
                },
                {
                    "barcr": 60,
                    "result": 187
                },
                {
                    "barcr": 80,
                    "result": 140
                }
            ]
        },
        {
            "ankum": 14.0,
            "result": [
                {
                    "barcr": 50,
                    "result": 265
                },
                {
                    "barcr": 60,
                    "result": 218
                },
                {
                    "barcr": 80,
                    "result": 167
                }
            ]
        },
        {
            "ankum": 16.0,
            "result": [
                {
                    "barcr": 60,
                    "result": 250
                },
                {
                    "barcr": 80,
                    "result": 187
                }
            ]
        },
        {
            "ankum": 18.0,
            "result": [
                {
                    "barcr": 60,
                    "result": 280
                },
                {
                    "barcr": 80,
                    "result": 210
                }
            ]
        },
        {
            "ankum": 20.0,
            "result": [
                {
                    "barcr": 80,
                    "result": 237
                }
            ]
        }
    ];




    function bindAnkum($select, array) {
        var firstOption = $select.find("option:first");
        $select.empty();


        //keep first option
        $select.append(firstOption);
        $.each(array, function (key, item) {
            $select
                .append($("<option></option>")
                    .attr("value", item.ankum)
                    .text(item.ankum + ' '));
        });
        //select first option
        $select.val("");
    }
    function bindBarc($select, array) {
        var firstOption = $select.find("option:first");
        $select.empty();


        //keep first option
        $select.append(firstOption);
        $.each(array, function (key, item) {
            $select
                .append($("<option></option>")
                    .attr("value", item.result)
                    .text(item.barcr + ' '));
        });
        //select first option
        $select.val("");
    }
    bindAnkum($("#calc_ankum"), data);
    function getBarcrList(ankum) {

        for (var i = 0; i < data.length; i++) {
            if (data[i].ankum == ankum)
                return data[i].result;
        }
    }
    $("#calc_ankum").change(function () {
        $('#calc_result').text("");
        var ankum = $(this).val();
        console.log('ankum', ankum);


       var barcList= getBarcrList(ankum);
       console.log(barcList)

        bindBarc($("#calc_barcr"),barcList);

    })
    $("#calc_barcr").change(function () {
        var res = $(this).val()*60*24/1000;
        $('#calc_result').text(res);
    })
});
