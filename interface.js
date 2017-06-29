



	var app = angular.module( 'app', [ ] )

.controller('companiesCtrl', function( $scope ){
  $scope.currentCompanyId = -1;
  $scope.currentMainCompanyId = -1;

  $scope.companies = [
    {
      name: 'IOS operating system',
      earnings: '32300',
      owner: '1'
    }
  ];

  $scope.main_companies = [
    {
      main_name: 'Apple',
      main_earnings: '300000',
      combined_earnings: '32334'
    }
  ];

  $scope.addNewCompany = function() {
    if ( $scope.name != '' ) {
      $scope.companies.push({
        name: $scope.name,
        earnings: $scope.earnings,
        owner: $scope.owner
      });
      $scope.name = '';
      $scope.earnings = '';
      $scope.owner = '';
    }
  }
    $scope.addNewMainCompany = function() {
    if ( $scope.main_name != '' ) {


      $scope.main_companies.push({
        main_name: $scope.main_name,
        main_earnings: $scope.main_earnings,
        combined_earnings: $scope.main_earnings   /////+ ernings of child
      });
      $scope.main_name = '';
      $scope.main_earnings = '';
      $scope.combined_earnings = '';
    }
  }

  $scope.saveCompany = function() {
    if( $scope.currentCompanyId > -1 ){
      var id = $scope.currentCompanyId;
      $scope.companies[id].name = $scope.name;
      $scope.companies[id].earnings = $scope.earnings;
      $scope.companies[id].owner = $scope.owner;
      $scope.name = '';
      $scope.earnings = '';
      $scope.owner = '';
      $scope.currentCompanyId = -1;
    }
  }
    $scope.saveMainCompany = function() {
    if( $scope.currentMainCompanyId > -1 ){
      var id = $scope.currentMainCompanyId;
      $scope.main_companies[id].main_name = $scope.main_name;
      $scope.main_companies[id].main_earnings = $scope.main_earnings;
      $scope.main_companies[id].combined_earnings = $scope.main_earnings   ;//////+  ernings of child
      $scope.main_name = '';
      $scope.main_earnings = '';
      $scope.combined_earnings = '';
      $scope.currentMainCompanyId = -1;
    }
  }


  $scope.editCompany = function ( id ) {
    $scope.currentCompanyId = id;
    $scope.name = $scope.companies[id].name;
    $scope.earnings = $scope.companies[id].earnings;
    $scope.owner = $scope.companies[id].owner;
  }
    $scope.editMainCompany = function ( id ) {
    $scope.currentMainCompanyId = id;
    $scope.main_name = $scope.main_companies[id].main_name;
    $scope.main_earnings = $scope.main_companies[id].main_earnings;
    $scope.combined_earnings = $scope.main_companies[id].main_earnings;
  }
  $scope.deleteCompany = function( id ) {
    $scope.companies.splice( id, 1 );
  }
    $scope.deleteMainCompany = function( id ) {
    $scope.main_companies.splice( id, 1 );
  }
})
