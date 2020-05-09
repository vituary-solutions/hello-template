package com.vituary.hello.teams;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class TeamController {
    private final TeamRepository teamRepository;

    public TeamController(TeamRepository teamRepository) {
        this.teamRepository = teamRepository;
    }

    @RequestMapping("/api/teams")
    public List<Team> list() {
        return teamRepository.findAllTeams();
    }
}
