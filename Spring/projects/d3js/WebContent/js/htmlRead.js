/**
 * 
 */

window.addEventListener("load", function(){
	
	
	//1. 데이터 준비
	d3.html("data.html").then(function(data){
		
		var tr = data.querySelectorAll("table tr");
		var dataSet = [];
		for(var i = 1; i < tr.length; i++){
			var d = tr[i].querySelectorAll("td")[0].firstChild.nodeValue;
			dataSet.push(d);
		}
	
		d3.select("#myGraph")
		.selectAll("rect")
		.data(dataSet) //데이터 설정
		.enter()
		.append("rect")
		.attr("class", "bar")
		.attr("x", 0)
		.attr("y", function(d, i){
			return i * 30;
		})
		.attr("height", "20px")
		.attr("width", function(d, i){
			return d + "px";
		});
		
		d3.select("#myGraph")
		.selectAll("rect")
		.on("click", function(){
			d3.select(this)
				.style("fill", "cyan");
		});

		var scale = d3.scaleLinear()
		.domain([0, 300])
		.range([0, 300])
		
		var axis = d3.axisBottom(scale);
		
		d3.select("#myGraph")
		.append("g")
		.attr("class", "axis")
		.attr("transform", "translate(0, " + ((1+dataSet.length) * 30+5) + ")" )
		.call(axis);
		
		

	}); //csv.then() end
	
});
			
	



