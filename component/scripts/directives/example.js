//DELETE THIS LINE, SET THE DIRECTIVE NAME

'use strict';


angular.module('example', []).directive('exampleDirective', function(){
    return {
        restrict    : 'A',
        transclude  : true,

        template: '<div class="example">This is my example, in orange!</div>'
    };
});
