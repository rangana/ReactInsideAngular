angular.module('reactAngular', [])
    .controller('mainCtrl', function ($scope) {
        $scope.myModel = {
            message: 'World'
        };
    }).directive('myDirective', function () {
    return {
        restrict: "E",
        link: function (scope, element) {
            scope.$watch('myModel.message', function (newVal, oldVal) {
                ReactDOM.render(
                    React.createElement(window.org.rangana.Hello, {name: scope.myModel.message}),
                    document.getElementById('example')
                );
            });
        }
    }
});