INSERT INTO department
(name)
VALUES
('managment'),
('Production'),
('engineering'),
('transportation'),
('sales');

INSERT INTO role 
(title,salary,department_id)
VALUES
('Recieving', 35000,5),
('Shipper', 45000, 5),
('Tester', 40000, 4),
('Manager', 100000, 4),
('Assistant', 75000, 3),
('Directer', 90000, 3),
('Senior', 120000, 2),
('Middle', 100000, 1),
('Upper', 150000, 1);


INSERT INTO employee
(first_name, last_name, role_id, manager_id)
VALUES
('jacob', 'npc1',1,1),
('tayler','npc2',2,NULL),
('bruce','npc3',3,NULL),
('liam','npc4',4,NULL),
('adam','npc5',5,2);