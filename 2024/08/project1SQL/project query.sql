--6.1
--SELECT *
--FROM Items

--6.2
--declare @status as varchar(10), @StartDate as datetime,@EndDate as datetime,@OorderNo as int

--SET @status = 'SHIPPED'
--SET @StartDate = '2024-08-01'
--SET @EndDate = '2024-08-05'
--SET @OorderNo = 1001


--SELECT O.OrderNo,o.Code,O.Date,o.Status,o.Quant,i.UnitDesc,i.TotAmount
--FROM ExOrders O join Invoices I
--ON  O.ORDERNO = I.ORDERNO
--WHERE @Status = [status] OR (O.Date BETWEEN @StartDate AND @EndDate) OR @OorderNo = o.OrderNo


--ORDER BY DATE



--6.3
--declare @CustId as int

--set @CustId =102

--SELECT DISTINCT OrderNoSub,s.CustID,custname,c.CustStatus,[status],Code,Quant,Freq
--FROM Subscription S join Customers C

--ON  s.CustID = c.CustID

--where @CustId = c.CustID

--6.4

declare @paymentdate as datetime
set @paymentdate ='2024-08-01'
set @paymentdate ='2024-08-02'
set @paymentdate ='2024-08-03'

SELECT
r.OrderNo,
r.RecieptNo,
r.PymentDate,
sum(r.PaidAmt) as 'Total Income',
SUM(CreditDebt) AS 'TOTAL DEBT',
SUM(r.PaidAmt) - SUM(A.CreditDebt) AS 'Net'

FROM Accounting A join Reciept r
on a.OrderNo = r.OrderNo
 

WHERE @paymentdate = r.PymentDate
GROUP BY 
    r.OrderNo,
    r.RecieptNo,
    r.PymentDate;












--6.5
--declare @status as varchar(10)

--SET @status = 'PENDING'
----


--SELECT o.OrderNo,o.Date,o.SuppDate,o.Status,r.paidamt
--FROM ExOrders o join Reciept r
--on o.orderno = r.OrderNo
--WHERE @Status = [status] 
--ORDER BY SuppDate
