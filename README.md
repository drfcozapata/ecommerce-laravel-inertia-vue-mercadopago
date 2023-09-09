# e-commerce App

Ecommerce built using Laravel 10, Vue.js 3, Inertia.js and Mercado Pago to make payments.
This project was developed initially by @Jordan-Bianco using a TDD approach.<br>

I'm changing some elements, modifying styles, changing the payment from Stripe to Mercado Pago, and will add authorization levels (users and admins) and the views to be able to manage the product inventory from the dashboard.

## DB structure

<img src="./public/demo/DB_structure.png" width="60%" />

## Shop

Each user can view the products for sale and apply filters on them.<br>
It is possible to search for a product by name, filter the results by category or by price, all without refreshing the page.<br>
It is also possible to sort the results by price or by "best sellers".

<img src="./public/demo/shop1.png" width="60%" />
<br>
<br>
Once logged in, the user can add the products to his cart, or save them in his whishlist.
When the user clicks the payment button, he is redirected to the payment page provided by stripe. <br> When the user enters his data and makes the payment, he is redirected to a purchase confirmation page.

<br>
<img src="./public/demo/shop1.gif" width="60%" />

<img src="./public/demo/shop2.png" width="60%" />

<img src="./public/demo/shop3.png" width="60%" />

## User Dashboard

From the dashboard a registered user can summarize his purchases, view how many orders he has placed in a period of time, how much he has spent on average, etc.
He can also view his orders in detail and update his profile information (username and password).

<img src="./public/demo/shop2.gif" width="60%" />
