# Instant-cart
a cart micro service for Ecommerece website

# Project Plan

   - Name: InstantCart 
   
   - Descriptions: a cart microservice for ecommerce websites
   
## Problem: 

   - Ecommerce carting systems are complex and take a lot of time from the developers. 

## Solution:
  * Create a microservice that is specific to cart creation. 
  
  * a cart component where anyone can just deploy the application and it will be easy to integrate to any ecommerce application.
  
  * This should also be an independent service and be able to run on its own.
  
  * It will also handle payment to sellers and buyers.

## MVP:
  * Create an application that can take any item data. Item data shape should be flexible to any form of data but need the required user_id field

  * Need a GET, POST, DELTE, and UPDATE
    * Get items	
    * Post items
    * Delete Items 
      * Delete all by user
      * Delete on item by user
    * Updated Items 
      * Update one item by user 

  * Needs to be easily deployed on the backed(docker file)
  
  * Make its so developers don’t have to worry about setting up payments 





Stack: Node.JS, MongoDB, Express, Docker
