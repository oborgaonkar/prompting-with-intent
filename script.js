(function () {
  var navItems = [
    {
      label: "Home",
      href: "index.html"
    },
    {
      label: "Thesis",
      href: "topics/1-thesis.html"
    },
    {
      heading: "Topics",
      links: [
        {
          label: "Why AI Fails Predictably?",
          href: "topics/2-why-ai-fails.html"
        },
        {
          label: "General Prompt Structure",
          href: "topics/3-general-prompt-structure.html"
        },
        {
          label: "Directed vs. Discovered",
          href: "topics/6-directed-vs-discovered.html"
        },
        {
          label: "Prompt Depth",
          href: "topics/7-prompt-depth.html"
        },
        {
          label: "Rules and Skills",
          href: "topics/4-rules-and-skills.html"
        },
        {
          label: "Grounding",
          href: "topics/5-grounding.html"
        },
        {
          label: "Revised Prompt Structure",
          href: "topics/8-revised-prompt-structure.html"
        },
        {
          label: "Output Evaluation",
          href: "topics/9-output-evaluation.html"
        },
        {
          label: "Iteration & Recovery",
          href: "topics/10-iteration-and-recovery.html"
        }
      ]
    },
    {
      heading: "Closing",
      links: [
        {
          label: "Closing / Cheat Sheet",
          href: "topics/11-cheat-sheet.html"
        }
      ]
    }
  ];

  function getPathPrefix() {
    return window.location.pathname.indexOf("/topics/") !== -1 ? "../" : "";
  }

  function getCurrentPage() {
    var path = window.location.pathname;
    var fileName = path.substring(path.lastIndexOf("/") + 1) || "index.html";

    if (path.indexOf("/topics/") !== -1) {
      return "topics/" + fileName;
    }

    return fileName;
  }

  function createNavLink(item, currentPage) {
    var link = document.createElement("a");
    link.className = "site-nav__link";
    link.href = getPathPrefix() + item.href;
    link.textContent = item.label;

    if (item.href === currentPage) {
      link.classList.add("is-active");
      link.setAttribute("aria-current", "page");
    }

    return link;
  }

  function renderSiteNavigation() {
    var nav = document.querySelector("[data-site-nav]");

    if (!nav) {
      return;
    }

    var currentPage = getCurrentPage();

    navItems.forEach(function (item) {
      if (item.links) {
        var section = document.createElement("div");
        var headingId = "topics-heading";
        var heading = document.createElement("p");

        section.className = "site-nav__section";
        section.setAttribute("aria-labelledby", headingId);
        heading.className = "site-nav__heading";
        heading.id = headingId;
        heading.textContent = item.heading;
        section.appendChild(heading);

        item.links.forEach(function (linkItem) {
          section.appendChild(createNavLink(linkItem, currentPage));
        });

        nav.appendChild(section);
        return;
      }

      nav.appendChild(createNavLink(item, currentPage));
    });
  }

  renderSiteNavigation();

  var menuButton = document.querySelector(".menu-toggle");
  var closeTargets = document.querySelectorAll("[data-close-menu], .site-nav__link");
  var revealButtons = document.querySelectorAll("[data-example-reveal]");
  var revealGroupButtons = document.querySelectorAll("[data-example-reveal-group]");
  var tabGroups = document.querySelectorAll("[data-tabs]");

  function setMenuOpen(isOpen) {
    document.body.classList.toggle("menu-open", isOpen);
    menuButton.setAttribute("aria-expanded", String(isOpen));
  }

  if (menuButton) {
    menuButton.addEventListener("click", function () {
      setMenuOpen(!document.body.classList.contains("menu-open"));
    });

    closeTargets.forEach(function (target) {
      target.addEventListener("click", function () {
        setMenuOpen(false);
      });
    });
  }

  revealButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      var result = document.getElementById(button.dataset.exampleReveal);

      if (!result) {
        return;
      }

      result.hidden = false;
      button.setAttribute("aria-expanded", "true");
      button.hidden = true;
    });
  });

  revealGroupButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      var results = document.querySelectorAll('[data-example-group="' + button.dataset.exampleRevealGroup + '"]');

      results.forEach(function (result) {
        result.hidden = false;
      });

      button.setAttribute("aria-expanded", "true");
      button.hidden = true;
    });
  });

  tabGroups.forEach(function (group) {
    var tabs = group.querySelectorAll("[role='tab']");

    function setActiveTab(activeTab) {
      tabs.forEach(function (tab) {
        var panel = document.getElementById(tab.dataset.tabTarget);
        var isActive = tab === activeTab;

        tab.classList.toggle("is-active", isActive);
        tab.setAttribute("aria-selected", String(isActive));

        if (panel) {
          panel.hidden = !isActive;
        }
      });
    }

    tabs.forEach(function (tab, index) {
      tab.addEventListener("click", function () {
        setActiveTab(tab);
      });

      tab.addEventListener("keydown", function (event) {
        var nextIndex;

        if (event.key === "ArrowRight") {
          nextIndex = index + 1 >= tabs.length ? 0 : index + 1;
        } else if (event.key === "ArrowLeft") {
          nextIndex = index - 1 < 0 ? tabs.length - 1 : index - 1;
        } else if (event.key === "Home") {
          nextIndex = 0;
        } else if (event.key === "End") {
          nextIndex = tabs.length - 1;
        } else {
          return;
        }

        event.preventDefault();
        tabs[nextIndex].focus();
        setActiveTab(tabs[nextIndex]);
      });
    });
  });

  document.addEventListener("keydown", function (event) {
    if (menuButton && event.key === "Escape") {
      setMenuOpen(false);
    }
  });
})();
