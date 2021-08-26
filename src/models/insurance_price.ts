import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { insurance_order, insurance_orderId } from './insurance_order';
import type { mas_age_range, mas_age_rangeId } from './mas_age_range';
import type { mas_installment, mas_installmentId } from './mas_installment';

export interface insurance_priceAttributes {
  id: string;
  insurance_id?: string;
  mas_installment_id?: string;
  mas_age_range_id?: string;
  price_normal?: number;
  price_sale?: number;
  gender?: number;
  mas_plan_id?: string;
  is_show_price?: number;
}

export type insurance_pricePk = "id";
export type insurance_priceId = insurance_price[insurance_pricePk];
export type insurance_priceOptionalAttributes = "id" | "insurance_id" | "mas_installment_id" | "mas_age_range_id" | "price_normal" | "price_sale" | "gender" | "mas_plan_id" | "is_show_price";
export type insurance_priceCreationAttributes = Optional<insurance_priceAttributes, insurance_priceOptionalAttributes>;

export class insurance_price extends Model<insurance_priceAttributes, insurance_priceCreationAttributes> implements insurance_priceAttributes {
  id!: string;
  insurance_id?: string;
  mas_installment_id?: string;
  mas_age_range_id?: string;
  price_normal?: number;
  price_sale?: number;
  gender?: number;
  mas_plan_id?: string;
  is_show_price?: number;

  // insurance_price hasMany insurance_order via insurance_price_id
  insurance_orders!: insurance_order[];
  getInsurance_orders!: Sequelize.HasManyGetAssociationsMixin<insurance_order>;
  setInsurance_orders!: Sequelize.HasManySetAssociationsMixin<insurance_order, insurance_orderId>;
  addInsurance_order!: Sequelize.HasManyAddAssociationMixin<insurance_order, insurance_orderId>;
  addInsurance_orders!: Sequelize.HasManyAddAssociationsMixin<insurance_order, insurance_orderId>;
  createInsurance_order!: Sequelize.HasManyCreateAssociationMixin<insurance_order>;
  removeInsurance_order!: Sequelize.HasManyRemoveAssociationMixin<insurance_order, insurance_orderId>;
  removeInsurance_orders!: Sequelize.HasManyRemoveAssociationsMixin<insurance_order, insurance_orderId>;
  hasInsurance_order!: Sequelize.HasManyHasAssociationMixin<insurance_order, insurance_orderId>;
  hasInsurance_orders!: Sequelize.HasManyHasAssociationsMixin<insurance_order, insurance_orderId>;
  countInsurance_orders!: Sequelize.HasManyCountAssociationsMixin;
  // insurance_price belongsTo mas_age_range via mas_age_range_id
  mas_age_range!: mas_age_range;
  getMas_age_range!: Sequelize.BelongsToGetAssociationMixin<mas_age_range>;
  setMas_age_range!: Sequelize.BelongsToSetAssociationMixin<mas_age_range, mas_age_rangeId>;
  createMas_age_range!: Sequelize.BelongsToCreateAssociationMixin<mas_age_range>;
  // insurance_price belongsTo mas_installment via mas_installment_id
  mas_installment!: mas_installment;
  getMas_installment!: Sequelize.BelongsToGetAssociationMixin<mas_installment>;
  setMas_installment!: Sequelize.BelongsToSetAssociationMixin<mas_installment, mas_installmentId>;
  createMas_installment!: Sequelize.BelongsToCreateAssociationMixin<mas_installment>;

  static initModel(sequelize: Sequelize.Sequelize): typeof insurance_price {
    insurance_price.init({
    id: {
      type: DataTypes.STRING(100),
      allowNull: false,
      primaryKey: true,
      comment: "รหัสหลักตารางราคา"
    },
    insurance_id: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "รหัสประกัน"
    },
    mas_installment_id: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "รหัสแต่ละงวด",
      references: {
        model: 'mas_installment',
        key: 'id'
      }
    },
    mas_age_range_id: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "รหัสช่วงอายุ",
      references: {
        model: 'mas_age_range',
        key: 'id'
      }
    },
    price_normal: {
      type: DataTypes.BIGINT,
      allowNull: true,
      comment: "ราคาปกติ"
    },
    price_sale: {
      type: DataTypes.BIGINT,
      allowNull: true,
      comment: "ราคาที่ลด"
    },
    gender: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      comment: "0 = ทั้งหมด 1 = ชาย 2 = หญิง"
    },
    mas_plan_id: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "รหัสแผนประกัน S, M, L"
    },
    is_show_price: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: 0,
      comment: "โชว์ราคา"
    }
  }, {
    sequelize,
    tableName: 'insurance_price',
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
      {
        name: "mas_installment_id",
        using: "BTREE",
        fields: [
          { name: "mas_installment_id" },
        ]
      },
      {
        name: "mas_age_range_id",
        using: "BTREE",
        fields: [
          { name: "mas_age_range_id" },
        ]
      },
    ]
  });
  return insurance_price;
  }
}
