import NavigationBar from "../../components/NavigationBar/NavigationBar";
import "bootstrap/dist/css/bootstrap.min.css";
import LeftPanel from "../../components/LeftPanel/LeftPanel";
import MainSection from "../../components/MainSection/MainSection";
import RightPanel from "../../components/RightPanel/RightPanel";


function Home() {
  return (
    <div className="App-container">
      <NavigationBar></NavigationBar>
      <div className="section-container">
        <LeftPanel></LeftPanel>
        <MainSection></MainSection>
        <RightPanel></RightPanel>
      </div>
    </div>
  );
}

export default Home;
