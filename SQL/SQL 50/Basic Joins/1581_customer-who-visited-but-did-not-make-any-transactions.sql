SELECT v.customer_id,COUNT(v.visit_id) AS count_no_trans
FROM Visits AS v
LEFT JOIN Transactions AS t 
ON v.visit_ID = t.visit_ID
WHERE t.transaction_id IS NULL
GROUP BY v.customer_id
ORDER BY v.customer_id ASC;