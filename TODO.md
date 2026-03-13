# TODO: Fix App.jsx to prevent login form on homepage

## Steps:
1. ✅ Explored project structure, read relevant files (App.jsx, routes.jsx, PublicRoutes.jsx, AuthContext.jsx, nav.jsx, Footer.jsx, main.jsx, Home.jsx).
2. ✅ Created detailed edit plan and got user confirmation.
3. ✅ Restructured src/app/App.jsx: 
   - Imported and used AppRoutes from src/app/routes.jsx as main content.
   - Added Nav and Footer wrappers with proper layout.
   - Removed broken inner Routes for /form and unconditional page renders.
4. ✅ Updated src/app/routes.jsx: Added import Form and /form/* -> Form route.
5. Test: Run `npm run dev`, check '/' (homepage) has no login, /form/login shows login.
6. attempt_completion.

