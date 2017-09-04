 google.charts.load('current', {'packages':['bar']});
      google.charts.setOnLoadCallback(drawStuff);

      function drawStuff() {
        var data = new google.visualization.arrayToDataTable([
          ['Skills and competences', 'Out Of 10'],
          ["JavaScript(ES6)", 9],
          ["Node.js", 8],
          ["AngularJS",8],
          ["mongoDB",6.5],
          ["Express.js", 7],
          ["jQuery", 8],
          ["Python", 6],
          ["Git/GitHub/Phabricator", 8],
          ["MySQL", 8],
          ["PHP(Moodle)", 6],
          ["Ionic/Cordova", 7],
          
          
          
          
         
        ]);

        var options = {
          title: 'My Skills',
          width: $(window).width()-50,
          legend: { position: 'none' },
          chart: { title: 'My Skills',
                    },
          bars: 'horizontal', 
          axes: {
            x: {
              0: { side: 'top', label: 'Self Score(Out of 10)'} // Top x-axis.
            }
          },
          bar: { groupWidth: "100%" }
        };

        var chart = new google.charts.Bar(document.getElementById('top_x_div'));
        chart.draw(data, options);
      };

      $(window).resize(function(){
        drawStuff();
      }); 