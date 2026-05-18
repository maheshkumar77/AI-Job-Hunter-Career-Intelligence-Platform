const express = require("express");
const axios = require("axios");
const cheerio = require("cheerio");

const router = express.Router();

router.post(
  "/analyze-job",
  async (req, res) => {
    try {
      if (!req.body) {
        return res.status(400).json({
          success: false,
          message:
            "Request body missing",
        });
      }

      const { url } = req.body;

      if (!url) {
        return res.status(400).json({
          success: false,
          message:
            "Job URL is required",
        });
      }

      // Fetch webpage
      const response =
        await axios.get(url, {
          headers: {
            "User-Agent":
              "Mozilla/5.0",
          },
        });

      const html = response.data;

      if (!html) {
        return res.status(500).json({
          success: false,
          message:
            "Empty webpage content",
        });
      }

      const $ =
        cheerio.load(html);

      /* ======================
         Smart Title Detection
      ====================== */

      let title = "";

      // Try h1
      title = $("h1")
        .first()
        .text()
        .trim();

      // Try page title
      if (!title) {
        title = $("title")
          .text()
          .trim();
      }

      // Meta property fallback
      if (!title) {
        title = $(
          'meta[property="og:title"]'
        ).attr("content");
      }

      /* ======================
         Description Detection
      ====================== */

      let description =
        $("body")
          .text()
          .replace(/\s+/g, " ")
          .trim();

      // Check empty
      if (!description) {
        return res.status(404).json({
          success: false,
          message:
            "Job description not found",
        });
      }

      /* ======================
         Detect Skills
      ====================== */

      const skills = [];

      const techSkills = [
        "React",
        "Node.js",
        "MongoDB",
        "Express",
        "JavaScript",
        "Python",
        "Java",
        "SQL",
        "AWS",
        "Docker",
        "Git",
        "REST API",
        "Next.js",
        "Redux",
        "Firebase",
        "Tailwind CSS",
      ];

      techSkills.forEach(
        (skill) => {
          if (
            description
              .toLowerCase()
              .includes(
                skill.toLowerCase()
              )
          ) {
            skills.push(skill);
          }
        }
      );

      return res.status(200).json({
        success: true,
        message:
          "Job analyzed successfully",

        data: {
          title:
            title ||
            "Title not found",

          skills,

          description:
            description.slice(
              0,
              5000
            ),
        },
      });
    } catch (error) {
      console.error(error);

      return res.status(500).json({
        success: false,
        message:
          "Failed to analyze job",
        error: error.message,
      });
    }
  }
);

module.exports = router;