# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Status

This appears to be a new or empty repository. The project structure and development commands will need to be established as the codebase is developed.

## Development Setup

To be added when project configuration is established:
- Build commands
- Test commands  
- Lint/format commands
- Development server commands

## Architecture

To be documented as the project structure is developed.

## Notes

This CLAUDE.md file should be updated as the project grows to include:
- Specific build and development commands
- Project architecture and key patterns
- Important configuration details
- Testing strategies


## Generic guidelines

- Always use typescript
- Always use arrow function, even for component. Classes are only for singleton.
- Use axios rather than fetch
- Use react-query for all api calls
- Use react-hook-form paired with yup when dealing with forms
- Don't put comment to explain what you did, write self-explanatory code
- Prefer one line return when condition not meets
- If creating a repo that as more than one project, like front and back end, use turborepo
- Try importing all tamagui component from '@tamagui' for exemple `import { Text, XStack, YStack } from 'tamagui'`
- Always use path aliasing for import
- Prefer `shouldDisplay ? <Component/> : null` than `shouldDisplay ?? <Component/>`

## Color palette
#2B6E69
#F6E5CA
#A5BBA3
#E08C6E
#FFF9F2