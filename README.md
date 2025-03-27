# Docker MCP Configuration

This repository contains a stable Docker configuration optimized for running Supabase and other containerized applications.

## Setup Instructions

1. Stop Docker Desktop if it's running

2. Navigate to Docker Desktop settings:
   - Windows: Right-click Docker icon in system tray -> Settings
   - Mac: Click Docker icon in menu bar -> Settings

3. In the settings:
   - Go to "Docker Engine" in the left sidebar
   - Replace the existing JSON configuration with the contents of `daemon.json` from this repository

4. Click "Apply & Restart"

5. Wait for Docker to restart completely

## Configuration Details

The configuration includes:
- Garbage collection settings
- BuildKit enabled
- JSON file logging with rotation
- Google DNS servers (8.8.8.8, 8.8.4.4)
- Docker daemon exposure on localhost:2375
- Concurrent operation limits
- Log rotation settings

## Troubleshooting

If Docker fails to start:
1. Remove the current configuration
2. Restart Docker Desktop
3. Apply the configuration gradually, starting with basic settings

## Support

If you encounter any issues, please:
1. Check Docker Desktop logs
2. Ensure no other processes are using port 2375
3. Verify your system meets Docker Desktop requirements