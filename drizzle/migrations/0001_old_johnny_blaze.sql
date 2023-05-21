ALTER TABLE "_prisma_migrations" ALTER COLUMN "applied_steps_count" DROP DEFAULT;
DO $$ BEGIN
 ALTER TABLE "Account" ADD CONSTRAINT "Account_userId_User_id_fk" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE cascade ON UPDATE cascade;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

ALTER TABLE "Account" DROP CONSTRAINT "Account_userId_fkey";

DO $$ BEGIN
 ALTER TABLE "Session" ADD CONSTRAINT "Session_userId_User_id_fk" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE cascade ON UPDATE cascade;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

ALTER TABLE "Session" DROP CONSTRAINT "Session_userId_fkey";
