
//Original code came from google charts (acknowledgement)

/* 
 * Area for my Google Viz style objects: fonts, colors etc.
 * 
 */
		var myTextStyle = {
			
			fontSize: 12,
      		bold: true,
      		italic: false,
      		color: 'red',     // The color of the text.
      		opacity: 0.8          // The transparency of the text.
		};


		// new var for manipulating gridlines
		var myGridLinesColor = {color: 'red', count: 4};
		
		//new var for manipulating date along hAxis -- could not get to work
		var myHAxisFormat = {format:'MMM d, y'};
		
		// Set chart options to reflect new data set
		var options = {'title':'Annual GDP for the US',
                       'width':500,
                       'height':350,
                       'hAxis':{
                       	'title':'Years'
                       } //end of hAxis object
			                       
  			
  			
     }; // end of options variable
     
     	options.vAxis = {'title':'GDP Level'};
		options.hAxis.textStyle = myTextStyle;
		options.vAxis.textStyle = myTextStyle;
		
		options.hAxis.gridlines = myGridLinesColor; // this instructs hAxis gridlines to follow format contained within var myGridLinesColor
		options.vAxis.gridlines = myGridLinesColor; // this instructs vAxis gridlines to follow format contained within var myGridlinesColor
		options.hAxis.format = myHAxisFormat; //this instruction is not working - perhaps because data displays date as a string???
		
      // Load the Visualization API and the piechart package.
      google.load('visualization', '1.0', {'packages':['corechart']});

      // Set a callback to run when the Google Visualization API is loaded.
      google.setOnLoadCallback(drawChart);

      // Callback that creates and populates a data table,
      // instantiates the pie chart, passes in the data and
      // draws it.
      function drawChart() {

		//Created var for my 'big' array
		
		var myGDPArray = [];
		
		var myFredObs = FredGDPData.observations
		
		
		//Created 'for' loop in order to pull the information I need from FredGDPData observations for my array of arrays
		
		for (var i=0; i<FredGDPData.observations.length; i ++) {
			console.log (FredGDPData.observations [i]);
			
			//Created new var for my 'little' array - i.e. the arrays within my 'big' array
						
			var myItem = [];
			
			//Gave instruction to push "date" and "value", in that order, from myFredObs to myGDPArray
			
			myItem.push(String(myFredObs [i].date));
			myItem.push(Number(myFredObs [i].value));
			myGDPArray.push(myItem);
			
			console.log (myGDPArray);
			
		}

        // Create the data table.
        //This is an array of arrays, as indicated by the square brackets inside square brackets
        var data = new google.visualization.DataTable();
        //Changed descriptor for 'string' to Date from Topping
        data.addColumn('string', 'Date');
        //Changed descriptor for 'number' to GDP (from 'Slices')
        data.addColumn('number', 'GDP');
        //Inserted myGDPArray in data.addRows function by way of instruction to pull info for the Rows from myGDPArray 
        //myGDPArray is the var created earlier for the 'big' array
        data.addRows(myGDPArray);

        
        
        
		
	
			
        // Instantiate and draw our chart, passing in some options.
        //Changed Pie Chart to Column Chart
        var chart = new google.visualization.LineChart(document.getElementById('chart_div'));
        chart.draw(data, options);
       }
      