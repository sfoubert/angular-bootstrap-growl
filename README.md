angular-bootstrap-growl
=======================


mouse0270/bootstrap-growl (https://github.com/mouse0270/bootstrap-growl) to AngularJS
website : http://bootstrap-growl.remabledesigns.com/

works with the new version Bootstrap Growl 2.0

### Scripts

```html
<script src="scripts/bootstrap-growl.js"></script>
<script src="scripts/angular-bootstrap-growl.js"></script>
```

### App

```js
var app = angular.module('YourApp', ['angular-bootstrap-growl']);
```

```js
app.config(function ($bootstrapGrowlProvider) {
        $bootstrapGrowlProvider.setDefaults({
            offset: 20,
            spacing: 10,
            mouse_over: 'pause',
            placement: {
                from: "top",
                align: "right"
            },
            animate: {
                enter: 'animated bounceIn',
                exit: 'animated bounceOut'
            }
        });
```

### Controller

```js
app.controller('eventsController', ['$scope', 'bootstrapGrowl', function ($scope, bootstrapGrowl) {

			// simple
            bootstrapGrowl(message: 'Sucessfully updated.', {type: 'info'});

           	// or with icon
            bootstrapGrowl({
                message: 'Sucessfully updated.',
                icon: 'glyphicon glyphicon-ok'
            }, {
                type: 'info'
            });

}]);
```
