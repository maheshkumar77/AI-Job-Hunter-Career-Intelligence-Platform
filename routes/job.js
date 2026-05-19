
// const express = require('express');
// const axios = require('axios');
// const cheerio = require('cheerio');

// const router = express.Router();

// router.post('/analyze-job', async (req, res) => {
//   let browser;

//   try {
//     const { url, manualJobDescription } = req.body;

//     if (!url && !manualJobDescription) {
//       return res.status(400).json({
//         success: false,
//         message:
//           'Please provide a job URL or manual job description',
//       });
//     }

//     // --------------------------
//     // Helper: Extract job details
//     // --------------------------
//     const extractJobDetails = (text, title = null) => {
//       const allSkills = [
//         'React',
//         'Node.js',
//         'Express',
//         'MongoDB',
//         'JavaScript',
//         'TypeScript',
//         'HTML',
//         'CSS',
//         'Tailwind',
//         'Redux',
//         'Next.js',
//         'Python',
//         'Java',
//         'Spring Boot',
//         'SQL',
//         'MySQL',
//         'PostgreSQL',
//         'Firebase',
//         'Docker',
//         'AWS',
//         'Git',
//         'REST API',
//         'GraphQL',
//         'TensorFlow',
//         'PyTorch',
//         'FastAPI',
//       ];

//       const skills = allSkills.filter((skill) =>
//         text.toLowerCase().includes(skill.toLowerCase())
//       );

//       const salary =
//         text.match(
//           /(₹|Rs\.?|INR|\$|USD|€|EUR)\s?[\d,]+(?:\s?-\s?(₹|Rs\.?|INR|\$|USD|€|EUR)?\s?[\d,]+)?/i
//         )?.[0] || null;

//       const jobType =
//         text.match(
//           /full[- ]?time|part[- ]?time|internship|contract|temporary/i
//         )?.[0] || null;

//       const workMode =
//         text.match(
//           /remote|hybrid|on[- ]?site|onsite/i
//         )?.[0] || null;

//       const employeeCount =
//         text.match(
//           /\d{1,3}(?:,\d{3})*\+?\s+(employees|employee)/i
//         )?.[0] || null;

//       const location =
//         text.match(
//           /(?:location|job location)\s*:?\s*(.*)/i
//         )?.[1]?.split('\n')[0] || null;

//       return {
//         title,
//         salary,
//         jobType,
//         workMode,
//         location,
//         employeeCount,
//         skills,
//         fullJobDescription: text,
//       };
//     };

//     // --------------------------
//     // Manual JD fallback
//     // --------------------------
//     if (manualJobDescription) {
//       const data = extractJobDetails(
//         manualJobDescription,
//         'Manual Job Description'
//       );

//       return res.status(200).json({
//         success: true,
//         source: 'manual',
//         message:
//           'Job analyzed using manual description',
//         data,
//       });
//     }

//     // ==========================
//     // 1. CHEERIO SCRAPING
//     // ==========================
//     try {
//       console.log('Trying Cheerio scraping...');

//       const response = await axios.get(url, {
//         timeout: 15000,
//         headers: {
//           'User-Agent':
//             'Mozilla/5.0 (Windows NT 10.0; Win64; x64)',
//         },
//       });

//       const $ = cheerio.load(response.data);

//       const title =
//         $('h1').first().text().trim() ||
//         $('title').text().trim();

//       const bodyText = $('body')
//         .text()
//         .replace(/\s+/g, ' ')
//         .trim();

//       // detect blocked pages
//       const blocked =
//         title.toLowerCase().includes('login') ||
//         bodyText.toLowerCase().includes('sign in') ||
//         bodyText.length < 500;

//       if (!blocked) {
//         const company =
//           $('[data-testid="company-name"]')
//             .text()
//             .trim() ||
//           $('.company').text().trim() ||
//           null;

//         const result = extractJobDetails(
//           bodyText,
//           title
//         );

//         return res.status(200).json({
//           success: true,
//           source: 'cheerio',
//           message:
//             'Job analyzed successfully with Cheerio',
//           data: {
//             ...result,
//             company,
//           },
//         });
//       }

//       throw new Error(
//         'Cheerio could not extract valid data'
//       );
//     } catch (cheerioError) {
//       console.log(
//         'Cheerio failed, switching to Puppeteer...'
//       );
//     }

//     // ==========================
//     // 2. PUPPETEER FALLBACK
//     // ==========================
//     try {
//       const puppeteer = await import(
//         'puppeteer'
//       );

//       browser =
//         await puppeteer.default.launch({
//           headless: true,
//           args: [
//             '--no-sandbox',
//             '--disable-setuid-sandbox',
//           ],
//         });

//       const page = await browser.newPage();

//       await page.setUserAgent(
//         'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124 Safari/537.36'
//       );

//       page.setDefaultNavigationTimeout(30000);

//       await page.goto(url, {
//         waitUntil: 'domcontentloaded',
//         timeout: 30000,
//       });

//       await new Promise((resolve) =>
//         setTimeout(resolve, 4000)
//       );

//       const scrapedData = await page.evaluate(
//         () => {
//           const bodyText =
//             document.body.innerText;

//           const title =
//             document.querySelector('h1')
//               ?.innerText ||
//             document.title;

//           const company =
//             document.querySelector(
//               '[data-testid="company-name"]'
//             )?.innerText ||
//             document.querySelector('.company')
//               ?.innerText ||
//             null;

//           return {
//             title,
//             company,
//             bodyText,
//           };
//         }
//       );

//       const result = extractJobDetails(
//         scrapedData.bodyText,
//         scrapedData.title
//       );

//       return res.status(200).json({
//         success: true,
//         source: 'puppeteer',
//         message:
//           'Job analyzed successfully with Puppeteer',
//         data: {
//           ...result,
//           company: scrapedData.company,
//         },
//       });
//     } catch (puppeteerError) {
//       console.error(
//         'Puppeteer failed:',
//         puppeteerError.message
//       );
//     }

//     // ==========================
//     // 3. FINAL FALLBACK
//     // ==========================
//     return res.status(200).json({
//       success: false,
//       source: 'manual_required',
//       message:
//         'Could not scrape this website. Please paste the full job description manually.',
//       data: null,
//     });
//   } catch (error) {
//     console.error('Error:', error);

//     return res.status(500).json({
//       success: false,
//       message: 'Failed to analyze job',
//       error: error.message,
//     });
//   } finally {
//     if (browser) {
//       await browser.close();
//     }
//   }
// });

// module.exports = router;

const express = require("express");
const axios = require("axios");
const cheerio = require("cheerio");

const router = express.Router();

router.post("/analyze-job", async (req, res) => {
  let browser;

  try {
    const { url } = req.body;

    if (!url) {
      return res.status(400).json({
        success: false,
        message: "Job URL is required",
      });
    }

    // =========================
    // 1. TRY CHEERIO FIRST
    // =========================
    try {
      console.log("Trying Cheerio...");

      const response = await axios.get(url, {
        timeout: 15000,
        headers: {
          "User-Agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124 Safari/537.36",
        },
      });

      const $ = cheerio.load(response.data);

      const pageTitle = $("title").text().trim();

      const bodyText = $("body")
        .text()
        .replace(/\s+/g, " ")
        .trim();

      // if page has enough content
      if (bodyText.length > 300) {
        return res.status(200).json({
          success: true,
          source: "cheerio",
          message: "Page content fetched successfully",

          data: {
            url,
            pageTitle,
            contentLength: bodyText.length,

            content: bodyText,
          },
        });
      }

      throw new Error("Cheerio content too small");
    } catch (err) {
      console.log(
        "Cheerio failed. Switching to Puppeteer..."
      );
    }

    // =========================
    // 2. PUPPETEER FALLBACK
    // =========================
    try {
      const puppeteer = await import(
        "puppeteer"
      );

      browser =
        await puppeteer.default.launch({
          headless: true,
          args: [
            "--no-sandbox",
            "--disable-setuid-sandbox",
          ],
        });

      const page = await browser.newPage();

      await page.setUserAgent(
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124 Safari/537.36"
      );

      page.setDefaultNavigationTimeout(
        30000
      );

      await page.goto(url, {
        waitUntil: "domcontentloaded",
        timeout: 30000,
      });

      // wait for JS rendering
      await new Promise((resolve) =>
        setTimeout(resolve, 5000)
      );

      const scrapedData =
        await page.evaluate(() => {
          return {
            pageTitle: document.title,

            content:
              document.body.innerText,

            html:
              document.documentElement
                .outerHTML,
          };
        });

      return res.status(200).json({
        success: true,
        source: "puppeteer",
        message:
          "Page content fetched successfully",

        data: {
          url,

          pageTitle:
            scrapedData.pageTitle,

          contentLength:
            scrapedData.content.length,

          content:
            scrapedData.content,

          htmlPreview:
            scrapedData.html.slice(
              0,
              3000
            ),
        },
      });
    } catch (puppeteerError) {
      console.error(
        "Puppeteer failed:",
        puppeteerError.message
      );
    }

    // =========================
    // BOTH FAILED
    // =========================
    return res.status(500).json({
      success: false,
      message:
        "Could not fetch page content",
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message:
        "Internal server error",

      error: error.message,
    });
  } finally {
    if (browser) {
      await browser.close();
    }
  }
});

module.exports = router;