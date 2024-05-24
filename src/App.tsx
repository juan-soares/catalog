import { Header } from "./components/Header";
import { ScreenHome } from "./screens/Home";
import { Footer } from "./components/Footer";
import { ScreenTitle } from "./screens/Title";

function App() {
  return (
    <>
      <Header />
      <ScreenHome />
      <ScreenTitle />
      <Footer />
    </>
  );
}

export default App;
