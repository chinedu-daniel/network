# My Network Lab

## Day 1 - What is a computer Network?

### Devices on my network

- Laptop
- Phone 1
- Phone 2
- Smart TV
- Game Console
- Printer

### Network

My device connect through my Wi-Fi router.

### What I understand

A computer network is a group of connected deviced that can communicate with 
each other and share resources.

### Examples of communication
- My phone can share files with my laptop.
- My pones can use the same internet connection.
- My laptop can use the same internet connection.
- My laptop can communicate with a network printer.

### Home Network

My laptop, phones, TV, game console and printer are devices on my home network.

My home network connects to the Internet through the router.



## Day 2 - Client, Server & Peer-to-Peer

### Client and Server

A client is a device or program that requests a service or resource.

A server is a device or program that provides a service or resource.

### My Client/Server Application

I created a simple client/server application using Node.js.

The project contains:
- `server.js` - te server
- `client.js` - te client

The communication works like this:
Client
|
Request
|
Server
|
Response
|
Client

### What I Built
The Node.js server listens on port 3000.

The client sends a request to:
`http://localhost:3000`

The server receives the request and sends back:

`Hello from the server!`

The client receives and prints the response:

`Server response: Hello from the server!`

### What I Observed

The browser can act as a client when it requests something from the server.

I also created my own Node.js client using `client.js`, 
which communicated with `server.js`.

This showed me that a client is a role, not a specific type of machine.

### Project Structure

network-lab/
├── network.md
└── client-server/
    ├── server.js
    └── client.js
