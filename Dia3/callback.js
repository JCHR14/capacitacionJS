const API_URL = 'https://jsonplaceholder.typicode.com/'
const TODO_URL = 'todos/:id'
const opts = {crossDomain:true}

const onResponse = function(data){
    console.log(data.id);
}

function getTodo(id, callback){
    const url = `${API_URL}${TODO_URL.replace(':id', id)}`
    $.get(url, opts, function(data){
        console.log(data.id);
        if(callback){
            callback()
        }
    })

}

getTodo(1, function(){
    getTodo(3, function(){
        getTodo(5, function(){
            getTodo(7, function(){
                getTodo(8, function(){
                    getTodo(9, function(){

                    })
                })
            })
        })
    })
})

