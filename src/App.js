import { Fragment } from "react";
import { NavLink } from "react-router-dom";

function App() { 
  return (
    <Fragment>
      <header className="flex items-center justify-center py-10 mb-10 text-white header gap-x-5">
        <span className="text-primary">HOME</span>
        <span>MOVIES</span>
      </header>
      <section className="banner h-[400px] page-container">
        <div className="relative w-full h-full bg-white rounded-lg">
          <img
            src="https://images.unsplash.com/photo-1675685438755-03a9ca36547f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
            alt=""
            className="object-cover w-full h-full rounded-lg"
          ></img>
          <div className="absolute w-full text-white left-5 bottom-5">
            <h2 className="mb-5 text-3xl font-bold">XXXXXXXXXXXXX !</h2>
          </div>
        </div>
      </section>
    </Fragment>
  );
}

export default App;
