 var myObj;

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
         type: "top_gift_by_rank"
     },
     dataType: 'json',
     success: function(data) {
         myObj = data;
         console.log(myObj);
     }
 });

 if (myObj.data.length < 1) {
     $("#board").removeClass("active");
     $("#event").addClass("active");
     $("#test1").addClass("tab-pane fade in active");
     $("#test2").removeClass("in active");
     $('#event').css("text-align", "right");
     $("#lead").hide();
 } else {
     $("#event").removeClass("active");
     $("#board").addClass("active");
     $("#test2").addClass("tab-pane fade in active");
     $("#test1").removeClass("in active");
     $("#lead").show();
 }
 var text = "";
 var i;
 var j = 1;

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


     if (j == 1) {
         container.innerHTML += '<div class="row draw-line"><div class="col-sm-2 col-md-2 col-xs-2"> <img src="img/medalgold.png" class="img  my_img1"></div><div class="col-sm-2 col-md-2 col-xs-2"> <img src="' + headimg1 + '" class="img img-circle my_img"></div><div class="col-sm-6 col-md-8 col-xs-8"> <div class="row row_merg"><p class="font_name">' + res + '</p></div><div class="row row_bot"><div class="col-sm-1 col-md-1 col-xs-1"><img reward src="img/moon_final.png" class="img img_gift"></div><div class="col-sm-3 col-md-1 col-xs-2 reward">' + myObj.data[i].number + '</div><div class="col-sm-1 col-md-1 col-xs-1"><img src="img/Coin.png" class="img img_gift"></div><div class="col-sm-3 col-md-1 col-xs-2 reward">' + myObj.data[i].coins + '</div></div></div></div>' + '</div>';
     }

     if (j == 2) {
         container.innerHTML += '<div class="row draw-line"><div class="col-sm-2 col-md-2 col-xs-2"> <img src="img/medalsilver.png" class="img  my_img1"></div><div class="col-sm-2 col-md-2 col-xs-2"> <img src="' + headimg1 + '" class="img img-circle my_img"></div><div class="col-sm-6 col-md-8 col-xs-8"> <div class="row row_merg"><p class="font_name">' + res + '</p></div><div class="row row_bot"><div class="col-sm-1 col-md-1 col-xs-1"><img reward src="img/moon_final.png" class="img img_gift"></div><div class="col-sm-3 col-md-1 col-xs-2 reward">' + myObj.data[i].number + '</div><div class="col-sm-1 col-md-1 col-xs-1"><img src="img/Coin.png" class="img img_gift"></div><div class="col-sm-3 col-md-1 col-xs-2 reward">' + myObj.data[i].coins + '</div></div></div></div>' + '</div>';
     }
     if (j == 3) {
         container.innerHTML += '<div class="row draw-line"><div class="col-sm-2 col-md-2 col-xs-2"> <img src="img/medalbronze.png" class="img  my_img1"></div><div class="col-sm-2 col-md-2 col-xs-2"> <img src="' + headimg1 + '" class="img img-circle my_img"></div><div class="col-sm-6 col-md-8 col-xs-8"> <div class="row row_merg"><p class="font_name">' + res + '</p></div><div class="row row_bot"><div class="col-sm-1 col-md-1 col-xs-1"><img reward src="img/moon_final.png" class="img img_gift"></div><div class="col-sm-3 col-md-1 col-xs-2 reward">' + myObj.data[i].number + '</div><div class="col-sm-1 col-md-1 col-xs-1"><img src="img/Coin.png" class="img img_gift"></div><div class="col-sm-3 col-md-1 col-xs-2 reward">' + myObj.data[i].coins + '</div></div></div></div>' + '</div>';
     }
     if (j >= 4) {
         container.innerHTML += '<div class="row draw-line"><div class="col-sm-2 col-md-2 col-xs-2"> <div class="numberCircle">' + j + '</div></div><div class="col-sm-2 col-md-2 col-xs-2"> <img src="' + headimg1 + '" class="img img-circle my_img"></div><div class="col-sm-6 col-md-8 col-xs-8"> <div class="row row_merg"><p class="font_name">' + res + '</p></div><div class="row row_bot"><div class="col-sm-1 col-md-1 col-xs-1"><img reward src="img/moon_final.png" class="img img_gift"></div><div class="col-sm-3 col-md-1 col-xs-2 reward">' + myObj.data[i].number + '</div><div class="col-sm-1 col-md-1 col-xs-1"><img src="img/Coin.png" class="img img_gift"></div><div class="col-sm-3 col-md-1 col-xs-2 reward">' + myObj.data[i].coins + '</div></div></div></div>' + '</div>';
     }
     j++;
 }


 var myObj2;



 $.ajax({
     type: 'GET',
     async: false,
     url: 'http://34.210.95.182:8080/db/search',
     crossDomain: true,
     data: {
         type: "top_gift_by_userrank"
     },
     dataType: 'json',
     success: function(data2) {
         myObj2 = data2;
         console.log(myObj2);
     }
 });


 var text = "";
 var k;
 var l = 1;

 var internaldemo = document.getElementById("internaldemo");
 var res;
 for (var k = 0; k < myObj2.data.length; k++) {
     if (myObj2.data[k].nickname > 11) {
         res2 = myObj2.data[k].nickname.substring(0, 12);
         res2 = res2 + "...";
     } else {
         res2 = myObj2.data[k].nickname;
     }
     var headimg2 = getImagePath(myObj2.data[k].headimg, myObj2.data[k].targetid);


     if (l == 1) {
         internaldemo.innerHTML += '<div class="row draw-line"><div class="col-sm-2 col-md-2 col-xs-2"> <img src="img/medalgold.png" class="img  my_img1"></div><div class="col-sm-2 col-md-2 col-xs-2"> <img src="' + headimg2 + '" class="img img-circle my_img"></div><div class="col-sm-6 col-md-8 col-xs-8"> <div class="row row_merg"><p class="font_name">' + res2 + '</p></div><div class="row row_bot"><div class="col-sm-1 col-md-1 col-xs-1"><img reward src="img/moon_final.png" class="img img_gift"></div><div class="col-sm-3 col-md-1 col-xs-2 reward">' + myObj2.data[k].number + '</div><div class="col-sm-1 col-md-1 col-xs-1"><img src="img/Coin.png" class="img img_gift"></div><div class="col-sm-3 col-md-1 col-xs-2 reward">' + myObj2.data[k].coins + '</div></div></div></div>' + '</div>';
     }

     if (l == 2) {
         internaldemo.innerHTML += '<div class="row draw-line"><div class="col-sm-2 col-md-2 col-xs-2"> <img src="img/medalsilver.png" class="img  my_img1"></div><div class="col-sm-2 col-md-2 col-xs-2"> <img src="' + headimg2 + '" class="img img-circle my_img"></div><div class="col-sm-6 col-md-8 col-xs-8"> <div class="row row_merg"><p class="font_name">' + res2 + '</p></div><div class="row row_bot"><div class="col-sm-1 col-md-1 col-xs-1"><img reward src="img/moon_final.png" class="img img_gift"></div><div class="col-sm-3 col-md-1 col-xs-2 reward">' + myObj2.data[k].number + '</div><div class="col-sm-1 col-md-1 col-xs-1"><img src="img/Coin.png" class="img img_gift"></div><div class="col-sm-3 col-md-1 col-xs-2 reward">' + myObj2.data[k].coins + '</div></div></div></div>' + '</div>';
     }
     if (l == 3) {
         internaldemo.innerHTML += '<div class="row draw-line"><div class="col-sm-2 col-md-2 col-xs-2"> <img src="img/medalbronze.png" class="img  my_img1"></div><div class="col-sm-2 col-md-2 col-xs-2"> <img src="' + headimg2 + '" class="img img-circle my_img"></div><div class="col-sm-6 col-md-8 col-xs-8"> <div class="row row_merg"><p class="font_name">' + res2 + '</p></div><div class="row row_bot"><div class="col-sm-1 col-md-1 col-xs-1"><img reward src="img/moon_final.png" class="img img_gift"></div><div class="col-sm-3 col-md-1 col-xs-2 reward">' + myObj2.data[k].number + '</div><div class="col-sm-1 col-md-1 col-xs-1"><img src="img/Coin.png" class="img img_gift"></div><div class="col-sm-3 col-md-1 col-xs-2 reward">' + myObj2.data[k].coins + '</div></div></div></div>' + '</div>';
     }
     if (l > 3) {
         internaldemo.innerHTML += '<div class="row draw-line"><div class="col-sm-2 col-md-2 col-xs-2"> <div class="numberCircle">' + l + '</div></div><div class="col-sm-2 col-md-2 col-xs-2"> <img src="' + headimg2 + '" class="img img-circle my_img"></div><div class="col-sm-6 col-md-8 col-xs-8"> <div class="row row_merg"><p class="font_name">' + res2 + '</p></div><div class="row row_bot"><div class="col-sm-1 col-md-1 col-xs-1"><img reward src="img/moon_final.png" class="img img_gift"></div><div class="col-sm-3 col-md-1 col-xs-2 reward">' + myObj2.data[k].number + '</div><div class="col-sm-1 col-md-1 col-xs-1"><img src="img/Coin.png" class="img img_gift"></div><div class="col-sm-3 col-md-1 col-xs-2 reward">' + myObj2.data[k].coins + '</div></div></div></div>' + '</div>';
     }
     l++;
 }