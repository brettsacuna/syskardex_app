angular.module('kardex.controllers', [])

.controller('DashCtrl', function($scope, ProductService, $ionicPopup) {
    $scope.loading_products = false;
    $scope.products = [];

    $scope.load_products = function (filtro) {
        $scope.loading_products = true;

        ProductService.getProducts((filtro || "")).then(function (response) {
            $scope.products = response.products;
            $scope.loading_products = false;
        }).catch(function (reason) {
            var alert_reason = $ionicPopup.alert({
                title: 'Mensaje del sistema',
                template: 'Ocurrió un error -> '+reason,
                okText: 'Entendido'
            });

            $scope.loading_products = false;
        });
    };

    $scope.load_products();
});
