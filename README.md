# Unhandled Exception Crash in Node.js HTTP Server

This repository demonstrates a common, yet easily overlooked, error in Node.js HTTP servers: the lack of proper error handling.  Without proper mechanisms to catch and manage exceptions, unexpected errors during request processing can lead to the server crashing and becoming unavailable.

## The Bug

The `bug.js` file contains a simple HTTP server that lacks error handling. If an exception occurs during request processing, the server will crash without any graceful recovery.

## The Solution

The `bugSolution.js` file demonstrates how to implement error handling. It uses an event listener to handle errors raised by the `server` object. This allows for recovery from errors and prevents the server from crashing unexpectedly.  The solution avoids silent failures and outputs informative error messages to the console.