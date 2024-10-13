import { Sequelize } from "sequelize";
export const sequelize = new Sequelize(
  process.env.DB_NAME || "invoices",
  process.env.DB_USER || "root",
  process.env.DB_PASSWORD || "",
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
