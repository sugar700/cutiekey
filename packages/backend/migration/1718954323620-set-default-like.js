export class SetDefaultLike1718954323620 {
    name = 'SetDefaultLike1718954323620'

    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "meta" ALTER COLUMN "defaultLike" SET DEFAULT '❤️'`);
        await queryRunner.query(`UPDATE "meta" SET "defaultLike" = '❤️' WHERE "defaultLike" IS NULL`);
    }

    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "meta" ALTER COLUMN "defaultLike" DROP DEFAULT`);
    }

}
