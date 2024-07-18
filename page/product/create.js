// Khai báo controller createProductCtrl
app.controller('createCtrl', function ($scope, $http) {
    console.log('Log để kiểm tra: Khai báo createCtrl thành công');

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


    $scope.onClickCreate = function () {

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
            method: 'POST',
            url: 'http://localhost:3000/san-pham' + $routeParams.id,
            data: $scope.product
        }).then(function (response) {
            alert('Chúc mừng bạn tạo mới thành công');
        })
    }
})
