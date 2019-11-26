const API_URL = 'https://jsonplaceholder.typicode.com/'
const TODO_URL = 'todos/:id'
const opts = {
    crossDomain: true
}

function getTodo(id) {
    return new Promise((resolve, reject) => {
        const url = `${API_URL}${TODO_URL.replace(':id', id)}`
        $
            .get(url, opts, function (data) {
                resolve(data)
            })
            .fail(() => reject(id))
    })
}

function onError(id) {
    console.log(`Sucedio un error con el id: ${id}`)
}

var ids = [1,2,3,4,5,6,7]
//console.log(ids)
console.time()
var promesas = ids.map(id => getTodo(id))
//console.log(promesas)
Promise
    .all(promesas)
    .then(data => console.log(data))
    .catch(onError)
    console.timeEnd()
/*
getTodo(1)
    .then(data1 => {
        console.log('Realizado id: ' + data1.id)
        return getTodo(2)
    })
    .then(data2 => {
        console.log('Realizado id: ' + data2.id)
        return getTodo(3)
    })
    .then(data3 => {
        console.log('Realizado id: ' + data3.id)
        return getTodo(4)
    })
    .then(data4 => {
        console.log('Realizado id: ' + data4.id)
        //getTodo(4)
    })
    .catch(onError)
*/