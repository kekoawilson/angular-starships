angular.module('starships').service('shipSrvc', 
function($http) {
    let lastPage = 1;
    this.getStarships = (page = lastPage) => {
        lastPage = page;
        return $http.get(`https://swapi.co/api/starships/?page=${page}`)
            .then(resp => {
                console.log(resp)
                return resp.data.results.map( ship => {
                    //https://swapi.co/api/starships/11
                    // get id from url
                    
                    let arr = ship.url.split('/');

                    ship.id = arr[arr.length - 2]*1;

                    return ship
                })
            })
    }

    this.getStarship = id => {
        return $http.get(`https://swapi.co/api/starships/${id}`)
            .then(resp => resp.data)
    }

    this.getLastPage = () => lastPage;
})