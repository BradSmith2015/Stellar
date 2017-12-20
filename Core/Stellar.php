<?php 
	use User\User;
	use User\UserError;
	use Config\Database;
	
class Stellar extends User{
	
	function __construct(){
		$this->db = new Database(1);
	}
	
	public function getSeed(){
		
	}
	public function getLikedArtists($email){
		$stmt = $this->db->query("select * from `liked_artists` where email = ?", [$email]);
			return $stmt;
	}
	
	public function getLikedSongs($email){
		$stmt = $this->db->query("select * from `liked_songs` where email = ?", [$email]);
			return $stmt;
	}
	
	public function addArtistToLikedList($email, $artist, $url){
		$stmt = $this->db->query("insert into `liked_artists` (email, artist, url) values(?,?,?)", [$artist, $email, $url]);;
		if($stmt){
			return true;
		}
		return false;
	}
	
	public function addTrackToLikedList($email, $song_url, $title, $artist_name){
		$stmt = $this->db->query("insert into `liked_songs` (email, artist, url) values(?,?,?)", [$song_url, $title, $artist_name]);;
		if($stmt){
			return true;
		}
		return false;
	}
}