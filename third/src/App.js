import Product from "./Product/Product";
import "./App.css"

function App() {

  // ---------------FIRST WAY TO SHOW PROPS---------------
  // return (
  //   <div className="Container">
  //     <Product name="Asus" price={600} description="Just Nothing" img="image/01.jpeg" count={0} />
  //     <Product name="Acer" price={100} description="Do You Need it?" img="image/01.jpeg" count={20} />
  //     <Product name="HP" price={500} description="So Buy it!!!" img="image/01.jpeg" count={10} />
  //   </div>
  // );




  const allProducts = [
    { id: 1, name: 'ASUS', price: 600, description: "Just Nothing", img: "image/01.jpeg", count: 0 },
    { id: 2, name: 'Acer', price: 100, description: "Do You Need it?", img: "image/01.jpeg", count: 20 },
    { id: 3, name: 'HP', price: 500, description: "So Buy it!!!", img: "image/01.jpeg", count: 10 },
  ]

  return (
    <div className="Container">
      {/* <Product name={allProducts[0].name} price={allProducts[0].price} description={allProducts[0].description} img={allProducts[0].img} count={allProducts[0].count} /> */}
      {/* Another Way */}
      <Product {...allProducts[0]} />
      <Product {...allProducts[1]} />
      <Product {...allProducts[2]} />
    </div>
  );
}

export default App;
