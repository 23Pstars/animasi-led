<?php
/*
 *      index.php
 *      
 *      Copyright 2011 Ahmad Zafrullah Mardiansyah <zaf@zaf-laptop>
 *      
 *      This program is free software; you can redistribute it and/or modify
 *      it under the terms of the GNU General Public License as published by
 *      the Free Software Foundation; either version 2 of the License, or
 *      (at your option) any later version.
 *      
 *      This program is distributed in the hope that it will be useful,
 *      but WITHOUT ANY WARRANTY; without even the implied warranty of
 *      MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *      GNU General Public License for more details.
 *      
 *      You should have received a copy of the GNU General Public License
 *      along with this program; if not, write to the Free Software
 *      Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston,
 *      MA 02110-1301, USA.
 */

?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
	"http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">

<head>
	<title>ANIMASI LED</title>
	<meta http-equiv="content-type" content="text/html;charset=utf-8" />
	<meta name="generator" content="Geany 0.20" />
	<link rel="stylesheet" type="text/css" href="style.css" />
	<link rel="shortcut icon" href="lampu.ico" />
	<script type="text/javascript" src="script.js"></script>
</head>

<body onload="animasi_anggota1('anggota', 0)">
	<center>
	<div id="main">
		<div id="kepala">
			ANIMASI LED kontrol via LPT Port berbasis WEB
		</div>
		<div id="status-area">
			<u><b>Status :</b></u>
			<div id="status-ajax">
				Standby...
			</div>
			<u><b>Info :</b></u><br/>
			<small>Klik tombol reset atau klik lagi tombol pilihan nya untuk menghentikan proses!</small>
		</div>
		<div id="animasi-area">
			<img id="d0" src="lampu-off.png" />
			<img id="d1" src="lampu-off.png" />
			<img id="d2" src="lampu-off.png" />
			<img id="d3" src="lampu-off.png" />
			<img id="d4" src="lampu-off.png" />
			<img id="d5" src="lampu-off.png" />
			<img id="d6" src="lampu-off.png" />
			<img id="d7" src="lampu-off.png" />
		</div>
		<div id="kontrol-area">
			<input type="button" value="Berjalan kekanan" id="bkn" onclick="kirimNilai(this.id)" />
			<input type="button" value="Berjalan kekiri" id="bkr" onclick="kirimNilai(this.id)" />
			<input type="button" value="Berjalan kekanan kekiri" id="bknkr" onclick="kirimNilai(this.id)" />
			<input type="button" value="Semua hidup" id="sh" onclick="kirimNilai(this.id)" />
			<input type="button" value="Semua hidup mati" id="shm" onclick="kirimNilai(this.id)" />
			<!-- untuk bagian terakhir ini harus diberikan spasi, karena textnya agak kepotong dari kiri -->
			<input type="button" value=" Hidup selang 1" id="hs1" onclick="kirimNilai(this.id)" />
			<input type="button" value=" Berjalan kekanan 2" id="bkn2" onclick="kirimNilai(this.id)" />
			<input type="button" value=" Custom" id="cm" onclick="custom(this.id)" class="custom" />
			<input type="button" value=" Reset" id="reset" onclick="reset()" class="reset" />
		</div>
		<p>&copy; Copyright <?php echo date("Y"); ?> Kelompok 1<br/>Teknik Interfacing<br/><span id="anggota"></span><blink id="blink-anggota">_</blink></p>
	</div>
	</center>
</body>

</html>
