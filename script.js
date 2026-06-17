(function () {
  var navItems = [
    {
      label: "Home",
      href: "index.html"
    },
    {
      label: "Why AI Fails Predictably",
      href: "topics/2-why-ai-fails.html"
    },
    {
      label: "Prompt Structures are a Menu",
      href: "topics/3-general-prompt-structure.html"
    },
    {
      label: "Lets Design Together",
      href: "topics/1-lets-design-together.html"
    },
    {
      heading: "Levers",
      links: [


        {
          label: "Directed vs. Discovered",
          href: "topics/6-directed-vs-discovered.html"
        },
        {
          label: "Process",
          href: "topics/12-process.html"
        },
        {
          label: "Prompt Effort",
          href: "topics/7-prompt-depth.html"
        },
        {
          label: "Grounding",
          href: "topics/5-grounding.html"
        },
        {
          label: "Rules and Skills",
          href: "topics/4-rules-and-skills.html"
        }
      ]
    },
    {
      heading: "Closing",
      links: [
        {
          label: "Output Evaluation",
          href: "topics/9-output-evaluation.html"
        },
        {
          label: "Iteration Or Recovery",
          href: "topics/10-iteration-and-recovery.html"
        },
        {
          label: "Closing",
          href: "topics/11-closing.html"
        },
        {
          label: "Cheat Sheet",
          href: "topics/13-cheat-sheet.html"
        }
      ]
    }
  ];

  function getPathPrefix() {
    var path = window.location.pathname;
    return path.indexOf("/topics/") !== -1 ? "../" : "";
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

  function renderSidebarFooter() {
    var inner = document.querySelector(".sidebar__inner");

    if (!inner) {
      return;
    }

    var footer = document.createElement("div");
    footer.className = "sidebar__footer";

    var madeBy = document.createElement("p");
    madeBy.className = "sidebar__footer-line";
    madeBy.textContent = "Made by Onkar Borgaonkar";

    var updated = document.createElement("p");
    updated.className = "sidebar__footer-line";
    updated.textContent = "Last updated: June 17, 2026";

    footer.appendChild(madeBy);
    footer.appendChild(updated);
    inner.appendChild(footer);
  }

  renderSiteNavigation();
  renderSidebarFooter();

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

  document.querySelectorAll("[data-spec-slider]").forEach(function (slider) {
    var range = slider.querySelector("[data-spec-range]");

    if (!range) {
      return;
    }

    var texts = slider.querySelectorAll("[data-spec-text]");
    var stops = slider.querySelectorAll("[data-spec-stop]");

    function update() {
      texts.forEach(function (text) {
        text.classList.toggle("is-selected", text.dataset.specText === range.value);
      });

      stops.forEach(function (stop) {
        stop.classList.toggle("is-active", stop.dataset.specStop === range.value);
      });
    }

    range.addEventListener("input", update);
    update();
  });

  document.querySelectorAll("[data-reveal-target]").forEach(function (trigger) {
    trigger.addEventListener("click", function () {
      var target = document.getElementById(trigger.dataset.revealTarget);

      if (target) {
        target.hidden = false;
      }
    });
  });

  document.addEventListener("keydown", function (event) {
    if (menuButton && event.key === "Escape") {
      setMenuOpen(false);
    }
  });

  function setupJokeReveal() {
    var button = document.querySelector("[data-joke-reveal]");
    var figures = document.querySelectorAll("[data-joke-stage]");

    if (!button || figures.length === 0) {
      return;
    }

    var labels = ["Reveal the others", "Now watch them self-correct", ""];
    var stage = 0;
    var maxStage = 2;

    function applyStage() {
      figures.forEach(function (figure) {
        var figureStage = Number(figure.getAttribute("data-joke-stage"));
        var shouldShow = figureStage <= stage;
        var wasHidden = figure.hidden;

        figure.hidden = !shouldShow;

        if (shouldShow && wasHidden) {
          figure.classList.add("is-entering");
          requestAnimationFrame(function () {
            requestAnimationFrame(function () {
              figure.classList.remove("is-entering");
            });
          });
        }
      });

      if (stage >= maxStage) {
        button.hidden = true;
      } else {
        button.textContent = labels[stage];
      }
    }

    button.textContent = labels[0];
    applyStage();

    button.addEventListener("click", function () {
      if (stage < maxStage) {
        stage += 1;
        applyStage();
      }
    });
  }

  setupJokeReveal();
})();
