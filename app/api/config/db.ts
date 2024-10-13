import { Sequelize } from "sequelize";
export const sequelize = new Sequelize(
  process.env.NEXT_PUBLIC_DB_NAME || "invoices",
  process.env.NEXT_PUBLIC_DB_USER || "root",
  process.env.NEXT_PUBLIC_DB_PASSWORD || "",
  {
    host: process.env.DB_HOST,
    dialect: "mysql",
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    dialectModule: require("mysql2"),
  }
);

export const connectDb = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

connectDb();
