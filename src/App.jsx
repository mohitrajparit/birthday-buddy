import { useState } from 'react';
import people from './data';
import List from './List';
const App = () => {
  const [data,setData]=useState(people);
  return <main>
    <section className='container'>

    <h3>{people.length} Birthday Remainder</h3>

    <List data={data}/>
    <button className='btn btn-block' type="button" onClick={()=>setData([])}>Clear All</button>
    </section>
    
  </main>
};
export default App;
