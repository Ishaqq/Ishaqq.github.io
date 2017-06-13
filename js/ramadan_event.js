      $(document).ready(function() {
          $(".glitters").css("display", "block");
          $(".streamer").css("display", "none");
          /* Simple Timer. The countdown to 20:30 2100.05.09
          --------------------------------------------------------- */
          $('#simple_timer').syotimer({
              year: 2017,
              month: 6,
              day: 8,
              hour: 0,
              minute: 0,
              timeZone: 0

          });

      });

      // We call function2 from jquery call back function
      //at folder js/timer/build/jquery.syotimer.min.js
      function function2() {
          $("#countdown2").css("display", "none");
          $("#countdown1").css("display", "block");
          $('#simple_timer').syotimer({
              year: 2017,
              month: 6,
              day: 21,
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