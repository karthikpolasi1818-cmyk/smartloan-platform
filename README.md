# SmartLoan Platform

A full-stack digital loan management platform built with Next.js, Prisma ORM, PostgreSQL, Supabase and JWT authentication.

The platform enables customers to apply for loans, upload documents, track application status and allows administrators to review, approve or reject loan applications.

---

# 1. Project Overview

## Problem Statement

Traditional loan processing involves:

- Manual paperwork
- Long approval times
- Poor application tracking
- Lack of transparency between customers and financial institutions

SmartLoan solves this problem by providing a centralized digital loan processing system.

## Solution

SmartLoan Platform provides:

- Online loan application
- Secure user authentication
- Document management
- Loan status tracking
- Admin approval workflow
- Real-time application updates


---

# 2. Business Use Case

## Customer Side

Customers can:

1. Register an account
2. Login securely
3. Apply for loans
4. Upload required documents
5. Track application progress


## Admin Side

Administrators can:

1. View loan applications
2. Review customer documents
3. Update loan status
4. Approve or reject applications


## Business Benefits

- Reduces manual processing
- Improves customer experience
- Faster loan approvals
- Centralized data management
- Better operational efficiency


---

# 3. Architecture Diagram

             User Browser

                  |
                  |

          Next.js Frontend

                  |
                  |

          API Routes

                  |
   --------------------------------
   |                              |             User Browser

                  |
                  |

          Next.js Frontend

                  |
                  |

          API Routes

                  |
   --------------------------------
   |    |                              |

   JWT                        Prisma ORM

                  |
                  |

         PostgreSQL Database

                  |
                  |

              Supabase

      Storage + Database Hosting                             
      

---

# 4. Features


## Authentication

- User Registration
- Secure Login
- JWT Authentication
- HTTP Only Cookies
- Role Based Access Control


## Loan Management

- Loan Application Form
- Application Tracking
- Loan Status Updates
- Approval Workflow


## Document Management

- Document Upload
- File Validation
- Secure Storage


## Admin Dashboard

- Application Management
- Document Review
- Status Updates


## Dashboard

Customer dashboard includes:

- Profile information
- Loan details
- Application progress
- Current status


---

# 5. Tech Stack


## Frontend

- Next.js 16
- React
- TypeScript
- Tailwind CSS


## Backend

- Next.js API Routes
- Node.js


## Database

- PostgreSQL
- Supabase


## ORM

- Prisma ORM


## Authentication

- JWT
- bcryptjs


## Validation

- Zod


## Deployment

- Vercel


---

# 6. Database Design


## User Table

User

id
name
email
password
role
createdAt
updatedAt


## LoanApplication Table

LoanApplication

id
applicationId
userId
loanType
loanAmount
tenure
interestRate
status
approvalStatus
createdAt


## Document Table

Document

id
applicationId
fileName
fileUrl
fileType
createdAt


## LoanStatusHistory Table

LoanStatusHistory

id
applicationId
status
remark
createdAt


---

# 7. API Documentation


## Authentication APIs


### Register User


---

# 7. API Documentation


## Authentication APIs


### Register User
POST /api/auth/register
### Login User


POST /api/auth/login



### Logout


POST /api/auth/logout



### Current User


GET /api/auth/me




---

## Customer APIs


### Submit Loan Application


POST /api/customer/application



### Current Application


GET /api/customer/current



### Application History


GET /api/customer/history




---

## Admin APIs


### Get Applications


GET /api/admin/applications



### Update Status


POST /api/admin/status



### Documents


GET /api/admin/documents



---

# 8. Security Implementation


## Authentication Security

Implemented:

- Password hashing using bcrypt
- JWT token authentication
- HTTP only cookies
- Secure session handling


## API Security

Implemented:

- Input sanitization
- Zod validation
- Rate limiting
- Error handling


## Database Security

Implemented:

- Prisma ORM
- Parameterized queries
- Migration management


## File Security

Implemented:

- File type validation
- Upload restrictions
- Secure storage


---

# 9. Deployment Guide


## Local Setup


Install dependencies:



npm install



Create environment file:



.env



Generate Prisma:



npx prisma generate



Run development:



npm run dev




---

# Production Deployment


Build project:



npm run build



Deploy using Vercel:



vercel --prod



Database migration:



npx prisma migrate deploy



Check migration:



npx prisma migrate status




---

# 10. Interview Explanation


## Explain Project


"SmartLoan is a full-stack loan management platform that automates the loan application lifecycle. Customers can apply for loans, upload documents and track approval status, while administrators can review applications and manage decisions."


## Why Next.js?

Used because:

- Full-stack capability
- Server-side rendering
- API routes
- Better performance


## Why Prisma?

Used because:

- Type-safe database queries
- Easy migrations
- Better developer productivity


## Why PostgreSQL?

Used because:

- Relational data handling
- Transaction support
- Reliable production database


## Security Approach

Implemented:

- JWT authentication
- bcrypt password encryption
- Input validation
- Secure cookies
- Role-based authorization


---

# Future Improvements

- AI based loan risk prediction
- Credit score integration
- Payment gateway
- Email notifications
- Mobile application


---

# Author

SmartLoan Platform

Built using Next.js + Prisma + PostgreSQL