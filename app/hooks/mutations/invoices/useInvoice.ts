import { createInvoice } from "@/app/queries/post/Invoices";
import { QueryClient, useMutation } from "@tanstack/react-query";

export const useCreateInvoice = () => {
  const queryClient = new QueryClient();

  return useMutation({
    mutationFn: createInvoice,
    onSuccess: () =>
      queryClient.invalidateQueries({ queryKey: ["loadAllInvoices"] }),
  });
};
