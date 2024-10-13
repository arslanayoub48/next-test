import axiosInstance from "@/app/utils/axios/AxiosInstance";

export const loadAllInvoices = async (): Promise<ILoadInvoices[] | null[]> => {
  try {
    const response = await axiosInstance.get("/invoice");
    return response.data;
  } catch (error) {
    return [null] || error;
  }
};
