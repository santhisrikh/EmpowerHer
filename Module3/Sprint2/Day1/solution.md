#### 1\. **Initialize State with Products**

We use the `useState` hook to store the product list. Each product has properties: `id`, `name`, `price`, and `category`.



```
import React, { useState } from "react";

const GroupByCategory = () => {
  const [products] = useState([
    { id: 1, name: "Laptop", price: 1000, category: "Electronics" },
    { id: 2, name: "Shirt", price: 50, category: "Clothing" },
    { id: 3, name: "Phone", price: 500, category: "Electronics" },
    { id: 4, name: "Pants", price: 60, category: "Clothing" },
    { id: 5, name: "Apple", price: 2, category: "Groceries" },
    { id: 6, name: "Banana", price: 1, category: "Groceries" },
  ]);
  ```

* * * * *

#### 2\. **Group Products by Category**

We use the `reduce` method to group products based on their `category`.

```

 const groupedProducts = products.reduce((acc, product) => {
    // If the category doesn't exist, initialize it as an empty array
    if (!acc[product.category]) {
      acc[product.category] = [];
    }
    // Add the product to the category array
    acc[product.category].push(product);
    return acc;
  }, {});
  ```

**How `reduce` Works in This Case**:

-   **Initial value**: An empty object `{}`.
-   **Logic**: For each product, check if its `category` exists in the object:
    -   If not, create an empty array for it.
    -   Add the product to the corresponding array.

For example:


```
[
  { id: 1, name: "Laptop", price: 1000, category: "Electronics" },
  { id: 2, name: "Shirt", price: 50, category: "Clothing" }
]

After grouping:



{
  Electronics: [{ id: 1, name: "Laptop", price: 1000 }],
  Clothing: [{ id: 2, name: "Shirt", price: 50 }]
}

```
* * * * *

#### 3\. **Display the Grouped Products**

To display the grouped data, we:

-   Extract the category names using `Object.keys(groupedProducts)`.
-   Use nested `map` loops to render the products under each category.
```
  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>Products Grouped by Category</h1>
      {Object.keys(groupedProducts).map((category) => (
        <div key={category} style={{ marginBottom: "20px" }}>
          <h2>{category}</h2>
          <ul>
            {groupedProducts[category].map((product) => (
              <li key={product.id}>
                {product.name} - ${product.price}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};
```