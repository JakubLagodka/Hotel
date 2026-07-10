package com.example.demo;

import java.util.ArrayList;
import java.util.List;


public class ProductPurchaseCounterService {
    List<Product> products = new ArrayList<>();
    public Product registerPurchase(Product product) {
        product.setCounter(product.getCounter()+1);
        products.add(product);
        return product;
    }
}
