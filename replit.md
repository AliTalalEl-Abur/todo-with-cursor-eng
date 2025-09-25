# Next.js Todo App - Project Documentation

## Overview
A modern Todo/Task Manager application built with Next.js 14, React 19, TypeScript, and Tailwind CSS. The app features a clean interface with task management capabilities including add, edit, delete, and mark complete functionality.

## Project Architecture

### Frontend Structure
- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom UI components
- **UI Library**: Radix UI components
- **Main Component**: `src/components/todo-app.tsx` - The main task manager interface

### File Structure
```
src/
├── app/
│   ├── favicon.ico
│   ├── globals.css
│   ├── layout.tsx       # Root layout with Inter font
│   └── page.tsx         # Home page rendering TodoApp
├── components/
│   ├── ui/              # Reusable UI components
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   └── input.tsx
│   └── todo-app.tsx     # Main todo application component
└── lib/
    └── utils.ts         # Utility functions
```

### Configuration
- **Next.js Config**: `next.config.js` - Configured for Replit environment with host verification disabled
- **Package Manager**: npm with legacy peer deps for React 19 compatibility
- **Build System**: Next.js standard build process
- **Port**: Development server runs on port 5000 for Replit compatibility

## Development Setup
- **Workflow**: "Next.js Frontend" runs `npm run dev -- --hostname 0.0.0.0 --port 5000`
- **Dependencies**: Installed with `npm install --legacy-peer-deps` due to React 19 compatibility

## Deployment Configuration
- **Target**: Autoscale (stateless web application)
- **Build**: `npm run build`
- **Run**: `npm start`

## Recent Changes
- **2025-09-25**: Initial project import and Replit environment setup
  - Fixed Next.js config format (converted from .ts to .js)
  - Resolved font import issues (switched from Geist to Inter)
  - Removed conflicting app directory
  - Configured proper host settings for Replit proxy
  - Set up development workflow and deployment configuration

## User Preferences
- Clean, modern UI with task management functionality
- TypeScript for type safety
- Component-based architecture with reusable UI elements