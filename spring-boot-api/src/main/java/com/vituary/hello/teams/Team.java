package com.vituary.hello.teams;

public class Team {
    private final String name;
    private final String arena;
    private final Address address;

    public Team(String name, String arena, Address address) {
        this.name = name;
        this.arena = arena;
        this.address = address;
    }

    public String getName() {
        return name;
    }

    public String getArena() {
        return arena;
    }

    public Address getAddress() {
        return address;
    }
}
