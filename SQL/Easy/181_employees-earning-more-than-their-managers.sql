SELECT e.name AS Employee
FROM Employee AS e
INNER JOIN Employee AS Manager
  ON (e.managerId = Manager.id)
WHERE e.salary > Manager.salary;