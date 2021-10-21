import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { insurance_price, insurance_priceId } from './insurance_price';

export interface mas_installmentAttributes {
  id: string;
  name?: string;
  sort?: number;
}

export type mas_installmentPk = "id";
export type mas_installmentId = mas_installment[mas_installmentPk];
export type mas_installmentOptionalAttributes = "id" | "name" | "sort";
export type mas_installmentCreationAttributes = Optional<mas_installmentAttributes, mas_installmentOptionalAttributes>;

export class mas_installment extends Model<mas_installmentAttributes, mas_installmentCreationAttributes> implements mas_installmentAttributes {
  id!: string;
  name?: string;
  sort?: number;

  // mas_installment hasMany insurance_price via mas_installment_id
  insurance_prices!: insurance_price[];
  getInsurance_prices!: Sequelize.HasManyGetAssociationsMixin<insurance_price>;
  setInsurance_prices!: Sequelize.HasManySetAssociationsMixin<insurance_price, insurance_priceId>;
  addInsurance_price!: Sequelize.HasManyAddAssociationMixin<insurance_price, insurance_priceId>;
  addInsurance_prices!: Sequelize.HasManyAddAssociationsMixin<insurance_price, insurance_priceId>;
  createInsurance_price!: Sequelize.HasManyCreateAssociationMixin<insurance_price>;
  removeInsurance_price!: Sequelize.HasManyRemoveAssociationMixin<insurance_price, insurance_priceId>;
  removeInsurance_prices!: Sequelize.HasManyRemoveAssociationsMixin<insurance_price, insurance_priceId>;
  hasInsurance_price!: Sequelize.HasManyHasAssociationMixin<insurance_price, insurance_priceId>;
  hasInsurance_prices!: Sequelize.HasManyHasAssociationsMixin<insurance_price, insurance_priceId>;
  countInsurance_prices!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof mas_installment {
    mas_installment.init({
    id: {
      type: DataTypes.STRING(100),
      allowNull: false,
      primaryKey: true,
      comment: "รหัสหลักชำระเบี้ยงวดประกัน"
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "ชื่อเบี้ยงวดประกัน"
    },
    sort: {
      type: DataTypes.SMALLINT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'mas_installment',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  return mas_installment;
  }
}
