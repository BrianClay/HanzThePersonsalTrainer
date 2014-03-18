/**
 * Created by brian.clay on 3/18/14.
 */
angular.module("Hanz")
.directive("exercises", function(){
        return {
            restrict:"E",
            scope:{Items:"=items"},
            templateUrl:'<ul class="list-group"> <li class="list-group-item" ng-repeat="exercise in Items|filter:SearchFilter">{{exercise.Name}} Duration: {{exercise.Time |mins}}</li></ul>'
        };
    });