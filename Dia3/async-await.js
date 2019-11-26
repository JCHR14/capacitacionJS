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

async function getTodos(){
    var ids = [1, 2, 3, 4, 5, 6, 7]
    console.time()
    var promesas = ids.map(id => getTodo(id))
    try{
        var todos = await Promise.all(promesas)
    }catch(id){
        onError(id)
    }
    console.log(todos)
    console.timeEnd()
}
getTodos()