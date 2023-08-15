const Home = () => {
    return (
        <div className="home-page">
            <header>
                <h1>My Todo List</h1>
            </header>
            <form action="">
            <input type="text" className="todo-input" />
            <button className="todo-button" type="button">
            <i class="fas fa-plus-circle fa-lg"></i>
            </button>
            <select name="todo" className="todo-select">
            <option value="All">All</option>
            <option value="Completed">Completed</option>
            <option value="Pending">Pending</option>
            </select>
            </form>

            <div className="todo-container">
                <ul className="todo-list"></ul>
            </div>
        </div>
        
      );
}
 
export default Home;