# Prompt Engineering Assistant

A web application that helps users create effective prompts for Large Language Models (LLMs).

[Try it out here](https://netsi1964.github.io/prompt-engineering-assistant/)

## Features

- **Prompt Builder**: Step-by-step guide to building effective prompts
- **Talk with Guidelines**: Ask questions directly about prompt engineering best practices
- **Improve Prompt**: Get automatic improvements for existing prompts
- **Example Prompts**: Browse curated examples of effective prompts
- **Saved Prompts**: Save and organize your prompts (premium feature)

## Technologies

- Frontend: HTML, JavaScript, Tailwind CSS
- Backend: Deno / Deno Deploy
- LLM Integration: Google Gemini API

## Getting Started

1. Install Deno:
   ```bash
   curl -fsSL https://deno.land/x/install/install.sh | sh
   ```

2. Clone the repository:
   ```bash
   git clone https://github.com/netsi1964/prompt-engineering-assistant.git
   cd prompt-engineering-assistant
   ```

3. Start the development server:
   ```bash
   deno task dev
   ```

4. Open `http://localhost:8000` in your browser

## Project Structure

```
prompt-engineering-assistant/
├── docs/               # Documentation
│   └── prd.md         # Product Requirements Document
├── index.html         # Main application file
├── translations.json  # UI text translations
└── example-prompts.json # Curated example prompts
```

## Features in Detail

### Prompt Builder
- Step-by-step prompt creation process
- Key elements selection
- Advanced techniques integration
- Context and examples management

### Talk with Guidelines
- Direct Q&A about prompt engineering
- Based on comprehensive guidelines
- Real-time responses from Gemini

### Improve Prompt
- Automatic prompt analysis
- Specific improvement suggestions
- Direct integration with builder

### Example Prompts
- Categorized prompt examples
- One-click use in builder
- Various use cases covered

## Deployment

The application is deployed using GitHub Pages and can be accessed at [https://netsi1964.github.io/prompt-engineering-assistant/](https://netsi1964.github.io/prompt-engineering-assistant/)

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details. 