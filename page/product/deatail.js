console.log('Log để kiểm tra: Đã nhúng file pages/product/deatail.js thành công');
// 6.1. Khai báo controller detailProductCtrl
// Lưu ý: Khai báo "$routeParams" để có thể lấy giá trị id truyền vào url
app.controller('deatailCtrl', function ($scope, $http, $routeParams) {
    console.log('a',$routeParams.id);
    $scope.product = {
        id: '',
        ten: '',
        anh: '',
        soluong: '',
        giaBan: '',
        giaNiemYet: '',
        tenDanhMuc: ''
    }
    
    // 2. Call api lay thong tin san pham
    $http({
        method: 'GET',
        url: 'http://localhost:3000/san-pham/' + $routeParams.id
    }).then(function(response){
        // Gan gia tri sau khi call api thanh cong
        $scope.product = response.data;
        
    })

    // Sua lai 1 chut link dieu huong
})
