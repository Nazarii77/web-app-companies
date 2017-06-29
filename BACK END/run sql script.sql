CREATE DATABASE companies;

USE companies;

CREATE TABLE main_company(
id INT NOT NULL PRIMARY KEY,
company_name varchar(100),
company_earnings int
);

SELECT * FROM main_company;

CREATE TABLE child_company(
id INT NOT NULL PRIMARY KEY,
company_name varchar(100),
company_earnings int,
company_owner int,
FOREIGN KEY (company_owner) REFERENCES main_company(id)
);


INSERT INTO main_company VALUES(1,'Apple',1022323);
INSERT INTO main_company VALUES(2,'Google',234345);

INSERT INTO child_company VALUES(1,'Android',123231,1);
INSERT INTO child_company VALUES(2,'Play',2332,1);
INSERT INTO child_company VALUES(3,'IOS',32232,2);
INSERT INTO child_company VALUES(4,'music',9999999,2);
INSERT INTO child_company VALUES(5,'oreo',9999999,1);
INSERT INTO child_company VALUES(6,'phone',99999,2);
INSERT INTO child_company VALUES(7,'internet',99999,2);
INSERT INTO child_company VALUES(8,'mobile',9999999,2);

SELECT * FROM main_company;
SELECT * FROM child_company;

SELECT DISTINCT main_company.company_name , main_company.company_earnings,
(main_company.company_earnings+
			  (SELECT SUM(company_earnings) 
			  FROM child_company 
			  WHERE main_company.id=child_company.company_owner 
			  group by company_owner  having count(*) > 1)
)
 AS allearnings
FROM  main_company LEFT JOIN  child_company 
ON child_company.company_owner=main_company.id;

SELECT company_name, company_earnings FROM main_company;

SELECT SUM( company_earnings ) AS allearnings FROM child_company  group by company_owner  having count(*) > 1;

SELECT child_company.company_name, child_company.company_earnings, main_company.company_name AS company_owner
 FROM child_company  JOIN  main_company 
 ON child_company.company_owner=main_company.id;