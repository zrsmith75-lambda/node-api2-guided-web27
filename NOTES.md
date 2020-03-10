# Routing Notes

## Menu

## Requirements

- list all hubs
- add a hub
- update a hub
- remove a hub

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
