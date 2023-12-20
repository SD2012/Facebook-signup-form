
function validate(e){
	e.preventDefault();
	 var ids=['fname','sname','mo-no','cum','newPass'];
	for(var i=0;i<ids.length;i++){
		if(document.getElementById(ids[i]).value.length==0){
			document.getElementById(ids[i]).style.border="1px solid #d42727";
			document.getElementById(ids[i]).style.background="url('images/err.PNG') no-repeat";
			document.getElementById(ids[i]).style.backgroundPosition="right center";
			document.getElementById(ids[i]).style.backgroundSize="25px 25px";
		}
		else{
			document.getElementById(ids[i]).style.border="1px solid #bdc7d8";
			document.getElementById(ids[i]).style.background="none";
			if(ids[i]=='newPass'){
				if(document.getElementById('newPass').value.length<6){
					document.getElementById('errmsg').style.display = "block";
				}
				else{
					document.getElementById('errmsg').style.display = "none";
				}
			}
			if(ids[i]=='mo-no'){
				if(parseInt(document.getElementById('mo-no').value)%1==0 && document.getElementById('mo-no').value.length!=10){
					tooltip("block",170,415,"Please enter a valid mobile number or email address.");
					arrow("block",193,395,"arrowleft");
					document.getElementById('mo-no').focus();
					document.getElementById('mo-no').value="";
				}
				else{
					tooltip('none',0,0);
					arrow('none',0,0,"");
				}
				var email = document.getElementById('mo-no').value;
				var cnt=0;
				for(var i=0;i<email.length;i++){
					if(email.charAt(i)=='@'){
						cnt++;
					}
					if(cnt!=1){
						tooltip("block",170,415,"Please enter a valid mobile number or email address.");
						arrow("block",193,395,"arrowleft");
						document.getElementById('mo-no').focus();
						document.getElementById('mo-no').value="";
					}
				}
			}
		}
	}
	if(document.getElementById('female').checked==false && document.getElementById('male').checked==false){
		document.getElementById('fdiv').style.border = "1px solid #d42727";
		document.getElementById('mdiv').style.border = "1px solid #d42727";
		document.getElementById('genderdisplay').style.background="url('images/err.PNG') no-repeat";
		document.getElementById('genderdisplay').style.backgroundPosition="right center";
		document.getElementById('genderdisplay').style.backgroundSize="25px 25px";
	}
	else{
		document.getElementById('fdiv').style.border = "none";
		document.getElementById('mdiv').style.border = "none";
		document.getElementById('genderdisplay').style.background="none";
	}
}
// ....................................................................................
function hideBackground(id){
		document.getElementById(id).style.border="1px solid #91aad4";
		document.getElementById(id).style.background="#fff";

if( document.getElementById(id).value.length==0){
		if(id=='fname'){
			tooltip("block",-530,580,"What's your name?");
			arrow("block",140,395,"arrowleft");
		}
		if(id=='sname'){
			tooltip("block",1000,55,"What's your Surname?");
			arrow("block",170,170,"arrowbottom");
		}
		if(id=='mo-no'){
			tooltip("block",170,415,"You'll use this when you log in and if you ever need to reset your password.");
			arrow("block",194,395,"arrowleft");
		}
		if(id=='cum'){
			tooltip("block",232,415,"Please re-enter your email address.");
			arrow("block",246,395,"arrowleft");
		}
		if(id=='newPass' && document.getElementById("re-enter").style.display == "none"){
			tooltip("block",220,415,"Enter a combination of atleast six numbers, letters and punctuation marks (like ! and &).");
			arrow("block",246,395,"arrowleft");
		}
		if(id=='newPass' && document.getElementById("re-enter").style.display == "block"){
			tooltip("block",275,415,"Enter a combination of atleast six numbers, letters and punctuation marks (like ! and &).");
			arrow("block",300,395,"arrowleft");
		}
	}
	else{
		tooltip('none',0,0);
		arrow('none',0,0,"");
	}
}
function showBackground(id){
	if(document.getElementById(id).value.length<=0){
		document.getElementById(id).style.border="1px solid #d42727";
		document.getElementById(id).style.background="url('images/err.PNG') no-repeat";
		document.getElementById(id).style.backgroundColor="#fff";
		document.getElementById(id).style.backgroundPosition="right center";
		document.getElementById(id).style.backgroundSize="25px 25px";	
	}
}
// .......................................
function genderBackground(id){
	var gender = document.getElementById(id);
	gender.style.background = "none";
	document.getElementById('fdiv').style.border="none";
	document.getElementById('mdiv').style.border="none";
}
// ................................................
function showBdayMsg(x) {
	var ge = document.getElementById(db);
	document.getElementById('hide').style.display="block";
	document.getElementById('hide').style.border="1px solid #d42727";
	document.getElementById('hide').style.backgroundColor="#fff";
	document.getElementById('hide').style.position="absulate";
	document.getElementById('hide').style.top="10%";

}
function hideBdayMsg(x) {
	var ge = document.getElementById(db);
	document.getElementById('hide').style.display="none";

}
function tooltip(val, top, right, tip){
	var ele = document.getElementById('tooltips');
	ele.querySelector('div').className = "tooltip";
	ele.querySelector('div').style.top = top;
	ele.querySelector('div').style.right = right;
	ele.querySelector('div').style.display = val;
	ele.querySelector('div').innerHTML = tip;
}
function arrow(val, top, right, dir){
	var ele = document.getElementById('tooltips');
	// console.log(ele);
	ele.getElementsByTagName('div')[1].className = dir;
	ele.getElementsByTagName('div')[1].style.top = top;
	ele.getElementsByTagName('div')[1].style.display = val;
	ele.getElementsByTagName('div')[1].style.right = right;	
}
// ..................................................................................
function mobPhoneCheck(id){
	var phmail = document.getElementById(id);
	var mailid = "";
	var domainval = "";
	if(phmail.value.length==0){
		document.getElementById('re-enter').style.display = "none";
	}
	if(phmail.value%1!=0){
		mailid = phmail.value.split('@');
		if(mailid.length==2){
			domainval = mailid[1].split('.');
			if((mailid[0].charCodeAt(0)>=48 && mailid[0].charCodeAt(0)<=59) || (mailid[0].charCodeAt(0)>=65 && mailid[0].charCodeAt(0)<=90) || (mailid[0].charCodeAt(0)>=97 && mailid[0].charCodeAt(0)<=122)){
				if((mailid[0].charCodeAt(mailid[0].length-1)>=48 && mailid[0].charCodeAt(mailid[0].length-1)<=59) || (mailid[0].charCodeAt(mailid[0].length-1)>=65 && mailid[0].charCodeAt(mailid[0].length-1)<=90) || (mailid[0].charCodeAt(mailid[0].length-1)>=97 && mailid[0].charCodeAt(mailid[0].length-1)<=122)){
					if(domainval.length==2){
						if((domainval[1].charCodeAt(0)>=65 && domainval[1].charCodeAt(0)<=90) || (domainval[1].charCodeAt(0)>=97 && domainval[1].charCodeAt(0)<=122)){
							document.getElementById('re-enter').style.display = "block";
							document.getElementById('cum').style.display = "block";
						}
						else{
							document.getElementById('re-enter').style.display = "none";
						}
					}
				}
				else{
					alert("Email Id not in right format. Please Retry.");
				}
			}
			else{
				alert("Email Id not in right format. Please Retry.");
			}
		}
	}
}
// .........................................................................................
	var month=['Month','Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
	var birthMonth="";
	for(var i=0;i<month.length;i++){
		birthMonth += "<option value="+month[i]+">"+month[i]+"</option>";
	}
	var birthYear="";
	const dt = new Date();
	var year = dt.getFullYear();
	// console.log(year);
	for(var y=year;y>=1905;y--){
		birthYear+= "<option value="+y+">"+y+"</option>";
	}
	var birthDate="";
	for(var d=1;d<=31;d++){
		birthDate+= "<option value="+d+">"+d+"</option>";
	}