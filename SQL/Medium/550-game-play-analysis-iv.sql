select 
    round(
        count(distinct R.player_id) / count(distinct L.player_id), 2
    ) as fraction
from
    (
        select
            player_id,
            event_date,
            rank() over(
                partition by player_id
                order by event_date
            ) = 1 as is_first_login
        from Activity
    ) L
left join Activity R
    on L.player_id = R.player_id
    and DATEDIFF(R.event_date, L.event_date) = 1
where 
    L.is_first_login