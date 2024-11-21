select s.machine_id, ROUND(AVG(e.timestamp-s.timestamp), 3) AS processing_time
from Activity s 
join Activity e
on s.machine_id = e.machine_id AND s.process_id = e.process_id AND
    s.activity_type = 'start' AND e.activity_type = 'end'
GROUP BY s.machine_id;