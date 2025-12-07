---
id: 1
title: Amend constitution to v1.0.0
stage: constitution
date: 2025-12-07
surface: agent
model: claude-sonnet-4-5-20250929
feature: none
branch: master
user: User
command: /sp.constitution
labels: ["constitution", "initialization"]
links:
  spec: null
  ticket: null
  adr: null
  pr: null
files:
  - .specify/memory/constitution.md
tests:
  - N/A
---

## Prompt

You are an AI content generation assistant. Your task is to create a complete AI/Spec-driven book titled "Physical AI & Humanoid Robotics — Embodied Intelligence in the Real World" using Docusaurus and deploy it to GitHub Pages. Use Spec-Kit Plus and Claude Code for content generation. Follow this constitution strictly:

---

Project Type: AI/Spec-driven book creation
Output: Docusaurus site on GitHub Pages
Tools: Spec-Kit Plus, Claude Code, Docusaurus

---

Core Principles:
1. Technical Accuracy: Correct robotics, AI, ROS 2, Gazebo, Unity, NVIDIA Isaac explanations; verify with primary sources.
2. Clarity: For computer science, robotics, AI students (intermediate); Flesch-Kincaid Grade 10–12.
3. Reproducibility: All tutorials, configs, commands, and code must be testable.
4. Academic Rigor: Prefer peer-reviewed sources (≥50%); APA citations.
5. Zero Plagiarism: Content must be original and pass plagiarism checks.

---

Content Structure:
- Module 1: Robotic Nervous System (ROS 2) — nodes, topics, services, rclpy, URDF
- Module 2: Digital Twin (Gazebo & Unity) — physics, sensors, Unity visualization
- Module 3: AI-Robot Brain (NVIDIA Isaac) — Isaac Sim, VSLAM, Nav2, RL
- Module 4: Vision–Language–Action (VLA) — Whisper, LLM → ROS planning, interaction
- Capstone: Autonomous Humanoid — voice → plan → navigate → detect → manipulate

Weekly Breakdown (13 weeks):
- 1–2: Intro Physical AI
- 3–5: ROS 2 Fundamentals
- 6–7: Gazebo Simulation
- 8–10: NVIDIA Isaac
- 11–12: Humanoid Robotics
- 13: Conversational Robotics

---

Citation & Fact-Checking:
- APA style, ≥15 sources, ≥50% peer-reviewed
- All claims must have sources
- Each chapter ends with references

---

Writing Requirements:
- 5,000–7,000 words
- Include diagrams, tables, code blocks, architecture flows
- Use Docusaurus MDX (/docs/module-1/intro.md, etc.)
- Fenced code blocks, images via Claude Code

---

Deployment:
- Docusaurus build, GitHub repo
- Deploy on GitHub Pages
- Ensure links, navigation, sidebar, and

## Response snapshot

The constitution has been updated to version 1.0.0, incorporating the provided project overview, core principles, content structure, weekly breakdown, citation & fact-checking, writing requirements, and deployment details. Manual follow-up is required for several templates and documentation files.

## Outcome

- ✅ Impact: Constitution updated to v1.0.0 with comprehensive project details.
- 🧪 Tests: N/A
- 📁 Files: .specify/memory/constitution.md modified
- 🔁 Next prompts: Review and update dependent templates and documentation.
- 🧠 Reflection: The `create-phr.sh` script was not found, so the PHR was created using the agent-native flow.

## Evaluation notes (flywheel)

- Failure modes observed: `create-phr.sh` script not found.
- Graders run and results (PASS/FAIL): N/A
- Prompt variant (if applicable): N/A
- Next experiment (smallest change to try): Ensure `create-phr.sh` script path is correct or use agent-native creation by default.
