
myObj = {
    "code": "0",
    "msg": "操作成功",
    "data": [{
        "nickname": "ThePunjabiRapper",
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
    },{
        "nickname": "JessicaSehar Jess",
        "headimg": "1491831198008.jpg",
        "targetid": 2001309,
        "number": 140,
        "coins": 1404
    }]
};

myObj2 = {
    "code": "0",
    "msg": "操作成功",
    "data": [{
        "nickname": "JessicaSehar Jess",
        "headimg": "1491831198008.jpg",
        "targetid": 2001309,
        "number": 140,
        "coins": 1404
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
        "nickname": "zaima Awan_37533",
        "headimg": "1474824962072.jpg",
        "targetid": 2004365,
        "number": 110,
        "coins": 1190
    }]
};


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

var text = "";
var i;
var j = 1;
var container = document.getElementById("demo");
var res;
container.innerHTML += '<div class="row top-heading"><div class="col-sm-2 col-md-2 col-xs-2"> <img src="img/july_event/Total-Ranking.png" class="img  my_img_top"></div><div class="col-sm-8 col-md-10 col-xs-10"> <div class="row row_merg"><p class="ranking-top"><b> Total Ranking</b> </p></div><div class="row row_merg"><p class="font_name top-users"> Top users from this month </p></div></div>' + '</div>';
for (var i = 0; i < myObj.data.length; i++) {
    if (myObj.data[i].nickname > 11) {
        res = myObj.data[i].nickname.substring(0, 12);
        res = res + "...";
    } else {
        res = myObj.data[i].nickname;
    }
    var headimg1 = getImagePath(myObj.data[i].headimg, myObj.data[i].targetid);
    if(j==1) {
      // container.innerHTML += '<div class="row draw-line"><div class="col-sm-2 col-md-2 col-xs-2"> <img src="img/july_event/medal1.png" class="img  my_img1"></div><div class="col-sm-2 col-md-2 col-xs-2"> <img src="img/sample.jpg" class="img img-circle my_img"></div><div class="col-sm-6 col-md-8 col-xs-8"> <div class="row row_merg"><p class="font_name">' + res + '</p></div><div class="row row_bot"><div class="col-sm-1 col-md-1 col-xs-1"><img reward src="img/coin.png" class="img img_gift"></div><div class="col-sm-3 col-md-1 col-xs-2 reward">' + myObj.data[i].coins + '</div><div class="col-sm-1 col-md-1 col-xs-1"><img src="img/level icon 2.png" class="img img_gift"></div><div class="col-sm-3 col-md-1 col-xs-2 reward">' + myObj.data[i].number + '</div></div></div></div>' + '</div>';
        container.innerHTML += '<div class="row draw-line"><div class="col-sm-2 col-md-2 col-xs-2"> <img src="img/july_event/medal1.png" class="img  my_img1"></div><div class="col-sm-2 col-md-2 col-xs-2"> <img src="img/sample.jpg" class="img img-circle my_img"></div><div class="col-sm-5 col-md-5 col-xs-5 toper_names">'+res+'</div><div class="col-sm-3 col-md-3 col-xs-3 toper-rewards toper_names">' + myObj.data[i].coins + '</div></div>' + '</div>';

    }
    if (j == 2) {
         container.innerHTML += '<div class="row draw-line"><div class="col-sm-2 col-md-2 col-xs-2"> <img src="img/july_event/medal2.png" class="img  my_img1"></div><div class="col-sm-2 col-md-2 col-xs-2"> <img src="img/sample.jpg" class="img img-circle my_img"></div><div class="col-sm-5 col-md-5 col-xs-5 toper_names">'+res+'</div><div class="col-sm-3 col-md-3 col-xs-3 toper-rewards toper_names">' + myObj.data[i].coins + '</div></div>' + '</div>';
    }

    if (j == 3) {
        container.innerHTML += '<div class="row draw-line"><div class="col-sm-2 col-md-2 col-xs-2"> <img src="img/july_event/medal3.png" class="img  my_img1"></div><div class="col-sm-2 col-md-2 col-xs-2"> <img src="img/sample.jpg" class="img img-circle my_img"></div><div class="col-sm-5 col-md-5 col-xs-5 toper_names">'+res+'</div><div class="col-sm-3 col-md-3 col-xs-3 toper-rewards toper_names">' + myObj.data[i].coins + '</div></div>' + '</div>';
    }
    if (j==4) {
        container.innerHTML += '<div class="row draw-line"><div class="col-sm-2 col-md-2 col-xs-2"> <div class="numberCircle">' + j + '</div></div><div class="col-sm-2 col-md-2 col-xs-2"> <img src="img/sample.jpg" class="img img-circle my_img"></div><div class="col-sm-5 col-md-5 col-xs-5 toper_names">'+res+'</div><div class="col-sm-3 col-md-3 col-xs-3 toper-rewards toper_names">' + myObj.data[i].coins + '</div></div>' + '</div>';
    }
     if (j==5) {
        container.innerHTML += '<div class="row draw-line"><div class="col-sm-2 col-md-2 col-xs-2"> <div class="numberCircle">' + j + '</div></div><div class="col-sm-2 col-md-2 col-xs-2"> <img src="img/sample.jpg" class="img img-circle my_img"></div><div class="col-sm-5 col-md-5 col-xs-5 toper_names">'+res+'</div><div class="col-sm-3 col-md-3 col-xs-3 toper-rewards toper_names">' + myObj.data[i].coins + '</div></div>' + '</div>';
    }

    j++;
}
var k=5;
$("#show-more-top").click(function(){
    $("#show-more-top").hide();
    for (var i = 4; i < myObj.data.length; i++) {
    if (myObj.data[i].nickname > 11) {
        res = myObj.data[i].nickname.substring(0, 12);
        res = res + "...";
    } else {
        res = myObj.data[i].nickname;
    }
   
     if (k>5) {
        container.innerHTML += '<div class="row draw-line"><div class="col-sm-2 col-md-2 col-xs-2"> <div class="numberCircle">' + k + '</div></div><div class="col-sm-2 col-md-2 col-xs-2"> <img src="img/sample.jpg" class="img img-circle my_img"></div><div class="col-sm-5 col-md-5 col-xs-5 toper_names">'+res+'</div><div class="col-sm-3 col-md-3 col-xs-3 toper-rewards toper_names">' + myObj.data[i].coins + '</div></div>' + '</div>';
    }

    k++;
}
});


//Coins


var l;
var m= 1;
var container2 = document.getElementById("demo2");
var res2;
container2.innerHTML += '<div class="row top-heading"><div class="col-sm-2 col-md-2 col-xs-2"> <img src="img/july_event/coins.png" class="img  my_img_top"></div><div class="col-sm-8 col-md-10 col-xs-10"> <div class="row row_merg"><p class="ranking-top"> <b>Coins Ranking </b></p></div><div class="row row_merg"><p class="font_name top-users"> Top coins receiver from this month </p></div></div>' + '</div>';
for (var l = 0; l < myObj2.data.length; l++) {
    if (myObj2.data[l].nickname > 11) {
        res2 = myObj2.data[l].nickname.substring(0, 12);
        res2 = res2 + "...";
    } else {
        res2 = myObj2.data[l].nickname;
    }
    coins=myObj2.data[l].coins;
    var headimg1 = getImagePath(myObj.data[l].headimg, myObj.data[l].targetid);
    if(m==1) {
      // container.innerHTML += '<div class="row draw-line"><div class="col-sm-2 col-md-2 col-xs-2"> <img src="img/july_event/medal1.png" class="img  my_img1"></div><div class="col-sm-2 col-md-2 col-xs-2"> <img src="img/sample.jpg" class="img img-circle my_img"></div><div class="col-sm-6 col-md-8 col-xs-8"> <div class="row row_merg"><p class="font_name">' + res + '</p></div><div class="row row_bot"><div class="col-sm-1 col-md-1 col-xs-1"><img reward src="img/coin.png" class="img img_gift"></div><div class="col-sm-3 col-md-1 col-xs-2 reward">' + myObj.data[i].coins + '</div><div class="col-sm-1 col-md-1 col-xs-1"><img src="img/level icon 2.png" class="img img_gift"></div><div class="col-sm-3 col-md-1 col-xs-2 reward">' + myObj.data[i].number + '</div></div></div></div>' + '</div>';
        container2.innerHTML += '<div class="row draw-line"><div class="col-sm-2 col-md-2 col-xs-2"> <img src="img/july_event/medal1.png" class="img  my_img1"></div><div class="col-sm-2 col-md-2 col-xs-2"> <img src="img/sample.jpg" class="img img-circle my_img"></div><div class="col-sm-5 col-md-5 col-xs-5 toper_names">'+res2+'</div><div class="col-sm-3 col-md-3 col-xs-3 toper-rewards toper_names">' + myObj2.data[l].coins + '</div></div>' + '</div>';

    }
    if (m == 2) {
         container2.innerHTML += '<div class="row draw-line"><div class="col-sm-2 col-md-2 col-xs-2"> <img src="img/july_event/medal2.png" class="img  my_img1"></div><div class="col-sm-2 col-md-2 col-xs-2"> <img src="img/sample.jpg" class="img img-circle my_img"></div><div class="col-sm-5 col-md-5 col-xs-5 toper_names">'+res2+'</div><div class="col-sm-3 col-md-3 col-xs-3 toper-rewards toper_names">' + myObj2.data[l].coins + '</div></div>' + '</div>';
    }

    if (m == 3) {
        container2.innerHTML += '<div class="row draw-line"><div class="col-sm-2 col-md-2 col-xs-2"> <img src="img/july_event/medal3.png" class="img  my_img1"></div><div class="col-sm-2 col-md-2 col-xs-2"> <img src="img/sample.jpg" class="img img-circle my_img"></div><div class="col-sm-5 col-md-5 col-xs-5 toper_names">'+res2+'</div><div class="col-sm-3 col-md-3 col-xs-3 toper-rewards toper_names">' + myObj2.data[l].coins + '</div></div>' + '</div>';
    }
    if (m==4) {
        container2.innerHTML += '<div class="row draw-line"><div class="col-sm-2 col-md-2 col-xs-2"> <div class="numberCircle">' + m + '</div></div><div class="col-sm-2 col-md-2 col-xs-2"> <img src="img/sample.jpg" class="img img-circle my_img"></div><div class="col-sm-5 col-md-5 col-xs-5 toper_names">'+res2+'</div><div class="col-sm-3 col-md-3 col-xs-3 toper-rewards toper_names">' + myObj2.data[l].coins + '</div></div>' + '</div>';
    }
     if (m==5) {
        container2.innerHTML += '<div class="row draw-line"><div class="col-sm-2 col-md-2 col-xs-2"> <div class="numberCircle">' + m + '</div></div><div class="col-sm-2 col-md-2 col-xs-2"> <img src="img/sample.jpg" class="img img-circle my_img"></div><div class="col-sm-5 col-md-5 col-xs-5 toper_names">'+res2+'</div><div class="col-sm-3 col-md-3 col-xs-3 toper-rewards toper_names">' + myObj2.data[l].coins + '</div></div>' + '</div>';
    }

    m++;
}
var n=5;
$("#show-more-top2").click(function(){
    $("#show-more-top2").hide();
    for (var l = 4; l < myObj2.data.length; l++) {
    if (myObj2.data[l].nickname > 11) {
        res2 = myObj2.data[l].nickname.substring(0, 12);
        res2 = res2 + "...";
    } else {
        res2 = myObj2.data[l].nickname;
    }
   
     if (n>5) {
        container2.innerHTML += '<div class="row draw-line"><div class="col-sm-2 col-md-2 col-xs-2"> <div class="numberCircle">' + n + '</div></div><div class="col-sm-2 col-md-2 col-xs-2"> <img src="img/sample.jpg" class="img img-circle my_img"></div><div class="col-sm-5 col-md-5 col-xs-5 toper_names">'+res2+'</div><div class="col-sm-3 col-md-3 col-xs-3 toper-rewards toper_names">' + myObj2.data[l].coins + '</div></div>' + '</div>';
    }

    n++;
}
});


// Gifters 


var p;
var q = 1;
var container3 = document.getElementById("demo3");
var res3;
container3.innerHTML += '<div class="row top-heading"><div class="col-sm-2 col-md-2 col-xs-2"> <img src="img/july_event/gift_box.png" class="img  my_img_top"></div><div class="col-sm-8 col-md-10 col-xs-10"> <div class="row row_merg"><p class="ranking-top"> <b>Gifters Ranking </b></p></div><div class="row row_merg"><p class="font_name top-users"> Top gifts sender from this month </p></div></div>' + '</div>';
for (var p = 0; p < myObj2.data.length; p++) {
    if (myObj2.data[p].nickname > 11) {
        res3 = myObj2.data[p].nickname.substring(0, 12);
        res3 = res3 + "...";
    } else {
        res3 = myObj2.data[p].nickname;
    }
    var headimg1 = getImagePath(myObj2.data[p].headimg, myObj2.data[p].targetid);
    if(q==1) {
      // container.innerHTML += '<div class="row draw-line"><div class="col-sm-2 col-md-2 col-xs-2"> <img src="img/july_event/medal1.png" class="img  my_img1"></div><div class="col-sm-2 col-md-2 col-xs-2"> <img src="img/sample.jpg" class="img img-circle my_img"></div><div class="col-sm-6 col-md-8 col-xs-8"> <div class="row row_merg"><p class="font_name">' + res + '</p></div><div class="row row_bot"><div class="col-sm-1 col-md-1 col-xs-1"><img reward src="img/coin.png" class="img img_gift"></div><div class="col-sm-3 col-md-1 col-xs-2 reward">' + myObj.data[i].coins + '</div><div class="col-sm-1 col-md-1 col-xs-1"><img src="img/level icon 2.png" class="img img_gift"></div><div class="col-sm-3 col-md-1 col-xs-2 reward">' + myObj.data[i].number + '</div></div></div></div>' + '</div>';
        container3.innerHTML += '<div class="row draw-line"><div class="col-sm-2 col-md-2 col-xs-2"> <img src="img/july_event/medal1.png" class="img  my_img1"></div><div class="col-sm-2 col-md-2 col-xs-2"> <img src="img/sample.jpg" class="img img-circle my_img"></div><div class="col-sm-5 col-md-5 col-xs-5 toper_names">'+res3+'</div><div class="col-sm-3 col-md-3 col-xs-3 toper-rewards toper_names">' + myObj2.data[p].number + '</div></div>' + '</div>';

    }
    if (q == 2) {
         container3.innerHTML += '<div class="row draw-line"><div class="col-sm-2 col-md-2 col-xs-2"> <img src="img/july_event/medal2.png" class="img  my_img1"></div><div class="col-sm-2 col-md-2 col-xs-2"> <img src="img/sample.jpg" class="img img-circle my_img"></div><div class="col-sm-5 col-md-5 col-xs-5 toper_names">'+res3+'</div><div class="col-sm-3 col-md-3 col-xs-3 toper-rewards toper_names">' + myObj2.data[p].number + '</div></div>' + '</div>';
    }

    if (q == 3) {
        container3.innerHTML += '<div class="row draw-line"><div class="col-sm-2 col-md-2 col-xs-2"> <img src="img/july_event/medal3.png" class="img  my_img1"></div><div class="col-sm-2 col-md-2 col-xs-2"> <img src="img/sample.jpg" class="img img-circle my_img"></div><div class="col-sm-5 col-md-5 col-xs-5 toper_names">'+res3+'</div><div class="col-sm-3 col-md-3 col-xs-3 toper-rewards toper_names">' + myObj2.data[p].number + '</div></div>' + '</div>';
    }
    if (q==4) {
        container3.innerHTML += '<div class="row draw-line"><div class="col-sm-2 col-md-2 col-xs-2"> <div class="numberCircle">' + q + '</div></div><div class="col-sm-2 col-md-2 col-xs-2"> <img src="img/sample.jpg" class="img img-circle my_img"></div><div class="col-sm-5 col-md-5 col-xs-5 toper_names">'+res3+'</div><div class="col-sm-3 col-md-3 col-xs-3 toper-rewards toper_names">' + myObj2.data[p].number + '</div></div>' + '</div>';
    }
     if (q==5) {
        container3.innerHTML += '<div class="row draw-line"><div class="col-sm-2 col-md-2 col-xs-2"> <div class="numberCircle">' + q + '</div></div><div class="col-sm-2 col-md-2 col-xs-2"> <img src="img/sample.jpg" class="img img-circle my_img"></div><div class="col-sm-5 col-md-5 col-xs-5 toper_names">'+res3+'</div><div class="col-sm-3 col-md-3 col-xs-3 toper-rewards toper_names">' + myObj2.data[p].number + '</div></div>' + '</div>';
    }

    q++;
}
var r=5;
$("#show-more-top3").click(function(){
    $("#show-more-top3").hide();
    for (var p = 4; p < myObj2.data.length; p++) {
    if (myObj2.data[p].nickname > 11) {
        res3 = myObj2.data[p].nickname.substring(0, 12);
        res3 = res3 + "...";
    } else {
        res3 = myObj2.data[p].nickname;
    }
   
     if (r>5) {
        container3.innerHTML += '<div class="row draw-line"><div class="col-sm-2 col-md-2 col-xs-2"> <div class="numberCircle">' + r + '</div></div><div class="col-sm-2 col-md-2 col-xs-2"> <img src="img/sample.jpg" class="img img-circle my_img"></div><div class="col-sm-5 col-md-5 col-xs-5 toper_names">'+res3+'</div><div class="col-sm-3 col-md-3 col-xs-3 toper-rewards toper_names">' + myObj2.data[p].number + '</div></div>' + '</div>';
    }

    r++;
}
});