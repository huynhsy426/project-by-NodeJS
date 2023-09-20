create database DBNetFlix;
use DBNetFlix;

CREATE TABLE  Users(
   id int NOT NULL PRIMARY KEY AUTO_INCREMENT,  
   full_name varchar(100),
   full_name varchar(255) NOT NULL UNIQUE,
   user_password nvarchar(50) NOT NULL,  
   EMAIL varchar(255),
   PHONE varchar(12)
   );

create table dept(
	dept_id int check(dept_id >=0 and dept_id <=100) primary key,
	dept_name nvarchar(255) unique
);



create table project(
	project_id int primary key check(project_id >=0 and project_id <=100),
	project_name nvarchar(255) unique,
	dept_id int check(dept_id >=0 and dept_id <=100),
	difficulty char(1),
	ins_tm date,
	upd_tm date,
	version int check(version >=0 and version <=100)
);

-- Tao khoa ngoai bang NHANVIEN toi bang VANPHONG
alter table project
add constraint FK_project_dept
foreign key (dept_id)
references dept (dept_id)
;

   select * from Project 
   where project_id = '1' or 
		project_name like '%du%' or 
		difficulty like '%1%' or
		dept_id = '1'
;
	select dept_id from dept;

-- 	INSERT INTO project(PROJECT_ID, PROJECT_NAME, DEPT_ID, DIFFICULTY, INS_TM, UPD_TM, VERSION)
-- SELECT
--     ROW_NUMBER() OVER (ORDER BY (SELECT NULL)) AS PROJECT_ID,
--     'Project ' + CONVERT(varchar, ROW_NUMBER() OVER (ORDER BY (SELECT NULL))) AS PROJECT_NAME,
--     3 AS DEPT_ID,
--     CASE (ROW_NUMBER() OVER (ORDER BY (SELECT NULL))) % 3
--         WHEN 0 THEN 'E'
--         WHEN 1 THEN 'M'
--         WHEN 2 THEN 'H'
--     END AS DIFFICULTY,
--     DATEADD(DAY, (ROW_NUMBER() OVER (ORDER BY (SELECT NULL))) - 1, '2023-01-01') AS INS_TM,
--     DATEADD(DAY, (ROW_NUMBER() OVER (ORDER BY (SELECT NULL))) - 1, '2023-01-05') AS UPD_TM,
--     1 AS VERSION
-- FROM
--     (VALUES (1),(1),(1),(1),(1),(1),(1),(1),(1),(1),
--             (1),(1),(1),(1),(1),(1),(1),(1),(1),(1),
--             (1),(1),(1),(1),(1),(1),(1),(1),(1),(1),
--             (1),(1),(1),(1),(1),(1),(1),(1),(1),(1),
--             (1),(1),(1),(1),(1),(1),(1),(1),(1),(1)) AS Numbers(Number)

-- 			truncate table project
-- ;
-- set SHOWPLAN_ALL ON

INSERT INTO users (full_name,user_name,user_password,EMAIL,PHONE) VALUES
("Huynh Sy", "huynhsy1","asd","huynhsy@gmail.com","0904444422");

SELECT * FROM users;

SELECT * FROM project where dept_id = 3;

SELECT * FROM project;

SELECT * FROM dept;

INSERT INTO project VALUES 
(1, "aaa", 1 , 4, "2020-12-12","2022-12-12",1),
(2, "aaaa", 1 , 3, "2020-11-11","2022-11-11",4);

insert into dept values
(1, "toa a");

select 1 from users where user_name = "huynhsy1" and user_password = "asd"