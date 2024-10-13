import axiosInstance from "@/app/utils/axios/AxiosInstance";
import toast from "react-hot-toast";

export const createInvoice = async (payload: IcreateInvoice) => {
  try {
    await axiosInstance.post("/invoice", payload);

    // if (data.status === 200 || data.statusText === "OK") {
    toast.success("Collection Created Successfully");
    // }
  } catch (error: unknown) {
    if (error instanceof Error) {
      toast.error(error.message || "something went wrong!");
    } else {
      toast.error("something went wrong!");
    }
  }
};
