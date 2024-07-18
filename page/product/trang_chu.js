

// 5.1. Khai báo controller listProductCtrl
app.controller('trangchuCtrl', function ($scope, $http, $rootScope) {


    // 1. Khai bao bien can thiet
    $scope.trangchuProduct = [];

    // 2. Call api lay danh sach san pham
    $http({
        method: 'GET',
        url: 'http://localhost:3000/san-pham'

    }).then(function (response) {
        // Gan gia tri sau khi call api hoan tat
        $scope.trangchuProduct = response.data
        console.log('Kiem tra thu gia tri bien trangchuProduct', $scope.trangchuProduct);

    })

    $scope.onClickAppToCart = function (){
        $rootScope.cartNumber += 1;
    }

})




