angular.module('starships').service('shipSrvc', 
function($http, $q) {
    let lastPage = 1;
    this.getStarships = (page = lastPage) => {
        lastPage = page;
        return $q.all(
        [$http.get(`https://swapi.co/api/starships/?page=1`),
        $http.get(`https://swapi.co/api/starships/?page=2`),
        $http.get(`https://swapi.co/api/starships/?page=3`),
        $http.get(`https://swapi.co/api/starships/?page=4`)] )
            .then(resp => {
                return resp.reduce( (all, resp) => {
                    all.push(...resp.data.results.map(ship => {
                    
                    let arr = ship.url.split('/');

                    ship.id = arr[arr.length - 2]*1;

                    return ship
                }))
                return all
                }, [])
                
            })
    }

    this.getStarship = id => {
        return $http.get(`https://swapi.co/api/starships/${id}`)
            .then(resp => resp.data)
    }

    this.getLastPage = () => lastPage;
})