import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface mas_ref_policy_relAttributes {
  id: string;
  name: string;
}

export type mas_ref_policy_relPk = "id";
export type mas_ref_policy_relId = mas_ref_policy_rel[mas_ref_policy_relPk];
export type mas_ref_policy_relCreationAttributes = Optional<mas_ref_policy_relAttributes, mas_ref_policy_relPk>;

export class mas_ref_policy_rel extends Model<mas_ref_policy_relAttributes, mas_ref_policy_relCreationAttributes> implements mas_ref_policy_relAttributes {
  id!: string;
  name!: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof mas_ref_policy_rel {
    mas_ref_policy_rel.init({
    id: {
      type: DataTypes.STRING(100),
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'mas_ref_policy_rel',
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
  return mas_ref_policy_rel;
  }
}
