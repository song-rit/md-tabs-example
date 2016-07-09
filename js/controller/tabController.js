app.controller("tabController", function($scope, $rootScope, $location, $log) {
    $scope.selectedIndex = 0;

    $scope.$watch('selectedIndex', function(current, old) {
        switch(current) {
            case 0: $location.url("/view1"); break;
            case 1: $location.url("/view2"); break;
            case 2: $location.url("/view3"); break;
        }
    });

    $rootScope.$on('$routeChangeSuccess', function(){    		
        switch($location.url()){    			
            case '/view1':
                $scope.selectedIndex = 0;
        break;
            case '/view2':
                $scope.selectedIndex = 1;
                break;
            case '/view3':
                $scope.selectedIndex = 2;
                break;
            default: 
                $scope.selectedIndex = 0;
        }
    });

});