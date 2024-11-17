-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "First" TEXT NOT NULL,
    "Last" TEXT NOT NULL,
    "Email" TEXT NOT NULL,
    "Phone" TEXT NOT NULL,
    "Company" TEXT NOT NULL,
    "JobTitle" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_Email_key" ON "User"("Email");

-- CreateIndex
CREATE UNIQUE INDEX "User_Phone_key" ON "User"("Phone");
