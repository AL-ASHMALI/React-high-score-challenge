import allCountryScores from './scores'; 
import Card from './Card';

function App() {
  return  <Card scores={allCountryScores}/>;
    // <div>
    //   {/* <h1>High Scores per Country</h1>
    //   {allCountryScores.map((item, index) =>{
    //     return <Card key={index} country={item.name}/>
    //   })} */}
    // </div>
  
}

export default App;
