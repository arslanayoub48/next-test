interface IcreateInvoice {
  description: string;
  amount: number | null;
  date: string;
  userId?: string | number;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  navigate?: any;
}

interface ILoadInvoices {
  description: string;
  amount: number;
  date: string;
  userId?: string | number;
}
