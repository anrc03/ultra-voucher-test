CREATE DATABASE db_ultra_voucher;

CREATE TABLE m_children (
	id SERIAL PRIMARY KEY,
	name VARCHAR(50),
	parent_id INT);

INSERT INTO m_children (name, parent_id) 
VALUES ('Zaki', 2),
	   ('Ilham', NULL),
	   ('Irwan', 2),
	   ('Arka', 3);

CREATE TABLE m_parent (
	id SERIAL PRIMARY KEY,
	name VARCHAR(50));

INSERT INTO m_parent (name)
VALUES ('Andi'), ('Ilham'), ('Irwan');
	   
SELECT * FROM m_children;

SELECT * FROM m_parent;

SELECT c.id, c.name, p.name AS parent_name 
FROM m_children c LEFT JOIN m_parent p
ON c.parent_id = p.id;


