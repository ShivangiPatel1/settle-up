import NavigationBar from "../../components/NavigationBar/NavigationBar";
import "bootstrap/dist/css/bootstrap.min.css";
import LeftPanel from "../../components/LeftPanel/LeftPanel";
import MainSection from "../../components/MainSection/MainSection";
import RightPanel from "../../components/RightPanel/RightPanel";
import { AppContainer } from "./Home.element.js";

function Home() {
  return (
    
      <div>
        <NavigationBar></NavigationBar>
      <AppContainer>
      <LeftPanel></LeftPanel>
      <MainSection></MainSection>
    </AppContainer>
      </div>
  );
}

export default Home;
