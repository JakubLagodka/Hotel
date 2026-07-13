package com.example.demo;

import java.util.List;

public class Product {
    private String id;
    private List<String> categories;
    private Double price;
    private String currency;
    private Long counter;

    public Product(String id, List<String> categories, Double price, String currency, Long counter) {
        this.id = id;
        this.categories = categories;
        this.price = price;
        this.currency = currency;
    }

    public String getId() {
        return id;
    }

    public List<String> getCategories() {
        return categories;
    }

    public Double getPrice() {
        return price;
    }

    public String getCurrency() {
        return currency;
    }

    public Long getCounter() {
        return counter;
    }

    public void setId(String id) {
        this.id = id;
    }

    public void setCategories(List<String> categories) {
        this.categories = categories;
    }

    public void setPrice(Double price) {
        this.price = price;
    }

    public void setCurrency(String currency) {
        this.currency = currency;
    }

    public void setCounter(Long counter) {
        this.counter = counter;
    }
}
