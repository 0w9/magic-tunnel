# MagicTunnel

This is a open-source and free clone of tunneling services like [Ngrok](https://ngrok.io) or [Cloudflared](https://github.com/cloudflare/cloudflared). Those services often are really usefull even in the free tier, but when running multiple services locally (that you would like to expose), they are all paid.

This project is a simple clone of those services, that you can run on your own server, and expose your services to the internet.

## Guide for this repository

`/server` - The server you need to run on your VPS, which will tunnel all the traffic to your local machine.

`/cli` - Use the CLI to create and manage your tunnels.

`/test-server` - A simple server to test the tunneling. Not needed for the actual tunneling.

`/mapping.json` - A simple mapping file, that maps the tunnel name to the local port. This is used by the server to know where to forward the traffic.

## Installation

### Use our service (easy, costs money)

There is a way to use this service without installing anything. We have a server running. You can use it, but it's not free. This is not to profit from this project, but to cover the costs of running the server.

> Adding the tutorial soon, once the project is more stable.

### Run your own server (hard, free)

> Adding the tutorial soon, once the project is more stable.