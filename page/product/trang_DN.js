// 5.1. Khai báo controller trangDNProduct
app.controller('trangDNCtrl', function ($scope, $http, $rootScope) {
    console.log('Log để kiểm tra: Khai báo trangchuCtrl thành công');

    $scope.user = {
        "id": "",
        "pass": "",
        "role": ""
    };

    $rootScope.username = sessionStorage.getItem('username') || '';
    console.log("$rootScope.username: ", $rootScope.username);

    $scope.onClickLogin = function () {
        console.log('Log kiem tra gia tri bien $scope.user', $scope.user);

        $scope.formHopLe = true;
        $scope.formThongBao = '';

        if ($scope.user.id === '') {
            $scope.formHopLe = false;
            alert("Mời bạn nhập tài khoản");
            console.log('Kiem tra id')
            return;

        }

        if ($scope.user.pass === '') {
            $scope.formHopLe = false;
            alert("Mời bạn nhập mật khẩu");
            console.log('Kiem tra pass')
            return;
        }
        console.log('aaaaaa', $scope.use);
        console.log('Form hop le');

        $rootScope.username = '';


        $http({
            method: 'GET',
            url: 'http://localhost:3000/user',
            params: {
                id: $scope.user.id,
                pass: $scope.user.pass
            }
        }).then(function (response) {

            var userData = response.data;
            if (userData && userData.length > 0) {
                alert('Đăng nhập thành công!');
                $rootScope.username = $scope.user.id;
                sessionStorage.setItem('username', $rootScope.username.name || '')
                window.location = 'http://127.0.0.1:5500/index.html#!/'
            } else {
                alert('Tài khoản hoặc mật khẩu không đúng. Bạn vui lòng kiểm tra lại !')
            }


        }).catch(function (error) {
            console.error('Error during login: ', error);
            alert('Đã xảy ra lỗi. Bạn vui lòng thử lại!');
        });
    };
});




