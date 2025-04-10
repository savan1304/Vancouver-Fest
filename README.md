## Vancouver-Fest

A SaaS web app built with React, NodeJs, Auth0 and Prisma.

- Anonymous users can use the app. However, user identity is required for certain functionalities.

## API endpoint with the auth0 token.

## Database uses Prisma ORM.

## Login and Security 
- uses Auth0 integration
- has an Auth Debugger page
- generates a token and send the it in the Authorization header when needed

## Responsive design
- usable on a desktop, tablet, or phone
- responsive web pages at any width of the browser

## External Web API
- has an interface to an external Web API of Weather Channel for read-only operations, e.g. get weather data based on location

## Accessibility
- Includes Lighthouse accessibility reports from 3 pages using https://developers.google.com/web/tools/lighthouse 
- includes the reports (as image, pdf or any readable format) within the `accessibility_reports` folder

## Testing
- has unit tests.

## Deployment
- API server and database at Render.com
- client side at Vercel

