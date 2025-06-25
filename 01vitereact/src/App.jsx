
import Chai from "./Chai"

const uName ="06 Pk";
const checkAge = () => {
  let age = 12;
  if (age > 10) {
    return "Greater than 10";
  } else {
    return "Less than or equal to 10";
  }
};
const number= checkAge();
/* here {} is evaluated expression i.e that give final value */
function App() {
  return (
    // JSX syntax return single element via fragment we return multiple elements
  <> 
      <h1>Hello, Prince Kumar via Vite {uName}</h1> 
      <h2>{number}</h2> 
       <Chai/>
  </>
  )
}

export default App
