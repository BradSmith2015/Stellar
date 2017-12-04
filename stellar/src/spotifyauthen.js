const Spotify = require('spotify-web-api-node');
const spotifyApi = new Spotify({
  clientId: "65c221c334f1415dac8fb10eea012852",
  clientSecret:" bf54554261ba4de88cd1139a75e2e3de".
  redirectUri:"http://localhost:3000/"
});
console.log(spotifyApi);
