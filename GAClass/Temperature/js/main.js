	
function ctof(c) {
  if (c < (-273.15)) { 
 return 'below abs zero'; 
} else { 
	if ((180/100*c+32) < (60)) {
		document.getElementById('Body').className="cold";
	}
	else{
		document.getElementById('Body').className="optimal";
	}
	if ((180/100*c+32)  >80) {
		document.getElementById('Body').className="hot";
	}
	return 180/100*c+32;
}
}
function ftoc(f) {
  if (f < (-459.67)) { 
 return 'below abs zero'; 

} else { 
	if (f < (60)) {
		document.getElementById('Body').className="cold";
	}
	else{
		document.getElementById('Body').className="optimal";
	}
	if (f > (80)) {
		document.getElementById('Body').className="hot";
	}
 return 100/180*(f-32); 
}
}
