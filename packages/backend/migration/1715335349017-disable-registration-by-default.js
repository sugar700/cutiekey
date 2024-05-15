export class DisableRegistrationByDefault1715335349017 {
    name = 'DisableRegistrationByDefault1715335349017'

    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "meta" ALTER COLUMN "disableRegistration" SET DEFAULT TRUE`);
    }

    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "meta" ALTER COLUMN "disableRegistration" SET DEFAULT FALSE`);
    }

}
