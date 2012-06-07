describe("Conference", function() {
  var conference;

  beforeEach(function() {
    conference = Conference;
  });

  it("should be able to give Speakers", function() {
	var speakers = conference.speakers();
    expect(speakers.length).toEqual(2);
  });

});