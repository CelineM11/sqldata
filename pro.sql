CREATE DATABASE project_nexus;

USE project_nexus;

CREATE TABLE projects (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100),
    status VARCHAR(50)
);

CREATE TABLE tasks (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100),
    project_id INT,
    status VARCHAR(50),
    FOREIGN KEY (project_id) REFERENCES projects(id)
);

-- Insert dummy data
INSERT INTO projects (name, status) VALUES ('Web Redesign', 'In Progress'), ('Mobile App', 'Completed');
INSERT INTO tasks (name, project_id, status) VALUES 
('Build API', 1, 'In Progress'),
('Design Mockups', 2, 'Completed');
