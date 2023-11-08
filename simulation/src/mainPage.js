
var motorSize=0;
var lengthType=0;
var weight="";
 var meter="";
var cylinderPiston="";
data = {};
dataJson = {};
var htm='<div class="row" >'
		+'<div class="col-sm-6">'
	   +'<label for="weight">Select Sensor Type </label>'
	   +'</div>'
		   
	   +'<div class="col-sm-6" >'
	   +'<select  class="form-control form-control-lg  selectStyle"  id="motorSize" >'
	   +'<option value="0">--- Select Sensor --- </option>'
	   +'<option value="1">Piezo Accelerometer Sensor</option>'
//	   +'<option value="0.55">0.75</option>'
//	   +'<option value="0.75">1</option>'
//	   +'<option value="1.1">1.5</option>'
//	   +'<option value="1.5">2</option>'
//	   +'<option value="1.8">2.5</option>'
//	   +'<option value="2.2">3</option>'
//	   +'<option value="3">4</option>'
//	   +'<option value="4">5</option>'
//	   +'<option value="4.4">6</option>'
//	   +'<option value="5.2">7</option>'
//	   +'<option value="6">8</option>'
//	   +'<option value="7">9</option>'
//	   +'<option value="7.5">10</option>'
	   +'</select>'
	   +'</div>'
	   +'</div>'
	  +'<br>'
//	   
//	   +'<div class="row">'
//	   +'<div class="col-sm-6">'
//	   +'<label for="meter">Select Arm length (mm) </label>'
//	   +'</div>'
//	   
//	   +'<div class="col-sm-6">'
//	   +'<select  class="form-control form-control-lg  selectStyle"  id="lengthType">'
//	   +'<option value="0">--- Select meter --- </option>'
//	   +'<option value="1" >103.94  </option>'
//	   +'<option value="2">203.94</option>'
//	   +'<option value="3">303.94</option>'
//	  +'<option value="4">403.94</option>'
//	  
//	  
//	   +'</select>'
//	   +'</div>'
//	   +'</div>'
//	    +'<br>'
//	   
//	  
	    
	   +'<br>'
	   +'<div class="row"  >'
	   +'<div class="col-sm-12">'
	      +'<button type="button" class="btn btn-danger btnStyle" id="checkConfg" disabled>CHECK CONFIGURATION </button>'
	   +'</div>'
//	    +'<div class="col-sm-6">'
//	     +'<button type="button" class="btn btn-success btnStyle" id="nextSubmit"disabled>NEXT LEVEL </button>'
//	   +'</div>'
	   +'</div>'
  $("#main-div-conf").html(htm);
	   
	  $("#motorSize").change(function(){
		$("#checkConfg").prop("disabled",false);
		 
	  });
	 
	  
	   $("#checkConfg").click(function(){
//		   alert("Configration done");
		   	
		   			
		   			motorSize=	$("#motorSize").val();
					dataJson = {};
					dataJson.pipe = motorSize ;
					
					
				   console.log("hp motor    "+motorSize);
//				   console.log("main Type    "+lengthType);
				 
				   data.configure = dataJson;
				   console.log(data);

				  $("#main-div-conf").html("");
				  $("#main-div-conf").html('<img src="images/signal_blk.jpg"  width="90%" height="90%" onclick="openImg()">');
				
				  
				  $("#canvas-div").html("");
				  showQuestions();

	   });
	   
	