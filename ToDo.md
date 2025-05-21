# ✅ TODOs – Best Practices & Technologies to Implement

Aiming for a robust, production-ready Node.js (Express + TypeScript) backend project.

---

## ✅ Essentials
- [x] Logging (e.g. `winston`, `pino`)
- [x] Error handling (centralized middleware)
- [x] MongoDB integration
- [x] GraphQL alongside REST
- [x] Unit testing setup (e.g. `jest`, `vitest`)

---

## 🔒 Security
- [ ] Use `helmet` for secure HTTP headers
- [ ] Add rate limiting (`express-rate-limit`)
- [x] CORS configuration with environment-based origin allowlist
- [ ] Input validation (`zod`, `joi`, or `express-validator`)
- [ ] Implement authentication (JWT, OAuth, etc.)
- [ ] Implement authorization (e.g. role-based access)

---

## ⚙️ Architecture & Config
- [x] Modular project structure
- [x] `.env` configuration and separation
- [ ] Singleton MongoDB connection (class-based)
- [ ] Dependency injection (e.g. `tsyringe`) _(optional but recommended)_

---

## 🛠 Dev Experience
- [ ] ESLint + Prettier setup
- [ ] Git hooks with `husky` and `lint-staged`
- [x] API documentation with Swagger UI
- [x] OpenAPI spec (YAML)

---

## 🔬 Testing
- [x] Unit tests
- [ ] Integration tests (e.g. DB + routes)
- [ ] End-to-end tests (`supertest`, `playwright`, etc.)

---

## 🚀 Deployment Readiness
- [ ] Dockerfile for containerization
- [ ] Health check endpoint (`/healthz`)
- [ ] CI/CD pipeline (e.g. GitHub Actions)
- [ ] Monitoring/log aggregation (e.g. Sentry, Datadog)

---

## 📈 Advanced (Optional but valuable)
- [ ] Caching layer (Redis)
- [ ] Background jobs (BullMQ)
- [ ] Real-time capabilities (WebSockets or SSE)
- [ ] Feature flags

---

> _Keep iterating. This list can grow as the project evolves._
