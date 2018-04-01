var MainController = function($scope) {

    $scope.data = '';
    $scope.risk_level = 0;

    $scope.add = function() {
        var f = document.getElementById('file').files[0],
            fileReader = new FileReader();

        fileReader.readAsBinaryString(f);

        fileReader.onloadend = function (e) {
            var data = e.target.result;

            var x2js = new X2JS();
            var json_data = x2js.xml_str2json(data);

            $scope.data = json_data;
            $scope.risk_level = 50;
            $scope.show_json_output = true;
            //send your binary data via $http or $resource or do anything else with it
        }
    }

    $scope.check_json_output_state = function () {
        if($scope.show_json_output == true){
            return true;
        }else{
            return false;
        }
    }


}

app.controller('MainController', MainController);