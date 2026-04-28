# Litigation Command Center

GitHub-ready Next.js starter for a litigation law firm dashboard with communications, client trouble tickets, delegated tasks, deadlines, milestones, schedules, checklist tracking, and billing oversight with QuickBooks Online integration stubs.

## Stack

- Next.js App Router
- TypeScript
- Prisma ORM
- SQLite for local development (easy to swap to Postgres)
- QuickBooks Online OAuth + sync route stubs

## Core modules

- Matter dashboard
- Deadlines and internal milestones
- Opposing counsel and client communications inbox
- Client trouble tickets / service requests
- Delegated tasks for lawyers and paralegals
- Team schedule and workload planning
- Billing, invoices, payments, A/R, WIP signals
- Manager comments and progress notes

## Local setup

1. Copy `.env.example` to `.env`
2. Run `npm install`
3. Run `npx prisma generate`
4. Run `npx prisma db push`
5. Run `npm run db:seed`
6. Run `npm run dev`

## QuickBooks notes

The app is set up so QuickBooks remains the accounting source of truth while matter profitability and operational intelligence stay in this app. Fill in the QuickBooks environment variables and replace the stub sync logic in `app/api/quickbooks/*`.

## Suggested production upgrades

- Swap SQLite for PostgreSQL
- Add NextAuth or Clerk for authentication
- Add audit logs
- Add row-level permissions
- Add background jobs for QuickBooks sync
- Add email ingestion for communications capture
- Add webhook/event processing for billing updates


## Visual direction

This version is styled to closely match the uploaded screenshot's layout rhythm: compact dark left navigation, pale workspace canvas, top utility actions, large daily heading, and a 3-column analytics card grid. Replace static mock values with live data and preserve this visual shell if you want to maintain the same operational feel.
