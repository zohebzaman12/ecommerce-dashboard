import React from "react";
import { Outlet } from "react-router-dom";
import FormNavigationButtons from "./form/FormNavigationButtons";
import Breadcrumbs from "./form/BreadCrumbs";
import { FormProvider, useForm } from "react-hook-form";

const AddProduct = () => {

  const methods = useForm();

  return (
    <FormProvider {...methods}>
      <div className="font-worksans">
        <div className="mb-8">
          <div className="flex justify-between pb-4">
            <h1 className="font-semibold text-2xl">Add Product</h1>
            <FormNavigationButtons />
          </div>
          <Breadcrumbs />
        </div>
        <Outlet />
      </div>
    </FormProvider>
  );
};

export default AddProduct;
