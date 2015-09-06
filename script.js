/* 
 * Created by Zaf (http://zaf.web.id)
 * 
 * Background color (baik hexa maupun RGB) sangat penting,
 * untuk acuan pengkondisian
 * 
 * logika, dan perhitungan sederhana :)
 * 
 */
 
function kirimNilai( id ) {
	var out = hitungParameter( id );
	var xmlhttp;
	if (window.XMLHttpRequest){
		xmlhttp=new XMLHttpRequest();
	} else {
		xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	}
	xmlhttp.onreadystatechange=function(){
		if (xmlhttp.readyState==4 && xmlhttp.status==200){
			document.getElementById("status-ajax").innerHTML = "<font color='#0081FF'>" + xmlhttp.responseText + "</font>";
		} else {
			document.getElementById("status-ajax").innerHTML = "<font color='#FF0000'>Loading...</font>";
		}
	}
	xmlhttp.open("GET", "ajax.php?id="+out, true);
	xmlhttp.send();
	tombol( id );
}

function hitungParameter( id ){
	if (id == "bkn") return 128;
	else if (id == "bkr") return 129;
	else if (id == "bknkr")	return 130;
	else if (id == "sh") return 131;
	else if (id == "shm") return 132;
	else if (id == "hs1") return 133;
	else if (id == "bkn2") return 134;
	else {
		var out = 0, i;
		
		/* hanya digunakan 7 lampu, 1 lampu di disable */
		for (i = 0; i <= 6; i++){
			if ( document.getElementById( "d" + i + "1" ).style.backgroundColor == "rgb(210, 210, 210)" )
			out += (Math.pow(2, i));
		}
		
		return out;
	}
}
function tombol( id ) {
	el = document.getElementById( id );
	if ( el.style.backgroundColor == "rgb(202, 255, 202)" || el.style.backgroundColor == "rgb(26, 26, 26)"){
		window.location.reload();
	} else {
		el.style.border = "2px inset #FFFFFF";
		el.style.backgroundColor = "#CAFFCA";
		if (id == "bkn") berjalanKeKanan(0);
		else if (id == "bkr") berjalanKeKiri(7);
		else if (id == "bknkr")	berjalanKeKananKeKiri(0);
		else if (id == "sh") semuaHidup();
		else if (id == "shm") semuaHidupMati(1);
		else if (id == "hs1") hidupSelang1(0);
		else if (id == "bkn2") berjalanKeKanan2(0);
	}
}

function berjalanKeKiri( d ) {
	if ( d < 0 ){
		d = d + 8;
	}
	document.getElementById( "d" + d ).src = "lampu-on.png";
	setTimeout( "document.getElementById( \"d\" + " + d + ").src = \"lampu-off.png\"; berjalanKeKiri(" + (d - 1) + ")", 200);
}
function berjalanKeKanan( d ) {
	if ( d > 7 ){
		d = d - 8;
	}
	document.getElementById( "d" + d ).src = "lampu-on.png";
	setTimeout( "document.getElementById( \"d\" + " + d + ").src = \"lampu-off.png\"; berjalanKeKanan(" + (d + 1) + ")", 200);
}
function berjalanKeKananKeKiri( d, a ){
	document.getElementById( "d" + d ).src = "lampu-on.png";
	if (a == "kiri"){
		if (d >= 7){
			setTimeout( "document.getElementById( \"d\" + " + d + ").src = \"lampu-off.png\"; berjalanKeKananKeKiri(" + (d) + ", 'kanan')", 200);
		} else {
			setTimeout( "document.getElementById( \"d\" + " + d + ").src = \"lampu-off.png\"; berjalanKeKananKeKiri(" + (d + 1) + ", 'kiri')", 200);
		}
	} else {
		if (d <= 0){
			setTimeout( "document.getElementById( \"d\" + " + d + ").src = \"lampu-off.png\"; berjalanKeKananKeKiri(" + (d) + ", 'kiri')", 200);
		} else {
			setTimeout( "document.getElementById( \"d\" + " + d + ").src = \"lampu-off.png\"; berjalanKeKananKeKiri(" + (d - 1) + ", 'kanan')", 200);
		}
		
	}
}
function semuaHidup(){
	for ( i=0; i<8; i++){
		document.getElementById("d"+i).src = "lampu-on.png";
	}
}

function semuaHidupMati( d ){
	if ( d%2 == 0 ){
		for ( i=0; i<8; i++){
			document.getElementById("d"+i).src = "lampu-on.png";
		}
	} else {
		for ( i=0; i<8; i++){
			document.getElementById("d"+i).src = "lampu-off.png";
		}
	}
	setTimeout("semuaHidupMati(" + (d+1) + ")", 200);
}
function hidupSelang1( d ){
	if ( d%2 == 0 ){
		for ( i=0; i<8; i++){
			if ( i%2 == 0){
				document.getElementById("d"+i).src = "lampu-on.png";
			} else {
				document.getElementById("d"+i).src = "lampu-off.png";
			}
		}
	} else {
		for ( i=0; i<8; i++){
			if ( i%2 == 1){
				document.getElementById("d"+i).src = "lampu-on.png";
			} else {
				document.getElementById("d"+i).src = "lampu-off.png";
			}
		}
	}
	setTimeout("hidupSelang1(" + (d+1) + ")", 200);
}

function berjalanKeKanan2( d ) {
	if ( d > 8 ){
		d = d - 9;
	}
	if ( d < 8 ){
		document.getElementById( "d" + d ).src = "lampu-on.png";
	}
	setTimeout( "if ("+ d +"> 0 ) document.getElementById( \"d\" + " + (d - 1) + ").src = \"lampu-off.png\"; berjalanKeKanan2(" + (d + 1) + ")", 200);
}

function animasi_anggota1( tgt, indx ){
	var anggota = new Array();
	anggota[0] = "Ahmad Zafrullah";
	anggota[1] = "Sahdan Azhari";
	anggota[2] = "Susi Susanti";
	anggota[3] = "Bayu Wibisana";
	anggota[4] = "L.M. Edi Estrada";
	anggota[5] = "Sari Ismi Wardani";
	anggota[6] = "Rahmi Hidayati";
	
	if (indx < anggota.length){
		document.getElementById( tgt ).innerHTML = "";
		animasi_anggota2( anggota[indx], 0, tgt );
		setTimeout( "animasi_anggota1( '" + tgt + "', " + ( indx + 1 ) + " )", 3000 );
	}
}
function animasi_anggota2( str, indx, tgt ) {
	var out = document.getElementById( tgt );
	if ( indx < str.length ){
		out.innerHTML = out.innerHTML + str.charAt( indx );
		setTimeout( "animasi_anggota2('" + str + "', " + ( indx + 1 ) + ", '" + tgt + "')", 100 );
	}
}
function custom ( id ){
	el = document.getElementById( id );
	aa = document.getElementById( "animasi-area" );
	if (el.style.backgroundColor == "rgb(26, 26, 26)"){
		window.location.reload();
	} else {
		el.style.border = "2px inset #FFFFFF";
		el.style.backgroundColor = "#1A1A1A";
		aa.innerHTML = '<img id="d71" src="lampu-disable.png" title="Di disable karena keterbatasan pin dalam 1 port" /> <img id="d61" src="lampu-off.png" onclick="hidupkanLampu( this.id )" /> <img id="d51" src="lampu-off.png" onclick="hidupkanLampu( this.id )" /> <img id="d41" src="lampu-off.png" onclick="hidupkanLampu( this.id )" /> <img id="d31" src="lampu-off.png" onclick="hidupkanLampu( this.id )" /> <img id="d21" src="lampu-off.png" onclick="hidupkanLampu( this.id )" /> <img id="d11" src="lampu-off.png" onclick="hidupkanLampu( this.id )" /> <img id="d01" src="lampu-off.png" onclick="hidupkanLampu( this.id )" />';
		aa.style.backgroundColor = "#D2CECE";
	}
}
function hidupkanLampu( id ){
	el = document.getElementById( id );
	if (el.style.backgroundColor == "rgb(210, 210, 210)"){
		el.src = "lampu-off.png";
		el.style.backgroundColor = "#D2CECE";
	} else {
		el.style.backgroundColor = "#D2D2D2";
		el.src = "lampu-on.png";
	}
	kirimNilai();
}
function reset(){
	var el = document.getElementById( "reset" );
	el.style.border = "2px inset #FFFFFF";
	el.style.backgroundColor = "#000000";
	window.location.reload();
}
