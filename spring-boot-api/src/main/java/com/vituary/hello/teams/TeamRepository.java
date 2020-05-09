package com.vituary.hello.teams;

import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class TeamRepository {
    private static final String TEAMS_SQL = "SELECT * FROM hockey_teams";
    private static final RowMapper<Team> teamRowMapper = (rs, rowNum) -> {
        Address address = new Address(
                rs.getString("street"),
                rs.getString("city"),
                rs.getString("region"),
                rs.getString("country"),
                rs.getString("postal_code")
        );
        Team team = new Team(
                rs.getString("name"),
                rs.getString("arena"),
                address
        );
        return team;
    };

    private final JdbcTemplate jdbcTemplate;

    public TeamRepository(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    public List<Team> findAllTeams() {
        return jdbcTemplate.query(TEAMS_SQL, teamRowMapper);
    }
}
