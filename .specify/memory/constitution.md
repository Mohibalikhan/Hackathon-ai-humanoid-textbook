<!--
Sync Impact Report:
Version change: 0.0.0 (initial) → 1.0.0
List of modified principles:
- Initial principles defined
Added sections:
- Project Overview
- Content Structure
- Weekly Breakdown
- Citation & Fact-Checking
- Writing Requirements
- Deployment
Removed sections:
- None
Templates requiring updates:
- .specify/templates/plan-template.md: ⚠ pending
- .specify/templates/spec-template.md: ⚠ pending
- .specify/templates/tasks-template.md: ⚠ pending
- .specify/templates/commands/sp.phr.md: ⚠ pending
- README.md: ⚠ pending
- docs/quickstart.md: ⚠ pending
Follow-up TODOs:
- TODO(RATIFICATION_DATE): Clarify original ratification date if applicable.
-->
# Physical AI & Humanoid Robotics — Embodied Intelligence in the Real World Constitution

## Project Overview
**Project Type**: AI/Spec-driven book creation
**Output**: Docusaurus site on GitHub Pages
**Tools**: Spec-Kit Plus, Claude Code, Docusaurus

## Core Principles

### Technical Accuracy
Correct robotics, AI, ROS 2, Gazebo, Unity, NVIDIA Isaac explanations; verify with primary sources.

### Clarity
For computer science, robotics, AI students (intermediate); Flesch-Kincaid Grade 10–12.

### Reproducibility
All tutorials, configs, commands, and code MUST be testable.

### Academic Rigor
Prefer peer-reviewed sources (≥50%); APA citations.

### Zero Plagiarism
Content MUST be original and pass plagiarism checks.

## Content Structure
- Module 1: Robotic Nervous System (ROS 2) — nodes, topics, services, rclpy, URDF
- Module 2: Digital Twin (Gazebo & Unity) — physics, sensors, Unity visualization
- Module 3: AI-Robot Brain (NVIDIA Isaac) — Isaac Sim, VSLAM, Nav2, RL
- Module 4: Vision–Language–Action (VLA) — Whisper, LLM → ROS planning, interaction
- Capstone: Autonomous Humanoid — voice → plan → navigate → detect → manipulate

## Weekly Breakdown (13 weeks)
- 1–2: Intro Physical AI
- 3–5: ROS 2 Fundamentals
- 6–7: Gazebo Simulation
- 8–10: NVIDIA Isaac
- 11–12: Humanoid Robotics
- 13: Conversational Robotics

## Citation & Fact-Checking
- APA style, ≥15 sources, ≥50% peer-reviewed
- All claims MUST have sources
- Each chapter ends with references

## Writing Requirements
- 5,000–7,000 words
- Include diagrams, tables, code blocks, architecture flows
- Use Docusaurus MDX (/docs/module-1/intro.md, etc.)
- Fenced code blocks, images via Claude Code

## Deployment
- Docusaurus build, GitHub repo
- Deploy on GitHub Pages
- Ensure links, navigation, and sidebar are correctly configured.

## Governance
This constitution supersedes all other practices. Amendments require documentation, approval, and a migration plan. All PRs/reviews MUST verify compliance.

**Version**: 1.0.0 | **Ratified**: 2025-12-07 | **Last Amended**: 2025-12-07
