# Project Name

## How to Run

1. Ensure you have Node.js 18.18 or later installed.
2. Clone this repository.
3. Run the following commands:

```bash
npm install
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

## Project Links

-   Deployed Application: [Live Demo](https://task-manager-olive-chi.vercel.app/tasks)
    --- Vercel doesn't allow us to choose the domain name, hence the weird URL.
-   Component Tree Overview: [Component Structure](https://tree-flow-umber.vercel.app/tree/91d08b4b-9696-4d51-ae1b-dd40db25c64c)
    --- Click on the green icons to switch between component trees.

## Important Note

I hardcoded some credentials across the project (DB credentials and weather API key) for there's no need to create and .env file and paste the values. In a real-world scenario, I would use environment variables to store these credentials.

## Tech Stack

-   React
-   TypeScript
-   Tailwind CSS
-   React Query for Data Fetching
-   Zustand for State Management
-   Next.js for a minimal backend
-   PostgreSQL for the database
-   Drizzle for ORM

## Challenge Requirements

-   [x] Mandatory Tech Stack
    -   [x] React
    -   [x] TypeScript
    -   [x] Redux-like State Management Solution
-   [x] Dynamic Task List
-   [-] Responsive Design
    -   The design is responsive for mobile and desktop, but might need to be tweaked for bigger screen sizes.
-   [x] Moving to the next task upon completing, escalating or skipping the current task.
-   [x] Button to go back to task list
    -   The icons on the sidenav are links to the Tasks Page.
-   [x] Additional features (Bonus)

    -   [x] Search functionality
    -   [x] Filter functionality according to status

-   [x] Good to have
    -   [x] Deployed Application

## Extra Features

-   [x] Dynamic Chart
-   The chart is dynamic and updates everytime a task is marked as Done. The value increments according to the Task Score.
-   [x] Real task status updates
-   Tasks status are updated upon clicking the Task Completed button and the Escalate Task button.
-   [x] Simple confirmation dialog upon clicking the Power Button on the sidenav.
-   The intent was to show a basic usage of the Zustand state management library, since I found no real need for a state management solution in this project. I'm happy to discuss this further.
