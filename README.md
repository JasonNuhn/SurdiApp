# Documentation for Surdi App

This app is for people to connect with others by learning sign language!



### `[POST]` '/Signup'

| Command | Description                                         | Return Type |
| ------- | ----------------------------------------------------| ----------- |
| `POST`  | 'Creates a new user in the database'                | Object      |

### `[GET]` '/User'

| Command | Description                                         | Return Type |
| ------- | ----------------------------------------------------| ----------- |
| `GET`   | 'Returns user privileges'                           | Object      |

### `[POST]` '/User/Question'

| Command  | Description                                        | Return Type |
| -------- | ---------------------------------------------------| ----------- |
| `POST`   | 'User Creates a question'                          | Object      |

### `[GET]` '/User/Question/id'

| Command  | Description                                        | Return Type |
| -------- | ---------------------------------------------------| ----------- |
| `GET`    | 'return question by id requested by user'          | Object      |

### `[DELETE]` '/User/Question/:id'

| Command  | Description                                        | Return Type |
| -------- | ---------------------------------------------------| ----------- |
| `DELETE` | 'Deletes a question from our Database by ID #'     | Object      |

### `[GET]` '/Question'

| Command | Description                                         | Return Type |
| ------- | ----------------------------------------------------| ----------- |
| `GET`   | 'Return list of Questions'                          | Object      |

### `[GET]` '/Language'

| Command | Description                                         | Return Type |
| ------- | ----------------------------------------------------| ----------- |
| `GET`   | 'Returns list of Languages'                         | Object      |

### `[DELETE]` '/User/Question/:id'

| Command  | Description                                        | Return Type |
| -------- | ---------------------------------------------------| ----------- |
| `DELETE` | 'Deletes a question from our Database by ID #'     | Object      |