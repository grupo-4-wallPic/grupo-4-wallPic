CREATE DATABASE WALLPIC;

CREATE TABLE USERS (
id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
NAME VARCHAR (50) NOT NULL,
LAST_NAME VARCHAR (100) NOT NULL, 
EMAIL VARCHAR (100) NOT NULL, 
PASSWORD VARCHAR (50) NOT NULL,
NEWSLETTER TINYINT NOT NULL,
CREATEAT DATETIME DEFAULT CURRENT_TIMESTAMP,
UPDATEAT DATETIME ON UPDATE CURRENT_TIMESTAMP,
DELETEAT DATETIME
);
CREATE TABLE CATEGORIES (
id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
NAME VARCHAR (50) NOT NULL
);
CREATE TABLE PRICE (
id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
PRICE DECIMAL(6,2) NOT NULL
);
CREATE TABLE SIZE (
id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
SIZE VARCHAR (50) NOT NULL,
PRICE_ID INT UNSIGNED,
FOREIGN KEY(PRICE_ID) REFERENCES PRICE(ID)
);
CREATE TABLE COLOR (
id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
COLOR VARCHAR (50) NOT NULL
);

CREATE TABLE PRODUCTS (
id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
NAME VARCHAR (50) NOT NULL,
DESCRIPTION TEXT NOT NULL,
IMAGES VARCHAR (100) NOT NULL,
CATEGORY_ID INT UNSIGNED,
SIZE_ID INT UNSIGNED,
COLOR_ID INT UNSIGNED,
FOREIGN KEY (CATEGORY_ID) REFERENCES CATEGORIES (ID),
FOREIGN KEY (SIZE_ID) REFERENCES SIZE (ID),
FOREIGN KEY (COLOR_ID) REFERENCES COLOR (ID)
)





 




