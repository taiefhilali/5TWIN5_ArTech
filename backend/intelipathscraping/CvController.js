const pdfParse = require('pdf-parse');
const mongoose = require('mongoose');
const Cv = require('./cv');

exports.uploadcv = async (req, res) => {
  try {
    const pdfBuffer = req.file.buffer;
    const pdfData = await pdfParse(pdfBuffer);

    const skillsKeywords = ['COMPETENCES', 'SKILLS', 'skills', 'SKILLS'];
    const skillsSectionStart = skillsKeywords.find(keyword => pdfData.text.includes(keyword));

    if (skillsSectionStart) {
      const maxWords = 50; // Increased the number of words to capture more content
      const cvText = pdfData.text.split(/\s+/).slice(0, maxWords).join(' ');

      const startIndexSkills = cvText.indexOf(skillsSectionStart);
      const skillsSectionEndIndex = findSkillsSectionEndIndex(cvText, startIndexSkills);

      if (skillsSectionEndIndex !== -1) {
        // Use the original PDF data instead of the truncated version
        const skillsText = pdfData.text.slice(startIndexSkills, skillsSectionEndIndex);

        // Extract experiences after skills section
        const experiencesText = pdfData.text.slice(skillsSectionEndIndex);

        const experienceKeywords = ['Stage', 'Projet', 'Experience', 'Project', 'Intership', 'EXPERIENCES', 'experiences'];

        const extractedExperiences = extractLinesByKeywords(experiencesText, experienceKeywords);

        const lines = skillsText.split(/\.\s*/).map(line => line.trim());

        const newcv = new Cv({
          cv: req.file.path,
          content: pdfData.text,
          experiences: extractedExperiences,
          skills: lines.filter(line => line && !skillsKeywords.includes(line)).map(skill => skill.trim()),
        });

        await newcv.save();
        res.status(200).send('CV has been created');
      } else {
        res.status(201).json({
          success: false,
          message: 'Skills section end not found in the CV',
        });
      }
    } else {
      res.status(201).json({
        success: false,
        message: 'Skills section not found in the CV',
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: 'Internal server error',
    });
  }
};

function findSkillsSectionEndIndex(cvText, startIndex) {
  const sectionHeadings = ['EDUCATION', 'SKILLS', 'Experiences', 'Projets académiques', 'PROJECTS', 'LANGUAGES', 'ESPRIT', 'Projets Personneles'];

  for (const heading of sectionHeadings) {
    const headingIndex = cvText.indexOf(heading, startIndex);
    if (headingIndex !== -1) {
      return headingIndex;
    }
  }

  return cvText.length;
}

function extractLinesByKeywords(text, keywords) {
  const lines = text.split(/\.\s*/).map(line => line.trim());
  const extractedLines = [];
  let currentLine = '';

  lines.forEach(line => {
    if (keywords.some(keyword => line.trim().startsWith(keyword))) {
      if (currentLine.trim() !== '') {
        extractedLines.push(currentLine.trim());
      }
      currentLine = line.trim();
    } else {
      currentLine += ' ' + line.trim();
    }
  });

  if (currentLine.trim() !== '') {
    extractedLines.push(currentLine.trim());
  }

  return extractedLines;
}
