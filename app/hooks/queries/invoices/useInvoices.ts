import { loadAllInvoices } from "@/app/queries/get/Invoices";
import { useQuery } from "@tanstack/react-query";

export const useLoadAllInvoices = () =>
  useQuery({
    queryKey: ["loadAllInvoices"],
    queryFn: () => loadAllInvoices(),
  });
