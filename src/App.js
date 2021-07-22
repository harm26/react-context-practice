import Page1 from "./components/Page1";
import Page2 from "./components/Page2";
import Button from "./components/Button";
import DataProvider from "./context/DataContext";

function App() {
  return (
    <DataProvider>
      <div class="container mt-4">
        <div class="row">
          <div class="col container text-center">
            <Page1 />
          </div>
          <div class="col container text-center">
          <Button />
          </div>
          <div class="col container text-center">
            <Page2 />
          </div>
        </div>
      </div>
    </DataProvider>
  );
}

export default App;
