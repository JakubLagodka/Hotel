package com.example.demo;

import java.util.List;

/*

We are building a simple Spring Boot–based microservice.

Implement com.example.demo.Product class and ProductPurchaseCounterService.

The service is called whenever a product is purchased.
Each purchase should increment a counter by one for a given product.
All counters should be stored in-memory.

 */
@RestController
@RequestMapping("/products")
public class ProductController {

    private final ProductPurchaseCounterService counterService;

    public ProductController(ProductPurchaseCounterService counterService) {
        this.counterService = counterService;
    }

    @PostMapping("/purchase")
    public ResponseEntity<Void> purchaseProduct(
            @RequestParam String id,
            @RequestParam List<String> categories,
            @RequestParam Double price,
            @RequestParam String currency
    ) {
        Product product = new Product(id, categories, price, currency);
        counterService.registerPurchase(product);
        return ResponseEntity.ok();
    }
}