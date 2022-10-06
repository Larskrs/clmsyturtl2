/*
  Warnings:

  - Added the required column `content` to the `Field` table without a default value. This is not possible if the table is not empty.
  - Added the required column `type` to the `Field` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `field` ADD COLUMN `content` VARCHAR(191) NOT NULL,
    ADD COLUMN `type` VARCHAR(191) NOT NULL;
