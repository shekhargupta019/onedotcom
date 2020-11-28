
# Task Requirements

1. install the required modules using npm

2. Start the application using `npm start`,

    * starts client on `localhost:3000`

    * starts json-server on `localhost:3001` using db.json data

3. Available Endpoints

   * Posts: http://localhost:3001/reviews

4. What you need to build:

    *  Create a Book Review Application where you need to build two web pages to display book reviews

	    - Display list of book reviews

        - While showing book review text on review listing page if text of a particular review goes greator than 100 characters you should show only first 100 characters which should be followed by "...show more" link clicking which should show complete text and show more link text should now get changed with "show less". On Clicking show less it should come back to its original state showing only first 100 characters.

        - on Clicking book image or clicking Show All comments it should display complete book review with user comments.

    * Create books review card view(reviews listing page) and detail view(review with comments page) just like images in output directory
    ```Note: for listing image present in output directory only shows first 3 book reviews but you need to show all the book reviews returned by the API```

    * Use any Routing library to create routes for `/` and `review/:reviewId`

    * Bonus Point:

        * use css flexbox and grid for layout design

        * write unit test
