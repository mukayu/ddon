/* flexslider */
$(window).load(function() {
	$('.slider').flexslider({
		animation: "slide",
		controlNav: "thumbnails",
		slideshow: false
	});
});


//レーダーチャート
$(window).load(function() {
	$('.readerchart').each(function(index){
		var ctx = $(this)[0].getContext("2d");
		var myRadarChart = new Chart(ctx, {
			type: 'radar',
			data: { 
				labels: [
					$(this).next().find("dt").eq(0).text(),
					$(this).next().find("dt").eq(1).text(),
					$(this).next().find("dt").eq(2).text(),
					$(this).next().find("dt").eq(3).text(),
					$(this).next().find("dt").eq(4).text()
				],
				datasets: [{
					label: "個人評価",
          backgroundColor: "rgba(179,181,198,0.2)",
          borderColor: "rgba(179,181,198,1)",
          pointBackgroundColor: "rgba(179,181,198,1)",
          pointBorderColor: "#fff",
          pointHoverBackgroundColor: "#fff",
          pointHoverBorderColor: "rgba(179,181,198,1)",
					data: [
						$(this).next().find("dd").eq(0).text(),
						$(this).next().find("dd").eq(1).text(),
						$(this).next().find("dd").eq(2).text(),
						$(this).next().find("dd").eq(3).text(),
						$(this).next().find("dd").eq(4).text(),
					]	
				}]
			},
			options:{
				scale:{
					ticks:{
						beginAtZero:true,
						max:10,
						min:0,
						stepSize:2,
						fontSize:0 // 数値非表示
					},
				},
				legend: {
        	display: false
        },
			}
  	});
	});
});

$(window).load(function() {
　　$('.parameters section').matchHeight();
});
