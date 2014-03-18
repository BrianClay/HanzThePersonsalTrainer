/**
 * Created by brian.clay on 3/18/14.
 */
angular.module("Hanz")
.filter("mins", function()
    {   return  function(value){
        return value +" min";
    }})