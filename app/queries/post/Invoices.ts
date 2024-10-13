import axiosInstance from "@/app/utils/axios/AxiosInstance";
import toast from "react-hot-toast";

export const createInvoice = async (payload: IcreateInvoice) => {
  const { navigate, ...rest } = payload;
  try {
    const data = await axiosInstance.post("/invoice", rest);

    if (data.status === 201 || data.statusText === "Created") {
      toast.success("Collection Created Successfully");
      navigate?.push("/invoice");
    }
  } catch (error: unknown) {
    if (error instanceof Error) {
      toast.error(error.message || "something went wrong!");
    } else {
      toast.error("something went wrong!");
    }
  }
};
