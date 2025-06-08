# ChemLab - Chemistry Learning Platform

A comprehensive chemistry learning platform built with Next.js, featuring AI-powered tools, interactive periodic table, and educational resources.

## 🚀 Features

- **User Authentication**: Secure login/signup with NextAuth.js
- **AI-Powered Reaction Calculator**: Balance equations and predict products
- **Interactive Periodic Table**: Detailed element information with 3D models
- **Chemistry Blog**: Educational articles with comments and likes
- **Admin Dashboard**: User and content management
- **Responsive Design**: Works on all devices

## 🛠️ Tech Stack

- **Frontend**: Next.js 14, React, TypeScript
- **Styling**: Tailwind CSS, shadcn/ui
- **Database**: PostgreSQL with Prisma ORM
- **Authentication**: NextAuth.js
- **3D Graphics**: React Three Fiber
- **AI Integration**: Vercel AI SDK
- **Deployment**: Vercel

## 📋 Prerequisites

- Node.js 18+ 
- PostgreSQL database
- GitHub/Google OAuth apps (optional)

## 🔧 Installation

1. **Clone the repository**
   \`\`\`bash
   git clone <repository-url>
   cd chemlab
   \`\`\`

2. **Install dependencies**
   \`\`\`bash
   npm install
   \`\`\`

3. **Set up environment variables**
   Create a `.env.local` file in the root directory:
   \`\`\`env
   # Database
   DATABASE_URL="postgresql://username:password@localhost:5432/chemlab"
   
   # NextAuth
   NEXTAUTH_SECRET="your-secret-key"
   NEXTAUTH_URL="http://localhost:3000"
   
   # OAuth Providers (optional)
   GITHUB_ID="your-github-client-id"
   GITHUB_SECRET="your-github-client-secret"
   GOOGLE_CLIENT_ID="your-google-client-id"
   GOOGLE_CLIENT_SECRET="your-google-client-secret"
   \`\`\`

4. **Set up the database**
   \`\`\`bash
   npx prisma db push
   npx prisma db seed
   \`\`\`

5. **Run the development server**
   \`\`\`bash
   npm run dev
   \`\`\`

6. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🚀 Deployment on Vercel

### 1. Database Setup

**Option A: Vercel Postgres (Recommended)**
1. Go to your Vercel dashboard
2. Create a new Postgres database
3. Copy the connection strings

**Option B: External PostgreSQL**
1. Use any PostgreSQL provider (Supabase, Railway, etc.)
2. Get your connection string

### 2. Environment Variables

In your Vercel project settings, add these environment variables:

\`\`\`env
# Database
DATABASE_URL="your-postgres-connection-string"

# NextAuth
NEXTAUTH_SECRET="your-production-secret"
NEXTAUTH_URL="https://your-app.vercel.app"

# OAuth (optional)
GITHUB_ID="your-github-client-id"
GITHUB_SECRET="your-github-client-secret"
GOOGLE_CLIENT_ID="your-google-client-id"
GOOGLE_CLIENT_SECRET="your-google-client-secret"
\`\`\`

### 3. Deploy

1. **Connect your repository to Vercel**
2. **Configure build settings** (auto-detected)
3. **Deploy**

### 4. Database Migration

After deployment, run the database setup:

\`\`\`bash
# Using Vercel CLI
vercel env pull .env.local
npx prisma db push
npx prisma db seed
\`\`\`

## 📁 Project Structure

\`\`\`
chemlab/
├── app/                    # Next.js app directory
│   ├── api/               # API routes
│   ├── admin/             # Admin dashboard
│   ├── blog/              # Blog pages
│   ├── dashboard/         # User dashboard
│   ├── login/             # Authentication pages
│   └── periodic-table/    # Periodic table
├── components/            # Reusable components
├── lib/                   # Utility functions
├── prisma/               # Database schema and migrations
└── public/               # Static assets
\`\`\`

## 🔐 Default Accounts

After seeding the database:

**Admin Account:**
- Email: `admin@chemlab.com`
- Password: `admin123`

**Test User:**
- Email: `user@chemlab.com`
- Password: `user123`

## 🎯 Key Features

### Authentication
- Email/password login
- OAuth with GitHub/Google
- Role-based access (USER/ADMIN)

### Reaction Calculator
- AI-powered equation balancing
- Product prediction
- Safety information

### Periodic Table
- Interactive element grid
- Detailed element information
- 3D electron configuration models

### Blog System
- Admin-only posting
- User comments and likes
- Rich text content

### Admin Dashboard
- User management (CRUD)
- Content moderation
- Analytics (planned)

## 🔧 Development

### Database Commands

\`\`\`bash
# Generate Prisma client
npx prisma generate

# Push schema changes
npx prisma db push

# Create migration
npx prisma migrate dev

# Seed database
npx prisma db seed

# Open Prisma Studio
npx prisma studio
\`\`\`

### Build Commands

\`\`\`bash
# Development
npm run dev

# Production build
npm run build
npm start

# Linting
npm run lint
\`\`\`

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🆘 Support

For support, please open an issue on GitHub or contact the development team.

---

Built with ❤️ using Next.js and modern web technologies.
