-- CREATE DATABASE chat;

USE chat;

-- CREATE TABLE messages (
--    Describe your table here.
-- );

/* Create other tables and define schemas for them here! */



-- ---
-- Globals
-- ---

-- SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
-- SET FOREIGN_KEY_CHECKS=0;

-- ---
-- Table 'Messages'
-- 
-- ---

DROP TABLE IF EXISTS `Messages`;
    
CREATE TABLE Messages (
  Id INTEGER(255) AUTO_INCREMENT NOT NULL,
  objectId INTEGER(100) NOT NULL,
  text VARCHAR(50) NOT NULL,
  createdAt DATETIME NOT NULL,
  updatedAt DATETIME NOT NULL,
  roomname INTEGER(100) NOT NULL,
  username INTEGER NOT NULL,
  PRIMARY KEY (Id)
);

-- ---
-- Table 'rooms'
-- 
-- ---

-- DROP TABLE IF EXISTS `rooms`;
    
-- CREATE TABLE `rooms` (
--   `roomId` INTEGER(100) NOT NULL AUTO_INCREMENT,
--   `roomname` VARCHAR(20) NOT NULL ,
--   PRIMARY KEY (`roomId`)
-- );

-- ---
-- Table 'Message_Room'
-- 
-- ---

-- DROP TABLE IF EXISTS `Message_Room`;
    
-- CREATE TABLE `Message_Room` (
--   `roomId` INTEGER(100) NOT NULL,
--   `MessageId` INTEGER(255) NOT NULL
-- );

-- ---
-- Foreign Keys 
-- ---

-- ALTER TABLE `Messages` ADD FOREIGN KEY (roomname) REFERENCES `rooms` (`roomId`);
-- ALTER TABLE `Message_Room` ADD FOREIGN KEY (roomId) REFERENCES `rooms` (`roomId`);
-- ALTER TABLE `Message_Room` ADD FOREIGN KEY (MessageId) REFERENCES `Messages` (`Id`);

-- ---
-- Table Properties
-- ---

-- ALTER TABLE `Messages` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `rooms` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `Message_Room` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ---
-- Test Data
-- ---

-- INSERT INTO `Messages` (`Id`,`objectId`,`text`,`createdAt`,`updatedAt`,`roomname`,`username`) VALUES
-- ('','','','','','','');
-- INSERT INTO `rooms` (`roomId`,`roomname`) VALUES
-- ('','');
-- INSERT INTO `Message_Room` (`roomId`,`MessageId`) VALUES
-- ('','');




/*  Execute this file from the command line by typing:
 *    mysql -u student < server/schema.sql
 *  to create the database and the tables.*/