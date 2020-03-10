# Routing Notes

| Non-Rest         | REST                            | Action    |
| :--------------- | :------------------------------ | :-------- |
| /listAllLessions | /api/lessons                    | GET       |
| /createLesson    | /api/lessons                    | POST      |
| /deleteLesson    | /api/lessons/{id}               | DELETE    |
| /updateUser      | /api/users/{id}                 | PATCH/PUT |
| /listHubMessages | /api/lessons/{id}/messages      | GET       |
| /viewMessage     | /api/lessons/{id}/messages/{id} | GET       |

## Menu

- CommonJS modules (require/export)
- Express Router (break up server into sub components)
- Different ways to read data from the client
  - body --> req.body
  - query string --> req.query
  - URL parameter --> req.params
  -
- using sub-routes

## Requirements

- list all hubs
- add a hub
- update a hub
- remove a hub
- view hub message
- post a message to hub

## Data Access

- use `hubs-model.js` to talk to the database
  - find()
  - findById(id)
  - add(hub)
  - remove(id)
  - update(id, changes)
  - findHubMessages(hubId)
  - findMessageById(messageId)
  - addMessage(message)

**Every method above returns a promise**

## Basic Application Architecture

- UI layer/code
- Business logic layer/code
- Database layer/code

## Using Query String Parameters

https://www.google.com/search?q=crypto+fun&oq=crypto+fun&aqs=chrome..69i57.2593j0j1&sourceid=chrome&ie=UTF-8

https://www.google.com
/search
?
q=crypto+fun
&
oq=crypto+fun
&
aqs=chrome..69i57.2593j0j1
&
sourceid=chrome
&
ie=UTF-8

```js
req.query = {
  q: crypto + fun,
  oq: crypto + fun,
  sourceid: chrome
};
```
