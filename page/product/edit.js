console.log('Log để kiểm tra: Đã nhúng file pages/product/trang_QLSP_ad.js thành công');
// Khai báo controller createProductCtrl

app.controller('editCtrl', function ($scope, $http, $routeParams) {

    // 1. Khai báo các biến chính
    $scope.product = {
        id: '',
        ten: '',
        anh: '',
        soluong: '',
        giaBan: '',
        giaNiemYet: '',
        tenDanhMuc: '',
        idDanhMuc: ''
    }

    $scope.formHople = true;
    $scope.formThongBao = '';

    $http({
        method: 'GET',
        url: 'http://localhost:3000/san-pham/' + $routeParams.id
    }).then(function (response) {
        // Gan gia tri sau khi call api thanh cong
        $scope.product = response.data;

    })


    $scope.onClickEdit = function () {

        $scope.formHople = true;
        $scope.formThongBao = '';

        // Validate ID: Bat Buoc
        if ($scope.product.id === '') {
            $scope.formHople = false;
            $scope.formThongBao = "Mời bạn nhập ID";

            return;
        }

        // Validate name: Bat Buoc
        if ($scope.product.ten === '') {
            $scope.formHople = false;
            $scope.formThongBao = "Mời bạn nhập tên";

            return;
        }


        // Call API de luu du lieu vao DB
        $http({
            method: 'PUT',
            url: 'http://localhost:3000/san-pham/' + $routeParams.id,
            data: $scope.product
        }).then(function (response) {
            alert('Chúc mừng bạn tạo mới thành công');
        })
    }
})
