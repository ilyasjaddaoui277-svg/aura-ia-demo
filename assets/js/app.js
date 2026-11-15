/**
 * Template Name: AuraAI - AI Micro-SaaS & Prompt Workspace HTML5 Template
 * Author:        Ilyas Digital Studio
 * Version:       1.0.0
 * Description:   Main front-end interaction script (Theme switcher, RTL/LTR i18n, Token ROI Calculator, AI Workspace Simulator, Form Validation)
 */
(function () {
  "use strict";

  /* 1. Bilingual Translation Dictionary (EN / AR) */
  const i18n = {
    en: {
      nav_home: "Home",
      nav_features: "Features",
      nav_calculator: "ROI Calculator",
      nav_pricing: "Pricing",
      nav_workspace: "AI Workspace",
      nav_Enterprise: "Enterprise SLA",
      btn_launch: "Open Studio",
      hero_badge: "v1.0 Ready — Built for AI Micro-SaaS Founders",
      hero_title: "Launch Your AI SaaS & Prompt Studio in Hours, Not Months",
      hero_desc: "A production-grade, bilingual (RTL/LTR) HTML5 template engineered for AI startups, prompt engineering teams, and automation agencies.",
      btn_try_workspace: "Launch Interactive Workspace",
      btn_calc_roi: "Estimate Token Costs",
      calc_title: "Interactive AI Token & Team ROI Calculator",
      calc_subtitle: "Estimate monthly API expenditure and engineering hours saved based on team size and prompt volume."
    },
    ar: {
      nav_home: "الرئيسية",
      nav_features: "المميزات",
      nav_calculator: "حاسبة التكلفة",
      nav_pricing: "الأسعار",
      nav_workspace: "مساحة العمل الذكية",
      nav_Enterprise: "مقارنة الباقات",
      btn_launch: "افتح الاستوديو",
      hero_badge: "الإصدار 1.0 جاهز — مصمم لمؤسسي تطبيقات الذكاء الاصطناعي",
      hero_title: "أطلق منصتك لأدوات الذكاء الاصطناعي في ساعات بدلاً من أشهر",
      hero_desc: "قالب HTML5 احترافي ثنائي الاتجاه (عربي RTL / إنجليزي LTR) مصمم للشركات الناشئة، واستوديوهات هندسة الأوامر، ووكالات الأتمتة.",
      btn_try_workspace: "جرّب مساحة العمل التفاعلية",
      btn_calc_roi: "احسب تكلفة الـ Tokens",
      calc_title: "حاسبة تكلفة الـ Tokens والعائد على الاستثمار (ROI)",
      calc_subtitle: "قدّر التكاليف الشهرية وعدد ساعات العمل الموفرة لفريقك بناءً على حجم الاستخدام."
    }
  };

  /* 2. Theme Mode Persistence (Light / Dark) */
  const htmlEl = document.documentElement;
  const themeBtn = document.getElementById("themeToggleBtn");
  const langBtn = document.getElementById("langToggleBtn");
  const mobileMenuBtn = document.getElementById("mobileMenuBtn");
  const mainNavLinks = document.getElementById("mainNavLinks");

  function applyTheme(theme) {
    htmlEl.setAttribute("data-theme", theme);
    localStorage.setItem("aura_theme", theme);
    if (themeBtn) {
      themeBtn.textContent = theme === "dark" ? "☀️ Light" : "🌙 Dark";
      themeBtn.setAttribute("aria-label", "Switch color theme, current: " + theme);
    }
  }

  function applyLanguage(lang) {
    const dir = lang === "ar" ? "rtl" : "ltr";
    htmlEl.setAttribute("lang", lang);
    htmlEl.setAttribute("dir", dir);
    localStorage.setItem("aura_lang", lang);
    if (langBtn) {
      langBtn.textContent = lang === "ar" ? "EN | LTR" : "عربي | RTL";
    }
    const nodes = document.querySelectorAll("[data-i18n]");
    nodes.forEach(function (node) {
      const key = node.getAttribute("data-i18n");
      if (i18n[lang] && i18n[lang][key]) {
        node.textContent = i18n[lang][key];
      }
    });
  }

  const savedTheme = localStorage.getItem("aura_theme") || "light";
  const savedLang = localStorage.getItem("aura_lang") || "en";
  applyTheme(savedTheme);
  applyLanguage(savedLang);

  if (themeBtn) {
    themeBtn.addEventListener("click", function () {
      const nextTheme = htmlEl.getAttribute("data-theme") === "dark" ? "light" : "dark";
      applyTheme(nextTheme);
    });
  }

  if (langBtn) {
    langBtn.addEventListener("click", function () {
      const nextLang = htmlEl.getAttribute("lang") === "ar" ? "en" : "ar";
      applyLanguage(nextLang);
    });
  }

  if (mobileMenuBtn && mainNavLinks) {
    mobileMenuBtn.addEventListener("click", function () {
      const expanded = mainNavLinks.classList.toggle("mobile-open");
      mobileMenuBtn.setAttribute("aria-expanded", expanded ? "true" : "false");
    });
  }

  /* 3. Interactive AI Token & ROI Calculator */
  const teamInput = document.getElementById("calcTeamSize");
  const promptsInput = document.getElementById("calcPromptsPerDay");
  const modelSelect = document.getElementById("calcModelSelect");

  function updateCalculator() {
    if (!teamInput || !promptsInput || !modelSelect) {
      return;
    }
    const members = parseInt(teamInput.value, 10) || 1;
    const promptsPerDay = parseInt(promptsInput.value, 10) || 10;
    const ratePerThousand = parseFloat(modelSelect.value) || 0.015;

    document.getElementById("teamSizeVal").textContent = members + " users";
    document.getElementById("promptsDayVal").textContent = promptsPerDay + " runs/day";

    const monthlyPrompts = members * promptsPerDay * 22;
    const estimatedTokens = monthlyPrompts * 850;
    const apiCost = ((estimatedTokens / 1000) * ratePerThousand).toFixed(2);
    const hoursSaved = Math.round((monthlyPrompts * 4.5) / 60);
    const netSavings = Math.round(hoursSaved * 35 - parseFloat(apiCost));

    document.getElementById("resMonthlyTokens").textContent = estimatedTokens.toLocaleString();
    document.getElementById("resApiCost").textContent = "$" + apiCost + " / mo";
    document.getElementById("resHoursSaved").textContent = hoursSaved + " hrs / mo";
    document.getElementById("resNetRoi").textContent = "$" + netSavings.toLocaleString() + " / mo";
  }

  if (teamInput && promptsInput && modelSelect) {
    teamInput.addEventListener("input", updateCalculator);
    promptsInput.addEventListener("input", updateCalculator);
    modelSelect.addEventListener("change", updateCalculator);
    updateCalculator();
  }

  /* 4. Billing Cycle Toggle (Monthly / Annual) */
  const billingToggle = document.getElementById("billingCycleSelect");
  if (billingToggle) {
    billingToggle.addEventListener("change", function () {
      const isAnnual = billingToggle.value === "annual";
      const prices = document.querySelectorAll("[data-monthly-price]");
      prices.forEach(function (el) {
        const m = parseInt(el.getAttribute("data-monthly-price"), 10);
        const a = parseInt(el.getAttribute("data-annual-price"), 10);
        el.textContent = "$" + (isAnnual ? a : m);
      });
    });
  }

  /* 5. FAQ Accordion */
  const faqTriggers = document.querySelectorAll(".faq-trigger");
  faqTriggers.forEach(function (btn) {
    btn.addEventListener("click", function () {
      const parent = btn.closest(".faq-item");
      const isOpen = parent.classList.toggle("open");
      btn.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });
  });

  /* 6. Newsletter / Lead Capture Form Validation */
  const leadForm = document.getElementById("leadCaptureForm");
  if (leadForm) {
    leadForm.addEventListener("submit", function (e) {
      e.preventDefault();
      const emailField = document.getElementById("leadEmailInput");
      const feedbackBox = document.getElementById("leadFormFeedback");
      const emailVal = emailField ? emailField.value.trim() : "";
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      feedbackBox.classList.remove("hidden", "ui-state-error", "ui-state-success");
      if (!emailRegex.test(emailVal)) {
        feedbackBox.classList.add("ui-state-error");
        feedbackBox.textContent = "Please enter a valid work email address (e.g., founder@company.io).";
        return;
      }
      feedbackBox.classList.add("ui-state-success");
      feedbackBox.textContent = "Success! Your interactive sandbox access link has been queued.";
      leadForm.reset();
    });
  }

  /* 7. Interactive AI Workspace & Prompt Studio (workspace.html) */
  const promptSearchInput = document.getElementById("promptSearchInput");
  const categoryButtons = document.querySelectorAll(".filter-btn");
  const promptCards = document.querySelectorAll(".prompt-template-card");
  const emptyStateBox = document.getElementById("workspaceEmptyState");

  function filterTemplates() {
    if (!promptCards.length) {
      return;
    }
    const query = promptSearchInput ? promptSearchInput.value.toLowerCase().trim() : "";
    const activeBtn = document.querySelector(".filter-btn.active");
    const category = activeBtn ? activeBtn.getAttribute("data-category") : "all";
    let visibleCount = 0;

    promptCards.forEach(function (card) {
      const cardCat = card.getAttribute("data-category");
      const cardText = card.textContent.toLowerCase();
      const matchesCat = category === "all" || cardCat === category;
      const matchesQuery = !query || cardText.indexOf(query) !== -1;

      if (matchesCat && matchesQuery) {
        card.classList.remove("hidden");
        visibleCount++;
      } else {
        card.classList.add("hidden");
      }
    });

    if (emptyStateBox) {
      if (visibleCount === 0) {
        emptyStateBox.classList.remove("hidden");
      } else {
        emptyStateBox.classList.add("hidden");
      }
    }
  }

  if (promptSearchInput) {
    promptSearchInput.addEventListener("input", filterTemplates);
  }

  categoryButtons.forEach(function (btn) {
    btn.addEventListener("click", function () {
      categoryButtons.forEach(function (b) { b.classList.remove("active"); });
      btn.classList.add("active");
      filterTemplates();
    });
  });

  /* Use Template Button -> Populate Studio Editor */
  const useTemplateBtns = document.querySelectorAll(".use-template-btn");
  const promptTextarea = document.getElementById("studioPromptInput");
  useTemplateBtns.forEach(function (btn) {
    btn.addEventListener("click", function () {
      const promptText = btn.getAttribute("data-prompt");
      if (promptTextarea && promptText) {
        promptTextarea.value = promptText;
        promptTextarea.focus();
      }
    });
  });

  /* Simulate AI Generation with Loading, Validation Error, and Output States */
  const studioForm = document.getElementById("studioGeneratorForm");
  if (studioForm) {
    studioForm.addEventListener("submit", function (e) {
      e.preventDefault();
      const inputVal = promptTextarea ? promptTextarea.value.trim() : "";
      const toneVal = document.getElementById("studioToneSelect").value;
      const loadingBox = document.getElementById("studioLoadingState");
      const errorBox = document.getElementById("studioErrorState");
      const outputBox = document.getElementById("studioOutputState");
      const outputCode = document.getElementById("studioGeneratedOutput");

      loadingBox.classList.add("hidden");
      errorBox.classList.add("hidden");
      outputBox.classList.add("hidden");

      if (inputVal.length < 15) {
        errorBox.classList.remove("hidden");
        errorBox.textContent = "Validation Error: Please enter a descriptive prompt of at least 15 characters to generate a structured output.";
        return;
      }

      loadingBox.classList.remove("hidden");
      setTimeout(function () {
        loadingBox.classList.add("hidden");
        outputBox.classList.remove("hidden");
        const generated = [
          "### AuraAI Structured Output (" + toneVal.toUpperCase() + " MODE)",
          "------------------------------------------------------------",
          "• Input Objective: " + inputVal,
          "• Recommended Execution Framework:",
          "  1. Value Proposition Hook: Clear problem-solution headline tailored to target buyer.",
          "  2. Conversion Architecture: Interactive live preview + transparent pricing tiers.",
          "  3. Quality Assurance: W3C semantic HTML5, zero inline styles, RTL/LTR bidirectional support.",
          "• Estimated Token Usage: 312 tokens | Latency: 0.42s"
        ].join("
");
        outputCode.textContent = generated;
      }, 450);
    });
  }
})();
