<?php 
	namespace Core;
	use Database;

class Stellar extends User{
	
	public __construct(){
		$this->db = new Database(1)
	}
	
	public function getSeed(){
		
	}
	
	public function addArtistToLikedList($artist){
		$stmt = $this->db->query("insert into `table` where...");
	}
	
	public function addTrackToLikedList($track_id){
		
	}
}