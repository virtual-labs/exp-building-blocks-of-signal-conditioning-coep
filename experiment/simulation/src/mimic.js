	x = 50;
	y = 50;
	wt = 0;
	count = 0;
	count_rpm = 0;
	count_er = 0;
	torque = 0;
	torque_corr = 0;
	speed = 1440;
	power = motorSize;
	
	length = 0;
	flag_switch = 0;
	rpm = 0;
	flag = 0;
	wt_max = 0;
	checkAlert = 0;
	var array = [];
	var torque_std;
	var weight_max;
	var id;
	checkAns = 0;
	checkAlert = 0;
	speedJson = {};
	arrayJson = [];
	masterJson = {};
	var cirSen;
	var cirSenGrf;
	var cirCap;
	var cirCap2;
	var cirAmp;
	var senChk = 0;
	var senChk2 = 0;
	var capChk = 0;
	var capChk1 = 0;
	var capChk2 = 0;
	var intChk = 0; 
	var cirAmp;
	var cirAmp2;
	var cirFilter;
	
	



function mimic() {
	//	var paper = new Raphael(document.getElementById('canvas-div'), 1000, 1000);

	$('#canvas-div').removeAttr('width');
	$('#canvas-div').removeAttr('height');
	var w = 1000;
	var h = 800;

	var width = $(window).width();

	if ($(window).width() < 500) {
		width = $(this).width();
		paper = new Raphael(document.getElementById('canvas-div'), '100%', '100%');
		paper.setViewBox(0, 0, w, h, true);
		paper.setSize('90%', '90%');
	} else {
		paper = new Raphael(document.getElementById('canvas-div'), '100%', '100%');
		paper.setViewBox(0, 0, w, h, true);
		paper.setSize('90%', '90%');
	}


	
	
//	var sensor = paper.image("images/sensor.jpeg", (x + 10), (y + 50), 130, 120);
//	var amplifier = paper.image("images/amplifier.jpeg", (x + 10), (y + 250), 130, 120);
//	var ground = paper.image("images/ground.jpeg", (x + 10), (y + 450), 130, 120);
//	
//	
//	sensor.click(function(event) {		
//		sensor_diag(x,y)
//	});
//	
//	 = paper.circle((x+150), (y+100), 20).attr({'stroke':'black','stroke-width':'5','fill':'red'});
//	var rect = paper.rect((x), (y) ,200, 50).attr({'stroke':'black','stroke-width':'5',});
//	var img_txt = paper.text(x + 100, y + 20, "Charge Amplifier")
//				.attr({
//					'font-size': 20,
//					'font-weight': "bold",
//					'fill': 'red'
//
//				});
//	
	
}



	
function sensor_diag(x,y){
		r = [];
		  r[0] = paper.path('M' +(x+150)+ ' ' +(y+100)+ 'l 0 0').attr({'stroke':'black','stroke-width':'5'})
		  r[0].animate({path : 'M' +(x+150)+ ' ' +(y+100)+ 'l 250 0'}, (500),function(){
		 r[1] = paper.path('M' +(x+150)+ ' ' +(y+100)+ 'l 0 0').attr({'stroke':'black','stroke-width':'5'})
		  r[1].animate({path : 'M' +(x+150)+ ' ' +(y+100)+ 'l 0 50'}, (500),function(){
		 r[2]= paper.circle((x+150), (y+180), 30).attr({'stroke':'black','stroke-width':'5'})
		  r[2].animate({ 'cx': x+150, 'cy': y+180, }, 100, "bounce" ,function(){
		 r[3]= paper.circle((x+150), (y+220), 30).attr({'stroke':'black','stroke-width':'5'})
		  r[3].animate({ 'cx': x+150, 'cy': y+220, }, 100, "bounce",function(){
		  r[4] = paper.path('M' +(x+150)+ ' ' +(y+240)+ 'l 0 0').attr({'stroke':'black','stroke-width':'5'})
		  r[4].animate({path : 'M' +(x+150)+ ' ' +(y+250)+ 'l 0 50 l 250 0'}, (1000),function(){
		  r[5] = paper.path('M' +(x+275)+ ' ' +(y+100)+ 'l 0 0').attr({'stroke':'black','stroke-width':'5'})
		  r[5].animate({path : 'M' +(x+275)+ ' ' +(y+100)+ 'l 0 90'}, (500),function(){
		  r[6] = paper.path('M' +(x+245)+ ' ' +(y+190)+ 'l 0 0').attr({'stroke':'black','stroke-width':'5'})
		  r[6].animate({path : 'M' +(x+245)+ ' ' +(y+190)+ 'l 60 0'}, (500),function(){
		  r[7] = paper.path('M' +(x+245)+ ' ' +(y+210)+ 'l 0 0').attr({'stroke':'black','stroke-width':'5'})
		  r[7].animate({path : 'M' +(x+245)+ ' ' +(y+210)+ 'l 60 0'}, (500),function(){
	      r[8] = paper.path('M' +(x+275)+ ' ' +(y+210)+ 'l 0 0').attr({'stroke':'black','stroke-width':'5'})
		  r[8].animate({path : 'M' +(x+275)+ ' ' +(y+210)+ 'l 0 90'}, (500),function(){
		  r[9] = paper.path('M' +(x+400)+ ' ' +(y+100)+ 'l 0 0').attr({'stroke':'black','stroke-width':'5'})
		  r[9].animate({path : 'M' +(x+400)+ ' ' +(y+100)+ 'l 0 70'}, (500),function(){
			r[10] = paper.path('M' +(x+400)+ ' ' +(y+170)+ 'l 0 0').attr({'stroke':'black','stroke-width':'5'})
		  r[10].animate({path : 'M' +(x+400)+ ' ' +(y+170)+ 'l -20 10 l 30 10 l -30 10 l 30 10 l -20 10 l  '}, (500),function(){
			r[5] = paper.path('M' +(x+390)+ ' ' +(y+220)+ 'l 0 0').attr({'stroke':'black','stroke-width':'5'})
		  r[5].animate({path : 'M' +(x+390)+ ' ' +(y+220)+ 'l 0 120'}, (500),function(){
			 r[6] = paper.path('M' +(x+375)+ ' ' +(y+340)+ 'l 0 0').attr({'stroke':'black','stroke-width':'5'})
		  r[6].animate({path : 'M' +(x+375)+ ' ' +(y+340)+ 'l  30 0 M ' +(x+380)+ ' ' +(y+350)+'l 20 0 '}, (500),function(){
			 r[7] = paper.path('M' +(x+385)+ ' ' +(y+360)+ 'l 0 0').attr({'stroke':'black','stroke-width':'5'})
		  r[7].animate({path : 'M' +(x+385)+ ' ' +(y+360)+ 'l  10 0'}, (500))
		  }) 
			
		  })
		  })	  
		  })		 
		  })	  
		  })	  
		  })
		  })  
		  })
		  })  
		  });
		  })  
		  });
		cirSen = paper.circle((x+410), (y+100), 10).attr({'stroke':'black','stroke-width':'1','fill':'red'});
//		cirSenGrf =  paper.circle((x+410), (y+300), 10).attr({'stroke':'black','stroke-width':'1','fill':'red'});
		var u2txt = paper.text(x + 200, y + 50, "Electrical Analog ").attr({
		'font-size': 20,
		'font-weight': "bold"
		});
		
		var point  = paper.text(x + 400, y + 60, "1").attr({
		'font-size': 20,
		'font-weight': "bold"
		});
	
	}
	function ground_diag(x,y){
		r1 = [];
		  r1[1] = paper.path('M' +(x+350)+ ' ' +(y+100)+ 'l 0 0').attr({'stroke':'black','stroke-width':'5'})
		  r1[1].animate({path : 'M' +(x+350)+ ' ' +(y+100)+ 'l 100 0'}, (500),function(){
			r1[2] = paper.path('M' +(x+400)+ ' ' +(y+100)+ 'l 0 0').attr({'stroke':'black','stroke-width':'5'})
		  r1[2].animate({path : 'M' +(x+400)+ ' ' +(y+100)+ 'l  0 100'}, (500),function(){
			r1[3] = paper.path('M' +(x+370)+ ' ' +(y+200)+ 'l 0 0').attr({'stroke':'black','stroke-width':'5'})
		  r1[3].animate({path : 'M' +(x+370)+ ' ' +(y+200)+ 'l  60 0'}, (500),function(){
			r1[4] = paper.path('M' +(x+370)+ ' ' +(y+220)+ 'l 0 0').attr({'stroke':'black','stroke-width':'5'})
		  r1[4].animate({path : 'M' +(x+370)+ ' ' +(y+220)+ 'l  60 0'}, (500),function(){
			r1[5] = paper.path('M' +(x+400)+ ' ' +(y+220)+ 'l 0 0').attr({'stroke':'black','stroke-width':'5'})
		  r1[5].animate({path : 'M' +(x+400)+ ' ' +(y+220)+ 'l  0 120'}, (500),function(){
			 r1[6] = paper.path('M' +(x+400)+ ' ' +(y+300)+ 'l 0 0').attr({'stroke':'black','stroke-width':'5'})
		  r1[6].animate({path : 'M' +(x+400)+ ' ' +(y+300)+ 'l  -50 0'}, (500),function(){
			  r1[7] = paper.path('M' +(x+380)+ ' ' +(y+340)+ 'l 0 0').attr({'stroke':'black','stroke-width':'5'})
		  r1[7].animate({path : 'M' +(x+385)+ ' ' +(y+340)+ 'l  30 0 M ' +(x+390)+ ' ' +(y+350)+'l 20 0 '}, (500),function(){
			 r1[8] = paper.path('M' +(x+395)+ ' ' +(y+360)+ 'l 0 0').attr({'stroke':'black','stroke-width':'5'})
		  r1[8].animate({path : 'M' +(x+395)+ ' ' +(y+360)+ 'l  10 0'}, (500))
		  } )
			  
		  })
		  })  
		  })  
		  })
		  })	  
		  });
		  
		  cirCap = paper.circle((x+340), (y+300), 10).attr({'stroke':'black','stroke-width':'1','fill':'red'});
		cirCap2 =  paper.circle((x+340), (y+100), 10).attr({'stroke':'black','stroke-width':'1','fill':'red'});
		cirCap3 =  paper.circle((x+450), (y+100), 10).attr({'stroke':'black','stroke-width':'1','fill':'red'});
		
		var u2txt = paper.text(x + 300, y + 50, "Integrator ").attr({
		'font-size': 20,
		'font-weight': "bold"
		});
		
		var point  = paper.text(x + 320, y + 60, "2").attr({
		'font-size': 20,
		'font-weight': "bold"
		});
	}
	

	function ampli_diag(x,y){
		a = [];
		 a[0] = paper.path('M' +(x+500)+ ' ' +(y+100)+ 'l 0 0').attr({'stroke':'black','stroke-width':'5'})
		  a[0].animate({path : 'M' +(x+500)+ ' ' +(y+100)+ 'l 30 0 l 0 -30 l 80 40 l -80 40 l 0 -50 M' +(x+600)+ ' ' +(y+110)+'l 150 0 '}, (500),function(){
		a[1] = paper.path('M' +(x+500)+ ' ' +(y+100)+ 'l 0 0').attr({'stroke':'black','stroke-width':'5'})
		  a[1].animate({path : 'M' +(x+500)+ ' ' +(y+100)+ 'l 0 -130 l 100 0'}, (500),function(){
		a[2] = paper.path('M' +(x+600)+ ' ' +(y - 45)+ 'l 0 0').attr({'stroke':'black','stroke-width':'5'})
		  a[2].animate({path : 'M' +(x+600)+ ' ' +(y- 45)+ 'l 0 30 '}, (100),function(){
			a[3] = paper.path('M' +(x+620)+ ' ' +(y- 45)+ 'l 0 0').attr({'stroke':'black','stroke-width':'5'})
		  a[3].animate({path : 'M' +(x+620)+ ' ' +(y- 45)+ 'l 0 30 l 0 0'}, (100),function(){
			 a[4] = paper.path('M' +(x+620)+ ' ' +(y-30)+ 'l 0 0').attr({'stroke':'black','stroke-width':'5'})
		  a[4].animate({path : 'M' +(x+620)+ ' ' +(y-30)+ ' l 100 0'}, (500),function(){
			 a[5] = paper.path('M' +(x+720)+ ' ' +(y-30)+ 'l 0 0').attr({'stroke':'black','stroke-width':'5'})
		  a[5].animate({path : 'M' +(x+720)+ ' ' +(y-30)+ 'l 0 143 '}, (500),function(){
			  a[6] = paper.path('M' +(x+500)+ ' ' +(y+120)+ 'l 0 0').attr({'stroke':'black','stroke-width':'5'})
		  a[6].animate({path : 'M' +(x+500)+ ' ' +(y+120)+ 'l 30 0 '}, (500),function(){
			a[7] = paper.path('M' +(x+500)+ ' ' +(y+120)+ 'l 0 0').attr({'stroke':'black','stroke-width':'5'})
		  a[7].animate({path : 'M' +(x+500)+ ' ' +(y+120)+ 'l 0 80 '}, (500),function(){
			 a[8] = paper.path('M' +(x+485)+ ' ' +(y+200)+ 'l 0 0').attr({'stroke':'black','stroke-width':'5'})
		  a[8].animate({path : 'M' +(x+485)+ ' ' +(y+200)+ 'l 30 0'}, (500),function(){
			 a[9] = paper.path('M' +(x+490)+ ' ' +(y+210)+ 'l 0 0').attr({'stroke':'black','stroke-width':'5'})
		  a[9].animate({path : 'M' +(x+490)+ ' ' +(y+210)+ 'l 20 0'}, (500),function(){
			  a[10] = paper.path('M' +(x+495)+ ' ' +(y+220)+ 'l 0 0').attr({'stroke':'black','stroke-width':'5'})
		  a[10].animate({path : 'M' +(x+495)+ ' ' +(y+220)+ 'l 10 0'}, (500),function(){
			 a[11] = paper.path('M' +(x+500)+ ' ' +(y+25)+ 'l 0 0').attr({'stroke':'black','stroke-width':'5'})
		  a[11].animate({path : 'M' +(x+500)+ ' ' +(y+25)+ 'l 70 0'}, (500),function(){
			a[12] = paper.path('M' +(x+570)+ ' ' +(y+25)+ 'l 0 0').attr({'stroke':'black','stroke-width':'5'})
		  a[12].animate({path : 'M' +(x+570)+ ' ' +(y+25)+ 'l 10 -10 l 10 20 l 10 -20 l 10 20 l 10 -20 l 10 10 l 90 0'}, (500),function(){
			a[13] = paper.path('M' +(x+390)+ ' ' +(y+100)+ 'l 0 0').attr({'stroke':'black','stroke-width':'5'})
		  a[13].animate({path : 'M' +(x+390)+ ' ' +(y+100)+ 'l 20 0 l 10 -10 l 10 20 l 10 -20 l 10 20 l 10 -20 l 10 10 l 50 0'}, (500),function(){
			a[14] = paper.path('M' +(x+530)+ ' ' +(y+90)+ 'l 0 0').attr({'stroke':'black','stroke-width':'5'})
		  a[14].animate({path : 'M' +(x+530)+ ' ' +(y+90)+ 'l 20 0  M'+(x+540)+ ' ' +(y+80)+ 'l 0 20 M'+(x+540)+ ' ' +(y+130)+ 'l 10 0 '}, (500)  )
		  } )
		  })
		  })
			  
		  }) 
		  })
		  })
		  })
		  })
		  })
			  
		  })
		  })
		  }) 
			
		  })
		  });
		  cirAmp =  paper.circle((x+380), (y+100), 10).attr({'stroke':'black','stroke-width':'1','fill':'red'});
		  cirAmp2 =  paper.circle((x+750), (y+110), 10).attr({'stroke':'black','stroke-width':'1','fill':'red'});
		
		
		 
		 var u2txt = paper.text(x + 400, y + 50, "Integrator ").attr({
		'font-size': 20,
		'font-weight': "bold"
		});
		
		var point  = paper.text(x + 390, y + 80, "2").attr({
		'font-size': 20,
		'font-weight': "bold"
		});
		
		var point  = paper.text(x + 750, y + 60, "3").attr({
		'font-size': 20,
		'font-weight': "bold"
		});
	}
function openImg() {

  		
// 		 alert("hi");
//		 $("#canvas-div").html("");
 		
 		 sensor_diag(x-150,y);
 	cirSen.click(function(event) {		
//			alert("hi");
			senChk = 1;
		if (intChk == 1){
			 s = [];
			s[0] = paper.path('M' +(x+265)+ ' ' +(y+100)+ 'l 0 0').attr({'stroke':'black','stroke-width':'3'})
		  s[0].animate({path : 'M' +(x+265)+ ' ' +(y+100)+ 'l  70 0'}, (500),function(){
			  cirSen.attr({'fill':'green'});
			  cirCap2.attr({'fill':'green'})
			  senChk = 2;
			  
		  })
			 
		 }	
	});	
	
	
	}
	
 function groundImg(){
//	  mimic();
	 ground_diag(x,y);
	 cirCap.click(function(event) {	
		 if(senChk2 == 1){
			  s1 = [];
			s1[0] = paper.path('M' +(x+335)+ ' ' +(y+300)+ 'l 0 0').attr({'stroke':'black','stroke-width':'3'})
		  s1[0].animate({path : 'M' +(x+335)+ ' ' +(y+300)+ 'l  -70 0'}, (500),function(){
			  cirSenGrf.attr({'fill':'green'});
			  cirCap.attr({'fill':'green'})
			  senChk = 2;
			   })
			  }
			  
			
 		});	
	

	
	cirCap2.click(function(event){
		intChk = 1;
		if (senChk == 1){
			 s = [];
			s[0] = paper.path('M' +(x+335)+ ' ' +(y+100)+ 'l 0 0').attr({'stroke':'black','stroke-width':'3'})
		  s[0].animate({path : 'M' +(x+335)+ ' ' +(y+100)+ 'l  -70 0'}, (500),function(){
			  cirSen.attr({'fill':'green'});
			  cirCap2.attr({'fill':'green'})
			  senChk = 2;
			  
		  })
			 
		 }
		 	
	});
	
	
	
	
	
	cirCap3.click(function(event){
		capChk2 = 1;
//		alert("hi");
	});
	 
 	} //function end for coupling 
 
 
 
	function ampliImg(x,y){
		ampli_diag(x,y);
	cirAmp.click(function(event){
//		alert("hi");
		if (senChk == 1){
			 s = [];
			s[0] = paper.path('M' +(x+370)+ ' ' +(y+100)+ 'l 0 0').attr({'stroke':'black','stroke-width':'3'})
		  s[0].animate({path : 'M' +(x+370)+ ' ' +(y+100)+ 'l  -100 0'}, (500),function(){
			  cirSen.attr({'fill':'green'});
			  cirAmp.attr({'fill':'green'})
			  senChk = 2;
			  
		  })
			 
		 } 
	});
	
	cirAmp2.click(function(event){
//		alert("hi");
		capChk2 = 1;
		
	});
	
	
	
		
	}
	var cirFilter2;
	var filChk = 0;
	function filter(x,y){
	r = [];
		  r[0] = paper.path('M' +(x+150)+ ' ' +(y+100)+ 'l 0 0').attr({'stroke':'black','stroke-width':'5'})
		  r[0].animate({path : 'M' +(x+150)+ ' ' +(y+100)+ 'l 50 0 l 10 -20 l 10 30 l 10 -30 l 10 30 l 10 -20 l 50 0 '}, (500),function(){
		 r[1] = paper.path('M' +(x+300)+ ' ' +(y+90)+ 'l 0 0').attr({'stroke':'black','stroke-width':'5'})
		  r[1].animate({path : 'M' +(x+300)+ ' ' +(y+90)+ 'l 50 0 l 10 -20 l 10 30 l 10 -30 l 10 30 l 10 -20 l 50 0 l 0 260 l -300 0'}, (500),function(){
		r[2] = paper.path('M' +(x+300)+ ' ' +(y+90)+ 'l 0 0').attr({'stroke':'black','stroke-width':'5'})
		 r[2].animate({path : 'M' +(x+300)+ ' ' +(y+90)+ 'l 0 80 l 30 0 l 0 -30 l 40 30 l -40 30 l 0 -30 '}, (500) ,function(){
		r[3] = paper.path('M' +(x+370)+ ' ' +(y+170)+ 'l 0 0').attr({'stroke':'black','stroke-width':'5'})
		 r[3].animate({path : 'M' +(x+370)+ ' ' +(y+170)+ 'l 80 0 '}, (500) ,function(){
		r[4] = paper.path('M' +(x+150)+ ' ' +(y+100)+ 'l 0 0').attr({'stroke':'black','stroke-width':'5'})
		 r[4].animate({path : 'M' +(x+150)+ ' ' +(y+100)+ 'l 0 50 '}, (500),function(){
		r[5] = paper.path('M' +(x+140)+ ' ' +(y+150)+ 'l 0 0').attr({'stroke':'black','stroke-width':'5'})
		 r[5].animate({path : 'M' +(x+140)+ ' ' +(y+150)+ 'l 20 0 '}, (50),function(){
		r[6] = paper.path('M' +(x+142)+ ' ' +(y+160)+ 'l 0 0').attr({'stroke':'black','stroke-width':'5'})
		 r[6].animate({path : 'M' +(x+142)+ ' ' +(y+160)+ 'l 15 0 '}, (50),function(){
		r[6] = paper.path('M' +(x+145)+ ' ' +(y+170)+ 'l 0 0').attr({'stroke':'black','stroke-width':'5'})
		 r[6].animate({path : 'M' +(x+145)+ ' ' +(y+170)+ 'l 8 0 '}, (50),function(){
	    r[7] = paper.path('M' +(x+100)+ ' ' +(y+200)+ 'l 0 0').attr({'stroke':'black','stroke-width':'5'})
		r[7].animate({path : 'M' +(x+100)+ ' ' +(y+200)+ 'l 50 0 l 10 -20 l 10 30 l 10 -30 l 10 30 l 10 -20 l 130 0 '}, (500),function(){
		r[8]= paper.circle((x+250), (y+ 190), 2).attr({'stroke':'black','stroke-width':'5','fill':'black'})
		 r[8].animate({ 'cx': x+250, 'cy': y+ 190, }, 1, "bounce",function(){
		 r[7] = paper.path('M' +(x+250)+ ' ' +(y+190)+ 'l 0 0').attr({'stroke':'black','stroke-width':'5'})
		r[7].animate({path : 'M' +(x+250)+ ' ' +(y+190)+ 'l 0 50 '}, (10),function(){
		 r[8] = paper.path('M' +(x+240)+ ' ' +(y+240)+ 'l 0 0').attr({'stroke':'black','stroke-width':'5'})
		r[8].animate({path : 'M' +(x+240)+ ' ' +(y+240)+ 'l 20 0 '}, (10),function(){
		 r[9] = paper.path('M' +(x+240)+ ' ' +(y+250)+ 'l 0 0').attr({'stroke':'black','stroke-width':'5'})
		r[9].animate({path : 'M' +(x+240)+ ' ' +(y+250)+ 'l 20 0 '}, (10),function(){
		 r[10] = paper.path('M' +(x+250)+ ' ' +(y+250)+ 'l 0 0').attr({'stroke':'black','stroke-width':'5'})
		r[10].animate({path : 'M' +(x+250)+ ' ' +(y+250)+ 'l 0 50 '}, (10),function(){
		 r[11] = paper.path('M' +(x+240)+ ' ' +(y+300)+ 'l 0 0').attr({'stroke':'black','stroke-width':'5'})
		r[11].animate({path : 'M' +(x+240)+ ' ' +(y+300)+ 'l 20 0 '}, (10),function(){
		 r[12] = paper.path('M' +(x+243)+ ' ' +(y+310)+ 'l 0 0').attr({'stroke':'black','stroke-width':'5'})
		r[12].animate({path : 'M' +(x+243)+ ' ' +(y+310)+ 'l 15 0 '}, (10),function(){
		r[13] = paper.path('M' +(x+245)+ ' ' +(y+320)+ 'l 0 0').attr({'stroke':'black','stroke-width':'5'})
		r[13].animate({path : 'M' +(x+245)+ ' ' +(y+320)+ 'l 8 0 '}, (10),function(){
		r[14] = paper.path('M' +(x+350)+ ' ' +(y+185)+ 'l 0 0').attr({'stroke':'black','stroke-width':'5'})
		r[14].animate({path : 'M' +(x+350)+ ' ' +(y+185)+ 'l 0 50 '}, (10),function(){
		r[15] = paper.path('M' +(x+340)+ ' ' +(y+235)+ 'l 0 0').attr({'stroke':'black','stroke-width':'5'})
		r[15].animate({path : 'M' +(x+340)+ ' ' +(y+235)+ 'l 20 0 '}, (10),function(){
	    r[16] = paper.path('M' +(x+343)+ ' ' +(y+245)+ 'l 0 0').attr({'stroke':'black','stroke-width':'5'})
		r[16].animate({path : 'M' +(x+343)+ ' ' +(y+245)+ 'l 15 0 '}, (10),function(){ 
		r[17] = paper.path('M' +(x+345)+ ' ' +(y+255)+ 'l 0 0').attr({'stroke':'black','stroke-width':'5'})
		r[17].animate({path : 'M' +(x+345)+ ' ' +(y+255)+ 'l 8 0 '}, (10),function(){
		r[18] = paper.path('M' +(x+350)+ ' ' +(y+155)+ 'l 0 0').attr({'stroke':'black','stroke-width':'5'})
		r[18].animate({path : 'M' +(x+350)+ ' ' +(y+155)+ 'l  0 -30 l -5 0 l 8 -5 l 8 5 l -8 0 '}, (10),function(){
		r[19] = paper.path('M' +(x+310)+ ' ' +(y+155)+ 'l 0 0').attr({'stroke':'black','stroke-width':'3'})
		r[19].animate({path : 'M' +(x+310)+ ' ' +(y+155)+ 'l  10 0 '}, (10)	,function(){
		r[20] = paper.path('M' +(x+310)+ ' ' +(y+210)+ 'l 0 0').attr({'stroke':'black','stroke-width':'3'})
		r[20].animate({path : 'M' +(x+310)+ ' ' +(y+210)+ 'l  10 0 '}, (10),function(){
		r[21] = paper.path('M' +(x+315)+ ' ' +(y+200)+ 'l 0 0').attr({'stroke':'black','stroke-width':'3'})
		r[21].animate({path : 'M' +(x+315)+ ' ' +(y+200)+ 'l  0 20 '}, (10))	
		})	
		})
		})	
		})	
		})	
		})	
		})
			
		})
		})
			
		})	
		})
			
		})
		})	
			
		})	 
			 
		 })	
		})	 
		 })	 
			 
		 })	 
			 
			 
		 })	 
			 
		 })	 
		 })
		 });		  
			  
		  }); 	  
		  });
}
	function Filter(x,y){
//		var switch_button = paper.image("images/low_passckt.png", (x + 700), (y + 120 ), 200, 400);
		function filter(x,y){
		r = [];
		  r[0] = paper.path('M' +(x+150)+ ' ' +(y+100)+ 'l 0 0').attr({'stroke':'black','stroke-width':'5'})
		  r[0].animate({path : 'M' +(x+150)+ ' ' +(y+100)+ 'l 50 0 l 10 -20 l 10 30 l 10 -30 l 10 30 l 10 -20 l 50 0 '}, (500),function(){
		 r[1] = paper.path('M' +(x+300)+ ' ' +(y+90)+ 'l 0 0').attr({'stroke':'black','stroke-width':'5'})
		  r[1].animate({path : 'M' +(x+300)+ ' ' +(y+90)+ 'l 50 0 l 10 -20 l 10 30 l 10 -30 l 10 30 l 10 -20 l 50 0 l 0 260 l -300 0'}, (500),function(){
		r[2] = paper.path('M' +(x+300)+ ' ' +(y+90)+ 'l 0 0').attr({'stroke':'black','stroke-width':'5'})
		 r[2].animate({path : 'M' +(x+300)+ ' ' +(y+90)+ 'l 0 80 l 30 0 l 0 -30 l 40 30 l -40 30 l 0 -30 '}, (500) ,function(){
		r[3] = paper.path('M' +(x+370)+ ' ' +(y+170)+ 'l 0 0').attr({'stroke':'black','stroke-width':'5'})
		 r[3].animate({path : 'M' +(x+370)+ ' ' +(y+170)+ 'l 80 0 '}, (500) ,function(){
		r[4] = paper.path('M' +(x+150)+ ' ' +(y+100)+ 'l 0 0').attr({'stroke':'black','stroke-width':'5'})
		 r[4].animate({path : 'M' +(x+150)+ ' ' +(y+100)+ 'l 0 50 '}, (500),function(){
		r[5] = paper.path('M' +(x+140)+ ' ' +(y+150)+ 'l 0 0').attr({'stroke':'black','stroke-width':'5'})
		 r[5].animate({path : 'M' +(x+140)+ ' ' +(y+150)+ 'l 20 0 '}, (50),function(){
		r[6] = paper.path('M' +(x+142)+ ' ' +(y+160)+ 'l 0 0').attr({'stroke':'black','stroke-width':'5'})
		 r[6].animate({path : 'M' +(x+142)+ ' ' +(y+160)+ 'l 15 0 '}, (50),function(){
		r[6] = paper.path('M' +(x+145)+ ' ' +(y+170)+ 'l 0 0').attr({'stroke':'black','stroke-width':'5'})
		 r[6].animate({path : 'M' +(x+145)+ ' ' +(y+170)+ 'l 8 0 '}, (50),function(){
	    r[7] = paper.path('M' +(x+100)+ ' ' +(y+200)+ 'l 0 0').attr({'stroke':'black','stroke-width':'5'})
		r[7].animate({path : 'M' +(x+100)+ ' ' +(y+200)+ 'l 50 0 l 10 -20 l 10 30 l 10 -30 l 10 30 l 10 -20 l 130 0 '}, (500),function(){
		r[8]= paper.circle((x+250), (y+ 190), 2).attr({'stroke':'black','stroke-width':'5','fill':'black'})
		 r[8].animate({ 'cx': x+250, 'cy': y+ 190, }, 1, "bounce",function(){
		 r[7] = paper.path('M' +(x+250)+ ' ' +(y+190)+ 'l 0 0').attr({'stroke':'black','stroke-width':'5'})
		r[7].animate({path : 'M' +(x+250)+ ' ' +(y+190)+ 'l 0 50 '}, (10),function(){
		 r[8] = paper.path('M' +(x+240)+ ' ' +(y+240)+ 'l 0 0').attr({'stroke':'black','stroke-width':'5'})
		r[8].animate({path : 'M' +(x+240)+ ' ' +(y+240)+ 'l 20 0 '}, (10),function(){
		 r[9] = paper.path('M' +(x+240)+ ' ' +(y+250)+ 'l 0 0').attr({'stroke':'black','stroke-width':'5'})
		r[9].animate({path : 'M' +(x+240)+ ' ' +(y+250)+ 'l 20 0 '}, (10),function(){
		 r[10] = paper.path('M' +(x+250)+ ' ' +(y+250)+ 'l 0 0').attr({'stroke':'black','stroke-width':'5'})
		r[10].animate({path : 'M' +(x+250)+ ' ' +(y+250)+ 'l 0 50 '}, (10),function(){
		 r[11] = paper.path('M' +(x+240)+ ' ' +(y+300)+ 'l 0 0').attr({'stroke':'black','stroke-width':'5'})
		r[11].animate({path : 'M' +(x+240)+ ' ' +(y+300)+ 'l 20 0 '}, (10),function(){
		 r[12] = paper.path('M' +(x+243)+ ' ' +(y+310)+ 'l 0 0').attr({'stroke':'black','stroke-width':'5'})
		r[12].animate({path : 'M' +(x+243)+ ' ' +(y+310)+ 'l 15 0 '}, (10),function(){
		r[13] = paper.path('M' +(x+245)+ ' ' +(y+320)+ 'l 0 0').attr({'stroke':'black','stroke-width':'5'})
		r[13].animate({path : 'M' +(x+245)+ ' ' +(y+320)+ 'l 8 0 '}, (10),function(){
		r[14] = paper.path('M' +(x+350)+ ' ' +(y+185)+ 'l 0 0').attr({'stroke':'black','stroke-width':'5'})
		r[14].animate({path : 'M' +(x+350)+ ' ' +(y+185)+ 'l 0 50 '}, (10),function(){
		r[15] = paper.path('M' +(x+340)+ ' ' +(y+235)+ 'l 0 0').attr({'stroke':'black','stroke-width':'5'})
		r[15].animate({path : 'M' +(x+340)+ ' ' +(y+235)+ 'l 20 0 '}, (10),function(){
	    r[16] = paper.path('M' +(x+343)+ ' ' +(y+245)+ 'l 0 0').attr({'stroke':'black','stroke-width':'5'})
		r[16].animate({path : 'M' +(x+343)+ ' ' +(y+245)+ 'l 15 0 '}, (10),function(){ 
		r[17] = paper.path('M' +(x+345)+ ' ' +(y+255)+ 'l 0 0').attr({'stroke':'black','stroke-width':'5'})
		r[17].animate({path : 'M' +(x+345)+ ' ' +(y+255)+ 'l 8 0 '}, (10),function(){
		r[18] = paper.path('M' +(x+350)+ ' ' +(y+155)+ 'l 0 0').attr({'stroke':'black','stroke-width':'5'})
		r[18].animate({path : 'M' +(x+350)+ ' ' +(y+155)+ 'l  0 -30 l -5 0 l 8 -5 l 8 5 l -8 0 '}, (10),function(){
		r[19] = paper.path('M' +(x+310)+ ' ' +(y+155)+ 'l 0 0').attr({'stroke':'black','stroke-width':'3'})
		r[19].animate({path : 'M' +(x+310)+ ' ' +(y+155)+ 'l  10 0 '}, (10)	,function(){
		r[20] = paper.path('M' +(x+310)+ ' ' +(y+210)+ 'l 0 0').attr({'stroke':'black','stroke-width':'3'})
		r[20].animate({path : 'M' +(x+310)+ ' ' +(y+210)+ 'l  10 0 '}, (10),function(){
		r[21] = paper.path('M' +(x+315)+ ' ' +(y+200)+ 'l 0 0').attr({'stroke':'black','stroke-width':'3'})
		r[21].animate({path : 'M' +(x+315)+ ' ' +(y+200)+ 'l  0 20 '}, (10))	
		})	
		})
		})	
		})	
		})	
		})	
		})
			
		})
		})
			
		})	
		})
			
		})
		})	
			
		})	 
			 
		 })	
		})	 
		 })	 
			 
		 })	 
			 
			 
		 })	 
			 
		 })	 
		 })
		 });		  
			  
		  }); 	  
		  });
		  }
		 filter(x+450,y+200); 
//		paper.path('M' +(x+900)+ ' ' +(y+330)+ 'l 0 220 l -200 0').attr({'stroke':'black','stroke-width':'3'})
		 cirFilter =  paper.circle((x+540), (y+400), 10).attr({'stroke':'black','stroke-width':'1','fill':'red'});
//		 
		 cirFilter2 =  paper.circle((x+590), (y+540), 10).attr({'stroke':'black','stroke-width':'1','fill':'red'});
		 
		   var u2txt = paper.text(x + 460, y + 330, "Low Pass Filter ").attr({
		'font-size': 20,
		'font-weight': "bold"
		});
		
		var point  = paper.text(x + 520, y + 380, "4").attr({
		'font-size': 20,
		'font-weight': "bold"
		});
		
		var point  = paper.text(x + 580, y + 500, "5").attr({
		'font-size': 20,
		'font-weight': "bold"
		});
		
	}
	
	function filter(x,y){
		Filter(x,y);
		cirFilter.click(function(event){
//		alert("hi");
		
		if (capChk2 == 1){
			 f = [];
			f[0] = paper.path('M' +(x+540)+ ' ' +(y+395)+ 'l 0 0').attr({'stroke':'black','stroke-width':'3'})
		 f[0].animate({path : 'M' +(x+540)+ ' ' +(y+395)+ 'l  0 -220 l 210 0 l 0 -60'}, (500),function(){
			  cirFilter.attr({'fill':'green'});
			  cirAmp2.attr({'fill':'green'})
			  senChk = 2;  
		  })	 
		 }	
	});
	
	cirFilter2.click(function(event){
//		alert("hi");
		filChk = 1;
			
	});
	}
	var cirMeter;
	var filChk;
	function meter_diag(x,y){
	paper.rect(x , y+10, 100, 50).attr({ 'stroke-width': '5', 'fill': '#bdf582' }).toFront();
	var u2txt = paper.text(x , y-10, "Digital Meter").attr({
		'font-size': 20,
		'font-weight': "bold"
		});	
		
	
	var point1  = paper.text(x + 210, y + 10, "6").attr({
		'font-size': 20,
		'font-weight': "bold"
		});			
}
	function meter(x,y){
		meter_diag(x+300,y+500);
//		var meter = paper.image("images/meterDig.png", (x + 400), (y +450 ), 120 , 140);
		paper.path('M' +(x+400)+ ' ' +(y+545)+ 'l 100 0 ').attr({'stroke':'black','stroke-width':'3'})
		 cirMeter =  paper.circle((x+510), (y+545), 10).attr({'stroke':'black','stroke-width':'1','fill':'red'});
	cirMeter.click(function(event){
//		alert("hi");
		if (filChk == 1){
			 m = [];
			m[0] = paper.path('M' +(x+510)+ ' ' +(y+545)+ 'l 0 0').attr({'stroke':'black','stroke-width':'3'})
		 m[0].animate({path : 'M' +(x+510)+ ' ' +(y+545)+ 'l  70 0 '}, (500),function(){
			  cirFilter2.attr({'fill':'green'});
			  cirMeter.attr({'fill':'green'})
			  filChk = 2; 
			   complt(x,y); 
		  })
		 }	
		  
	});
	
	function complt(x,y){
//		alert("Connected Sucessfully");
		$("#btnAnsCheck").prop("hidden",false);
		node1=  paper.text(x +300 , y + 650, 'Identification completed . Click on result button').attr({ 'font-size': 25 ,'fill':'#d42a3e'});
					 node1.animate({x:x+300,y: 650 , 'font-size': 30}, 1000, 'bounce')
	}
	
	
	$('#btnAnsCheck').on('click', function() {
				result();
		});
	
		 
	}
	
	
	 
	 
	 
	