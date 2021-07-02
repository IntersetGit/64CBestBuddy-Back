import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
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
}

export type insurance_pricePk = "id";
export type insurance_priceId = insurance_price[insurance_pricePk];
export type insurance_priceCreationAttributes = Optional<insurance_priceAttributes, insurance_pricePk>;

export class insurance_price extends Model<insurance_priceAttributes, insurance_priceCreationAttributes> implements insurance_priceAttributes {
  id!: string;
  insurance_id?: string;
  mas_installment_id?: string;
  mas_age_range_id?: string;
  price_normal?: number;
  price_sale?: number;
  gender?: number;

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