# Integration Icons

This folder contains the integration logos/icons from the Google Drive folder.

## Folder Structure

Place the integration icons in subfolders matching the integration names. For example:

```
integrations/
  ├── HubSpot/
  │   └── logo.svg (or logo.png)
  ├── Salesforce/
  │   └── logo.svg
  ├── PayPal/
  │   └── logo.svg
  ├── Twilio/
  │   └── logo.svg
  └── ...
```

## Google Drive Mapping

Based on the Google Drive folder, here are the available integration folders:

- **Ac-logos** - AC logos
- **Amplitude** - Amplitude analytics
- **Calendly** - Calendly scheduling
- **Discord** - Discord communication
- **Drift** - Drift communication
- **Dynamics_365_Icons_scalable** - Microsoft Dynamics 365 CRM
- **FreshBooks** - FreshBooks payment/accounting
- **Gmail** - Gmail communication
- **HubSpot** - HubSpot CRM
- **Insightly** - Insightly CRM
- **Intercom** - Intercom communication
- **Make** - Make (Integromat) automation
- **Mixpanel** - Mixpanel analytics
- **Monday.com** - Monday.com CRM/automation
- **Notion** - Notion automation
- **PayPal** - PayPal payment
- **Pipedrive** - Pipedrive CRM
- **quickbooks-vector-logo-seeklogo** - QuickBooks payment/accounting
- **Salesforce** - Salesforce CRM
- **Segment** - Segment analytics
- **SendGrid** - SendGrid communication
- **Slack** - Slack communication
- **Square** - Square payment
- **Tableau** - Tableau analytics
- **Trello** - Trello automation
- **Twilio** - Twilio communication
- **Xero** - Xero payment/accounting
- **Zoho** - Zoho CRM

## Usage

After downloading the icons from Google Drive and placing them in the appropriate folders, update `integrationsData.ts` to include the `logoImage` path for each integration.

Example:
```typescript
{
  name: "HubSpot",
  logo: "📊", // Fallback emoji
  logoImage: "/assets/integrations/HubSpot/logo.svg", // Actual icon path
  category: "crm",
  description: "..."
}
```

## Icon Requirements

- **Format**: SVG preferred, PNG also supported
- **Size**: Recommended 512x512px or scalable SVG
- **Background**: Transparent or white background
- **Naming**: Use `logo.svg` or `logo.png` as the filename

