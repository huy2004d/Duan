app.controller("qldmspCtrl", function ($scope, $http) {
    console.log('Log để kiểm tra: Đã nhúng file qldmspCtrl thành công');

    // 5.1. Khai báo controller listProductCtrl

    console.log('Log để kiểm tra: Khai báo qldmspCtrl thành công');

    $scope.danhmuc = {
        id: "",
        ten: ""
    }

    $http({
        method: 'GET',
        url: 'http://localhost:3000/danh-muc'
    }).then(function (response) {
        console.log("Dữ liệu từ API: ", response.data);
        $scope.danhmuc = response.data
    })
    // 3.liên kết biến sanpham với html bằng ng-repeat 
    // mở file FileList.html lên và code 
    

    // 4.bắt sự kiện click delete 
    $scope.onClickDelete = function (id) {
        console.log('log thử id muốn xóa : ' + id);

        // call api để xóa bản ghi 
        $http({
            method: 'DELETE',
            url: 'http://localhost:3000/danh-muc/' + id
        }).then(function (response) {
            //xử lý logic sau khi xóa thành công
            alert('Xóa thành công')
        })
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
            $scope.formThongBao = "Mời bạn nhập tên danh mục";

            return;
        }


        // Call API de luu du lieu vao DB
        $http({
            method: 'POST',
            url: 'http://localhost:3000/danh-muc' + $routeParams.id,
            data: $scope.product
        }).then(function (response) {
            alert('Chúc mừng bạn tạo mới thành công');
        })
    }


});
