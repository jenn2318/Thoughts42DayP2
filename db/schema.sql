CREATE DATABASE IF NOT EXISTS thoughts_db;
USE thoughts_db;

# If the table already exists, remove it before trying to create the table again
DROP TABLE IF EXISTS thoughts;

# Create the thoughts table
CREATE TABLE thoughts (
id int NOT NULL AUTO_INCREMENT,
thoughts_name VARCHAR(255) NOT NULL,
thought_date INTEGER(6) NOT NULL,
thought_archive VARCHAR(255) NOT NULL,
thought_updated BOOLEAN DEFAULT false,
PRIMARY KEY (id)
);
