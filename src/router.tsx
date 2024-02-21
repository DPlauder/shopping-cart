import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootElement from "./components/sites/RootElement";
import Home from "./components/sites/Home";
import Shop from "./components/sites/Shop";
import Cart from "./components/sites/Cart";
import ProductDetail, {
  loader as ProductDetailLoader,
} from "./components/sites/Product";
export default function Router() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootElement />,
      children: [
        { index: true, element: <Home /> },
        {
          path: "/shop",
          element: <Shop />,
        },
        { path: "/cart", element: <Cart /> },
        {
          path: "shop/:id",
          element: <ProductDetail />,
          loader: ProductDetailLoader as any,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}
