//DELETE THIS LINE, SET THE DIRECTIVE NAME

'use strict';


var alchemy = angular.module('alchemy', []);
    
alchemy.directive('exampleDirective', function(){
    return {
        restrict    : 'A',
        transclude  : true,

        controller : function($scope, $element){
        },

        template: '<div class="example">This is my example, in orange!</div>'
    };
});
