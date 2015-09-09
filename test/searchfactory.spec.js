describe('factory: Search', function() {

  var search;


  beforeEach(module('GitUserSearch'));

  beforeEach(inject(function(Search) {
    search = Search;
  }));

  beforeEach(inject(function($httpBackend) {
    httpBackend = $httpBackend
    httpBackend
      .when("GET", "https://api.github.com/search/users?access_token="+gitHubToken+"&q=hello")
      .respond(
        { items: items }
      );
  }));

  var items = [
    {
      "login": "tansaku",
      "avatar_url": "https://avatars.githubusercontent.com/u/30216?v=3",
      "html_url": "https://github.com/tansaku"
    },
    {
      "login": "stephenlloyd",
      "avatar_url": "https://avatars.githubusercontent.com/u/196474?v=3",
      "html_url": "https://github.com/stephenlloyd"
    }
  ];


  it('responds to query', function() {
    expect(search.query).toBeDefined();
  });

  it('returns search results', function() {
    search.query('hello')
    .then(function(response) {
      expect(response.data.items).toEqual(items)
    })
    httpBackend.flush();
  });



});

//We are describing a new factory called 'Search'. We are instantiating a new angular module before every test. Then we are instantiating a new instance of the Search factory for each test and injecting it in. By instantiating a new Angular module and a new factory before every test, we ensure that no state is maintained between each test - so each test runs in isolation.
