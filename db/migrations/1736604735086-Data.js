module.exports = class Data1736604735086 {
    name = 'Data1736604735086'

    async up(db) {
        await db.query(`CREATE TABLE "unipool" ("id" character varying NOT NULL, "chain" text NOT NULL, "address" text NOT NULL, "total_notified" numeric NOT NULL, "total_assigned_to" numeric NOT NULL, CONSTRAINT "PK_293c9f4a9d07e4c94dc2e1a9a3d" PRIMARY KEY ("id"))`)
        await db.query(`CREATE TABLE "token_distro" ("id" character varying NOT NULL, "chain" text NOT NULL, "address" text NOT NULL, "total_giv_balance" numeric NOT NULL, "total_assigned" numeric NOT NULL, CONSTRAINT "PK_85c3c345cf5ee8f440817a3c8e1" PRIMARY KEY ("id"))`)
    }

    async down(db) {
        await db.query(`DROP TABLE "unipool"`)
        await db.query(`DROP TABLE "token_distro"`)
    }
}
