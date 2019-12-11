import dispatcher from "../dispatcher"; 

export function createTodo(text){
    dispatcher.dispatch({
        type:"CREATE_TODO",
        text,
    });
}


export function deleteTodo(id){
    dispatcher.dispatch({
        type:"DELETE_TODO",
        id,
    });
}

 

export function reloadTodos(){

    // axios("http://someurl.com/somedataendpoint").then((data) => {
    //     console.log("got the data!",data);
    // })

    dispatcher.dispatch({TYPE: "FETCH_TODOS" });

        setTimeout(()=> {
            dispatcher.dispatch({type: "RECEIVE_TODOS" ,todos: [
                {
                    id: 567567777,
                    text: "Go Shopping Again",
                    complete: false
                },
                {
                    id: 888567567776555,
                    text:"Hug Wife Bills",
                    complete: true
                },
            ] }); 
            
        }, 1000);
}




