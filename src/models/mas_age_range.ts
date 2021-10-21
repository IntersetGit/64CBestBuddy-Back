import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { insurance_price, insurance_priceId } from './insurance_price';

export interface mas_age_rangeAttributes {
  id: string;
  age_range?: string;
  age_start?: string;
  age_end?: string;
  note?: string;
  sort?: number;
}

export type mas_age_rangePk = "id";
export type mas_age_rangeId = mas_age_range[mas_age_rangePk];
export type mas_age_rangeOptionalAttributes = "id" | "age_range" | "age_start" | "age_end" | "note" | "sort";
export type mas_age_rangeCreationAttributes = Optional<mas_age_rangeAttributes, mas_age_rangeOptionalAttributes>;

export class mas_age_range extends Model<mas_age_rangeAttributes, mas_age_rangeCreationAttributes> implements mas_age_rangeAttributes {
  id!: string;
  age_range?: string;
  age_start?: string;
  age_end?: string;
  note?: string;
  sort?: number;

  // mas_age_range hasMany insurance_price via mas_age_range_id
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

  static initModel(sequelize: Sequelize.Sequelize): typeof mas_age_range {
    mas_age_range.init({
    id: {
      type: DataTypes.STRING(100),
      allowNull: false,
      primaryKey: true,
      comment: "รหัสหลักแต่ละช่วงอายุ"
    },
    age_range: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "ช่วงอายุเริ่มต้น"
    },
    age_start: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "ช่วงอายุสุดท้าย"
    },
    age_end: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "เรียงลำดับข้อมูล"
    },
    note: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "หมายเหตุ"
    },
    sort: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      comment: "เรียงลำดับ"
    }
  }, {
    sequelize,
    tableName: 'mas_age_range',
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
  return mas_age_range;
  }
}
