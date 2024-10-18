import "./App.css";
function App() {
  return (
    <div className="font-inder">
      <h1 className="text-3xl bg-blue-700 mb-2 px-4">Test</h1>
      <section className="grid grid-cols-3 gap-3 px-4">
        <div className="col-span-2 border rounded-lg bg-yellow-500 h-40 p-3"></div>

        <div
          className="col-span-1 border rounded-lg px-4 bg-pink-700 h-56"
        >
          <p className="px-2 mt-2 text-white">Tajudeen Mohammad Jamiu</p>
          <button className="px-5 rounded-lg  mt-3 py-2  bg-slate-200">Click Me</button>
        </div>
      </section>
    </div>
  );
}

export default App;
