githubUserSearch.controller('GitUserSearchController', ['Search', function(Search) {
  var self = this;

  self.doSearch = function() {
    Search.query(self.searchTerm) //this line returns a promise. With a promise you can chain multiple .then statements
      .then(function(response) {
        self.searchResult = response.data;
      })
  };
}]);
