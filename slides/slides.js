(function () {
  // Single source of truth for the deck. Append one entry per slide.
  // `takeaway` is what shows up in the right-hand cheat sheet; leave it null
  // for slides (like the title) that should not add a cheat-sheet card.
  var slides = [
    {
      id: "main",
      file: "main.html",
      nav: "Title",
      title: "Mind the Gaps",
      takeaway: null
    }
    // Future slides, e.g.:
    // {
    //   id: "why-ai-fails",
    //   file: "why-ai-fails.html",
    //   nav: "Why AI Fails",
    //   title: "Why AI Fails Predictably",
    //   takeaway: "AI doesn't fail randomly. It fills every gap with the most average answer."
    // }
  ];

  function getCurrentIndex() {
    var current = document.body.getAttribute("data-slide");
    for (var i = 0; i < slides.length; i++) {
      if (slides[i].id === current) {
        return i;
      }
    }
    return 0;
  }

  var currentIndex = getCurrentIndex();

  /* ---------- Column 1: navigation ---------- */

  function renderNav() {
    var nav = document.querySelector("[data-deck-nav]");
    if (!nav) {
      return;
    }

    slides.forEach(function (slide, index) {
      var link = document.createElement("a");
      link.className = "deck-nav__link";
      link.href = slide.file;
      link.textContent = slide.nav;

      if (index === currentIndex) {
        link.classList.add("is-active");
        link.setAttribute("aria-current", "page");
      }

      nav.appendChild(link);
    });
  }

  /* ---------- Column 3: cumulative cheat sheet ---------- */

  function renderCheatSheet() {
    var container = document.querySelector("[data-deck-cheat]");
    if (!container) {
      return;
    }

    var collected = [];
    for (var i = 0; i <= currentIndex; i++) {
      if (slides[i].takeaway) {
        collected.push(slides[i]);
      }
    }

    if (collected.length === 0) {
      var empty = document.createElement("li");
      empty.className = "cheat__empty";
      empty.textContent = "Your takeaways collect here, one per slide, as we move through the talk.";
      container.appendChild(empty);
      return;
    }

    collected.forEach(function (slide) {
      var item = document.createElement("li");
      item.className = "cheat__item";

      if (slide.id === slides[currentIndex].id) {
        item.classList.add("is-current");
      }

      var title = document.createElement("p");
      title.className = "cheat__item-title";
      title.textContent = slide.nav;

      var text = document.createElement("p");
      text.className = "cheat__item-text";
      text.textContent = slide.takeaway;

      item.appendChild(title);
      item.appendChild(text);
      container.appendChild(item);
    });
  }

  /* ---------- Prev / Next controls + arrow keys ---------- */

  function go(index) {
    if (index < 0 || index >= slides.length) {
      return;
    }
    window.location.href = slides[index].file;
  }

  function renderControls() {
    var controls = document.createElement("div");
    controls.className = "deck-controls";

    var prev = document.createElement("button");
    prev.type = "button";
    prev.className = "deck-controls__btn";
    prev.textContent = "\u2190 Prev";
    prev.disabled = currentIndex <= 0;
    prev.addEventListener("click", function () {
      go(currentIndex - 1);
    });

    var next = document.createElement("button");
    next.type = "button";
    next.className = "deck-controls__btn";
    next.textContent = "Next \u2192";
    next.disabled = currentIndex >= slides.length - 1;
    next.addEventListener("click", function () {
      go(currentIndex + 1);
    });

    controls.appendChild(prev);
    controls.appendChild(next);
    document.body.appendChild(controls);
  }

  document.addEventListener("keydown", function (event) {
    var tag = (event.target && event.target.tagName) || "";
    if (tag === "INPUT" || tag === "TEXTAREA") {
      return;
    }

    if (event.key === "ArrowRight") {
      go(currentIndex + 1);
    } else if (event.key === "ArrowLeft") {
      go(currentIndex - 1);
    }
  });

  /* ---------- Staged joke reveal (title slide) ---------- */

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

  renderNav();
  renderCheatSheet();
  renderControls();
  setupJokeReveal();
})();
