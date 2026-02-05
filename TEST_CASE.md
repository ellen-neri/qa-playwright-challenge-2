# TC-001: End-to-End Purchase Flow for Guest User

**ID:** TC-001  
**Type:** Functional / E2E  
**Priority:** High  
**Status:** Automated  
**Automation Tool:** Playwright (TypeScript)

---

### 1. Test Summary
Verify that a non-registered user (Guest) can search for a specific product, add it to the shopping cart, and successfully reach the final order confirmation step by filling in the required shipping details.

### 2. Preconditions
* The browser is open.
* The application URL `https://automationteststore.com/` is accessible.
* The test environment is stable.

### 3. Test Data
The following data is used for this test execution (based on `testData.ts`):

* **Product:** "Lipstick"
* **User Details:**
    * *First Name:* Ellen
    * *Last Name:* Neri
    * *Email:* `ellen.neri.@test.com`
* **Location Details:**
    * *Address:* 123 Test Street
    * *City:* New York
    * *State/Region:* New York
    * *Zip Code:* 10001
    * *Country:* United States

### 4. Test Steps & Expected Results

| Step # | Action | Test Data | Expected Result |
| :--- | :--- | :--- | :--- |
| **1** | Navigate to the application homepage. | URL: `https://automationteststore.com/` | The homepage loads successfully. The page title contains "A place to practice your automation skills!". |
| **2** | Enter the product name in the search bar and click the search button. | Product: "Lipstick" | The search results page is displayed, showing products matching the keyword. |
| **3** | Click on the product link from the results list. | | The product details page is displayed. |
| **4** | Click on the "Add to Cart" button. | | The user is redirected to the "Shopping Cart" page. The selected product is listed in the cart. |
| **5** | Click on "Checkout" and select "Guest Checkout", then click "Continue". | Option: Guest Checkout | The "Guest Checkout - Step 1" form is displayed. |
| **6** | Fill in all mandatory Personal Details and Address fields. | Use **User Details** and **Location Details** from Section 3. | The form accepts the input without validation errors. |
| **7** | Click the "Continue" button. | | The user is redirected to the "Checkout Confirmation" page. |
| **8** | Verify that the order is ready to be finalized. | | The **"Confirm Order"** button (or payment step) is clearly visible on the screen. |

### 5. Notes & Assumptions
* **Payment Method:** Since this is a demo site, no real credit card information is required. The test assumes the default shipping/payment method is selected automatically or by default.
* **Environment:** The test runs against the public Automation Test Store environment. Occasional slowness or downtime is expected.
* **Browser:** This test is designed to be cross-browser compatible (Chromium, Firefox, WebKit), but primary validation is done on Chromium.

---
*Last Updated: February 2026*
*Author: Ellen Neri*