"use client";
import { useLoadAllInvoices } from "@/app/hooks/queries/invoices/useInvoices";
import classNames from "classnames";
import { useRouter } from "next/navigation";

const InvoiceList: React.FC = () => {
  const { data, isLoading } = useLoadAllInvoices();
  const router = useRouter();
  const handleCreateInvoice = () => {
    router.push("/");
  };
  return (
    <div className="container mx-auto p-6">
      <div className="bg-blue-900 p-6 rounded-lg shadow-md mb-6 flex justify-between items-center">
        <h1 className="text-4xl font-bold text-white">Invoices</h1>
        <button
          onClick={handleCreateInvoice}
          className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full shadow-md transition-all duration-200 focus:outline-none"
        >
          + Create Invoice
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300 shadow-md rounded-lg ">
          <thead className="bg-gray-200">
            <tr>
              <th className="py-3 px-6 border-b border-gray-300 text-left text-gray-700">
                User ID
              </th>
              <th className="py-3 px-6 border-b border-gray-300 text-left text-gray-700">
                Amount
              </th>
              <th className="py-3 px-6 border-b border-gray-300 text-left text-gray-700">
                Description
              </th>
              <th className="py-3 px-6 border-b border-gray-300 text-left text-gray-700">
                Date
              </th>
            </tr>
          </thead>
          <tbody>
            {isLoading ? (
              <tr className={classNames("text-center")}>
                <td colSpan={6}>Loading...</td>
              </tr>
            ) : (
              data &&
              data.map((invoice, index) => (
                <tr
                  key={index + 1}
                  className={`hover:bg-gray-100 transition duration-200 ${
                    index % 2 === 0 ? "bg-gray-50" : "bg-white"
                  }`}
                >
                  <td className="py-4 px-6 border-b border-gray-300">
                    {invoice?.userId}
                  </td>

                  <td className="py-4 px-6 border-b border-gray-300 text-green-600 font-semibold">
                    ${invoice?.amount.toFixed(2)}
                  </td>
                  <td className="py-4 px-6 border-b border-gray-300">
                    {invoice?.description}
                  </td>
                  <td className="py-4 px-6 border-b border-gray-300">
                    {invoice?.date}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default InvoiceList;
