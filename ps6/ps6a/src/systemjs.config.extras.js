/**
 * Add barrels and stuff
 * Adjust as necessary for your application needs.
 */
// (function (global) {
//   System.config({
//     packages: {
//       // add packages here
//     }
//   });
// })(this);
var app = angular.module('example', ['spotify']);
app.config(function (SpotifyProvider) {
  SpotifyProvider.setClientId('<CLIENT_ID>');
  SpotifyProvider.setRedirectUri('<CALLBACK_URI>');
  SpotifyProvider.setScope('<SCOPE>');
  // If you already have an auth token
  SpotifyProvider.setAuthToken('<AUTH_TOKEN>');
});
