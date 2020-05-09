package com.vituary.hello.teams;

public class Address {
    private final String street;
    private final String city;
    private final String region;
    private final String country;
    private final String postalCode;

    public Address(String street, String city, String region, String country, String postalCode) {
        this.street = street;
        this.city = city;
        this.region = region;
        this.country = country;
        this.postalCode = postalCode;
    }

    public String getStreet() {
        return street;
    }

    public String getCity() {
        return city;
    }

    public String getRegion() {
        return region;
    }

    public String getCountry() {
        return country;
    }

    public String getPostalCode() {
        return postalCode;
    }
}
