'use strict';

angular.module('angular-bootstrap-growl', []).factory('bootstrapGrowl', [function() {

        var factory = function(options, settings) {
            $.growl(options, settings);
        };
        return factory;
    }]).provider('$bootstrapGrowl', function() {
    return {
        setDefaults: function(settings) {
            $.growl(false, settings);
        },
        $get: function() {
            return {
            };
        }
    };
});