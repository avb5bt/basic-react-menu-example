import Menu from "./Menu.js"
import './App.css';

function App() {
  // hard-coded data
  // is a JS object (like a HashMap or Dictionary in other languages)
  const data = {
    "breakfast": [
      {"food": "pancakes", "price": 5.00, "vegetarian": true},
      {"food": "waffles", "price": 5.00, "vegetarian": true},
      {"food": "orange juice", "price": 2.00, "vegetarian": true}
    ],
    "lunch": [
      {"food": "turkey sandwich", "price": 8.00, "vegetarian": false},
      {"food": "grilled cheese", "price": 6.00, "vegetarian": true},
      {"food": "hamburger", "price": 8.00, "vegetarian": false}
    ],
    "dinner": [
      {"food": "chicken alfredo", "price": 10.00, "vegetarian": false},
      {"food": "tofu stir-fry", "price": 9.00, "vegetarian": true},
      {"food": "chili", "price": 8.00, "vegetarian": false}
    ]
  }
  // What HTML shoudl be displayed? A div containing the Menu component
  return (
    <div className="App">
      <Menu menu={data} />
    </div>
  );
}

export default App;
/*********************LEVEL 4: App***********************
this is where the data comes from. The data is an OBJECT of array items where wach item is another object.
*********************/
