      $(document).ready(function() {
          $(".glitters").css("display", "block");
          $(".streamer").css("display", "none");

          var d = new Date();
          var n = d.getMonth();
           n=n+1;
          /* Simple Timer. The countdown to 20:30 2100.05.09
          --------------------------------------------------------- */
          $('#simple_timer').syotimer({
              year: 2017,
              month: n,
              day: 21,
              hour: 6,
              minute: 35,
              timeZone: 0

          });

      });

      // We call function2 from jquery call back function
      //at folder js/timer/build/jquery.syotimer.min.js
      function eventNextMonth() {
        var d = new Date();
          var n = d.getMonth();
           n=n+1;
          $("#countdown2").css("display", "none");
          $("#countdown1").css("display", "block");
          $('#simple_timer').syotimer({
              year: 2017,
              month: n,
              day: 30,
              hour: 0,
              minute: 0,
              timeZone: 0

          });
      }


      function streamer() {
          $(".glitters").css("display", "block");
          $(".streamer").css("display", "none");
      }

      function glitters() {
          $(".glitters").css("display", "none");
          $(".streamer").css("display", "block");
      }

      function myFunction() {
          $("#board").removeClass("active");
          $("#event").addClass("active");
          $("#test1").addClass("tab-pane fade in active");
          $("#test2").removeClass("in active");
          $('#event').trigger('click');
      }