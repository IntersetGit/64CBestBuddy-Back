# 64c-backend-bestbuddy

node version 14.17.0
npm version 6.14.13

Install it and run:

```install
npm install
npm run dev
# or
yarn
yarn dev
```

build src

```build
npm run build
```

migration

```คำสั่ง migration
# คำสั่ง migration
https://sequelize.org/master/class/lib/dialects/abstract/query-interface.js~QueryInterface.html
```

```migration
# เข้าไปที่ database
cd database

# สร้าง migration
npx sequelize migration:generate --name (ชื่อ)

# สร้างฐานข้อมูล
npx sequelize db:migrate

## ลบฐานข้อมูล
npx sequelize db:migrate:undo:all
```

อัพโมเดลจาก ฐานข้อมูล

```Datatypes
# Datatypes
https://sequelize.org/v5/manual/data-types.html
```

```up-models
npm run up-models
```

```git flow
# git flow
git flow init
git flow feature start <ชื่อ>
git flow feature finish <ชื่อ>
git flow feature public <ชื่อ>
```

"prdtCode": "PIPRD", //กำหนดค่า ฟิค ไว้
"planCode": "PIPRD_PLAN1", "PIPRD_PLAN2" , "PIPRD_PLAN3"
referenceNo จาก Broger //ส่งมาด้วยเช่น เลข buddyB

"policyholder": //เป็นคนเดียวกับผู้เอาประกัน
"isSameAsInsured": //ตัวแปรนี้ให้ส่ง true ได้เลย

"payer": //ให้เป็นบุคคลเดียวกับผู้เอาประกัน

"beneficiaries": //ผู้รับผลประโยชน์ ไำด้ไม่เกิน 2 คนตามกฏหมาย
"extInfo": {
"relationshipWithInsured": "3", คือสถานภาพ
"shareRate": "100"
}
