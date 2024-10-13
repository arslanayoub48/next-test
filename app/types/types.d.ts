interface IcreateInvoice {
  description: string;
  amount: number;
  date: string;
  userId?: string | number;
}

interface ILoadInvoices {
  description: string;
  amount: number;
  date: string;
  userId?: string | number;
}
