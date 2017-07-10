 var myObj;
 var myObj2;

 var getImagePath = function(path, talentid) {
     strtalentid = talentid + "";
     head1 = strtalentid.substring(0, 3);
     head2 = strtalentid.substring(3, 8);

     if (path) {
         var pa = path.split('.');
         if (pa.length == 2) {
             return 'http://s3-us-west-2.amazonaws.com/thankyo/image/7/0000/0' + head1 + "/" + head2 + "/" + pa[0] + '_80.' + pa[1];
         }
     }
     return path;
 }

 $.ajax({
     type: 'GET',
     async: false,
     url: 'http://34.210.95.182:8080/db/search',
     crossDomain: true,
     data: {
         type: "top_gift_by_month"
     },
     dataType: 'json',
     success: function(data) {
         myObj = data;
         console.log(myObj);
     }
 });

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
 for (var i = 0; i < myObj.data.length; i++) {
     if (myObj.data[i].nickname > 11) {
         res = myObj.data[i].nickname.substring(0, 12);
         res = res + "...";
     } else {
         res = myObj.data[i].nickname;
     }
     var headimg1 = getImagePath(myObj.data[i].headimg, myObj.data[i].targetid);

if (header_img !== null) {
     if (j == 1) {
         header_img.innerHTML +='<img  class="img img-responsive header_background" src="img/1d.png" > <img  class="img img-responsive img-circle" src="' + headimg1 + '" id="img_first">';
        top_one.innerHTML +='<div class="row first">'+res+'</div><div class="row first_row"><div class="col-sm-1 col-md-1 col-xs-1"><img  src="img/coin.png" class="img_first"></div><div class="col-sm-3 col-md-3 col-xs-4 first_rank">'+myObj.data[i].coins+'</div><div class="col-sm-1 col-md-1 col-xs-1"><img  src="img/level icon.png" class="img_first"></div><div class="col-sm-3 col-md-3 col-xs-4 first_rank" >'+myObj.data[i].number+'</div></div>'; 
     }

     if (j == 2) {
         container.innerHTML += '<div class="row draw-line"><div class="col-sm-2 col-md-2 col-xs-2"> <img src="img/3.png" class="img  my_img1"></div><div class="col-sm-2 col-md-2 col-xs-2"> <img src="' + headimg1 + '" class="img img-circle my_img"></div><div class="col-sm-6 col-md-8 col-xs-8"> <div class="row row_merg"><p class="font_name">' + res + '</p></div><div class="row row_bot"><div class="col-sm-1 col-md-1 col-xs-1"><img reward src="img/coin.png" class="img img_gift"></div><div class="col-sm-3 col-md-1 col-xs-2 reward">' + myObj.data[i].coins + '</div><div class="col-sm-1 col-md-1 col-xs-1"><img src="img/level icon 2.png" class="img img_gift"></div><div class="col-sm-3 col-md-1 col-xs-2 reward">' + myObj.data[i].number + '</div></div></div></div>' + '</div>';
     }
     if (j == 3) {
         container.innerHTML += '<div class="row draw-line"><div class="col-sm-2 col-md-2 col-xs-2"> <img src="img/4.png" class="img  my_img1"></div><div class="col-sm-2 col-md-2 col-xs-2"> <img src="' + headimg1 + '" class="img img-circle my_img"></div><div class="col-sm-6 col-md-8 col-xs-8"> <div class="row row_merg"><p class="font_name">' + res + '</p></div><div class="row row_bot"><div class="col-sm-1 col-md-1 col-xs-1"><img reward src="img/coin.png" class="img img_gift"></div><div class="col-sm-3 col-md-1 col-xs-2 reward">' + myObj.data[i].coins + '</div><div class="col-sm-1 col-md-1 col-xs-1"><img src="img/level icon 2.png" class="img img_gift"></div><div class="col-sm-3 col-md-1 col-xs-2 reward">' + myObj.data[i].number + '</div></div></div></div>' + '</div>';
     }
     if (j > 3) {
         container.innerHTML += '<div class="row draw-line"><div class="col-sm-2 col-md-2 col-xs-2"> <div class="numberCircle">' + j + '</div></div><div class="col-sm-2 col-md-2 col-xs-2"> <img src="' + headimg1 + '" class="img img-circle my_img"></div><div class="col-sm-6 col-md-8 col-xs-8"> <div class="row row_merg"><p class="font_name">' + res + '</p></div><div class="row row_bot"><div class="col-sm-1 col-md-1 col-xs-1"><img reward src="img/coin.png" class="img img_gift"></div><div class="col-sm-3 col-md-1 col-xs-2 reward">' + myObj.data[i].coins + '</div><div class="col-sm-1 col-md-1 col-xs-1"><img src="img/level icon 2.png" class="img img_gift"></div><div class="col-sm-3 col-md-1 col-xs-2 reward">' + myObj.data[i].number + '</div></div></div></div>' + '</div>';
     }
     j++;
  }
 }

// top talent by month 

 $.ajax({
     type: 'GET',
     async: false,
     url: 'http://34.210.95.182:8080/db/search',
     crossDomain: true,
     data: {
         type: "top_talent_by_month"
     },
     dataType: 'json',
     success: function(data) {
         myObj2 = data;
         console.log(myObj2);
     }
 });
 
var text = "";
var k;
var l = 1;
var header_img_talent=document.getElementById("header_img_talent");
var top_one_talent=document.getElementById("top_one_talent");
 var container_talent = document.getElementById("demo_talent");
 var res2;
 for (var k = 0; k < myObj2.data.length; k++) {
     if (myObj2.data[k].nickname > 11) {
         res2 = myObj2.data[k].nickname.substring(0, 12);
         res2 = res2 + "...";
     } else {
         res2 = myObj2.data[k].nickname;
     }
     var headimg3 = getImagePath(myObj2.data[k].headimg, myObj2.data[k].targetid);


     if (l == 1) {
         header_img_talent.innerHTML +='<img  class="img img-responsive header_background" src="img/1d.png" > <img  class="img img-responsive img-circle" src="' + headimg3 + '" id="img_first">';
        top_one_talent.innerHTML +='<div class="row first">'+res2+'</div><div class="row first_row"><div class="col-sm-1 col-md-1 col-xs-1"><img  src="img/coin.png" class="img_first"></div><div class="col-sm-3 col-md-3 col-xs-4 first_rank">'+myObj2.data[k].coins+'</div><div class="col-sm-1 col-md-1 col-xs-1"><img  src="img/level icon.png" class="img_first"></div><div class="col-sm-3 col-md-3 col-xs-4 first_rank" >'+myObj2.data[k].number+'</div></div>'; 
     }

     if (l == 2) {
         container_talent.innerHTML += '<div class="row draw-line"><div class="col-sm-2 col-md-2 col-xs-2"> <img src="img/3.png" class="img  my_img1"></div><div class="col-sm-2 col-md-2 col-xs-2"> <img src="' + headimg3 + '" class="img img-circle my_img"></div><div class="col-sm-6 col-md-8 col-xs-8"> <div class="row row_merg"><p class="font_name">' + res2 + '</p></div><div class="row row_bot"><div class="col-sm-1 col-md-1 col-xs-1"><img reward src="img/coin.png" class="img img_gift"></div><div class="col-sm-3 col-md-1 col-xs-2 reward">' + myObj2.data[k].coins + '</div><div class="col-sm-1 col-md-1 col-xs-1"><img src="img/level icon 2.png" class="img img_gift"></div><div class="col-sm-3 col-md-1 col-xs-2 reward">' + myObj2.data[k].number + '</div></div></div></div>' + '</div>';
     }
     if (l == 3) {
         container_talent.innerHTML += '<div class="row draw-line"><div class="col-sm-2 col-md-2 col-xs-2"> <img src="img/4.png" class="img  my_img1"></div><div class="col-sm-2 col-md-2 col-xs-2"> <img src="' + headimg3 + '" class="img img-circle my_img"></div><div class="col-sm-6 col-md-8 col-xs-8"> <div class="row row_merg"><p class="font_name">' + res2 + '</p></div><div class="row row_bot"><div class="col-sm-1 col-md-1 col-xs-1"><img reward src="img/coin.png" class="img img_gift"></div><div class="col-sm-3 col-md-1 col-xs-2 reward">' + myObj2.data[k].coins + '</div><div class="col-sm-1 col-md-1 col-xs-1"><img src="img/level icon 2.png" class="img img_gift"></div><div class="col-sm-3 col-md-1 col-xs-2 reward">' + myObj2.data[k].number + '</div></div></div></div>' + '</div>';
     }
     if (l > 3) {
         container_talent.innerHTML += '<div class="row draw-line"><div class="col-sm-2 col-md-2 col-xs-2"> <div class="numberCircle">' + l + '</div></div><div class="col-sm-2 col-md-2 col-xs-2"> <img src="' + headimg1 + '" class="img img-circle my_img"></div><div class="col-sm-6 col-md-8 col-xs-8"> <div class="row row_merg"><p class="font_name">' + res2 + '</p></div><div class="row row_bot"><div class="col-sm-1 col-md-1 col-xs-1"><img reward src="img/coin.png" class="img img_gift"></div><div class="col-sm-3 col-md-1 col-xs-2 reward">' + myObj2.data[k].coins + '</div><div class="col-sm-1 col-md-1 col-xs-1"><img src="img/level icon 2.png" class="img img_gift"></div><div class="col-sm-3 col-md-1 col-xs-2 reward">' + myObj2.data[k].number + '</div></div></div></div>' + '</div>';
     }
     l++;
 }

