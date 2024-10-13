"use client";
import { useLoadAllInvoices } from "@/app/hooks/queries/invoices/useInvoices";
import classNames from "classnames";

const InvoiceList: React.FC = () => {
  const { data, isLoading } = useLoadAllInvoices();

  return (
    <div className="container mx-auto p-6">
      <div className="bg-blue-900 p-6 rounded-lg shadow-md mb-6">
        <h1 className="text-4xl font-bold text-white text-center">Invoices</h1>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300 shadow-md rounded-lg">
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
              <th className="py-3 px-6 border-b border-gray-300 text-left text-gray-700">
                Actions
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
                  <td className="py-4 px-6 border-b border-gray-300 flex space-x-2">
                    <button
                      // onClick={() => handleEdit(invoice.id)}
                      className="text-blue-500 hover:text-blue-700 font-semibold"
                    >
                      Edit
                    </button>
                    <button
                      // onClick={() => handleDelete(invoice.id)}
                      className="text-red-500 hover:text-red-700 font-semibold"
                    >
                      Delete
                    </button>
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
