/**
 * Template Name: AuraAI - AI Micro-SaaS & Prompt Workspace HTML5 Template
 * Author:        Ilyas Digital Studio
 * Version:       1.1.0
 * Description:   Main front-end interaction script (Theme switcher, Full RTL/LTR i18n, Token ROI Calculator, AI Workspace Simulator, Form Validation)
 */
(function () {
  "use strict";

  /* 1. Complete Bilingual Translation Dictionary (EN / AR) across all 3 pages */
  const i18n = {
    en: {
      nav_home: "Home",
      nav_features: "Features",
      nav_calculator: "ROI Calculator",
      nav_pricing: "Pricing",
      nav_workspace: "AI Workspace",
      nav_Enterprise: "Enterprise SLA",
      btn_launch: "Open Studio",
      btn_upgrade: "Upgrade Plan",
      hero_badge: "v1.1 Ready — Built for AI Micro-SaaS Founders",
      hero_title: "Launch Your AI SaaS & Prompt Studio in Hours, Not Months",
      hero_desc: "A production-grade, bilingual (RTL/LTR) HTML5 template engineered for AI startups, prompt engineering teams, and automation agencies.",
      btn_try_workspace: "Launch Interactive Workspace",
      btn_calc_roi: "Estimate Token Costs",
      metric_1_sub: "W3C Semantic HTML5",
      metric_2_sub: "Instant Arabic & English",
      metric_3_sub: "External Framework Bloat",
      demo_live_label: "AuraAI Studio — Live Preview",
      feat_badge: "Why Choose AuraAI",
      feat_title: "Engineered for High-Converting AI Products",
      feat_subtitle: "Every component is crafted with clean modular CSS variables, accessible ARIA states, and real interactive workflows.",
      feat_1_title: "Interactive Prompt Studio",
      feat_1_desc: "Includes a dedicated workspace page with live category filtering, search, loading spinners, empty states, and input validation.",
      feat_2_title: "True Bidirectional RTL / LTR",
      feat_2_desc: "Switch seamlessly between English (LTR) and Arabic (RTL) with one click. Built from day one for global and MENA markets.",
      feat_3_title: "Token & ROI Cost Estimator",
      feat_3_desc: "Help prospective SaaS buyers calculate their monthly token consumption and team productivity savings right on the landing page.",
      feat_4_title: "Dark & Light Theme Tokens",
      feat_4_desc: "Powered by native CSS custom properties with automatic LocalStorage persistence and zero flash of unstyled content.",
      feat_5_title: "Envato Code Standards",
      feat_5_desc: "Strict separation of structure and presentation: zero inline styles, W3C valid HTML5, and documented CSS Table of Contents.",
      feat_6_title: "Free GitHub Pages Demo Ready",
      feat_6_desc: "Pure static architecture means you can host your live preview demo on GitHub Pages, Cloudflare Pages, or Vercel at $0 cost.",
      calc_badge: "Interactive Utility",
      calc_title: "Interactive AI Token & Team ROI Calculator",
      calc_subtitle: "Estimate monthly API expenditure and engineering hours saved based on team size and prompt volume.",
      calc_team_label: "Active Team Members",
      calc_runs_label: "Workflow Executions per User / Day",
      calc_model_label: "Select Foundation Model Tier",
      calc_res_tokens: "Estimated Monthly Tokens",
      calc_res_spend: "Estimated API Spend",
      calc_res_hours: "Team Time Saved",
      calc_res_roi: "Estimated Net Value Created",
      price_badge: "Transparent Pricing",
      price_title: "Flexible Plans That Scale With Your Usage",
      price_subtitle: "Switch between monthly and annual billing to preview dynamic pricing updates.",
      billing_label: "Billing Cycle:",
      discount_badge: "2 Months Free on Annual",
      plan_starter_name: "Starter",
      plan_starter_desc: "For solo makers & indie hackers",
      plan_pro_ribbon: "Most Popular",
      plan_pro_name: "Growth Pro",
      plan_pro_desc: "For scaling startups & agencies",
      plan_ent_name: "Enterprise",
      plan_ent_desc: "For organizations needing custom SLAs",
      per_month: "per month",
      btn_start_trial: "Start Free Trial",
      btn_launch_pro: "Launch Growth Plan",
      btn_compare_sla: "Compare Enterprise SLA",
      faq_badge: "Frequently Asked Questions",
      faq_title: "Everything You Need to Know",
      faq_q1: "Can I host the live preview of this template on GitHub Pages for free?",
      faq_a1: "Yes! Because AuraAI is built with clean, standard-compliant HTML5, CSS3, and Vanilla ES6 JavaScript without server-side dependencies, you can deploy it directly on GitHub Pages, Vercel, or Netlify for free.",
      faq_q2: "How does the Arabic RTL and English LTR switcher work?",
      faq_a2: "Clicking the language button updates the document dir and lang attributes dynamically, translates tagged interface strings, and saves the user preference in LocalStorage.",
      faq_q3: "Are all visual assets and icons safe for commercial redistribution?",
      faq_a3: "Absolutely. All SVG graphics and UI icons included in the package are 100% custom-authored specifically for this template, requiring no external attribution or paid stock licenses.",
      lead_badge: "Instant Sandbox Access",
      lead_title: "Request Your Interactive API Sandbox",
      lead_subtitle: "Test our client-side form validation by submitting your work email below.",
      lead_email_label: "Work Email Address *",
      lead_btn: "Get Instant Sandbox Link",
      ws_sidebar_title: "Prompt Categories",
      ws_cat_all: "All Workflows (4)",
      ws_cat_mkt: "Marketing & SEO (2)",
      ws_cat_prod: "Product & SaaS (1)",
      ws_cat_sup: "Customer Support (1)",
      ws_badge: "Interactive Workspace",
      ws_title: "AI Prompt Engineering Studio",
      ws_subtitle: "Select a verified template below or write your own prompt to test loading, validation error, and structured output states.",
      ws_btn_load: "Load Into Studio",
      ws_sandbox_title: "Prompt Execution Sandbox",
      ws_prompt_label: "Prompt Instructions (Minimum 15 characters) *",
      ws_tone_label: "Output Tone & Format",
      ws_run_btn: "Run Prompt Simulation",
      sla_badge: "Enterprise Technical Matrix",
      sla_title: "Compare Plans, Security & API Throughput",
      sla_subtitle: "Detailed specification breakdown for technical decision-makers and procurement teams."
    },
    ar: {
      nav_home: "الرئيسية",
      nav_features: "المميزات",
      nav_calculator: "حاسبة التكلفة",
      nav_pricing: "الأسعار",
      nav_workspace: "مساحة العمل الذكية",
      nav_Enterprise: "مقارنة الباقات",
      btn_launch: "افتح الاستوديو",
      btn_upgrade: "ترقية الباقة",
      hero_badge: "الإصدار 1.1 جاهز — مصمم لمؤسسي تطبيقات الذكاء الاصطناعي",
      hero_title: "أطلق منصتك لأدوات الذكاء الاصطناعي في ساعات بدلاً من أشهر",
      hero_desc: "قالب HTML5 احترافي ثنائي الاتجاه (عربي RTL / إنجليزي LTR) مصمم للشركات الناشئة، واستوديوهات هندسة الأوامر، ووكالات الأتمتة.",
      btn_try_workspace: "جرّب مساحة العمل التفاعلية",
      btn_calc_roi: "احسب تكلفة الـ Tokens",
      metric_1_sub: "كود HTML5 قياسي متوافق مع W3C",
      metric_2_sub: "تبديل فوري عربي وإنجليزي",
      metric_3_sub: "بدون إضافات خارجية ثقيلة",
      demo_live_label: "استوديو AuraAI — معاينة حية",
      feat_badge: "لماذا تختار AuraAI",
      feat_title: "مصمم خصيصاً لمنتجات الذكاء الاصطناعي عالية التحويل",
      feat_subtitle: "تم بناء كل مكون باستخدام متغيرات CSS المعيارية، وخصائص الوصولية، وتجربة المستخدم التفاعلية.",
      feat_1_title: "استوديو أوامر تفاعلي متكامل",
      feat_1_desc: "يتضمن صفحة مساحة عمل مخصصة مع فلترة فورية حسب الفئة، وبحث حي، وحالات التحميل والفراغ والتحقق من المدخلات.",
      feat_2_title: "دعم أصيل للغتين العربية والإنجليزية (RTL / LTR)",
      feat_2_desc: "انتقل بسلاسة بين الإنجليزية والعربية بضغطة زر واحدة، مصمم منذ البداية للأسواق العالمية والعربية.",
      feat_3_title: "حاسبة تكلفة الـ Tokens والعائد (ROI)",
      feat_3_desc: "ساعد عملاءك على حساب استهلاكهم الشهري والتوفير في ساعات عمل الفريق مباشرة من الصفحة الرئيسية.",
      feat_4_title: "الوضع الليلي والنهاري التلقائي",
      feat_4_desc: "يعمل بمتغيرات CSS القياسية مع حفظ تلقائي لتفضيلات الزائر في المتصفح دون وميض.",
      feat_5_title: "متوافق مع معايير Envato الصارمة",
      feat_5_desc: "فصل تام بين الهيكل والتصميم: صفر أنماط مضمنة (Zero Inline Styles)، وكود نظيف مفهرس.",
      feat_6_title: "جاهز للاستضافة المجانية عبر GitHub Pages",
      feat_6_desc: "بنية ثابتة خفيفة تتيح لك استضافة رابط المعاينة الحية مجاناً بالكامل على GitHub Pages أو Vercel.",
      calc_badge: "أداة تفاعلية",
      calc_title: "حاسبة تكلفة الـ Tokens والعائد على الاستثمار (ROI)",
      calc_subtitle: "قدّر التكاليف الشهرية وعدد ساعات العمل الموفرة لفريقك بناءً على حجم الاستخدام.",
      calc_team_label: "عدد أعضاء الفريق النشطين",
      calc_runs_label: "عدد الأوامر المنفذة لكل عضو / يومياً",
      calc_model_label: "اختر فئة نموذج الذكاء الاصطناعي",
      calc_res_tokens: "إجمالي الـ Tokens الشهري المقدر",
      calc_res_spend: "التكلفة الشهرية المقدرة للـ API",
      calc_res_hours: "ساعات عمل الفريق الموفرة",
      calc_res_roi: "صافي القيمة المالية الموفرة شهرياً",
      price_badge: "أسعار شفافة",
      price_title: "باقات مرنة تنمو مع حجم أعمالك",
      price_subtitle: "بدّل بين الدفع الشهري والسنوي لمعاينة التحديث الديناميكي للأسعار.",
      billing_label: "دورة الفوترة:",
      discount_badge: "شهران مجاناً عند الدفع السنوي",
      plan_starter_name: "باقة البداية (Starter)",
      plan_starter_desc: "للمطورين المستقلين ورواد الأعمال الأفراد",
      plan_pro_ribbon: "الأكثر طلباً",
      plan_pro_name: "باقة النمو (Growth Pro)",
      plan_pro_desc: "للشركات الناشئة والوكالات الرقمية",
      plan_ent_name: "باقة الشركات (Enterprise)",
      plan_ent_desc: "للمؤسسات التي تتطلب خوادم خاصة واتفاقية SLA",
      per_month: "شهرياً",
      btn_start_trial: "ابدأ التجربة المجانية",
      btn_launch_pro: "اشترك في باقة النمو",
      btn_compare_sla: "قارن مواصفات الشركات",
      faq_badge: "الأسئلة الشائعة",
      faq_title: "كل ما تحتاج إلى معرفته",
      faq_q1: "هل يمكنني استضافة المعاينة الحية لهذا القالب مجاناً على GitHub Pages؟",
      faq_a1: "نعم بالتأكيد! لأن القالب مبني بـ HTML5 وCSS3 وJavaScript قياسي بدون تعقيدات خوادم خلفية، يمكنك رفعه مجاناً على GitHub Pages أو Netlify.",
      faq_q2: "كيف يعمل مبدّل اللغة العربية (RTL) والإنجليزية (LTR)؟",
      faq_a2: "عند النقر على زر اللغة يتم تحديث اتجاه الصفحة وخصائص اللغة فوراً مع ترجمة النصوص وحفظ اختيار الزائر تلقائياً.",
      faq_q3: "هل جميع الأيقونات والرسوم آمنة لإعادة التوزيع التجاري؟",
      faq_a3: "نعم 100%. جميع رسوم الـ SVG والشعارات مرسومة برمجياً خصيصاً لهذا القالب ولا تتطلب أي تراخيص خارجية.",
      lead_badge: "تجربة فورية",
      lead_title: "اطلب رابط تجربة بيئة الـ API التفاعلية",
      lead_subtitle: "جرّب نظام التحقق الفوري من صحة البريد الإلكتروني عبر النموذج أدناه.",
      lead_email_label: "البريد الإلكتروني للعمل *",
      lead_btn: "احصل على رابط التجربة الفوري",
      ws_sidebar_title: "فئات الأوامر الذكية",
      ws_cat_all: "جميع القوالب (4)",
      ws_cat_mkt: "التسويق والـ SEO (2)",
      ws_cat_prod: "المنتجات والـ SaaS (1)",
      ws_cat_sup: "دعم العملاء (1)",
      ws_badge: "مساحة عمل تفاعلية",
      ws_title: "استوديو هندسة أوامر الذكاء الاصطناعي",
      ws_subtitle: "اختر قالباً جاهزاً أو اكتب أمرك الخاص لاختبار حالات التحميل والتحقق وتوليد المخرجات.",
      ws_btn_load: "تحميل في الاستوديو",
      ws_sandbox_title: "بيئة تشغيل ومحاكاة الأوامر",
      ws_prompt_label: "تعليمات الأمر البرمجي (15 حرفاً على الأقل) *",
      ws_tone_label: "نبرة وأسلوب المخرجات",
      ws_run_btn: "تشغيل محاكاة الأمر",
      sla_badge: "مصفوفة المواصفات التقنية للشركات",
      sla_title: "مقارنة الباقات والأمان وقدرة الـ API",
      sla_subtitle: "تفاصيل تقنية شاملة لصناع القرار وفرق المشتريات التقنية."
    }
  };

  /* Safe LocalStorage wrapper */
  function getStoredValue(key, fallback) {
    try {
      return localStorage.getItem(key) || fallback;
    } catch (e) {
      return fallback;
    }
  }

  function setStoredValue(key, val) {
    try {
      localStorage.setItem(key, val);
    } catch (e) {
      // Ignore storage errors in private browsing
    }
  }

  /* 2. Theme & Language Initialization and Toggles */
  const htmlEl = document.documentElement;
  const themeBtn = document.getElementById("themeToggleBtn");
  const langBtn = document.getElementById("langToggleBtn");
  const mobileMenuBtn = document.getElementById("mobileMenuBtn");
  const mainNavLinks = document.getElementById("mainNavLinks");

  function applyTheme(theme) {
    htmlEl.setAttribute("data-theme", theme);
    setStoredValue("aura_theme", theme);
    if (themeBtn) {
      const currentLang = htmlEl.getAttribute("lang") || "en";
      if (currentLang === "ar") {
        themeBtn.textContent = theme === "dark" ? "☀️ نهاري" : "🌙 ليلي";
      } else {
        themeBtn.textContent = theme === "dark" ? "☀️ Light" : "🌙 Dark";
      }
      themeBtn.setAttribute("aria-label", "Switch color theme, current: " + theme);
    }
  }

  function updateCalculator() {
    const teamInput = document.getElementById("calcTeamSize");
    const promptsInput = document.getElementById("calcPromptsPerDay");
    const modelSelect = document.getElementById("calcModelSelect");
    if (!teamInput || !promptsInput || !modelSelect) {
      return;
    }
    const currentLang = htmlEl.getAttribute("lang") || "en";
    const members = parseInt(teamInput.value, 10) || 1;
    const promptsPerDay = parseInt(promptsInput.value, 10) || 10;
    const ratePerThousand = parseFloat(modelSelect.value) || 0.015;

    document.getElementById("teamSizeVal").textContent =
      currentLang === "ar" ? members + " مستخدمين" : members + " users";
    document.getElementById("promptsDayVal").textContent =
      currentLang === "ar" ? promptsPerDay + " عملية/يوم" : promptsPerDay + " runs/day";

    const monthlyPrompts = members * promptsPerDay * 22;
    const estimatedTokens = monthlyPrompts * 850;
    const apiCost = ((estimatedTokens / 1000) * ratePerThousand).toFixed(2);
    const hoursSaved = Math.round((monthlyPrompts * 4.5) / 60);
    const netSavings = Math.round(hoursSaved * 35 - parseFloat(apiCost));

    const moUnit = currentLang === "ar" ? " / شهرياً" : " / mo";
    const hrUnit = currentLang === "ar" ? " ساعة / شهرياً" : " hrs / mo";

    document.getElementById("resMonthlyTokens").textContent = estimatedTokens.toLocaleString();
    document.getElementById("resApiCost").textContent = "$" + apiCost + moUnit;
    document.getElementById("resHoursSaved").textContent = hoursSaved + hrUnit;
    document.getElementById("resNetRoi").textContent = "$" + netSavings.toLocaleString() + moUnit;
  }

  function applyLanguage(lang) {
    const dir = lang === "ar" ? "rtl" : "ltr";
    htmlEl.setAttribute("lang", lang);
    htmlEl.setAttribute("dir", dir);
    setStoredValue("aura_lang", lang);
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
    applyTheme(htmlEl.getAttribute("data-theme") || "light");
    updateCalculator();
  }

  const savedTheme = getStoredValue("aura_theme", "light");
  const savedLang = getStoredValue("aura_lang", "en");
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

  /* 3. Bind Calculator Listeners */
  const teamInput = document.getElementById("calcTeamSize");
  const promptsInput = document.getElementById("calcPromptsPerDay");
  const modelSelect = document.getElementById("calcModelSelect");

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
      const isAr = htmlEl.getAttribute("lang") === "ar";

      feedbackBox.classList.remove("hidden", "ui-state-error", "ui-state-success");
      if (!emailRegex.test(emailVal)) {
        feedbackBox.classList.add("ui-state-error");
        feedbackBox.textContent = isAr
          ? "يرجى إدخال بريد إلكتروني صحيح للعمل (مثال: founder@company.io)."
          : "Please enter a valid work email address (e.g., founder@company.io).";
        return;
      }
      feedbackBox.classList.add("ui-state-success");
      feedbackBox.textContent = isAr
        ? "تم بنجاح! تم إرسال رابط الدخول التجريبي إلى بريدك الإلكتروني."
        : "Success! Your interactive sandbox access link has been queued.";
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
      const isAr = htmlEl.getAttribute("lang") === "ar";

      loadingBox.classList.add("hidden");
      errorBox.classList.add("hidden");
      outputBox.classList.add("hidden");

      if (inputVal.length < 15) {
        errorBox.classList.remove("hidden");
        errorBox.textContent = isAr
          ? "خطأ في التحقق: يرجى إدخال أمر وصفي لا يقل عن 15 حرفاً لتوليد المخرجات."
          : "Validation Error: Please enter a descriptive prompt of at least 15 characters to generate a structured output.";
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
        ].join("\n");
        outputCode.textContent = generated;
      }, 450);
    });
  }
})();
