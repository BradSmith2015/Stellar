<?php
use User\User;
use User\UserError;

try{
	$target = $_POST['target'];
	$args = $_POST['data'];
	$obj = new User;

	if($target  == "register_user"){
		$user = $obj->addUser($args[0], $args[1], '', '');
		if($user){
			echo json_encode(["status" => 1, "Msg" => "Account Created."]);
		}
	}
	else{

		$user = $obj->login($args[0], $args[1]);
		if($user){
			if($target == "login"){
				echo json_encode(["status" => 1, "credentials" => $args]);
			}
			/*
			$stellar = new Stellar;

			if($target = "fetch_liked_artists"){
				echo json_encode($stellar->getLikedArtists($user->email));
			}
			else if ($target == "add_song_to_liked_list"){
				$task = $stellar->addSongToLikedList($artist, $user->email);
				echo json_encode($task);
			}
			else if($target == "add_artist_to_liked_list"){
				$task = $stellar->addArtistToLikedList($song, $user->email);
				echo json_encode($task);
			}
			*/

		}
		else{
			echo json_encode(["test_it"]);
		}

	}


}

catch (UserError $e){
	$error = $e->getMessage();
	if($error == "Invalid email/Password"){
		echo json_encode(["status" => 0, "credentials" => $args]); //this catches all the errors returned from the system;
	}


}
