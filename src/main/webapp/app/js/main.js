var app = angular.module('myApp', ['ngGrid', 'ui.bootstrap']);
app.controller('MyCtrl', function($scope) {
	
    $scope.myData = [{name: 'Kyle Hayhurst', age: 25, interest: 'Javascript', id: 1},
                     {name: 'Jimmy Hampton', age: 25, interest: 'HTML', id: 3},
                     {name: 'Tim Sweet', age: 27, interest: 'HTML', id: 4},
                     {name: 'Jonathon Ricaurte', age: 29, interest: 'CSS', id: 6},
                     {name: 'Brian Hann', age: 28, interest: 'PHP', id: 2}];

    $scope.myData1 = [
                      {name: 'Tier 3', description: 'Commentment of 85%, and purchase $249 or less', product: '(All Endomechanical and Trocar Products', id: 3},
                      {name: 'Tier 4', description: 'Commentment of 85%, and purchase $249 or less', product: '(All Endomechanical and Trocar Products', id: 4},
                      {name: 'Tier 5', description: 'Commentment of 85%, and purchase $249 or less', product: '(All Endomechanical and Trocar Products', id: 5},
                     ];
    
    $scope.myData2 = [
                      {name: 'Tier 1', description: 'Access Tier', product: 'Trocar Only', id: 1},
                      {name: 'Tier 2', description: 'Access Non-commited', product: 'Trocar Only', id: 4},
                      {name: 'Tier 6', description: 'Commentent of 50', product: 'Trocar Only', id: 6},
                      {name: 'Tier 7', description: 'Commentent of 70', product: 'Trocar Only', id: 7},
                      {name: 'Tier 8', description: 'Commentent of 90', product: 'Trocar Only', id: 9},
                      {name: 'Tier 9', description: '(AGGREGATION) Commentent of 85 and purchase $450,000+ annually', product: 'Trocar Only', id: 9},
                     ];

   var data1 = [
                      {name: 'Tier 3', description: 'Commentment of 85%, and purchase $249 or less', product: '(All Endomechanical and Trocar Products', id: 3},
                      {name: 'Tier 4', description: 'Commentment of 85%, and purchase $249 or less', product: '(All Endomechanical and Trocar Products', id: 4},
                      {name: 'Tier 5', description: 'Commentment of 85%, and purchase $249 or less', product: '(All Endomechanical and Trocar Products', id: 5},
               ];
    
    var data2 = [
                      {name: 'Tier 1', description: 'Access Tier', product: 'Trocar Only', id: 1},
                      {name: 'Tier 2', description: 'Access Non-commited', product: 'Trocar Only', id: 4},
                      {name: 'Tier 6', description: 'Commentent of 50', product: 'Trocar Only', id: 6},
                      {name: 'Tier 7', description: 'Commentent of 70', product: 'Trocar Only', id: 7},
                      {name: 'Tier 8', description: 'Commentent of 90', product: 'Trocar Only', id: 9},
                      {name: 'Tier 9', description: '(AGGREGATION) Commentent of 85 and purchase $450,000+ annually', product: 'Trocar Only', id: 9}
                ];
    
    
    $scope.gridOptions1 = { 
        data: 'myData1',
        showGroupPanel: false,
        enableColumnResize: true,
        headerRowHeight:0,
        ngGroupPanelDescription: 'Tier Selection',
        columnDefs: [
            {displayName: 'Options', cellTemplate: '<input type="radio" name="view1" onclick="alert(\'You clicked view on item ID: {{row.entity.id}} \')" value="View">'}, 
            {field: 'description', displayName: 'Name'},
            {field: 'product', displayName: 'Age'},
            {field: 'id', displayName: 'ID'},
            //{displayName: 'Options', cellTemplate: '<input type="button" name="view" onclick="alert(\'You clicked view on item ID: {{row.entity.id}} \')" value="View">&nbsp;<input type="button" name="edit" onclick="alert(\'You clicked edit on item ID: {{row.entity.id}} \')" value="Edit">&nbsp;<input type="button" onclick="alert(\'You clicked delete on item ID: {{row.entity.id}} \')" name="delete" value="Delete">'}
            ]
    };
    
    $scope.gridOptions2 = { 
            data: 'myData2',
            showGroupPanel: false,
            enableColumnResize: true,
            headerRowHeight:0,
            ngGroupPanelDescription: 'Tier Selection',
            columnDefs: [
                {displayName: 'Options', cellTemplate: '<input type="radio" name="view2" onclick="alert(\'You clicked view on item ID: {{row.entity.id}} \')" value="View">'}, 
                {field: 'description', displayName: 'Name'},
                {field: 'product', displayName: 'Age'},
                {field: 'id', displayName: 'ID'},
                //{displayName: 'Options', cellTemplate: '<input type="button" name="view" onclick="alert(\'You clicked view on item ID: {{row.entity.id}} \')" value="View">&nbsp;<input type="button" name="edit" onclick="alert(\'You clicked edit on item ID: {{row.entity.id}} \')" value="Edit">&nbsp;<input type="button" onclick="alert(\'You clicked delete on item ID: {{row.entity.id}} \')" name="delete" value="Delete">'}
                ]
        };
    

	    $scope.myDataArray = [
	            [
		          {name: "Moroni", age: 50},
			      {name: "Tiancum", age: 43},
			      {name: "Jacob", age: 27},
			      {name: "Nephi", age: 29},
			      {name: "Enos", age: 34}
			    ],
			    [
		          {name: "Moroni2", age: 50},
			      {name: "Tiancum2", age: 43},
			      {name: "Jacob2", age: 27},
			      {name: "Nephi2", age: 29},
			      {name: "Enos2", age: 34}
			    ],

			    [
			      {name: "Moroni3", age: 50},
			      {name: "Tiancum3", age: 43},
			      {name: "Jacob3", age: 27},
			      {name: "Nephi3", age: 29},
			      {name: "Enos3", age: 34}
			    ]
	         ];
	    
	    
	    
	    var gridOptions11 = {
	        data: 'myDataArray[0]',
	        columnDefs: [
	            { field:"name", displayName: "NAME"},
	            { field:"age", displayName: "AGE"}],
	        multiSelect: true,
	        selectedItems: $scope.selected
	    };
	                     
	    var gridOptions12 = {
	        data: 'myDataArray[1]',
	        columnDefs: [
	            { field:"name", displayName: "Name"},
	            { field:"age", displayName: "Age"}],
	        multiSelect: false,
	        selectedItems: $scope.selected
	    };
	    
	    $scope.oneAtATime = true;
	    $scope.status = {
	    	    isFirstOpen: true,
	    	    isFirstDisabled: false
	    	  };
	    
	    var gridOptionList = [];
	    var tempData;

	    for (var i = 0; i< $scope.myDataArray.length; i++){
	    	tempData = 'myDataArray['+ i + ']';
	    	gridOptionList[i] = {
	    	        data: tempData,
	    	        columnDefs: [
	    	            { displayName: 'Options', cellTemplate: '<input type="radio" name="view2" onclick="alert(\'You clicked view on item ID: {{row.entity.age}} \')" value="View">'}, 
	    	            { field:"name", displayName: "NAME"},
	    	            { field:"age", displayName: "AGE"}],
	    	        multiSelect: true,
	    	        selectedItems: $scope.selected
	    	    };
	    }

 
	    $scope.filterTabs = [];
	    var titles = ["Apple", "Grape", "Orange"];
	    
	    for(var i=0; i<gridOptionList.length; i++) {
	    	$scope.filterTabs[i] ={grid: gridOptionList[i], title: titles[i]};
	    }

    
});