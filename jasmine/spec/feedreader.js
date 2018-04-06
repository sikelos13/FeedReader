$(function() {

  describe('RSS Feeds', function() {


    it('are defined', function() {
      expect(allFeeds).toBeDefined();
      expect(allFeeds.length).not.toBe(0);
    });

    /* Τest that loops through each feed
     in the allFeeds object and ensures it has a URL defined
     and that the URL is not empty.
     */
    it('URL should not be empty', function() {
      for (i in allFeeds) {
        expect(allFeeds[i].url).toBeDefined();
        expect(allFeeds[i].url).toBeTruthy();
      }
    });

    /* Test that loops through each feed
     in the allFeeds object and ensures it has a name defined
     and that the name is not empty.
     */

    it('Name should not be empty', function() {
      for (i in allFeeds) {
        expect(allFeeds[i].name).toBeDefined();
        expect(allFeeds[i].name).toBeTruthy();
      }
    });
  });

  /* Τest suite named "The menu" */
  describe('The menu', function() {

    var body = document.body;
    var menuIcon = document.querySelector(".menu-icon-link");

    /* Τest that ensures the menu element is
     hidden by default.
     */

    it('should be hidden by default', function() {
      //if body has menu hidden class then its hidden by default.
      expect(body.className).toContain('menu-hidden');
    });

    /* test that ensures the menu changes
     visibility when the menu icon is clicked.
     */

    it('icon should toggle visibility', function() {
      menuIcon.click();
      expect(body.className).not.toContain('menu-hidden');

      menuIcon.click();
      expect(body.className).toContain('menu-hidden');
    });
  });

  /* Write a new test suite named "Initial Entries" */

  describe('Initial Entries', function() {

    beforeEach(function(done) {
      loadFeed(0, function() {
        done();
      });
    });

    /*  ensures when the loadFeed
     function is called and completes its work, there is at least
     a single .entry element within the .feed container.
     */
    it('should have at least one initial entry', function(done) {
      var container = document.querySelector(".feed").querySelector(".entry").length;
      expect(container).toBeGreaterThan(0);

    });
  });

  /* test suite named "New Feed Selection" */
  describe('New Feed Selection', function() {
    var initFeed;
    beforeEach(function(done) {
      loadFeed(0, function() {
        initFeed = document.querySelector(".feed").innerHTML;

        loadFeed(1, function() {
          done();
        });
      });
    });

    /*Make sure when a new feed is loaded
    by the loadFeed function that the content actually changes
    */

    it('should change the content when new feed is loaded', function(done) {
      var newFeed = document.querySelector(".feed").innerHTML;
      expect(initFeed).not.toBe(newFeed);

    });
  });
}());
