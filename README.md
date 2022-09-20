## Tour API Management Assignment Requirements:

##### GET /api/v1/tours

    - Get all the tours

    - The client can select some specific fields for getting the information he needs as query.
    - Example: /tours?fields=name,image

    - Must be paginated.

    - (BONUS) The client can send a field (e.g. price) as query to sort the data with it.
    - Example: /tours?sort=price

##### POST /api/v1/tours

    - Add a tour

    - Must have a schema and the body should be validated through it.

##### GET /api/v1/tours/:id

    - Get a tour details by id

    - Send all the information of the tour

    - Increase the view count by 1 for this tour every time a user hits this endpoint.

##### PATCH /api/v1/tours/:id

    - Update a tour

    - (BONUS) Body should be validated

##### GET /api/v1/tours/trending

    - Get top 3 viewed tours

##### GET /api/v1/tours/cheapest

    - Get top 3 cheapest tours

## Extra:

##### DELETE /api/v1/tours/:id

    - Delete a tour
