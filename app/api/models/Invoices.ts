import { DataTypes } from "sequelize";
import { sequelize } from "../config/db";

const Invoice = sequelize.define(
  "Invoice",
  {
    userId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    amount: {
      type: DataTypes.NUMBER,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  },
  {
    tableName: "inovices_table",
    timestamps: false, // Disable createdAt and updatedAt
  }
);

export default Invoice;
