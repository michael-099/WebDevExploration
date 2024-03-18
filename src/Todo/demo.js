import { useQuery, useMutation } from "react-query";


const getData = async () => {
    const response = await fetch('todo.json');
    return await response.json()
}
function Todo() {
    // return <p>hello</p>
    const { data, isLoading, error } = useQuery("todo", getData);
    if (isLoading) return <div> Loding the to do lists....</div>;
    if (error) return <div>Error fetching data: {error.message}</div>
    return (
        <div>
          {data.map((item) => (
            <p key={item.title}> 
              {item.todo}
            </p>
          ))}
        </div>
      );
}
export default Todo;