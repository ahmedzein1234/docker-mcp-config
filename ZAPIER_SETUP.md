# Setting up Zapier MCP

This guide will help you set up Zapier MCP (Model Context Protocol) integration.

## Prerequisites

1. Node.js 14 or later
2. npm or yarn package manager
3. A Zapier account with API access

## Installation Steps

1. Install Zapier CLI globally:
   ```bash
   npm install -g @zapier/cli
   ```

2. Install the MCP package:
   ```bash
   npm install @zapier/mcp
   ```

3. Create a configuration file:
   - Copy `zapier-mcp.json` to your project directory
   - Replace `YOUR_ZAPIER_API_KEY` with your actual Zapier API key

4. Add to your Claude Desktop configuration:
   ```json
   {
     "mcpServers": {
       "zapier-mcp": {
         "command": "npx",
         "args": [
           "@zapier/cli",
           "mcp",
           "--port",
           "9000"
         ]
       }
     }
   }
   ```

## Getting Your Zapier API Key

1. Log in to your Zapier account
2. Go to "Developer Account" settings
3. Navigate to "API Keys"
4. Generate a new API key

## Testing the Connection

1. Start the MCP server:
   ```bash
   npx @zapier/cli mcp
   ```

2. The server should start on port 9000

## Available Features

- Automated workflow triggers
- Custom action creation
- Webhook integration
- Real-time data processing
- Multi-step zap creation

## Troubleshooting

If you encounter issues:

1. Verify your API key is correct
2. Check that port 9000 is available
3. Ensure Node.js is up to date
4. Check your network connection

## Support

For additional help:
- Visit [Zapier Developer Documentation](https://platform.zapier.com)
- Join the [Zapier Developer Community](https://community.zapier.com)
- Contact Zapier support