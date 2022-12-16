
import './App.css';
import Banner from './components/Banner/Banner';
import MedicalService from './components/MedicalService/MedicalService';
import Header from './components/Navbar/Navbar';
import TopHeader from './components/TopHeader/TopHeader';

function App() {
  return (
    <div>
      <TopHeader></TopHeader>
      <Header></Header>
      <Banner></Banner>
      <MedicalService></MedicalService>
    </div>
  );
}

export default App;
