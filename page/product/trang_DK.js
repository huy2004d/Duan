console.log('Log để kiểm tra: Đã nhúng file pages/product/list.js thành công');

// 5.1. Khai báo controller listProductCtrl
app.controller('trangDKCtrl', function ($scope, $http) {
    console.log('Log để kiểm tra: Khai báo trangDKCtrl thành công');
    $scope.user = {
        id: "",
        pass: "",
        name: "",
        SDT: ""
    }

    $scope.formHopLe = true;
    $scope.formThongBao = '';
    $scope.formSuccess = '';

    
    $scope.onClickCreate = function () {
        console.log('Log kiểm tra giá trị biến $scope.dangky', $scope.dangky);

        $scope.formHopLe = true;
        $scope.formThongBao = '';

        if ($scope.user.name === '') {
            $scope.formHopLe = false;
            $scope.formThongBao = "Mời Bạn Nhập Tên"
            return;
        }

        if ($scope.user.SDT === '') {
            $scope.formHopLe = false;
            $scope.formThongBao = "Mời bạn nhập SDT"
            return;
        }

        if ($scope.user.id === '') {
            $scope.formHopLe = false;
            $scope.formThongBao = "Mời Bạn Nhập Tài Khoản"
            return;

        }

        if ($scope.user.pass === '') {
            $scope.formHopLe = false;
            $scope.formThongBao = "Mời Bạn Nhập Mật Khẩu"
            return;
        }

        
        if ($scope.user.pass !== $scope.user.confirmPass) {
            $scope.formHopLe = false;
            $scope.formThongBao = "Mật khẩu không khớp"
            return;
        }
        console.log('Form hop le');

        $http({
            method: 'POST',
            url: 'http://localhost:3000/user',
            data: $scope.user
        }).then(function(response){
            alert('Chúc mừng bạn đã đăng ký thành công')
        })
        


    }

})




