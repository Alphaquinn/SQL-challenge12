DROP DATABASE IF EXISTS employees;
CREATE DATABASE employees;
USE employees;

CREATE TABLE department(
    id INTEGER AUTO_INCREMENT PRIMARY KEY ,
    name VARCHAR (40) UNIQUE NOT NULL 

);
CREATE TABLE role(
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(40) UNIQUE NOT NULL,
    salary DECIMAL NOT NULL,
    department_id INTEGER NOT NULL,
    CONSTRAINT fk_department FOREIGN KEY(department_id),
    REFERENCES department_id ON DELETE CASCADE
);
CREATE TABLE employees(
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(40) NOT NULL,
    last_name VARCHAR(40) NOT NULL,
    role_id INTEGER NOT NULL,
    CONSTRAINT fk_department FOREIGN KEY(role_id),
    REFERENCES role(id) ON DELETE CASCADE,
    manager_id INTEGER,
    CONSTRAINT fk_department FOREIGN KEY(manager_id)
    REFERENCES employees(id) ON DELETE SET NULL

);