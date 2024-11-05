DELETE p
FROM Person p
WHERE id NOT IN(
    SELECT id FROM (SELECT min(id) as id
    FROM Person
    GROUP BY email) AS a
)