import { SERVER_URL } from "../utils/constants";

export async function getProducts(sortBy, filter) {
  const query = `
    query GetProducts($sortBy: String!, $filter: Filter) {
        products(sortBy: $sortBy, filter: $filter) {
          products {
            _id
            title
            subtitle
            colors {
              colorCode
              portraitUrl
              squarishUrl
              currentPrice
            }
          }
          numProducts
        }
    }
  `;
  const res = await fetch(SERVER_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ query, variables: { sortBy, filter } }),
  });

  if (!res.ok) throw new Error(res.statusText);
  const response = await res.json();

  // throw error if error is received in response
  if (response.errors) throw new Error(response.errors.at(0).message);
  return response.data.products;
}

export async function getProduct(id, color) {
  const query = `
    query Product($id: ID!, $color: String) {
      product(id: $id, color: $color) {
        _id
        title
        subtitle
        description
        descriptionPreview
        styleCode
        colors {
          colorDescription
          fullPrice
          currentPrice
          portraitUrl
          squarishUrl
          colorCode
          images {
            src
            alt
            srcThumbnail
          }
          skus {
            _id
            size
            available
          }
        }
        sizeChartUrl
      } 
    }
  `;
  const res = await fetch(SERVER_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ query, variables: { id, color } }),
  });

  if (!res.ok) throw new Error(res.statusText);
  const response = await res.json();

  // throw error if error is received in response
  if (response.errors) throw new Error(response.errors.at(0).message);
  return response.data.product;
}

export async function getProductColors(id) {
  const query = `
    query Product($id: ID!, $color: String) {
      product(id: $id, color: $color) {
        _id title subtitle colors { squarishUrl colorCode }
      } 
    }
  `;
  const res = await fetch(SERVER_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ query, variables: { id } }),
  });

  if (!res.ok) throw new Error(res.statusText);
  const response = await res.json();

  // throw error if error is received in response
  if (response.errors) throw new Error(response.errors.at(0).message);
  return response.data.product;
}
