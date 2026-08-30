import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../redux/CartSlice";
import { Link } from "react-router-dom";

const products = [
  // =========================
  // AIR PURIFYING PLANTS
  // =========================

  {
    id: 1,
    name: "Snake Plant",
    price: 25,
    category: "Air Purifying Plants",
    image:
      "https://images.unsplash.com/photo-1593482892290-f54927ae2bb7?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 2,
    name: "Peace Lily",
    price: 30,
    category: "Air Purifying Plants",
    image:
      "https://images.unsplash.com/photo-1593691509543-c55fb32e5cee?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 3,
    name: "Spider Plant",
    price: 20,
    category: "Air Purifying Plants",
    image:
      "https://images.unsplash.com/photo-1572688484438-313a6e50c333?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 4,
    name: "Rubber Plant",
    price: 35,
    category: "Air Purifying Plants",
    image:
      "https://images.unsplash.com/photo-1597055181300-df90e4f40f3c?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 5,
    name: "Boston Fern",
    price: 28,
    category: "Air Purifying Plants",
    image:
      "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 6,
    name: "Areca Palm",
    price: 40,
    category: "Air Purifying Plants",
    image:
      "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=500&q=80",
  },

  // =========================
  // SUCCULENTS
  // =========================

  {
    id: 7,
    name: "Aloe Vera",
    price: 22,
    category: "Succulents",
    image:
      "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 8,
    name: "Jade Plant",
    price: 28,
    category: "Succulents",
    image:
      "https://images.unsplash.com/photo-1567225557594-88d73e55f2cb?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 9,
    name: "Echeveria",
    price: 18,
    category: "Succulents",
    image:
      "https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 10,
    name: "Haworthia",
    price: 20,
    category: "Succulents",
    image:
      "https://images.unsplash.com/photo-1533460004989-cef01064af7e?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 11,
    name: "Zebra Haworthia",
    price: 24,
    category: "Succulents",
    image:
      "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 12,
    name: "String of Pearls",
    price: 32,
    category: "Succulents",
    image:
      "https://images.unsplash.com/photo-1497250681960-ef046c08a56e?auto=format&fit=crop&w=500&q=80",
  },

  // =========================
  // TROPICAL PLANTS
  // =========================

  {
    id: 13,
    name: "Monstera",
    price: 45,
    category: "Tropical Plants",
    image:
      "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 14,
    name: "Calathea",
    price: 35,
    category: "Tropical Plants",
    image:
      "https://images.unsplash.com/photo-1614594575531-89f5b8a0e8d7?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 15,
    name: "Bird of Paradise",
    price: 50,
    category: "Tropical Plants",
    image:
      "https://images.unsplash.com/photo-1597055181300-df90e4f40f3c?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 16,
    name: "Philodendron",
    price: 38,
    category: "Tropical Plants",
    image:
      "https://images.unsplash.com/photo-1616766414968-7c7b2f7e6b3b?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 17,
    name: "Dieffenbachia",
    price: 34,
    category: "Tropical Plants",
    image:
      "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 18,
    name: "Fiddle Leaf Fig",
    price: 55,
    category: "Tropical Plants",
    image:
      "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=500&q=80",
  },
];

function ProductList() {
  const dispatch = useDispatch();

  const cartItems = useSelector(
    (state) => state.cart.items
  );

  const cartCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const categories = [
    ...new Set(
      products.map((product) => product.category)
    ),
  ];

  const handleAddToCart = (product) => {
    dispatch(addItem(product));
  };

  const isInCart = (productId) => {
    return cartItems.some(
      (item) => item.id === productId
    );
  };

  return (
    <>
      <nav className="navbar">
        <h2>Paradise Nursery</h2>

        <div className="navbar-links">
          <Link to="/">Home</Link>

          <Link to="/plants">
            Plants
          </Link>

          <Link to="/cart">
            🛒 Cart ({cartCount})
          </Link>
        </div>
      </nav>

      <main className="page-container">
        <h1>Paradise Nursery Plants</h1>

        {categories.map((category) => (
          <section
            className="category-section"
            key={category}
          >
            <h2>{category}</h2>

            <div className="product-grid">
              {products
                .filter(
                  (product) =>
                    product.category === category
                )
                .map((product) => (
                  <div
                    className="product-card"
                    key={product.id}
                  >
                    <img
                      src={product.image}
                      alt={product.name}
                    />

                    <h3>{product.name}</h3>

                    <p>
                      Beautiful{" "}
                      {product.name.toLowerCase()} for
                      your home and indoor garden.
                    </p>

                    <div className="product-price">
                      ${product.price}
                    </div>

                    <button
                      className="add-btn"
                      onClick={() =>
                        handleAddToCart(product)
                      }
                      disabled={isInCart(product.id)}
                    >
                      {isInCart(product.id)
                        ? "Added to Cart"
                        : "Add to Cart"}
                    </button>
                  </div>
                ))}
            </div>
          </section>
        ))}
      </main>
    </>
  );
}

export default ProductList;