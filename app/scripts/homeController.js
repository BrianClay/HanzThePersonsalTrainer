/**
 * Created by brian.clay on 3/17/14.
 */
function HomeCtrl($scope){
    $scope.Message= "Hanz & Franz";
    $scope.SearchFilter=null;
    $scope.NewExercise=null;
    $scope.Exercises =[{Name:"Cardio",Time:10},{Name:"Weights",Time:15},{ Name:"Crazy Crossfit",Time:60}];
    $scope.AddExercise = function(){
        $scope.Exercises.push($scope.NewExercise);
        $scope.NewExercise=null;
    };
}