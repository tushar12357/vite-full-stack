# Integration Icons - Public Folder

Place integration logo files here. The structure should match the integration names.

## Instructions

1. Download the integration icons from the Google Drive folder: https://drive.google.com/drive/folders/1pVe7DyaszlKTTOfciMIFlPkj5psDOqII

2. Extract and organize the icons into folders matching the integration names:
   ```
   public/integrations/
     ├── HubSpot/
     │   └── logo.svg
     ├── Salesforce/
     │   └── logo.svg
     ├── PayPal/
     │   └── logo.svg
     └── ...
   ```

3. For each icon file, name it `logo.svg` (or `logo.png` if SVG is not available)

4. The paths in `integrationsData.ts` will automatically reference these files as `/integrations/[IntegrationName]/logo.svg`

## Available Icons from Google Drive

- Ac-logos
- Amplitude
- Calendly
- Discord
- Drift
- Dynamics_365_Icons_scalable (use as "Dynamics_365" or "MicrosoftDynamics")
- FreshBooks
- Gmail
- HubSpot
- Insightly
- Intercom
- Make
- Mixpanel
- Monday.com
- Notion
- PayPal
- Pipedrive
- quickbooks-vector-logo-seeklogo (use as "QuickBooks")
- Salesforce
- Segment
- SendGrid
- Slack
- Square
- Tableau
- Trello
- Twilio
- Xero
- Zoho

## Note

If an icon is not found, the system will fall back to the emoji logo defined in the data file.

