# 🎭 QA Playwright Challenge

![Playwright](https://img.shields.io/badge/Playwright-45ba4b?style=for-the-badge&logo=Playwright&logoColor=white)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)

## 📄 Project Overview

This repository contains an automated End-to-End (E2E) test suite for the **[Automation Test Store](https://automationteststore.com/)** platform. 

The goal of this project is to demonstrate a robust automation architecture using **Playwright** with **TypeScript**, implementing best practices such as the **Page Object Model (POM)** and **Data-Driven Testing**.

### 🎯 Key Features
* **End-to-End Flow:** Covers the complete guest user journey: Search > Select Product > Cart > Checkout > Confirmation.
* **Page Object Model (POM):** Clean separation between test logic and page selectors/actions for better maintainability.
* **Data-Driven:** User and location data are decoupled from logic using a dedicated data file (`testData.ts`).
* **Resilient Selectors:** Prioritizes user-facing attributes (Accessibility Roles, Text) and robust CSS fallback strategies for legacy elements.

---

## 🛠️ Prerequisites

Before you begin, ensure you have the following installed on your machine:

* **[Node.js](https://nodejs.org/)** (Version 18 or higher is recommended)
* **npm** (Node Package Manager, usually comes with Node.js)
* **Git**

---

## 🚀 How to Install

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/ellen-neri/qa-playwright-challenge.git](https://github.com/ellen-neri/qa-playwright-challenge.git)
    cd qa-playwright-challenge
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Install Playwright Browsers:**
    This command downloads the necessary binaries for Chromium, Firefox, and WebKit.
    ```bash
    npx playwright install
    ```

---

## 🏃‍♀️ How to Run the Tests

You can run the tests in the background (faster).
```bash
npx playwright test