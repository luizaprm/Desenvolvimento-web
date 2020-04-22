Use treinamento;
--a
DELETE FROM REQUEST WHERE CDREQUEST IN (SELECT R.CDREQUEST FROM REQUEST AS R
										INNER JOIN PRODUCTREQUEST AS PR
										ON (R.CDREQUEST = PR.CDREQUEST) WHERE R.VLTOTAL<1000 AND R.DTREQUEST BETWEEN '20060601' AND '20030630');

--b
UPDATE PRODUCT SET VLPRICE = (SELECT AVG(PR.VLUNITARY)
                                        FROM PRODUCTREQUEST AS PR
                                        INNER JOIN PRODUCT AS P
                                        ON (PR.CDPRODUCT = P.CDPRODUCT) GROUP BY PR.CDPRODUCT, PR.QTAMOUNT
                                        HAVING COUNT(PR.CDPRODUCT)*(PR.QTAMOUNT)<800
                            );
--c
INSERT INTO CUSTOMER (CDCUSTOMER, NMCUSTOMER, IDFONE)
SELECT MAXCLIENTE.MAXCD + CDSUPPLIER, S.NMSUPPLIER, S.IDFONE FROM SUPPLIER S
OUTER APPLY (SELECT MAX(CDCUSTOMER) AS 'MAXCD' FROM CUSTOMER) AS MAXCLIENTE;

--d
UPDATE REQUEST SET DTDELIVER = (DTREQUEST + 30) WHERE (DTREQUEST - DTDELIVER)<10 AND VLTOTAL<10000; 