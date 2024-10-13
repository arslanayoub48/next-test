"use client";
import { useLoadAllInvoices } from "@/app/hooks/queries/invoices/useInvoices";
import classNames from "classnames";

const InvoiceList: React.FC = () => {
  const { data, isLoading } = useLoadAllInvoices();

  return (
    <div className="container mx-auto p-8">
      <div className="bg-blue-800 p-8 rounded-lg shadow-lg mb-8">
        <h1 className="text-4xl font-extrabold text-white text-center tracking-wide">
          Invoices
        </h1>
      </div>

      <div className="overflow-x-auto bg-white rounded-lg shadow-lg">
        <table className="min-w-full bg-white border border-gray-200">
          <thead className="bg-gray-100 text-gray-700 uppercase text-sm font-semibold">
            <tr>
              <th className="py-3 px-6 border-b border-gray-300 text-left">
                User ID
              </th>
              <th className="py-3 px-6 border-b border-gray-300 text-left">
                Amount
              </th>
              <th className="py-3 px-6 border-b border-gray-300 text-left">
                Description
              </th>
              <th className="py-3 px-6 border-b border-gray-300 text-left">
                Date
              </th>
            </tr>
          </thead>
          <tbody>
            {isLoading ? (
              <tr className="text-center">
                <td colSpan={4} className="py-6 text-lg text-gray-500">
                  Loading...
                </td>
              </tr>
            ) : (
              data &&
              data.map((invoice, index) => (
                <tr
                  key={index}
                  className={classNames(
                    "transition duration-300",
                    index % 2 === 0 ? "bg-gray-50" : "bg-white",
                    "hover:bg-gray-100 hover:shadow"
                  )}
                >
                  <td className="py-4 px-6 border-b border-gray-300 text-gray-700">
                    {invoice?.userId}
                  </td>
                  <td className="py-4 px-6 border-b border-gray-300 text-green-600 font-semibold">
                    ${invoice?.amount.toFixed(2)}
                  </td>
                  <td className="py-4 px-6 border-b border-gray-300 text-gray-700">
                    {invoice?.description}
                  </td>
                  <td className="py-4 px-6 border-b border-gray-300 text-gray-600">
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
