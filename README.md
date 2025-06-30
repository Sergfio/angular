# Angular Todo App - Initial Setup

This repository contains the source code for a modern Todo application built with Angular. This initial commit establishes the foundational structure of the application, configuring all the necessary files to get started with development.

## ✨ feat: Initialize Angular application with basic structure

This commit bootstraps the Angular project and sets up the core configuration files. Below is a summary of the key changes and the purpose of each file.

### Key Changes

* **Favicon**: Added a `favicon.ico` to give the application a unique icon in browser tabs.
* **`index.html`**: Created the main entry point for the application. It includes the `<app-root></app-root>` selector, which is where the main Angular component will be rendered.
* **`main.ts`**: Implemented the main TypeScript file responsible for bootstrapping the Angular application. It initializes the platform and loads the root module (`AppModule`).
* **`styles.css`**: Added a global stylesheet. This file is intended for defining application-wide styles to ensure a consistent design across all components.
* **TypeScript Configuration**:
    * `tsconfig.json`: The base TypeScript configuration for the project.
    * `tsconfig.app.json`: Specific TypeScript configuration that extends the base configuration for the application code.
    * `tsconfig.spec.json`: TypeScript configuration tailored for the testing environment (Jasmine/Karma).

### Project Structure Overview

/src
├── app/                  # Anwendungskomponenten und -module
├── assets/               # Statische Assets (Bilder, etc.)
├── environments/         # Umgebungsspezifische Einstellungen
├── favicon.ico           # Anwendungs-Icon
├── index.html            # Haupt-HTML-Datei
├── main.ts               # Skript zum Starten der Anwendung
└── styles.css            # Globale Stylesheets
├── tsconfig.app.json     # App-spezifische TS-Konfiguration
├── tsconfig.json         # Basis-TS-Konfiguration
└── tsconfig.spec.json    # Test-spezifische TS-Konfiguration

### Getting Started

To run the application locally, you will need to have the Angular CLI installed.

1.  **Clone the repository:**
    ```bash
    git clone <repository-url>
    cd <repository-directory>
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Run the development server:**
    ```bash
    ng serve
    ```
    Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

### Next Steps

With the basic structure in place, the next steps will involve:
* Creating the root `AppComponent`.
* Setting up feature modules and routing.
* Developing the UI components for the Todo application.
  
