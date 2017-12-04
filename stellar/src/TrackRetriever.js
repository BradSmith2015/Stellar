class getTracks = {
fetchTracks(Artistid){

  $.ajax('GET https://api.spotify.com/v1/artists/'+ Artistid +'/top-tracks').done(function(response){
      let retrival = response.tracks.items;
  })
  return retrival
}
}
