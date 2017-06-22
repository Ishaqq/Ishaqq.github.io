myObj = {
    "code": "0",
    "msg": "操作成功",
    "data": [{
        "nickname": "Janet#Moodygirl",
        "headimg": "1489657773800.jpg",
        "targetid": 2001213,
        "number": 1396,
        "coins": 13960
    }, {
        "nickname": "RAK#ThePunjabiRapper",
        "headimg": "1490084557049.jpg",
        "targetid": 2001243,
        "number": 121,
        "coins": 1210
    }, {
        "nickname": "Sadaf#Rise&Shine",
        "headimg": "1460019639576.jpg",
        "targetid": 2001305,
        "number": 477,
        "coins": 4770
    }, {
        "nickname": "JessicaSehar# Jess",
        "headimg": "1491831198008.jpg",
        "targetid": 2001309,
        "number": 1404,
        "coins": 14040
    }, {
        "nickname": "Rosemmarry",
        "headimg": "1486338403179.jpeg",
        "targetid": 2001864,
        "number": 403,
        "coins": 4030
    }, {
        "nickname": "KiranSheikh",
        "headimg": "1490469957982.jpg",
        "targetid": 2002830,
        "number": 554,
        "coins": 5540
    }, {
        "nickname": "Dr Rida",
        "headimg": "1470028251906.jpg",
        "targetid": 2003453,
        "number": 405,
        "coins": 4050
    }, {
        "nickname": "Ar. Sumbal",
        "headimg": "1490525995901.jpg",
        "targetid": 2003890,
        "number": 202,
        "coins": 2020
    }, {
        "nickname": "zaima shams",
        "headimg": "1490467996484.jpg",
        "targetid": 2004324,
        "number": 175,
        "coins": 1750
    }, {
        "nickname": "Sana Malik Awan_37533",
        "headimg": "1474824962072.jpg",
        "targetid": 2004365,
        "number": 119,
        "coins": 1190
    }, {
        "nickname": "zoy khan",
        "headimg": "1489685393330.jpg",
        "targetid": 2004522,
        "number": 3003,
        "coins": 30030
    }, {
        "nickname": "(PERFECT-10) M. Ali",
        "headimg": "1491467680854.jpg",
        "targetid": 2004875,
        "number": 74,
        "coins": 740
    }, {
        "nickname": "fatima123",
        "headimg": "1489410429996.jpg",
        "targetid": 2005084,
        "number": 693,
        "coins": 6930
    }, {
        "nickname": "AbaSyed",
        "headimg": "1476375740810.jpg",
        "targetid": 2005275,
        "number": 204,
        "coins": 2040
    }, {
        "nickname": "shakir nadeem",
        "headimg": "1487519704488.jpeg",
        "targetid": 2007236,
        "number": 243,
        "coins": 2430
    }, {
        "nickname": "Shayy",
        "headimg": "1492063883821.jpg",
        "targetid": 2008115,
        "number": 799,
        "coins": 7990
    }, {
        "nickname": "RJ Ali Sohail",
        "headimg": "1483722389058.jpeg",
        "targetid": 2008159,
        "number": 867,
        "coins": 8670
    }, {
        "nickname": "Bushra Shah",
        "headimg": "1491999483137.jpg",
        "targetid": 2009651,
        "number": 266,
        "coins": 2660
    }, {
        "nickname": "AMIR EJAZ",
        "headimg": "1486801678134.jpeg",
        "targetid": 2010557,
        "number": 303,
        "coins": 3030
    }, {
        "nickname": "Rj Noor",
        "headimg": "1492365727673.jpg",
        "targetid": 2013905,
        "number": 1749,
        "coins": 17490
    }, {
        "nickname": "ma bahi nh kise da",
        "headimg": null,
        "targetid": 2014369,
        "number": 1638,
        "coins": 16380
    }, {
        "nickname": "?KoMaL?MiRzA?",
        "headimg": "1491842522486.jpg",
        "targetid": 2014856,
        "number": 79,
        "coins": 790
    }, {
        "nickname": "?Momena Khan#Mahi?",
        "headimg": "1490719398398.jpg",
        "targetid": 2015040,
        "number": 377,
        "coins": 3770
    }, {
        "nickname": "Aqsa hadi",
        "headimg": "1483194232957.jpeg",
        "targetid": 2015095,
        "number": 75,
        "coins": 750
    }, {
        "nickname": "\"Jannat ? jaweria\"",
        "headimg": "1491727723263.jpg",
        "targetid": 2015526,
        "number": 707,
        "coins": 7070
    }, {
        "nickname": "Rj Numan jatt",
        "headimg": "1483101533744.408949019436236",
        "targetid": 2015579,
        "number": 65,
        "coins": 650
    }, {
        "nickname": "RJ Noor Sheikh",
        "headimg": "1485862750873.jpeg",
        "targetid": 2018558,
        "number": 410,
        "coins": 4100
    }, {
        "nickname": "Ahsan Aasee",
        "headimg": "1487216235338.jpeg",
        "targetid": 2019055,
        "number": 108,
        "coins": 1080
    }]
}

var getImagePath = function(path, talentid) {
    strtalentid = talentid + "";
    head1 = strtalentid.substring(0, 3);
    head2 = strtalentid.substring(3, 8);

    if (path) {
        var pa = path.split('.');
        if (pa.length == 2) {
            return 'http://s3-us-west-2.amazonaws.com/thankyotest/image/7/0000/0' + head1 + "/" + head2 + "/" + pa[0] + '_80.' + pa[1];
        }
    }
    return path;
}

// $.ajax({ 
//     type: 'GET', 
//     async:false,
//     url: 'http://34.210.95.182:8080/db/search',
//     crossDomain:true,
//     data: { type:"top_gift_by_userrank" }, 
//     dataType: 'json',
//     success: function (data) {  
//       myObj =data;
//       console.log(myObj);
//     }
// });
var d = new Date();
var n = d.getMonth();
var month;
if(n==5){
 month="May's Superstars";
}
if(n==6){
 month="June's Superstars";
}
if(n==7){
 month="July's Superstars";
}
if(n==8){
 month="Agust's Superstars";
}
if(n==9){
 month="September's Superstars";
}
if(n==10){
 month="October's Superstars";
}
if(n==11){
 month="November's Superstars";
}
if(n==12){
 month="December's Superstars";
}
var month_sup=document.getElementById("month_sup");
month_sup.innerHTML=month;
var text = "";
var i;
var j = 1;
var header_img=document.getElementById("header_img");
var top_one=document.getElementById("top_one");
var container = document.getElementById("demo");
var res;
for (var i = 0; i < 5; i++) {
    if (myObj.data[i].nickname > 11) {
        res = myObj.data[i].nickname.substring(0, 12);
        res = res + "...";
    } else {
        res = myObj.data[i].nickname;
    }
    var headimg1 = getImagePath(myObj.data[i].headimg, myObj.data[i].targetid);

    if(j==1) {
        header_img.innerHTML +='<img  class="img img-responsive header_background" src="img/1d.png" > <img  class="img img-responsive img-circle" src="img/sample.jpg" id="img_first">';
        top_one.innerHTML +='<div class="row first">'+res+'</div><div class="row first_row"><div class="col-sm-1 col-md-1 col-xs-1"><img  src="img/coin.png" class="img_first"></div><div class="col-sm-3 col-md-3 col-xs-4 first_rank">'+myObj.data[i].coins+'</div><div class="col-sm-1 col-md-1 col-xs-1"><img  src="img/level icon.png" class="img_first"></div><div class="col-sm-3 col-md-3 col-xs-4 first_rank" >'+myObj.data[i].number+'</div></div>';
    }
    if (j == 2) {
        container.innerHTML += '<div class="row draw-line"><div class="col-sm-2 col-md-2 col-xs-2"> <img src="img/3.png" class="img  my_img1"></div><div class="col-sm-2 col-md-2 col-xs-2"> <img src="img/sample.jpg" class="img img-circle my_img"></div><div class="col-sm-6 col-md-8 col-xs-8"> <div class="row row_merg"><p class="font_name">' + res + '</p></div><div class="row row_bot"><div class="col-sm-1 col-md-1 col-xs-1"><img reward src="img/coin.png" class="img img_gift"></div><div class="col-sm-3 col-md-1 col-xs-2 reward">' + myObj.data[i].coins + '</div><div class="col-sm-1 col-md-1 col-xs-1"><img src="img/level icon 2.png" class="img img_gift"></div><div class="col-sm-3 col-md-1 col-xs-2 reward">' + myObj.data[i].number + '</div></div></div></div>' + '</div>';
    }

    if (j == 3) {
        container.innerHTML += '<div class="row draw-line"><div class="col-sm-2 col-md-2 col-xs-2"> <img src="img/4.png" class="img  my_img1"></div><div class="col-sm-2 col-md-2 col-xs-2"> <img src="img/sample.jpg" class="img img-circle my_img"></div><div class="col-sm-6 col-md-8 col-xs-8"> <div class="row row_merg"><p class="font_name">' + res + '</p></div><div class="row row_bot"><div class="col-sm-1 col-md-1 col-xs-1"><img reward src="img/coin.png" class="img img_gift"></div><div class="col-sm-3 col-md-1 col-xs-2 reward">' + myObj.data[i].coins + '</div><div class="col-sm-1 col-md-1 col-xs-1"><img src="img/level icon 2.png" class="img img_gift"></div><div class="col-sm-3 col-md-1 col-xs-2 reward">' + myObj.data[i].number + '</div></div></div></div>' + '</div>';
    }
    // if (j == 3) {
    //     container.innerHTML += '<div class="row draw-line"><div class="col-sm-2 col-md-2 col-xs-2"> <img src="img/medalbronze.png" class="img  my_img1"></div><div class="col-sm-2 col-md-2 col-xs-2"> <img src="img/sample.jpg" class="img img-circle my_img"></div><div class="col-sm-6 col-md-8 col-xs-8"> <div class="row row_merg"><p class="font_name">' + res + '</p></div><div class="row row_bot"><div class="col-sm-1 col-md-1 col-xs-1"><img reward src="img/moon_final.png" class="img img_gift"></div><div class="col-sm-3 col-md-1 col-xs-2 reward">' + myObj.data[i].number + '</div><div class="col-sm-1 col-md-1 col-xs-1"><img src="img/Coin.png" class="img img_gift"></div><div class="col-sm-3 col-md-1 col-xs-2 reward">' + myObj.data[i].coins + '</div></div></div></div>' + '</div>';
    // }
    if (j > 3) {
        container.innerHTML += '<div class="row draw-line"><div class="col-sm-2 col-md-2 col-xs-2"> <div class="numberCircle">' + j + '</div></div><div class="col-sm-2 col-md-2 col-xs-2"> <img src="img/sample.jpg" class="img img-circle my_img"></div><div class="col-sm-6 col-md-8 col-xs-8"> <div class="row row_merg"><p class="font_name">' + res + '</p></div><div class="row row_bot"><div class="col-sm-1 col-md-1 col-xs-1"><img reward src="img/coin.png" class="img img_gift"></div><div class="col-sm-3 col-md-1 col-xs-2 reward">' + myObj.data[i].coins + '</div><div class="col-sm-1 col-md-1 col-xs-1"><img src="img/level icon 2.png" class="img img_gift"></div><div class="col-sm-3 col-md-1 col-xs-2 reward">' + myObj.data[i].number + '</div></div></div></div>' + '</div>';
    }
    j++;
}

