
import { HeroSection } from "../components/HeroSection";
import { Brands } from "../components/Brands";
import { ProductList } from "../components/ProductList";
import { DressStyle } from "../components/DressStyle";
import { ReviewList } from "../components/ReviewList/ReviewList";


function Homepage() {
  return (
    <>
     
      <HeroSection />
      <Brands />
      <ProductList />
      <ProductList />
      <DressStyle />
      <ReviewList />
  
    </>
  );
}

export {Homepage};
