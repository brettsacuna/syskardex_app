angular.module('kardex.services', [])

.service('ProductService', function ($q, $http) {
    return {
        getProducts : function (filtro) {
			var defered = $q.defer();
	        var promise = defered.promise;

	        $http.get('http://192.168.13.128/almacen/api?filtro='+filtro.toUpperCase())
	            .success(function(data) {
	                defered.resolve(data);
	            })
	            .error(function(err) {
	                defered.reject(err);
	            });

	        return promise;
		}
    }
});
