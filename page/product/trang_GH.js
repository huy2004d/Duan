console.log('Log để kiểm tra: Đã nhúng file pages/product/trang_QLSP_ad.js thành công');
// 5.1. Khai báo controller listProductCtrl
app.controller('gioHangCtrl', function ($scope, $http) {

    $scope.gioHangCtrl = [];

    $http({
        method: 'GET',
        url: 'http://localhost:3000/san-pham'

    }).then(function (response) {
        $scope.gioHangCtrl = response.data
        console.log('Kiem tra thu gia tri bien listProduct', $scope.gioHangCtrl);
        
    })
        
    $scope.OnClickDelete = function(id){
        console.log('Kiem tra muon xoa:' +id);

        $http({
            method: 'DELETE',
            url: 'http://localhost:3000/san-pham/' + id
        }).then(function(response){
            alert('Xóa thành công');
        })
    }
    

})
