angular.module('itemPage', ['pdfAnnotation']);

angular.module('itemPage').controller('itemCtrl', function($scope) {

   $scope.callme = function(url) {
      $scope.options = {url: url};
   };
   $scope.options = {url: 'sample/test1.pdf'};
});