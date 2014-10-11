	
function ctof(c) {
  if (c < (-273.15)) { 
 return 'below abs zero'; 
} else { 
	if (c < (0)) {
		document.getElementById('Body').style.backgroundColor="lightblue";
	}
	return 180/100*c+32;
	if (c > (0)) {
		document.getElementById('Body').style.backgroundColor="red";
	}
	return 180/100*c+32;
}
}
function ftoc(f) {
  if (f < (-459.67)) { 
 return 'below abs zero'; 

} else { 
	if (f < (32)) {
		document.getElementById('Body').style.backgroundColor="lightblue";
	}
 return 100/180*(f-32); 
}
}
