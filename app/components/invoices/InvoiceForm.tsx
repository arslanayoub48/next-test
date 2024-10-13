"use client";
import classNames from "classnames";
import React, { useEffect, useState } from "react";
import { useCreateInvoice } from "@/app/hooks/mutations/invoices/useInvoice";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const INITIAL_FORMDATA: IcreateInvoice = {
  description: "",
  amount: 0,
  date: "",
  userId: 1,
};

const InvoiceForm = () => {
  const router = useRouter();
  const { mutate, isSuccess } = useCreateInvoice();
  const [formData, setFormData] = useState(INITIAL_FORMDATA);

  useEffect(() => {
    if (isSuccess) {
      router.push("/invoice");
    }
  }, [isSuccess, router]);

  const handleNavigate = () => {
    router.push("/invoice");
  };

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    event.preventDefault();
    const { name, value } = event.target;

    setFormData((prev: IcreateInvoice) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  // submitting invoice data
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!formData.amount || !formData.description || !formData.date) {
      return toast.error("Please fill the required fields");
    }

    mutate(formData);
    setFormData(INITIAL_FORMDATA);
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="w-full max-w-lg p-8 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">
          Create Invoice
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label
              htmlFor="description"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Description:
            </label>
            <textarea
              name="description"
              id="description"
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 h-32 resize-none shadow-sm"
              placeholder="Enter invoice description..."
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="amount"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Amount:
            </label>
            <input
              name="amount"
              type="number"
              id="amount"
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 shadow-sm"
              placeholder="Enter amount"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="date"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Date:
            </label>
            <input
              name="date"
              type="date"
              id="date"
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 shadow-sm"
            />
          </div>
          <div className="space-y-4">
            <button
              type="submit"
              className="w-full bg-blue-600 text-white font-semibold py-3 px-4 rounded-md hover:bg-blue-700 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 shadow-lg"
            >
              Create Invoice
            </button>
            <button
              type="button"
              onClick={handleNavigate}
              className="w-full bg-transparent border border-blue-600 text-blue-600 font-semibold py-3 px-4 rounded-md hover:bg-blue-600 hover:text-white transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            >
              Invoice List
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default InvoiceForm;
