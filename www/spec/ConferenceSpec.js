describe("Conference", function() {
  var conference;

  beforeEach(function() {
    conference = Conference;
  });

  it("should be able to return Speakers", function() {
	var speakers = conference.speakers();
    expect( speakers.length).toEqual( 2);

	var speaker1 = speakers[ 0];
    expect( speaker1.id).toEqual( "KentBeck");
    expect( speaker1.firstname).toEqual( "Kent");
    expect( speaker1.lastname).toEqual( "Beck");
    expect( speaker1.URL).toEqual( "http://twitter.com/kentbeck");
    expect( speaker1.photoURL).toEqual("images/photo-kent-beck.jpg");
    expect( speaker1.bio).toBeDefined();

	var speaker2 = speakers[ 0];
    expect( speaker1.id).toEqual( "MartinFowler");
    expect( speaker1.firstname).toBeDefined();
  });
});