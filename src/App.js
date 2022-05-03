import Banner from "./components/Banner";
import BannerItems from "./components/BannerItems";
import Banner_Ad from "./components/Banner_Ad";
import Banner_Bottom from "./components/Banner_Bottom";
import Featured_Products from "./components/Featured_Products";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
    <div>
      <div class="m-4 mx-5 px-4">
        <Header />
      </div>
      <div>
        <Banner />
      </div>
      <div>
        <BannerItems />
      </div>
      <div>
        <Banner_Ad />
      </div>
      <div>
        <Banner_Bottom />
      </div>
      <div>
        <Featured_Products />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
