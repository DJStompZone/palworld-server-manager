# Palworld RCON Dashboard

## Overview

Palworld RCON Dashboard is a web application designed to manage and monitor a Palworld game server. It provides various functionalities such as server control commands, player management, and real-time data visualization using charts.

## Features

- **Server Control**: Execute commands like shutdown, broadcast messages, kick or ban players, and more.
- **Player Management**: View and manage currently connected players.
- **Real-time Data Visualization**: Display charts for active players and server latency over the last 24 hours.
- **Dark Mode**: The application supports dark mode for better user experience.

## Technologies Used

- **Next.js**: React framework for server-side rendering and static site generation.
- **React**: JavaScript library for building user interfaces.
- **Chart.js**: JavaScript library for creating charts.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **Framer Motion**: Library for animations.
- **Tabler Icons**: Icon library for React.

## Installation

1. **Clone the repository**:

    ```bash
    git clone https://github.com/DJStompZone/palworld-server-manager.git
    cd palworld-server-manager
    ```

2. **Install dependencies**:

    ```bash
    npm install
    ```

3. **Run the development server**:

    ```bash
    npm run dev
    ```

4. **Build for production**:

    ```bash
    npm run build
    ```

5. **Start the production server**:

    ```bash
    npm start
    ```

## Project Structure

- **/components**: Contains reusable UI components.
- **/pages**: Contains Next.js pages.
- **/public**: Static assets like images and icons.
- **/styles**: Global styles and Tailwind CSS configuration.
- **/utils**: Utility functions and helpers.

## Usage

### Server Control

- **Shutdown**: Schedule a server shutdown with a custom message.
- **DoExit**: Force stop the server immediately.
- **Broadcast**: Send a broadcast message to all connected players.
- **KickPlayer**: Kick a player from the server using their SteamID.
- **BanPlayer**: Ban a player from the server using their SteamID.
- **TeleportToPlayer**: Teleport to a player using their SteamID.
- **TeleportToMe**: Teleport a player to your location using their SteamID.
- **ShowPlayers**: Display information about all currently connected players.
- **Info**: Provide server information.
- **Save**: Save the current world data.

### Real-time Data Visualization

- **Active Players**: Displays a line chart of active players over the last 24 hours.
- **Server Latency**: Displays a line chart of server latency over the last 24 hours.

## Contributing

Contributions are welcome! Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch for your feature or bugfix.
3. Commit your changes.
4. Push your changes to your fork.
5. Create a pull request.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.

## Contact

For any questions or feedback, please contact [DJStompZone](https://github.com/DJStompZone).
