# AGENTS.md - Coding Guidelines for AI Agents

## Commands

- **Dev**: `npm run dev` - Start Next.js development server
- **Build**: `npm run build` - Build production bundle
- **Lint**: `npm run lint` - Run ESLint
- **Test**: No test commands configured yet

## Code Style

- **TypeScript**: Strict mode enabled, use arrow functions for all components
- **Imports**: Use path aliasing `@/*` for src imports
- **React**: Use react-hook-form + yup for forms, axios for API calls
- **State**: Use @tanstack/react-query for API state management
- **Styling**: Tailwind CSS with custom color palette (#2B6E69, #F6E5CA, #A5BBA3, #E08C6E, #FFF9F2)
- **Comments**: Write self-explanatory code, avoid explanatory comments
- **Conditionals**: Prefer `condition ? <Component/> : null` over `condition && <Component/>`
- **Returns**: Use one-line returns for guard clauses
- **Error Handling**: Let errors bubble up, catch at component level with try/catch
- **Naming**: PascalCase for components, camelCase for functions/variables
- **Types**: Define interfaces in @/types, use type imports where possible
- **i18n**: Project uses next-intl for internationalization (en/fr)
