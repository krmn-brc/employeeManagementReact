import { Routes, Route } from 'react-router-dom';
import Dashboard from './scenes/dashboard'
import Sidebar from './scenes/global/Sidebar'
import Department from './scenes/departmentPages/department';
import Branch from './scenes/departmentPages/branch';
import GeneralDepartment from './scenes/departmentPages/generalDepartment';
import Country from './scenes/locationPages/country';
import City from './scenes/locationPages/city';
import Town from './scenes/locationPages/town';

function App() {
  return (
       <div className='page'>
            <div className='sidebar w-25'>
                <Sidebar />
            </div>
            <main className='container'>
                <Routes>
                   <Route path='/' element={<Dashboard  />} />
                   <Route path='/generalDepartment' element={<GeneralDepartment  />} />
                   <Route path='/department' element={<Department  />} />
                   <Route path='/branch' element={<Branch  />} />
                   <Route path='/country' element={<Country  />} />
                   <Route path='/city' element={<City  />} />
                   <Route path='/town' element={<Town  />} />
                </Routes>
            </main>
       </div>
  );
}

export default App;
