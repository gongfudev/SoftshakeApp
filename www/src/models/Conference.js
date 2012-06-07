var Conference = Conference || {};

(function( exports) {
  "use strict";

  // var CONFERENCE_DB_FILE = "db-speakers.json";
  // 
  // function init() {
  //   $.getJSON( CONFERENCE_DB_FILE, function( dataJSON) {
  //     conferenceJSON = dataJSON;
  // 	  $.trigger("modelLoaded");
  //   });
  // };

  function speakers() {
	return [ "Kent Beck", "Jason Fried" ];
  };


  // function loadSpeakers(callback) {
  //   $.getJSON( CONFERENCE_DB_FILE, function( dataJSON) {
  //     conferenceJSON = dataJSON;
  // 	  callback(conferenceJSON);
  //   });
  // };

  exports.speakers = speakers;

})( Conference);