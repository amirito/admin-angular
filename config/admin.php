<?php
session_start();
if(isset($_GET['user']) && isset($_GET['pass'])){
	$username = $_GET['user'];
	$password = $_GET['pass'];
	if($username == 'admin' && $password == 'rayweb1393'){
		$_SESSION['admin'] = 'rayweb';		
		}
	}
if(isset($_SESSION['admin'])){
echo $_SESSION['admin'];
}