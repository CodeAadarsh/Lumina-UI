# Contributing to Lumina UI React

First off, thank you for considering contributing to Lumina UI React! It's people like you that make this library such a great tool.

## Code of Conduct

By participating in this project, you are expected to uphold our Code of Conduct. Please treat everyone with respect and create a positive environment.

## How Can I Contribute?

### Reporting Bugs

This section guides you through submitting a bug report. Following these guidelines helps maintainers understand your report and reproduce the issue.

- **Use the GitHub issue search** — check if the issue has already been reported.
- **Check if the issue has been fixed** — try to reproduce it using the latest `main` branch.
- **Isolate the problem** — create a reduced test case and a live example.

### Suggesting Enhancements

This section guides you through submitting an enhancement suggestion, including completely new features and minor improvements to existing functionality.

- **Use the GitHub issue search** — check if the enhancement has already been suggested.
- **Describe the enhancement in detail** — provide a step-by-step description of the suggested enhancement.
- **Provide specific examples** — include examples of how the feature would work.

### Pull Requests

- Fill in the required template
- Do not include issue numbers in the PR title
- Follow the style guides
- Include appropriate test coverage
- End all files with a newline

## Development Workflow

### Setting Up the Development Environment

```bash
# Clone the repository
git clone https://github.com/CodeAadarsh/Lumina-UI.git
cd Lumina-UI

# Install dependencies
npm install

# Start the development server
npm run dev

# Run Storybook to see the components
npm run storybook
```

### Building

```bash
# Build the library
npm run build
```

### Testing

```bash
# Run the tests
npm test
```

## Style Guides

### JavaScript Styleguide

All JavaScript code should adhere to the [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript).

### CSS Styleguide

- Use Tailwind CSS classes whenever possible
- Avoid writing custom CSS unless absolutely necessary
- Follow the BEM naming convention for any custom CSS

### Commit Messages

- Use the present tense ("Add feature" not "Added feature")
- Use the imperative mood ("Move cursor to..." not "Moves cursor to...")
- Limit the first line to 72 characters or less
- Reference issues and pull requests liberally after the first line

## Adding New Components

1. Create a new component in the `src/components/ui` directory
2. Add stories for the component in `src/stories` directory
3. Export the component in `src/index.js`
4. Add documentation for the component

## Documentation

Documentation is crucial for a component library. Please ensure:

- Each component has clear, comprehensive documentation
- Props are documented with types and default values
- Examples demonstrate common use cases
- Accessibility considerations are noted

## License

By contributing, you agree that your contributions will be licensed under the project's [MIT License](LICENSE).

## Questions?

If you have any questions, please feel free to contact the maintainers or open an issue on GitHub.

---

Thank you for your contribution! We appreciate your help in making Lumina UI React better.