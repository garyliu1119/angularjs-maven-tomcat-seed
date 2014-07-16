var app = angular.module('myApp', ['ngGrid']);
app.controller('MyCtrl', function($scope) {
	 $scope.oneAtATime = true;
	  
    $scope.myData = [{name: 'Kyle Hayhurst', age: 25, interest: 'Javascript', id: 1},
                     {name: 'Jimmy Hampton', age: 25, interest: 'HTML', id: 3},
                     {name: 'Tim Sweet', age: 27, interest: 'HTML', id: 4},
                     {name: 'Jonathon Ricaurte', age: 29, interest: 'CSS', id: 6},
                     {name: 'Brian Hann', age: 28, interest: 'PHP', id: 2}];

    $scope.tierData = 
    	[
                     [  
                      {name: 'Tier 3', description: 'Commentment of 85%, and purchase $249 or less', product: '(All Endomechanical and Trocar Products', id: 3, name: 'Name1'},
                      {name: 'Tier 4', description: 'Commentment of 85%, and purchase $249 or less', product: '(All Endomechanical and Trocar Products', id: 4, name: 'Name1'},
                      {name: 'Tier 5', description: 'Commentment of 85%, and purchase $249 or less', product: '(All Endomechanical and Trocar Products', id: 5, name: 'Name1'}
                     ],
    
                     [
                      {name: 'Tier 1', description: 'Access Tier', product: 'Trocar Only', id: 1, name: 'Name2'},
                      {name: 'Tier 2', description: 'Access Non-commited', product: 'Trocar Only', id: 4, name: 'Name2'},
                      {name: 'Tier 6', description: 'Commentent of 50', product: 'Trocar Only', id: 6, name: 'Name2'},
                      {name: 'Tier 7', description: 'Commentent of 70', product: 'Trocar Only', id: 7, name: 'Name2'},
                      {name: 'Tier 8', description: 'Commentent of 90', product: 'Trocar Only', id: 8, name: 'Name2'},
                      {name: 'Tier 9', description: '(AGGREGATION) Commentent of 85 and purchase $450,000+ annually', product: 'Trocar Only', id: 9, name: 'Name2'}
                     ],
                     [
   
                      {name: 'Tier 10', description: 'Commentment of 85%, and purchase $249 or less', product: '(All Endomechanical and Trocar Products', id: 10, name: 'Name3'},
                      {name: 'Tier 11', description: 'Commentment of 85%, and purchase $249 or less', product: '(All Endomechanical and Trocar Products', id: 11, name: 'Name3'},
                      {name: 'Tier 12', description: 'Commentment of 85%, and purchase $249 or less', product: '(All Endomechanical and Trocar Products', id: 12, name: 'Name3'}
                     ]
        ];
    

	    var gridOptionList = [];
	    var tempData;
	    var tempName;

	    for (var i = 0; i< $scope.tierData.length; i++){
	    	tempData = 'tierData['+ i + ']';
	    	tempName = 'Name' + i;
	    	gridOptionList[i] = {
	    	        data: tempData,
	                showGroupPanel: false,
	                enableColumnResize: true,
	                headerRowHeight:0,
	                columnDefs: [
	                             {displayName: 'Options', cellTemplate: '<input type="radio" name="{{row.entity.name}}" onclick="alert(\'You clicked view on item ID: {{row.entity.id}} \')" value="View">'}, 
	                             {field: 'description', displayName: 'Name'},
	                             {field: 'product', displayName: 'Age'},
	                             {field: 'id', displayName: 'ID'},
	                             //{displayName: 'Options', cellTemplate: '<input type="button" name="view" onclick="alert(\'You clicked view on item ID: {{row.entity.id}} \')" value="View">&nbsp;<input type="button" name="edit" onclick="alert(\'You clicked edit on item ID: {{row.entity.id}} \')" value="Edit">&nbsp;<input type="button" onclick="alert(\'You clicked delete on item ID: {{row.entity.id}} \')" name="delete" value="Delete">'}
	                             ]
	    	};
	    };


	    
	    	
	    	
	   //$scope.filterTabs = [{grid: gridOptions11}, {grid: gridOptions12}];
	    $scope.filterTabs = [];

	    for(var i=0; i<gridOptionList.length; i++) {
	    	$scope.filterTabs[i] ={grid: gridOptionList[i]};
	    }

    
});