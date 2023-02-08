# Book Discovery
A web app


### Steps to import CSV file to MongoDB
- Install libraries and dependencies
- Run the following code:
`mongoimport --uri 'mongodb+srv://<user>:<admin>@cluster3.mongodb.net/?retryWrites=true&w=majority' --db kaggle-bookcovers-dataset --collection bookcovers --type=csv --headerline --file=<path-of-csv-file>`

## Tutorial links that helped in building this project
- [Install MongoDB Database Tool](https://www.mongodb.com/docs/database-tools/installation/installation-macos/) (required to use `mongoimport` to import JSON dataset to MongoDB)