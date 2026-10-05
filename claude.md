# CLAUDE.md - Revolix Technologies Project Guide

## 🚀 Project Overview & Identity
- **Company:** Revolix Technologies (AI-First Development Studio)
- **Core Focus:** Production AI Agents, Workflow/CRM Automation (GoHighLevel/GHL), Backend Infrastructure, and Custom SaaS Platforms.
- **Goal:** Deliver reliable, high-speed, secure agentic pipelines and highly optimized custom web applications.

## 🛠️ Technology Stack & Environment
- **Backend/AI:** Node.js, Python, LangChain/LangGraph, OpenAI/Anthropic APIs, MCP Server Architecture.
- **Automation:** GoHighLevel (GHL) API v2, Webhooks, ://make.com custom app nodes.
- **Frontend:** React, TypeScript, TailwindCSS.
- **Database/Vector:** PostgreSQL (Prisma ORM), Pinecone / Supabase pgvector.

## 💻 Critical Developer Commands

### Installation & Initialization
```bash
npm install          # Install dependencies (Node.js backend/frontend)
pip install -r req.txt # Install python runtime dependencies
```

### Running Local Servers
```bash
npm run dev          # Start local web application interface
python app/main.py   # Spin up the local AI Agent Orchestrator server
```

### Build & Deploy Execution
```bash
npm run build        # Build production web bundles
docker build -t revolix-agent . # Package agent infrastructure container
```

### Code Quality & Testing
```bash
npm run lint         # Execute ESLint checks across TypeScript code
pytest tests/        # Run Python testing suite for AI models & hooks
```

## 📐 Architecture & Folder Map
- `/app/agents/`      -> Python AI workforce agents, prompts, and orchestration flows.
- `/app/automation/`  -> GHL custom code blocks, payload validation, and webhook processors.
- `/app/api/`         -> Fastify/Express or FastAPI route definitions and controllers.
- `/web/`             -> Frontend interface (React/TypeScript views and components).
- `/shared/`          -> Unified TypeScript/Python database schemas and system utils.

## 🛡️ Coding Conventions & Hard Constraints
1. **Response Formats:** Always use standardized JSON envelopes for API responses: `{ success: boolean, data: any, error: string | null }`.
2. **Type Safety:** Strict TypeScript rules apply. Avoid `any` types; explicitly declare types or interfaces for GHL webhook contexts.
3. **Prompt Hardening:** Keep agent system prompts modularized inside isolated variables or markdown files. Do not hardcode prompt text natively within operational logic loops.
4. **Environment Security:** Never commit raw API credentials (OpenAI keys, GHL OAuth tokens). Use `process.env` or `os.getenv` references exclusively.
5. **AI Safety Gateways:** All user-facing agent outputs must pass through a content mitigation utility or fallback schema wrapper before final printing.

## 📌 Active Development Focus
- Current Sprint: Enhancing real-time data ingestion latencies and improving AI agent state tracking across broken GHL conversation pipelines.
