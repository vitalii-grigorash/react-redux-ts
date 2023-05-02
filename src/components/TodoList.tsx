import { useEffect } from "react";
import { useActions } from "../hooks/useActions";
import { useTypesSelector } from "../hooks/useTypedSelector";

const TodoList: React.FC = () => {

    const {
        todos,
        loading,
        limit,
        page,
        error
    } = useTypesSelector(state => state.todo);

    const { fetchTodos, setTodoPage } = useActions();

    const pages = [1, 2, 3, 4, 5];

    useEffect(() => {
        fetchTodos(page, limit);
    }, [page])

    if (loading) {
        return <h1>Идет загрузка...</h1>
    }

    if (error) {
        return <h1>{error}</h1>
    }

    return (
        <div>
            {todos.map(todo =>
                <div key={todo.id}>
                    <p>{todo.id} - {todo.title}</p>
                </div>
            )}
            <div style={{ display: 'flex' }}>
                {pages.map((p, index) =>
                    <div
                        key={index}
                        style={{ border: p === page ? '2px solid green' : '1px solid gray', padding: 10 }}
                        onClick={() => setTodoPage(p)}
                    >
                        {p}
                    </div>
                )}
            </div>
        </div>
    )
}

export default TodoList;
