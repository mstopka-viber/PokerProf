# Texas Hold'em Poker Guide

## Overview

This is a comprehensive React-based web application that serves as an educational guide for Texas Hold'em poker. The application provides interactive learning tools, detailed explanations of poker concepts, and reference materials for both beginners and experienced players.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and production builds
- **Styling**: Tailwind CSS with custom theme configuration
- **UI Components**: Radix UI primitives with custom shadcn/ui components
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: React Query (TanStack Query) for server state management
- **Form Handling**: React Hook Form with Zod validation

### Backend Architecture
- **Runtime**: Node.js with Express.js server
- **Language**: TypeScript with ES modules
- **API Design**: RESTful API endpoints under `/api` prefix
- **Development Server**: Custom Vite integration for hot module replacement

### Database & Storage
- **ORM**: Drizzle ORM configured for PostgreSQL
- **Database**: PostgreSQL (configured but using in-memory storage currently)
- **Migration Tool**: Drizzle Kit for schema migrations
- **Current Storage**: In-memory storage implementation (`MemStorage`) for development

## Key Components

### Core Pages
- **FrontPage**: Landing page with hero section and game overview
- **Topics**: Main navigation hub with organized topic cards
- **HandRankings**: Interactive hand ranking visualization with playing cards
- **TablePosition**: Visual table position guide with strategic implications
- **Terminology**: Searchable poker glossary with categorized terms
- **BasicStrategy**: Accordion-based strategy guide
- **OddsCalculator**: Interactive tools for pot odds and equity calculations

### Shared Components
- **PlayingCard**: Reusable playing card component with suit colors and styling
- **GlobalSearch**: Universal search functionality across all content
- **Sidebar**: Responsive navigation with organized topic groups
- **DogsPlayingPoker**: Custom image component for the classic poker artwork

### UI System
- **Design System**: Consistent styling with CSS variables and Tailwind utilities
- **Theme**: Purple/indigo gradient theme with customizable color schemes
- **Responsive Design**: Mobile-first approach with breakpoint-based layouts
- **Accessibility**: Radix UI primitives ensure keyboard navigation and screen reader support

## Data Flow

### Content Management
1. **Static Content**: Educational content is embedded within React components
2. **Search Data**: Searchable content is stored in memory with full-text search capabilities
3. **Terminology**: Poker terms are categorized and searchable via API endpoints
4. **Interactive Tools**: Calculator and range tools use client-side computation

### API Endpoints
- `GET /api/terms` - Retrieve all poker terms
- `GET /api/terms/search?q=query` - Search poker terminology
- `GET /api/search?q=query` - Global content search across all pages

### State Management
- **React Query**: Caches API responses and manages loading states
- **Local State**: Component-level state for interactive tools and UI controls
- **URL State**: Route-based state management for navigation

## External Dependencies

### Core Libraries
- **@tanstack/react-query**: Server state management and caching
- **wouter**: Lightweight routing library
- **drizzle-orm**: Type-safe database ORM
- **@neondatabase/serverless**: Database connection for serverless environments

### UI Libraries
- **@radix-ui/***: Comprehensive set of accessible UI primitives
- **tailwindcss**: Utility-first CSS framework
- **class-variance-authority**: Type-safe variant API for components
- **cmdk**: Command palette and search interface

### Development Tools
- **typescript**: Static type checking
- **vite**: Fast build tool and development server
- **tsx**: TypeScript execution for Node.js
- **esbuild**: Fast JavaScript bundler for production

## Deployment Strategy

### Build Process
1. **Frontend Build**: Vite compiles React app to `dist/public`
2. **Backend Build**: esbuild bundles Express server to `dist/index.js`
3. **Static Assets**: Public assets are served from the build directory

### Environment Configuration
- **Development**: Uses Vite dev server with HMR and Express API
- **Production**: Serves static files from Express with API endpoints
- **Database**: Configurable via `DATABASE_URL` environment variable

### Hosting Requirements
- Node.js runtime environment
- PostgreSQL database (optional, defaults to in-memory storage)
- Static file serving capability
- Environment variable support for configuration

## Changelog
- July 3, 2025. Added PokerTooltip hover system: central glossary (poker-glossary.ts) with 80+ poker terms, PokerTooltip component using Radix UI tooltips, applied across all 14 content pages. Terms show dotted purple underline and display definition popups on hover.
- June 30, 2025. Initial setup

## User Preferences

Preferred communication style: Simple, everyday language.