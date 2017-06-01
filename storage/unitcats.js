
// var layername = 'listings-accessibility-5w8m1a'	
// var layername = 'nyc-listings-accessibility-9kdwt3'
// var layername = 'ny-listings-accessibility-dmmj0i'
// var layername = 'atlanta-listings-accessibilit-15y8ba'
// var layername = 'la-listings-accessibility-cuukn9'


// center: [-84.381,33.768] /* Atlnta*/
// center: [-73.998,40.721] /* NYC*/
// center:[-118.221,33.955] /* LA */
// var layername = 'sf-listings-accessibility-8j7weg' /* SF Grid*/

var layer_sf = {
				'name': 'San Francisco',
				'location': [-122.2913, 37.8272],
				'link': 'sf-listings-accessibility-8j7weg'
				}

var layer_nyc = {
				'name': 'New York City',
				'location': [-73.998,40.721],
				'link': 'ny-listings-accessibility-dmmj0i'
				}

var layer_la = {
				'name': 'Los Angeles',
				'location': [-118.221,33.955],
				'link': 'la-listings-accessibility-cuukn9'
				}

var layer_atl = {
				'name': 'Atlanta',
				'location': [-84.381,33.768],
				'link': 'atlanta-listings-accessibilit-15y8ba'
				}

// Define color categories for mapping listings

// var colors = ['#CC0133', '#990166', '#4D00B2', '#0000FF']; //red-to-blue
// var colors = ['#f0f9e8', '#bae4bc', '#7bccc4', '#2b8cbe']; //mint
// var colors = ['#fee5d9', '#fcae91', '#fb6a4a', '#cb181d']; //color brewer red
// var colors = ['#F80C10', '#F2109B', '#B413ED', '#181AE7']; //red-to-blue2
// var colors = ['#6EEAF7', '#4B96F0', '#3158EB', '#181AE7']; //red-to-blue
// var colors = ['#ffffcc','#a1dab4','#41b6c4','#2c7fb8','#253494','#fed976','#feb24c','#fd8d3c','#f03b20','#bd0026']; // Bright 
// var colors = ['#E1FD3A', '#EA6529', '#F0001F', '#A6071C']; //yellow-to-red

var colors = ['#bae4bc','#EA6529','#fdffd1']

var nation2 = {0: {'label': '<5', 'color': colors[0]}, 1: {'label': '6&ndash;10', 'color': colors[1]}, 
			   2: {'label': '11&ndash;40', 'color': colors[2]}};



// the stops for radius and color of maps
var business_number = {
 	property: 'business_number',
	type: 'exponential', 
	stops: [
				[0,colors[0]],
				[5,colors[0]],
				[10,colors[1]],
				[60, colors[2]]]
};
var business_radius_props = {
	property: 'business_number',
    'base': 1,
    type: 'exponential',
	stops: [
				[{zoom: 11, value:0}, .5],
				[{zoom: 11, value:5},1],
				[{zoom: 11, value:20},1.5],
				[{zoom: 11, value:40}, 2],
				[{zoom: 20, value:0}, 4],
				[{zoom: 20, value:5},6],
				[{zoom: 20, value:20},8],
				[{zoom: 20, value:40}, 10]
				]
};

var retail = {
 	property: 'retail',
	type: 'exponential', 
	stops: [
				[0,colors[0]],
				[5,colors[0]],
				[10,colors[1]],
				[40, colors[2]]]
};
var retail_radius_props = {
	property: 'retail',
    'base': 1,
    type: 'exponential',
	stops: [
				[{zoom: 11, value:0}, .5],
				[{zoom: 11, value:5},1],
				[{zoom: 11, value:20},1.5],
				[{zoom: 11, value:40}, 2],
				[{zoom: 20, value:0}, 4],
				[{zoom: 20, value:5},6],
				[{zoom: 20, value:20},8],
				[{zoom: 20, value:40}, 10]
				]
};
	
var median_rent = {
 	property: 'median_rent',
	type: 'interval', 
	stops: [
				[0, colors[0]],
				[1000, colors[1]],
				[2000, colors[2]],
				[4000, colors[3]]]
	};