import { NextRequest, NextResponse } from "next/server";
import Invoice from "../models/Invoices";
import { connectDb } from "../config/db";

export const POST = async (req: NextRequest) => {
  const data = await req.json();
  const { userId, amount, description, date } = data;
  await connectDb();

  try {
    if (!amount || !description || !date || !userId) {
      return NextResponse.json(
        {
          status: "fail",
          message: "Please provide the required fields",
          data: {},
        },
        { status: 403 }
      );
    }

    const payload = { userId, amount, description, date };
    const newInvoice = await Invoice.create(payload);

    return NextResponse.json(
      {
        status: "success",
        message: "Invoice Created successfully",
        data: newInvoice,
      },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        status: "fail",
        message: error ?? "server error",
        data: {},
      },
      { status: 500 }
    );
  }
};

export const GET = async () => {
  try {
    const invoices = await Invoice.findAll(); // Fetch all invoices from the table
    return NextResponse.json(invoices, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      {
        status: "fail",
        message: error ?? "server error",
        data: {},
      },
      { status: 500 }
    );
  }
};
