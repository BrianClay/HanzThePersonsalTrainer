/**
 * Created by brian.clay on 3/17/14.
 */
function LoginCtrl($scope){
    var login = this;
    var users = [{Name:"Bob",Username:"bobo",Password:"123"}];
    login.Username=null;
    login.Login=function(){
        var user = _.where(users,{Username:login.Username,Password:login.Password});
        if(user.length>0){
            login.User = user[0];
        }
    };
    login.Password=null;
    login.User =null;
}