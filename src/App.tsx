// import s from './App.module.scss';
// import { Header } from './components/Header';
import { useEffect, useState } from "react";
import type { Product } from "./types/Product";
import { Header } from "./components/Header";
import { Page } from "./components/Page";
import { ProductList } from "./components/ProductList";
import { ProductControls } from "./components/ProductControls";
import { Pagination } from "./components/Pagination/Pagination";
import { Footer } from "./components/Footer/Footer";
const endpoint =
  "https://corsproxy.io/?https://ip-194-99-21-145-139178.vps.hosted-by-mvps.net/api/v1/products";

function App() {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [errors, setErrors] = useState<string[]>([]);
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState<string>("popularity");
  const [reversed, setReversed] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(12);
  

  useEffect(() => {
    fetch(endpoint)
      .then((res) => res.json())
      .then((data) => setProducts(data.data.products))
      .catch(() => setErrors((prev) => [...prev, "Failed loading products"]))
      .finally(() => setIsLoading(false));
  }, []);

  useEffect(() => {
    const updateItemsPerPage = () => {
      const width = window.innerWidth;
      if (width >= 1024) setItemsPerPage(12);
      else setItemsPerPage(4);
    };

    updateItemsPerPage();
    window.addEventListener("resize", updateItemsPerPage);
    return () => window.removeEventListener("resize", updateItemsPerPage);
  }, []);

  let filteredProducts = products
    .filter((p) => p.name.toLowerCase().includes(search.toLowerCase()))
    .sort((a, b) => {
      if (sortBy === "popularity") return b.reviews_count - a.reviews_count;
      if (sortBy === "priceAsc") return a.price - b.price;
      return 0;
    });

  if (reversed) {
    filteredProducts = filteredProducts.reverse();
  }

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const startIdx = (currentPage - 1) * itemsPerPage;
  const paginatedProducts = filteredProducts.slice(
    startIdx,
    startIdx + itemsPerPage,
  );

  return (
    <>
      <Header />
      <Page>
        <ProductControls
          productsLen={filteredProducts.length}
          search={search}
          onSearch={setSearch}
          sortBy={sortBy}
          onSortBy={setSortBy}
          reversed={reversed}
          onReversed={setReversed}
        />
        {!isLoading && !errors.length && (
          <>
            <ProductList products={paginatedProducts} />
            <Pagination
              totalPages={totalPages}
              currentPage={currentPage}
              onChangePage={setCurrentPage}
            />
          </>
        )}
      </Page>
      <Footer />
    </>
  );
}

export default App;
