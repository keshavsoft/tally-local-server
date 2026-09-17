# tally-local-server

Local client/agent server bridging the cloud relay server (`tally-cloud-server`) with local Tally ERP/Prime instances.

## Features

- **WebSocket Client**: Connects to the central WebSocket relay server (`ws://localhost:8080`).
- **Tally Integration**: Interacts directly with Tally using `tally-xml-tdl` to query transactions and company data.
- **Command Handling**: Processes dispatched actions (e.g., `LAST` transaction queries).

## Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm
- Tally ERP 9 / TallyPrime running locally with ODBC/XML server enabled

### Installation

```bash
npm install
```

### Running the Client

```bash
npm start
# or
node app.js
```

## Project Structure

- `app.js` - Main entry point; establishes WebSocket connection
- `ws/`
  - `connect.js` - WebSocket client connection and lifecycle management
  - `handleMessage.js` - Incoming message parser and dispatcher
  - `handleCommand.js` - Tally command execution via `tally-xml-tdl`
