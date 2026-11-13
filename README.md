# MBA Connect — MBA Admission Enquiry Website

A responsive Next.js website for students who want to request free MBA admission counselling.

## Features
- Homepage explaining MBA enquiry and free counselling
- MBA specialization overview
- Three-step counselling process
- Google Forms embed for student details and callback preference
- FAQ section and responsive layout
- No custom database or backend required

## Run locally
```bash
npm install
npm run dev
```
Open http://localhost:3000.

## Connect your Google Form
1. Create a Google Form at https://forms.google.com.
2. Suggested questions: full name, mobile number, email (optional), city/state, graduation course/year, preferred MBA format (regular/online/distance), preferred specialization, approximate budget, preferred callback date, preferred callback time, and a consent checkbox for being contacted about the enquiry.
3. In Google Forms choose **Send → Embed HTML** and copy the form URL from the iframe `src` attribute.
4. In `app/page.tsx`, replace `REPLACE_WITH_YOUR_FORM_ID` in `GOOGLE_FORM_EMBED_URL` and `GOOGLE_FORM_URL` with your form ID. If Google provides a different URL, paste the complete URLs instead.
5. In Google Forms, open **Responses → Link to Sheets** to save submissions in a spreadsheet.
6. Test the form on desktop and mobile before publishing.

## Important
The included Google Forms URL is a placeholder. The form will not collect responses until you connect your own form. Publish a privacy notice, collect clear consent, and only use student details for the purposes explained to the student. Do not claim guaranteed admission, placements, scholarships or college affiliations unless verified.
