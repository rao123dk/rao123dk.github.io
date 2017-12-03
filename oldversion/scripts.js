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

      // $(window).resize(function(){
      //   drawStuff();
      // }); 
$(document).ready(function(){
  var project_database =[
  {
    "title":"Midday Meal Quality Control and Evaluation System",
    "descrption":"- A web application to monitor and maintain the requirement of nutritional intake of students of government schools. This web app keeps track of the amount of food provided to the students, its nutrition value.",
    "tech_used" :"Technology used:- JavaScript, node.js , Angularjs, Express.js,Pug and Mongodb"
    },
    {
    "title":"Indian Kitchen",
    "descrption":"- Indian Kitchen is a restaurant search and discovery service web app.",
    "tech_used" :"Technology used:- Node.js, Javascript, Express.js, MongoDB, and Pug"
    },
    {
    "title":"Form validator Plugin",
    "descrption":"- A light weight plugin for validate the input fields of HTML registration form.",
    "tech_used" :"Technology used: - Javascript,HTML,Algorithm"
    }
  ]
  
  $(".project_title").html("<q>"+project_database[0]["title"]+"</q>");
  $(".project_descrption").html(project_database[0]["descrption"]);
  $(".tech_used").html(project_database[0]["tech_used"]);

  var itr=0;
  function slide_project(){
  var slide_intrerval = setInterval(function(){
    $(".project_title").html("<q>"+project_database[itr]["title"]+"</q>");
    $(".project_descrption").html(project_database[itr]["descrption"]);
    $(".tech_used").html(project_database[itr]["tech_used"]);
     itr++;
     if(itr>project_database.length-1){
      clearInterval(slide_intrerval);
      slide_project();
      itr=0;
     }
  },5000);
  }

  slide_project();
  
  $(".link_github").hide();
  $(".generatelink").mouseover(function(){
      $(".link_github").show(); 
      $(".text_github").hide();
  });
  $(".generatelink").mouseout(function(){
      $(".link_github").hide(); 
      $(".text_github").show();
  });
    

var pieChart = function() {
    $('.chart').easyPieChart({
      scaleColor: false,
      lineWidth: 10,
      lineCap: 'butt',
      barColor: '#17e7a4',
      trackColor: "#000000",
      size: 160,
      animate: 1000
    });
  };
pieChart();


});