	
	$(function() {
		showQuestions = function() {
		
			var flag = false;
			var myRadio = null;
			dataQues = {};

			$("#canvas-div").html('');
			
				$("#centerText2").html('BASIC KNOWLEDGE');

			var questions = '';
			questions += ''
				+ '<div id = "questionDiv">'

			for (var i = 0; i < QuestionsJSON.data["SEC"].length; i++) {

				for (var j = 0; j < QuestionsJSON.data["SEC"][0].QUES.length; j++) {

					questions += '<div class="col-md-12">'
						+ '<br><span class="queno">Question No : ' + (i + 1) + '</span>'
						+ '<br><div class="queTitle">'

						+ QuestionsJSON.data["SEC"][i].QUES[j].QC
						+ '</div>'

					for (var k = 0; k < QuestionsJSON.data["SEC"][i].QUES[j].ANS.length; k++) {

						questions += '<div>'
							+ '<div class="ansTitle col-md-6">'

							+ "<input class='radioType' name='radio-" + i + "' id='" + i + "' ANSID='" + QuestionsJSON.data["SEC"][i].QUES[j].ANS[k].ANSID + "' type='radio'"
							+ "' value='"
							+ QuestionsJSON.data["SEC"][i].QUES[j].ANS[k].content
							+ "' >"
							+ '<p style="margin: -20px 0 8px 29px;">'
							+ QuestionsJSON.data["SEC"][i].QUES[j].ANS[k].content
							+ '</p>'

							+ '</div>'
							+ '</div>'
					}
					questions += '</div>'
				}
			}

			questions += '<div class="buttonDiv">'
				+ '<button id="testSubmit" data-toggle="modal" data-target="#myModal" >Submit Test</button>'
				+ '<button id="mimicSubmit" class="nextLevelBtn">Next Level</button>'
				+ '</div>'
				+ '</div>'
				
					+ ' <!-- Modal -->'
				+ '<div class="modal fade" id="myModal" role="dialog">'
				+ ' <div class="modal-dialog modal-md">'
				+ '    <div class="modal-content">'
				+ '     <div class="modal-header">'
				
				+ '       <h4 class="modal-title">Message box</h4>'
				+ '       <button type="button" class="close" data-dismiss="modal" style="color:#fff;">&times;</button>'
				+ '     </div>'
				+ '     <div class="modal-body">'
				+ '       <p id="modelMsg">This is a small modal.</p>'
				+ '     </div>'
				+ '     <div class="modal-footer">'
				+ '       <button type="button" class="btn btn-danger" data-dismiss="modal" >Close</button>'
				+ '     </div>'
				+ '   </div>'
				+ ' </div>'
				+ '</div>'
				
				+ '</div>'
				+ ' </div>'
		

			$("#canvas-div").html(questions);
			
			

			$('#testSubmit').on('click', function() {		

					var arr = [];
					
					for (var i = 0; i < QuestionsJSON.data["SEC"].length; i++) {

						var qid = $('input[name=radio-' + i + ']').attr(
							'id');

						var ansId = $('input[name=radio-' + i + ']:checked').attr(
							'ANSID');

						myRadio = $(
							'input[name=radio-' + i + ']:checked')
							.val();

						if (myRadio == null) {
							flag = flag && false;
//							alert('Please attempt all the questions');
							$("#modelMsg").html("<b class='boldTextGreen'>Please attempt all the questions</b>");
						 $("body").css("padding","0px");
	

							break;
						}
						arr.push({
							"QID": qid,
							"ANS": myRadio,
							"ANSId": ansId
						});
					}

					var ansCount = 0;

					if (myRadio != null) {
						for (var i = 0; i < arr.length; i++) {
							if (arr[i].ANSId == "true") {
								ansCount++;
							}
						}
						dataQues.corrAns = ansCount;
						 data.corrAns = dataQues;
						 console.log(data);
//						alert("Test Submitted Successfully <br/>Correct Answers Are : " + ansCount);
						 $("#modelMsg").html("<b class='boldTextGreen'>Test Submitted Successfully . Correct Answers Are : " + ansCount+"</b>");
						 $("body").css("padding","0px");
//						mimic();
		   					
					}
					
			$('#mimicSubmit').on('click', function() {
				
//				htm = '<div class="row" id="CalculateActualFlow">'
//				
//					  +'</div>'
//					  +'<div class="row" id="tableDesign">'
//					 
//					  +'</div>'
//					  $("#main-div-conf").html(htm);
//				CalculateActualFlowStr = '<div class="col-sm-5">'
//				       +'<label  id=""  class="" style="font-size:16px;margin-top:35px;">Expected Toque is :</label>'
//				       +'</div>'
//			           +'<div class="col-sm-3">'
//				       +'<input type="text" id="speedAns" style="margin-top:35px;width:100%;" disabled class=" form-control"/ >'
//				       +'</div>'
//				       +'<div class="col-sm-3">'
//				       +'<br><button type="submit" id="btnAnsCheck" style="margin-top:17px;width:100%;" class=" btn btn-primary" data-toggle="modal" data-target="#mimicModel" disabled>Submit</button>'
//				       +'</div>'
//				      
//				 $("#CalculateActualFlow").html(CalculateActualFlowStr);
				  $("#main-div-conf").html("");	 
			 $("#main-div-conf").append('<img id="openImg" src="images/sensorSym.png"  width="20%" height="30%" ">');
			 $("#main-div-conf").append('<img id="grdImg" src="images/low_passSym.png"  width="20%" height="30%" ">');
			 $("#main-div-conf").append('<img id="ampImg" src="images/amplickt.png"  width="20%" height="30%" ">');	 
			 $("#main-div-conf").append('<img id="metImg" src="images/meterSym.jpeg"  width="20%" height="30%" ">');
			 htm = '<div class="col-sm-3">'
			 +'</div>'
			 +'<div class="col-sm-6">'
			+'<br><button type="submit" id="btnAnsCheck" style="margin-top:17px;width:100%;" class=" btn btn-primary" data-toggle="modal" data-target="#mimicModel" hidden >Result</button>'
			   +'</div>'	
			 $("#main-div-conf").append(htm);
			 
		 	 $('#openImg').on('click', function() {
			  		openImg();
			  });
			  
			   $('#grdImg').on('click', function() {
			  		 
					filter(x,y);
			  });
			  
			   $('#ampImg').on('click', function() {
			  		 ampliImg(x,y);
			  });
			  
			  
			   $('#metImg').on('click', function() {
			  		 meter(x,y);
			  });
		  
		  $("#canvas-div").html("");
		  	$("#centerText2").html('SENSOR CONNECTION DIAGRAM');
		  
						mimic();
//						testing();	
					});
						
			});
			
		
			}
				
	});
