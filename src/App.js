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
      <div>
        <Header />
      </div>
      <div>
        <Banner />
      </div>
      <div>
        <BannerItems />
      </div>
      <div class="mt-5">
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
