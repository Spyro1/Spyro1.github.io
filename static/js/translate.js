const elements = document.querySelectorAll("[data-translate]");
// const languageSelector = document.getElementById("language");
const dropdown = document.getElementById("language-selector");
const label = dropdown.querySelector(".dropdown__label");
const options = dropdown.querySelectorAll(".dropdown__option");

const TRANSLATION_SOURCE_LANGUAGE = "en";

function createTechList(techItems, className) {
  const list = document.createElement("ul");
  list.className = className;

  (techItems || []).forEach(tech => {
    const li = document.createElement("li");
    li.textContent = tech;
    list.appendChild(li);
  });

  return list;
}

function createProjectCard(project, linkLabelMap, useFullDescription) {
  const wrapper = document.createElement("div");
  wrapper.className = "project";

  const image = document.createElement("img");
  image.className = "project__image";
  image.src = project.image;
  image.alt = project.alt || project.name || "Project image";

  const content = document.createElement("div");
  content.className = "project__content";

  const name = document.createElement("div");
  name.className = "project__name";
  name.textContent = project.name || "";

  const description = document.createElement("div");
  description.className = "project__description";
  description.textContent = useFullDescription
    ? (project.fullDescription || project.description || "")
    : (project.description || project.fullDescription || "");

  content.appendChild(name);
  content.appendChild(description);

  if (Array.isArray(project.links) && project.links.length > 0) {
    const links = document.createElement("div");
    links.className = "project__links";

    project.links.forEach(linkItem => {
      if (!linkItem || !linkItem.url) {
        return;
      }

      const a = document.createElement("a");
      a.href = linkItem.url;
      a.className = "button";
      a.textContent = linkLabelMap[linkItem.type] || linkItem.label || (linkLabelMap.live || "Live =>");
      links.appendChild(a);
    });

    content.appendChild(links);
  }

  wrapper.appendChild(image);
  wrapper.appendChild(createTechList(project.tech, "project__techs"));
  wrapper.appendChild(content);

  return wrapper;
}

function renderProjects(translations) {
  const list = document.getElementById("dynamic-project-list");
  if (!list || !Array.isArray(translations.projects_data)) {
    return;
  }

  const linkLabelMap = {
    live: translations.live_link || "Live =>",
    github: translations.github_link || "Github =>",
    gitlab: translations.gitlab_link || "GitLab =>"
  };

  list.innerHTML = "";

  translations.projects_data.forEach(project => {
    list.appendChild(createProjectCard(project, linkLabelMap, true));
  });
}

function renderHomeProjects(translations) {
  const list = document.getElementById("dynamic-home-project-list");
  if (!list || !Array.isArray(translations.projects_data)) {
    return;
  }

  const linkLabelMap = {
    live: translations.live_link || "Live =>",
    github: translations.github_link || "Github =>",
    gitlab: translations.gitlab_link || "GitLab =>"
  };

  list.innerHTML = "";
  translations.projects_data.slice(0, 3).forEach(project => {
    list.appendChild(createProjectCard(project, linkLabelMap, false));
  });
}

function renderExperience(translations) {
  const container = document.getElementById("dynamic-experience-list");
  if (!container || !Array.isArray(translations.about_experience_data)) {
    return;
  }

  container.innerHTML = "";

  translations.about_experience_data.forEach(item => {
    const wrapper = document.createElement("div");
    wrapper.className = "experience__item";

    const period = document.createElement("div");
    period.className = "experience__period";
    period.textContent = item.period || "";

    const details = document.createElement("div");
    details.className = "experience__details";

    const title = document.createElement("h3");
    title.className = "experience__title";
    title.textContent = item.title || "";

    const company = document.createElement("div");
    company.className = "experience__company";
    company.textContent = item.company || "";

    const description = document.createElement("div");
    description.className = "experience__description";
    description.textContent = item.description || "";

    details.appendChild(title);
    details.appendChild(company);
    details.appendChild(description);
    details.appendChild(createTechList(item.tech, "experience__tech"));

    wrapper.appendChild(period);
    wrapper.appendChild(details);
    container.appendChild(wrapper);
  });
}

function renderAboutSkills(translations) {
  const container = document.getElementById("dynamic-about-skills-list");
  if (!container || !Array.isArray(translations.about_skills_data)) {
    return;
  }

  container.innerHTML = "";

  translations.about_skills_data.forEach(category => {
    const block = document.createElement("div");
    block.className = "skill-category";

    const title = document.createElement("h3");
    title.className = "skill-category__title";
    title.textContent = category.title || "";

    const items = document.createElement("div");
    items.className = "skill-category__items";

    (category.items || []).forEach(item => {
      const row = document.createElement("div");
      row.className = "skill-item";

      const name = document.createElement("div");
      name.className = "skill-item__name";
      name.textContent = item.name || "";

      const level = document.createElement("div");
      level.className = "skill-item__level";
      level.textContent = item.level || "";

      row.appendChild(name);
      row.appendChild(level);
      items.appendChild(row);
    });

    block.appendChild(title);
    block.appendChild(items);
    container.appendChild(block);
  });
}

function fetchTranslations(lang) {
  const basePromise = fetch(`translations/${TRANSLATION_SOURCE_LANGUAGE}.json`).then(res => res.json());
  if (lang === TRANSLATION_SOURCE_LANGUAGE) {
    return basePromise;
  }

  const selectedPromise = fetch(`translations/${lang}.json`).then(res => res.json());
  return Promise.all([basePromise, selectedPromise]).then(([base, selected]) => ({
    ...base,
    ...selected
  }));
}

function setLanguage(lang) {
  fetchTranslations(lang)
    .then(translations => {
      elements.forEach(el => {
        const key = el.getAttribute("data-translate");
        if (translations[key]) {
          // Handle different element types
          if (el.tagName === 'META') {
            if (el.hasAttribute('content')) {
              el.setAttribute('content', translations[key]);
            }
          } else if (el.tagName === 'TITLE') {
            el.textContent = translations[key];
          } else {
            el.textContent = translations[key];
          }
        }
      });

      // Update CV download links based on language
      const cvLinks = document.querySelectorAll('a[download="Marton_Szenes_CV.pdf"]');
      cvLinks.forEach(link => {
        if (lang === 'hu') {
          link.href = './static/cv/Szenes Márton - CV HU.pdf';
          // link.download = 'Szenes_Marton_CV_HU.pdf';
        } else {
          link.href = './static/cv/Szenes Márton - CV EN.pdf';
          // link.download = 'Marton_Szenes_CV.pdf';
        }
      });

      renderProjects(translations);
      renderHomeProjects(translations);
      renderExperience(translations);
      renderAboutSkills(translations);

      document.documentElement.lang = lang;
      localStorage.setItem("language", lang);   // Save selected language
      label.textContent = lang;                 // Update dropdown label
    });
}

// Handle custom dropdown
options.forEach(option => {
  option.addEventListener("click", () => {
    const selectedLang = option.textContent.trim();
    label.textContent = selectedLang;       // Update visible label
    setLanguage(selectedLang);              // Apply translation
  });
});

// Load saved language or default to English
const savedLang = localStorage.getItem("language") || "en";
setLanguage(savedLang);
