# React Poster

A small single-page app for sharing posts — built to practice React Router's data APIs (loaders, actions, dynamic routes) with a simple Express backend.

## Tech Stack

- React 18 + Vite
- React Router (data router: `createBrowserRouter`, `loader`, `action`)
- Express (backend, separate process)
- CSS Modules

## Features

- View a list of posts fetched via route `loader`
- Create a new post via route `action` and `Form`
- View post details on a dynamic route (`/:postId`)
- Loading and empty states
- Programmatic and declarative navigation (`useNavigate`, `Link`)

## Implementation Highlights

- Route `loader`s for data fetching before render
- Route `action`s for form submission without manual `fetch`
- `useLoaderData`, `redirect`, `Form` from React Router
- Nested routes with `Outlet` and shared layouts
- Dynamic route params (`params.postId`)
- Frontend and backend running as separate processes

## Getting Started

### Frontend

```bash
npm install
npm run dev
```

The app runs on `http://localhost:5173`.

### Backend

The backend is a separate Express API. Clone and run it first:

```bash
git clone https://github.com/Maksimmm3/03-react-poster-backend.git
cd 03-react-poster-backend
npm install
npm start
```

It runs on `http://localhost:8080`.

> Both processes must be running simultaneously for the app to work.

## Related

- Backend: [03-react-poster-backend](https://github.com/Maksimmm3/03-react-poster-backend)
