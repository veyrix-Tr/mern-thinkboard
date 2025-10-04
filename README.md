# MERN ThinkBoard

A simple and clean notes management application built with the MERN stack. Create, view, edit, and delete your notes with a modern and responsive user interface.

## Quick Start

```bash
# Clone the repository
git clone https://github.com/chiraggoyal4639/mern-thinkboard.git
cd mern-thinkboard

# Setup Backend
cd backend
npm install
# Create .env file with your MongoDB and Upstash credentials
npm run dev

# Setup Frontend (in new terminal)
cd frontend
npm install
npm run dev
```

Visit `http://localhost:5173` to use the app.

## Features

- **Create Notes** - Add new notes with title and content
- **View All Notes** - See all your notes in a grid layout
- **Edit Notes** - Update existing notes
- **Delete Notes** - Remove notes you no longer need
- **Rate Limiting** - Built-in protection against too many requests using Upstash Redis
- **Responsive Design** - Works on all screen sizes
- **Real-time Feedback** - Toast notifications for user actions
- **Modern UI** - Clean interface built with TailwindCSS and DaisyUI

## Tech Stack

### Frontend
- **React** - UI library
- **Vite** - Build tool and dev server
- **React Router** - Client-side routing
- **Axios** - HTTP requests
- **TailwindCSS** - Utility-first CSS framework
- **DaisyUI** - Component library for Tailwind
- **Lucide React** - Icon library
- **React Hot Toast** - Toast notifications

### Backend
- **Node.js** - JavaScript runtime
- **Express** - Web framework
- **MongoDB** - Database
- **Mongoose** - MongoDB object modeling
- **Upstash Redis** - Rate limiting
- **CORS** - Cross-origin resource sharing
- **dotenv** - Environment variable management

## Project Structure

```
mern-thinkboard/
├── backend/
│   ├── src/
│   │   ├── config/
│   │   │   ├── db.js              # MongoDB connection
│   │   │   └── upstash.js         # Upstash rate limiter setup
│   │   ├── controllers/
│   │   │   └── notesControllers.js # Note CRUD operations
│   │   ├── middleware/
│   │   │   └── rateLimiter.js     # Rate limiting middleware
│   │   ├── models/
│   │   │   └── Note.js            # Note schema
│   │   ├── routes/
│   │   │   └── notesRoutes.js     # API routes
│   │   └── server.js              # Entry point
│   ├── .env
│   └── package.json
└── frontend/
    ├── src/
    │   ├── components/
    │   │   ├── Navbar.jsx         # Navigation bar
    │   │   ├── NoteCard.jsx       # Individual note card
    │   │   ├── NotesNotFound.jsx  # Empty state
    │   │   └── RateLimitedUI.jsx  # Rate limit message
    │   ├── lib/
    │   │   ├── axios.js           # Axios instance
    │   │   └── utils.js           # Utility functions
    │   ├── pages/
    │   │   ├── HomePage.jsx       # Home page with all notes
    │   │   ├── CreatePage.jsx     # Create new note page
    │   │   └── NoteDetailPage.jsx # View and edit note page
    │   ├── App.jsx                # Main app component
    │   └── main.jsx               # Entry point
    ├── index.html
    ├── tailwind.config.js
    └── package.json
```

## Installation

### Prerequisites
- Node.js (v14 or higher)
- MongoDB database
- Upstash Redis account (for rate limiting)

### Backend Setup

1. Navigate to the backend folder:
```bash
cd backend
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the backend folder with the following variables:
```env
PORT=5001
MONGO_URI=your_mongodb_connection_string
UPSTASH_REDIS_REST_URL=your_upstash_redis_url
UPSTASH_REDIS_REST_TOKEN=your_upstash_redis_token
```

4. Start the backend server:
```bash
npm run dev
```

The backend server will run on `http://localhost:5001`

### Frontend Setup

1. Navigate to the frontend folder:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The frontend will run on `http://localhost:5173`

## API Endpoints

### Notes

- **GET** `/api/notes` - Get all notes (sorted by newest first)
- **GET** `/api/notes/:id` - Get a single note by ID
- **POST** `/api/notes` - Create a new note
- **PUT** `/api/notes/:id` - Update an existing note
- **DELETE** `/api/notes/:id` - Delete a note

### Request Body Examples

**Create/Update Note:**
```json
{
  "title": "My Note Title",
  "content": "This is the note content"
}
```

## Rate Limiting

The application includes rate limiting to prevent abuse. The current limit is set to **70 requests per 30 seconds** per user. If you exceed this limit, you will see a message asking you to slow down.

## Environment Variables

### Backend
- `PORT` - Server port (default: 5001)
- `MONGO_URI` - MongoDB connection string
- `UPSTASH_REDIS_REST_URL` - Upstash Redis URL
- `UPSTASH_REDIS_REST_TOKEN` - Upstash Redis token

## Scripts

### Backend
- `npm run dev` - Start development server with nodemon
- `npm start` - Start production server

### Frontend
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## Usage

1. Open the application in your browser at `http://localhost:5173`
2. Click "Create Note" to add a new note
3. Fill in the title and content, then click "Create Note"
4. View all your notes on the home page
5. Click on any note card to view details, edit, or delete it
6. Use the navigation bar to move between pages

## Database Schema

### Note Model
```javascript
{
  title: String (required),
  content: String (required),
  createdAt: Date (auto-generated),
  updatedAt: Date (auto-generated)
}
```

## Features in Detail

### Create Notes
Navigate to the create page, enter a title and content, and save your note. The note will be immediately available on the home page.

### View Notes
All notes are displayed in a responsive grid layout on the home page, sorted by creation date (newest first).

### Edit Notes
Click on any note to open the detail page where you can modify the title and content, then save your changes.

### Delete Notes
From the note detail page, click the delete button to remove a note. You'll be asked to confirm before deletion.

### Rate Limiting Protection
The app uses Upstash Redis for rate limiting to protect against abuse. If too many requests are made in a short time, users will see a friendly message.

## Important Notes

- Make sure MongoDB is running before starting the backend server
- Ensure both frontend and backend servers are running for the app to work properly
- The frontend makes requests to `http://localhost:5001` by default in development
- For production deployment, update the CORS origin in `backend/src/server.js`
- Keep your `.env` file secure and never commit it to version control

## License

This project is open source and available for personal and educational use.

## Author

Chirag Goyal

---

Built with ❤️ using the MERN stack
