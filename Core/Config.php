<?php 
  
	if (session_status() == PHP_SESSION_NONE) {
		session_start();
	}
	
	//auto loader for classes
	spl_autoload_register(function ($className){
		$className = str_replace('\\', '/', $className);
		$file = $_SERVER['DOCUMENT_ROOT']."/{$className}.php";
		require_once $file;
	});
	
	
	