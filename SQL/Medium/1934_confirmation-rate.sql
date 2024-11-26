SELECT
  Signups.user_id,
  IFNULL(ROUND(AVG(Confirmations.action = 'confirmed'), 2), 0) AS confirmation_rate
FROM Signups
LEFT JOIN Confirmations
    ON Signups.user_id = Confirmations.user_id
GROUP BY 1;