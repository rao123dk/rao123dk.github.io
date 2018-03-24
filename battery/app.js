var battery_charge;
var chrger_connected;
window.onload = function(){
	var onload_ = setInterval(displayBatteryLevel(),500);
	clearInterval(onload_);
	setColor();
}

function displayBatteryLevel(){
	navigator.getBattery().then(function(data){
		battery_charge = 100 * data.level;
		if(data.charging){
			chrger_connected="Connected ";
		}else{
			chrger_connected="disconnected";
		}
		console.log(data);
		document.getElementById('display_battery_level').innerHTML=battery_charge +"%";
		document.getElementById('chrger_connected').innerHTML= "Charger " +chrger_connected ;
		document.getElementById('chargeTime').innerHTML= "FullCharge Time:- "+data.chargingTime;
		document.getElementById('dischargeTime').innerHTML= "Shut down after:-" +Math.floor(data.dischargingTime/60) +" Min";

	});

}
setInterval(displayBatteryLevel, 5000);
function setColor(){
	if(battery_charge >= 84){
	navigator.vibrate(1000);
	document.getElementById('display_battery_level').style.color="green";
	}else{
	document.getElementById('display_battery_level').style.color="red";
	}
}

var tempColor = setInterval(setColor,2000);




