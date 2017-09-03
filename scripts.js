 google.charts.load('current', {'packages':['bar']});
      google.charts.setOnLoadCallback(drawStuff);

      function drawStuff() {
        var data = new google.visualization.arrayToDataTable([
          ['Skills', 'Out Of 10'],
          ["JavaScript", 9],
          ["Node.js", 7.5],
          ["expressjs",6],
          ["mongoDB",6],
          ["C/C++", 7],
          ["AngularJS",8.5],
          ["Ionic",6.5],
          ["PHP",7.5],
          ["MySQL",7],
          ["Moodle",5],
          ["Python", 6]
          
          
         
        ]);

        var options = {
          title: 'My Skills',
          width: 1300,
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