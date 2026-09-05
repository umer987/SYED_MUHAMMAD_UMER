const cors = require('cors')
const cookie =require('cookie-parser')
const express  = require('express')
const app = express()

// Add your Vercel frontend URL
const allowedOrigins = [
    'http://localhost:5173',              // Local Vite dev
    'http://localhost:3000',              // Local React dev
    'https://syed-m-umer.vercel.app',     // ← Your Vercel frontend
    'https://syed-muhammad-umer-89kg.vercel.app', // Your backend (if needed)
];

app.use(cors({
    origin: function (origin, callback) {
        // Allow requests with no origin (like mobile apps or curl)
        if (!origin) return callback(null, true);
        
        if (allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            console.log(`CORS blocked: ${origin}`);
            callback(new Error('Not allowed by CORS'));
        }
    },
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With'],
    optionsSuccessStatus: 200,
}));
app.use(cookie())
app.use(express.json())

const projectroute = require('./routes/project.route')
const adminroute = require('./routes/admin.route') 
const messageroute = require('./routes/messageme.route')

app.use('/api/project' , projectroute)
app.use('/api/admin' , adminroute)
app.use('/api/message' , messageroute)



module.exports = app