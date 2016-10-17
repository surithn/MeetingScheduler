--mysql --user root -p
show databases;

create database AZ;
use AZ;

Create table employee(
    e_id int(3) NOT NULL AUTO_INCREMENT, 
    e_name VARCHAR(100) NOT NULL, 
    primary key (e_id)
);

Create table rooms(
    r_id int(3) NOT NULL AUTO_INCREMENT, 
    r_name VARCHAR(100) NOT NULL, 
    primary key (r_id)
);

Create table meeting(
    m_id int(3) NOT NULL AUTO_INCREMENT, 
    start_time VARCHAR(100) not null,
	end_time VARCHAR(100) not null,
	m_name VARCHAR(100),
    primary key (m_id)
);

create table m_emp_junction
(
  m_id int,
  e_id int,
  CONSTRAINT m_e_pk PRIMARY KEY (m_id, e_id),
  CONSTRAINT FK_meeting 
      FOREIGN KEY (m_id) REFERENCES meeting (m_id),
  CONSTRAINT FK_employee 
      FOREIGN KEY (e_id) REFERENCES employee (e_id)
);

create table m_room_junction
(
  m_id int,
  r_id int,
  CONSTRAINT m_r_pk PRIMARY KEY (m_id, r_id),
  CONSTRAINT FK_meeting 
      FOREIGN KEY (m_id) REFERENCES meeting (m_id),
  CONSTRAINT FK_employee 
      FOREIGN KEY (r_id) REFERENCES rooms (r_id)
);


insert into meeting values
(1, '10/1/16 2:02 AM', '10/1/16 5:02 AM', 'GIT'),
(2, '10/2/16 2:03 AM', '10/3/16 2:03 AM', 'Angular'),
(3, '10/5/16 7:03 AM', '10/5/16 3:03 PM', 'Spring Boot');

insert into employee values
(1, 'Frank'),
(2, 'Tom'),
(3, 'Hanks'),
(4, 'Diesel');

insert into rooms values
(1, 'Cauvery'),
(2, 'Yamuna'),
(3, 'Ganga'),
(4, 'Nile');