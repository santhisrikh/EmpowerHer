function sin(degrees) {
	return Math.sin(degTORad(degrees));
}
function cos(degrees) {
	return Math.cos(degTORad(degrees));
}
function tan(degrees) {
	return Math.tan(degTORad(degrees));
}

function degTORad(deg) {
	return (deg * Math.PI) / 180;
}

module.exports = { sin, cos, tan };
