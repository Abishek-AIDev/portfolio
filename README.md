# Abishek R T — Premium Personal Portfolio Website

A futuristic, high-performance personal portfolio website for **Abishek R T** (First-Year B.Tech student at Joy University, NIAT). Built with **React**, **Vite**, **Tailwind CSS v4**, **Lucide Icons**, and an interactive custom HTML5 Canvas particle network.

---

## 🚀 How to Run this Project on Windows (Beginner-Friendly Guide)

Follow these simple steps to run this website on your Windows computer:

### Step 1: Install Node.js (If you haven't already)
1. Download Node.js (LTS version recommended) from [https://nodejs.org/](https://nodejs.org/).
2. Run the downloaded installer and click **Next** through the setup prompts.
3. Open **Command Prompt** (press `Win + R`, type `cmd`, and press Enter) and verify installation:
   ```cmd
   node -v
   npm -v
   ```
   *(You should see version numbers displayed).*

### Step 2: Open in Visual Studio Code
1. Open **VS Code**.
2. Click **File** > **Open Folder...** (or press `Ctrl + K, Ctrl + O`).
3. Select the portfolio project folder.

### Step 3: Open the Built-in Terminal
1. In VS Code, press `Ctrl + ~` (or go to menu **Terminal** > **New Terminal**).

### Step 4: Install Dependencies & Start the Dev Server
Run the following commands in the terminal:

```bash
# 1. Install all dependencies (only needed the first time)
npm install

# 2. Start the live local development server
npm run dev
```

### Step 5: View Your Portfolio in the Browser
Once you run `npm run dev`, you will see a local URL in your terminal:
```text
  ➜  Local:   http://localhost:3000/ (or http://localhost:5173/)
```
Hold `Ctrl` and click the link, or open your web browser (Chrome, Edge, Firefox) and go to `http://localhost:3000/`.

To stop the server at any time, press `Ctrl + C` in the terminal.

---

## ✏️ How to Easily Edit Your Portfolio

All your personal details, projects, skills, certificates, and links are kept in a single, well-documented file:

📁 **`src/data/portfolioData.ts`**

### 1. Adding a New Project
In `src/data/portfolioData.ts`, find the `projects: [` array and add a new project object:
```ts
{
  id: 'my-new-project',
  title: 'My Project Name',
  subtitle: 'Short one-line subtitle',
  description: 'Detailed description of what the project does...',
  educationalDisclaimer: 'Optional disclaimer note',
  image: '/path-to-image.jpg',
  tags: ['Python', 'TensorFlow', 'React'],
  githubUrl: 'https://github.com/Abishek-AIDev/my-repo',
  demoUrl: 'https://my-live-demo.com', // or '' if none yet
  status: 'In Development',
  features: ['Feature 1', 'Feature 2']
}
```

### 2. Adding a New Skill
In `src/data/portfolioData.ts`, add to the `skills.confirmed` or `skills.exploringNext` lists.

### 3. Adding More Certificates
In `src/data/portfolioData.ts`, add a new item under `certificates: [` with the title, institution, date, and image path.

### 4. Uploading Your Own Photo
Place your photo in the `public/assets/` folder (e.g. `public/assets/my_photo.jpg`), then set in `portfolioData.ts`:
```ts
customProfilePhoto: '/assets/my_photo.jpg'
```

---

## 🎨 Architecture & Tech Stack

- **Framework**: React 19 + Vite
- **Styling**: Tailwind CSS v4 + Glassmorphism + Neon accents
- **Animations**: Custom HTML5 Canvas Particle System + Smooth CSS transitions
- **Icons**: Lucide React
- **Typography**: Outfit (Headings) & Plus Jakarta Sans (Body)
