import React, { Suspense } from 'react';
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
import Layout from './layout/Layout';
import Home from './pages/Home';
import Stores from './pages/Stores';
import Products from './pages/Products';
import Catalogues from './pages/Catalogues';
import Promotions from './pages/Promotions';
import Reports from './pages/Reports';
import Docs from './pages/Docs';
import Settings from './pages/Settings';
import ErrorElement from './components/ErrorElement';

const AddProduct = React.lazy(() => import('./components/AddProduct'));
const DescriptionForm = React.lazy(() => import('./components/form/DescriptionForm'));
const VariantsForm = React.lazy(() => import('./components/form/VariantsForm'));
const CombinationsForm = React.lazy(() => import('./components/form/CombinationsForm'));
const PriceInfoForm = React.lazy(() => import('./components/form/PriceInfoForm'));


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorElement />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "stores",
        element: <Stores />,
      },
      {
        path: "catalogues",
        element: <Catalogues />,
      },
      {
        path: "promotions",
        element: <Promotions />,
      },
      {
        path: "reports",
        element: <Reports />,
      },
      {
        path: "docs",
        element: <Docs />,
      },
      {
        path: "settings",
        element: <Settings />,
      },
      {
        path: "products",
        element: <Products />,
      },
      {
        path: "add-product",
        element: (
          <Suspense fallback={<div>Loading Add Product...</div>}>
            <AddProduct />
          </Suspense>
        ),
        children: [
          {
            index: true,
            element: <Navigate to="description" replace />,
          },
          {
            path: "description",
            element: (
              <Suspense fallback={<div>Loading Description Form...</div>}>
                <DescriptionForm />
              </Suspense>
            ),
          },
          {
            path: "variants",
            element: (
              <Suspense fallback={<div>Loading Variants Form...</div>}>
                <VariantsForm />
              </Suspense>
            ),
          },
          {
            path: "combinations",
            element: (
              <Suspense fallback={<div>Loading Combinations Form...</div>}>
                <CombinationsForm />
              </Suspense>
            ),
          },
          {
            path: "price-info",
            element: (
              <Suspense fallback={<div>Loading Price Info Form...</div>}>
                <PriceInfoForm />
              </Suspense>
            ),
          },
        ],
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
