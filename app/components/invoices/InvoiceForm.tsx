"use client";
import classNames from "classnames";
import React, { useState } from "react";
import { useCreateInvoice } from "@/app/hooks/mutations/invoices/useInvoice";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const INITIAL_FORMDATA: IcreateInvoice = {
  description: "",
  amount: null,
  date: "",
  userId: 1,
};

const InvoiceForm = () => {
  const router = useRouter();
  const { mutate, isError } = useCreateInvoice();
  const [formData, setFormData] = useState(INITIAL_FORMDATA);

  const handleNavigate = () => {
    router.push("/invoice");
  };

  console.log(process.env.NEXT_PUBLIC_BASE_URL, "process.env.BASE_URL");

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

    if (isError) {
      return toast.error("Something went wrong");
    } else {
      mutate({ ...formData, navigate: router });
      setFormData(INITIAL_FORMDATA);
    }
  };

  return (
    <div className={classNames("flex border h-screen bg-gray-100")}>
      <div
        className={classNames(
          "w-[32%] min-w-[300px] mx-auto my-auto p-4 bg-white rounded shadow-md"
        )}
      >
        <h2
          className={classNames(
            "text-lg font-bold mb-4 text-center text-gray-700"
          )}
        >
          Create Invoice
        </h2>
        <div className="mb-4">
          <label
            htmlFor="description"
            className={classNames("block text-gray-700 text-sm font-bold mb-2")}
          >
            Description:
          </label>
          <textarea
            value={formData.description}
            name="description"
            id="description"
            onChange={handleChange}
            className={classNames(
              "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-40"
            )}
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="amount"
            className={classNames("block text-gray-700 text-sm font-bold mb-2")}
          >
            Amount:
          </label>
          <input
            value={formData?.amount ?? ""}
            name="amount"
            type="number"
            id="amount"
            onChange={handleChange}
            className={classNames(
              "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            )}
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="date"
            className={classNames("block text-gray-700 text-sm font-bold mb-2")}
          >
            Date:
          </label>
          <input
            value={formData.date}
            name="date"
            type="date"
            id="date"
            onChange={handleChange}
            className={classNames(
              "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            )}
          />
        </div>
        <div className={classNames("flex justify-center gap-2 flex-col")}>
          <button
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            onClick={(e: any) => handleSubmit(e)}
            className={classNames(
              "bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full hover:bg-white border transition-all duration-200 hover:text-blue-700 hover:border-blue-700"
            )}
          >
            Create Invoice
          </button>
          <button
            onClick={handleNavigate}
            className={classNames(
              " border border-blue-700  transition-all duration-200 text-blue-700 hover:border-blue-700 hover:bg-blue-700 hover:text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
            )}
          >
            Invoice List
          </button>
        </div>
      </div>
    </div>
  );
};

export default InvoiceForm;
