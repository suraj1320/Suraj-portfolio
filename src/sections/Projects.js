import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import "../styles/Projects.css";

const Projects = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects = [
    {
      id: 1,
      title: "Online Shoes Store",
      description:
        "A full-featured e-commerce platform for selling shoes online. Features include product catalog with filtering and search, shopping cart functionality, user authentication, payment integration, order management, and admin dashboard. Built with modern web technologies for a seamless shopping experience.",
      technologies: ["HTML", "CSS", "JavaScript", "React", "Node.js", "Express", "MongoDB"],
      image: "/images/project1.jpg",
      github: "https://github.com/username/ecommerce-platform",
      live: "https://ecommerce-demo.netlify.app",
      featured: true,
      category: "Full Stack",
    },
    {
      id: 2,
      title: "BMI Calculator",
      description:
        "A user-friendly web application to calculate Body Mass Index (BMI) with instant results. Features include height and weight input validation, BMI category classification, health recommendations based on results, responsive design for all devices, and ability to track BMI history. Built with clean UI/UX principles.",
      technologies: ["HTML", "CSS", "JavaScript", "React", "Firebase"],
      image: "/images/project2.jpg",
      github: "https://github.com/username/task-manager",
      live: "https://taskapp-demo.netlify.app",
      featured: true,
      category: "Frontend",
    },
    {
      id: 3,
      title: "Online Ticket Reservation",
      description:
        "A comprehensive booking system for reserving tickets for events, movies, or travel. Features include real-time seat/venue selection, user registration and authentication, secure payment processing, booking confirmation and tickets, admin panel for managing events and bookings, and email notifications. Built with secure transaction handling.",
      technologies: ["HTML", "CSS", "JavaScript", "React", "Node.js", "PostgreSQL"],
      image: "/images/project3.jpg",
      github: "https://github.com/username/weather-dashboard",
      live: "https://weather-dash-demo.netlify.app",
      featured: false,
      category: "Full Stack",
    },
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <h2 className="section-title">My Projects</h2>
        <div
          ref={ref}
          className={`projects-grid ${inView ? "fade-in" : ""}`}
        >
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-image">
                <div className="image-placeholder">{project.title}</div>
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="technologies">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
                
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
