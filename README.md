# Resumind: AI-Powered Resume Analyzer

**Resumind** is a smart web application designed to help job seekers optimize their resumes for specific job opportunities. By leveraging AI-powered analysis, the application provides users with actionable feedback to improve their chances of passing Applicant Tracking Systems (ATS) and impressing recruiters.

## Features

- **AI-Powered Analysis**: Upload your resume in PDF format along with a job description to receive a comprehensive review.
- **ATS Scoring**: Get a simulated ATS score to understand how well your resume matches the target job requirements.
- **Actionable Feedback**: Receive specific suggestions on how to improve your resume's content, structure, and keyword relevance.
- **Application Tracking**: Keep a history of your uploaded resumes and their corresponding feedback in a personalized dashboard.
- **Cloud-Native Experience**: Built with **React Router** and powered by **Puter.js**, offering a fast and secure experience with built-in storage and AI capabilities.

## Tech Stack

- **Framework**: [React Router](https://reactrouter.com/) (v8)
- **Backend & AI**: [Puter.js](https://puter.com/) (Auth, Key-Value Storage, File System, and AI models)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **PDF Processing**: [PDF.js](https://mozilla.github.io/pdf.js/) (for resume preview and conversion)
- **State Management**: [Zustand](https://zustand-demo.pmnd.rs/)

## Getting Started

### Prerequisites

- Node.js (Latest LTS recommended)
- A browser that supports modern web standards.

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd ai-resume-analyzer
   ```

2. Install the dependencies:
   ```bash
   npm install
   ```

### Development

Start the development server:

```bash
npm run dev
```

Your application will be available at `http://localhost:5173`.

> **Note**: This application uses **Puter.js**. Ensure you are running it in an environment where Puter.js can initialize correctly (typically requires being logged into Puter or running within the Puter ecosystem).

### Building for Production

Create a production build:

```bash
npm run build
```

## How it Works

1. **Upload**: The user uploads a PDF resume and provides details about the job (Company, Title, Description).
2. **Process**: The app uses PDF.js to convert the first page of the resume into an image for preview and uploads the original PDF to Puter's cloud storage.
3. **Analyze**: The job description and resume content are sent to Puter's AI (`gpt-5.4-nano` or similar) with specific instructions to generate a structured JSON feedback.
4. **Store**: Results, including the ATS score and detailed feedback, are stored in Puter's Key-Value store, linked to the user's account.
5. **Dashboard**: Users can view their past analyses and track their progress over time.

---

Built with ❤️ using React Router and Puter.
