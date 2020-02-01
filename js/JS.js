document.getElementById('calculate').addEventListener('click', function(event){
	    		event.preventDefault();
	    		let inputText = document.getElementById('text').value;
	    		let inputAge = document.getElementById('number').value;
	    		let inputCountry = document.getElementById('countries').value;
	    		let inputPower = document.getElementById('power').value;
	    		let austria=document.getElementById('austria').selected;
	    		let hungary=document.getElementById('hungary').selected;
	    		let greece=document.getElementById('greece').selected;
	    		let insuranceX = (inputPower * 100) / inputAge   + 50;
	    		let insuranceY = (inputPower * 120 )/ inputAge   + 100;
	    		let insuranceZ = (inputPower * 150 )/ (inputAge+3)   + 50;


	    			if(austria==true){
	    				calculateInsurance = insuranceX.toFixed(2);
	    				document.getElementById('calc').innerHTML = inputText+", your insurance costs "+calculateInsurance+" €";
	    			} else if(hungary==true){	    				
	    				calculateInsurance = insuranceY.toFixed(2);
	    				document.getElementById('calc').innerHTML = inputText+", your insurance costs "+calculateInsurance+" €";
	    			}else{	    				
	    				calculateInsurance = insuranceZ.toFixed(2);
	    				document.getElementById('calc').innerHTML = inputText+", your insurance costs "+calculateInsurance+" €";
	    			} 

	    		})