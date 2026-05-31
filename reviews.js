const { useEffect, useMemo, useRef, useState } = React;

const SUPABASE_URL = "PASTE_SUPABASE_URL_HERE";
const SUPABASE_ANON_KEY = "PASTE_SUPABASE_ANON_KEY_HERE";

const supabaseIsConfigured =
  SUPABASE_URL !== "PASTE_SUPABASE_URL_HERE" &&
  SUPABASE_ANON_KEY !== "PASTE_SUPABASE_ANON_KEY_HERE";

const supabaseClient = supabaseIsConfigured
  ? window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY)
  : null;

const fallbackReviews = [
  {
    id: "sample-1",
    name: "Nabila Rahman",
    rating: 5,
    message: "The atmosphere feels premium and warm. Exactly the kind of cafe Gulshan needs.",
    created_at: "2026-05-28T10:30:00.000Z",
  },
  {
    id: "sample-2",
    name: "Arman Chowdhury",
    rating: 5,
    message: "Beautiful coffee, calm lighting, and a very polished cafe mood. Looking forward to opening day.",
    created_at: "2026-05-27T15:45:00.000Z",
  },
  {
    id: "sample-3",
    name: "Tasnima Karim",
    rating: 4,
    message: "The brand feels cozy and elegant. The dessert preview already looks amazing.",
    created_at: "2026-05-26T12:10:00.000Z",
  },
];

function formatDate(value) {
  return new Intl.DateTimeFormat("en", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(new Date(value));
}

function Stars({ rating, interactive = false, onChange, hoveredRating, onHover }) {
  return React.createElement(
    "div",
    { className: "flex gap-1", "aria-label": `${rating} star rating` },
    [1, 2, 3, 4, 5].map((star) => {
      const isActive = star <= (hoveredRating || rating);
      return React.createElement(
        "button",
        {
          key: star,
          type: "button",
          disabled: !interactive,
          onClick: interactive ? () => onChange(star) : undefined,
          onMouseEnter: interactive ? () => onHover(star) : undefined,
          onMouseLeave: interactive ? () => onHover(0) : undefined,
          className: [
            "text-2xl leading-none transition duration-200",
            interactive ? "hover:scale-125 focus:scale-125 focus:outline-none" : "cursor-default",
            isActive ? "text-gold drop-shadow-[0_0_12px_rgba(212,168,95,0.45)]" : "text-muted/45",
          ].join(" "),
          "aria-label": interactive ? `${star} stars` : undefined,
        },
        "★",
      );
    }),
  );
}

function CountUp({ value, suffix = "" }) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    let frame;
    const duration = 900;
    const start = performance.now();

    function tick(now) {
      const progress = Math.min((now - start) / duration, 1);
      setCurrent(Number((value * progress).toFixed(value % 1 ? 1 : 0)));

      if (progress < 1) {
        frame = requestAnimationFrame(tick);
      }
    }

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [value]);

  return React.createElement(React.Fragment, null, current, suffix);
}

function ReviewCard({ review }) {
  return React.createElement(
    "article",
    {
      className:
        "fade-card rounded-[8px] border border-borderGold bg-cardBrown/95 p-6 shadow-cafe backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-gold hover:shadow-softCafe",
    },
    React.createElement(
      "div",
      { className: "mb-5 flex items-start justify-between gap-4" },
      React.createElement(
        "div",
        null,
        React.createElement("h3", { className: "font-display text-3xl leading-none text-cream" }, review.name),
        React.createElement("p", { className: "mt-2 text-sm font-bold text-muted" }, formatDate(review.created_at)),
      ),
      React.createElement(Stars, { rating: review.rating }),
    ),
    React.createElement("p", { className: "text-[1rem] leading-7 text-secondary" }, review.message),
  );
}

function ReviewsApp() {
  const [reviews, setReviews] = useState(fallbackReviews);
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState("");
  const [form, setForm] = useState({ name: "", message: "", rating: 0 });
  const [hoveredRating, setHoveredRating] = useState(0);
  const cardsRef = useRef(null);

  const totalReviews = reviews.length;
  const averageRating = useMemo(() => {
    if (!reviews.length) return 0;
    const total = reviews.reduce((sum, review) => sum + Number(review.rating), 0);
    return Number((total / reviews.length).toFixed(1));
  }, [reviews]);

  const fiveStarCount = reviews.filter((review) => Number(review.rating) === 5).length;

  async function fetchReviews() {
    setIsLoading(true);

    if (!supabaseClient) {
      setReviews(fallbackReviews);
      setIsLoading(false);
      return;
    }

    const { data, error } = await supabaseClient
      .from("reviews")
      .select("id,name,rating,message,created_at")
      .order("created_at", { ascending: false });

    if (error) {
      setStatus("Could not load reviews right now.");
    } else {
      setReviews(data || []);
    }

    setIsLoading(false);
  }

  useEffect(() => {
    fetchReviews();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.14 },
    );

    document.querySelectorAll(".fade-card").forEach((card) => observer.observe(card));
    return () => observer.disconnect();
  }, [reviews]);

  function updateForm(field, value) {
    setForm((current) => ({ ...current, [field]: value }));
  }

  async function submitReview(event) {
    event.preventDefault();
    setStatus("");

    if (!form.name.trim() || !form.message.trim() || !form.rating) {
      setStatus("Please add your name, rating, and review message.");
      return;
    }

    if (!supabaseClient) {
      setStatus("Supabase is not configured yet. Replace the Supabase placeholders in reviews.js.");
      return;
    }

    setIsSubmitting(true);

    const { error } = await supabaseClient.from("reviews").insert({
      name: form.name.trim(),
      rating: form.rating,
      message: form.message.trim(),
    });

    if (error) {
      setStatus("Sorry, your review could not be submitted. Please try again.");
    } else {
      setStatus("Thank you! Your review has been submitted.");
      setForm({ name: "", message: "", rating: 0 });
      await fetchReviews();
      cardsRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }

    setIsSubmitting(false);
  }

  return React.createElement(
    "div",
    { className: "min-h-screen overflow-hidden bg-cafeBlack text-cream" },
    React.createElement(
      "section",
      { className: "relative isolate grid min-h-[82svh] items-center overflow-hidden px-5 pb-20 pt-36 md:pt-40" },
      React.createElement("div", {
        className:
          "absolute inset-0 -z-40 bg-[url('https://preview--aroma-gate-landing.lovable.app/assets/hero-coffee-kcZlvpyx.jpg')] bg-cover bg-center opacity-55 saturate-75",
      }),
      React.createElement("div", {
        className:
          "absolute inset-0 -z-30 bg-[radial-gradient(circle_at_72%_22%,rgba(212,168,95,0.22),transparent_28%),linear-gradient(90deg,rgba(11,7,5,0.98),rgba(18,12,8,0.9)_55%,rgba(11,7,5,0.7))]",
      }),
      React.createElement("div", {
        className:
          "absolute inset-0 -z-20 bg-[linear-gradient(90deg,rgba(255,247,232,0.055)_1px,transparent_1px),linear-gradient(rgba(255,247,232,0.04)_1px,transparent_1px)] bg-[length:84px_84px]",
      }),
      React.createElement(
        "div",
        { className: "review-steam absolute right-[10%] top-[28%] -z-10 hidden h-80 w-64 md:block", "aria-hidden": "true" },
        React.createElement("span", { className: "absolute bottom-0 left-[22%] h-44 w-px rounded-full bg-gradient-to-t from-transparent via-cream/55 to-transparent" }),
        React.createElement("span", { className: "absolute bottom-0 left-[48%] h-60 w-px rounded-full bg-gradient-to-t from-transparent via-cream/55 to-transparent" }),
        React.createElement("span", { className: "absolute bottom-0 left-[72%] h-52 w-px rounded-full bg-gradient-to-t from-transparent via-cream/55 to-transparent" }),
      ),
      React.createElement(
        "div",
        { className: "mx-auto grid w-full max-w-[1180px] gap-10 md:grid-cols-[1fr_0.52fr] md:items-end" },
        React.createElement(
          "div",
          { className: "animate-[fadeUp_900ms_ease_forwards]" },
          React.createElement("p", { className: "mb-4 inline-flex items-center gap-3 text-xs font-black uppercase tracking-[0.16em] text-gold before:h-px before:w-10 before:bg-current" }, "Barock Cafe Experience"),
          React.createElement("h1", { className: "max-w-4xl font-display text-[4rem] font-bold leading-[0.88] text-cream drop-shadow-[0_10px_30px_rgba(0,0,0,0.45)] sm:text-[6rem] lg:text-[8rem]" }, "Customer Reviews"),
          React.createElement("p", { className: "mt-6 max-w-2xl text-xl leading-8 text-secondary" }, "Every moment, perfectly shared by our guests."),
          React.createElement("p", { className: "mt-4 max-w-xl font-bold text-muted" }, "Every Moment, Perfectly Yours"),
        ),
        React.createElement(
          "div",
          { className: "rounded-[8px] border border-borderGold bg-cardBrown/90 p-6 shadow-cafe backdrop-blur-xl" },
          React.createElement("p", { className: "text-xs font-black uppercase tracking-[0.14em] text-gold" }, "Guest sentiment"),
          React.createElement("div", { className: "mt-5 flex items-end gap-3" },
            React.createElement("strong", { className: "font-display text-6xl leading-none text-cream" }, React.createElement(CountUp, { value: averageRating })),
            React.createElement("span", { className: "pb-2 font-bold text-secondary" }, "/ 5")
          ),
          React.createElement("div", { className: "mt-4" }, React.createElement(Stars, { rating: Math.round(averageRating) })),
        ),
      ),
    ),
    React.createElement(
      "section",
      { className: "border-y border-borderGold bg-espresso px-5 py-10" },
      React.createElement(
        "div",
        { className: "mx-auto grid max-w-[1180px] gap-4 md:grid-cols-3" },
        React.createElement(StatCard, { label: "Average Rating", value: averageRating, suffix: "/5" }),
        React.createElement(StatCard, { label: "Total Reviews", value: totalReviews }),
        React.createElement(StatCard, { label: "Five Star Moments", value: fiveStarCount }),
      ),
    ),
    React.createElement(
      "section",
      { className: "bg-[radial-gradient(circle_at_12%_8%,rgba(212,168,95,0.12),transparent_26%),#0B0705] px-5 py-20" },
      React.createElement(
        "div",
        { className: "mx-auto grid max-w-[1180px] gap-12 lg:grid-cols-[1fr_380px]" },
        React.createElement(
          "div",
          { ref: cardsRef },
          React.createElement("div", { className: "mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-end" },
            React.createElement("div", null,
              React.createElement("p", { className: "mb-3 text-xs font-black uppercase tracking-[0.14em] text-gold" }, "Guest notes"),
              React.createElement("h2", { className: "font-display text-5xl leading-none text-cream md:text-6xl" }, "Reviews Grid")
            ),
            isLoading ? React.createElement("p", { className: "font-bold text-secondary" }, "Loading reviews...") : null
          ),
          React.createElement(
            "div",
            { className: "grid gap-5 md:grid-cols-2" },
            reviews.map((review) => React.createElement(ReviewCard, { key: review.id, review })),
          ),
        ),
        React.createElement(
          "form",
          {
            onSubmit: submitReview,
            className:
              "h-fit rounded-[8px] border border-borderGold bg-cardBrown/95 p-6 shadow-cafe backdrop-blur-xl lg:sticky lg:top-28",
          },
          React.createElement("p", { className: "mb-3 text-xs font-black uppercase tracking-[0.14em] text-gold" }, "Add Review"),
          React.createElement("h2", { className: "mb-5 font-display text-4xl leading-none text-cream" }, "Share your moment"),
          React.createElement("label", { className: "mb-4 grid gap-2 text-sm font-bold text-secondary" },
            "Name",
            React.createElement("input", {
              value: form.name,
              onChange: (event) => updateForm("name", event.target.value),
              className: "min-h-12 rounded-[8px] border border-borderGold bg-espresso px-4 text-cream placeholder:text-muted outline-none transition focus:border-gold focus:ring-4 focus:ring-gold/15",
              placeholder: "Your name",
            })
          ),
          React.createElement("div", { className: "mb-4 grid gap-2" },
            React.createElement("span", { className: "text-sm font-bold text-secondary" }, "Rating"),
            React.createElement(Stars, {
              rating: form.rating,
              interactive: true,
              hoveredRating,
              onHover: setHoveredRating,
              onChange: (rating) => updateForm("rating", rating),
            })
          ),
          React.createElement("label", { className: "mb-5 grid gap-2 text-sm font-bold text-secondary" },
            "Message",
            React.createElement("textarea", {
              value: form.message,
              onChange: (event) => updateForm("message", event.target.value),
              className: "min-h-36 rounded-[8px] border border-borderGold bg-espresso px-4 py-3 text-cream placeholder:text-muted outline-none transition focus:border-gold focus:ring-4 focus:ring-gold/15",
              placeholder: "Write your review...",
            })
          ),
          React.createElement(
            "button",
            {
              type: "submit",
              disabled: isSubmitting,
              className:
                "w-full rounded-full border border-gold bg-gold px-5 py-4 font-black text-cafeBlack shadow-[0_0_0_rgba(212,168,95,0)] transition duration-300 hover:-translate-y-0.5 hover:bg-goldHover hover:shadow-[0_0_34px_rgba(212,168,95,0.35)] disabled:cursor-not-allowed disabled:opacity-70",
            },
            isSubmitting ? "Submitting..." : "Submit Review",
          ),
          status ? React.createElement("p", { className: "mt-4 rounded-[8px] border border-borderGold bg-espresso p-3 text-sm font-bold text-secondary" }, status) : null,
        ),
      ),
    ),
  );
}

function StatCard({ label, value, suffix = "" }) {
  return React.createElement(
    "article",
    { className: "rounded-[8px] border border-borderGold bg-cardBrown/95 p-6 shadow-cafe backdrop-blur-xl" },
    React.createElement("p", { className: "mb-3 text-xs font-black uppercase tracking-[0.14em] text-gold" }, label),
    React.createElement("strong", { className: "font-display text-5xl leading-none text-cream" }, React.createElement(CountUp, { value, suffix })),
    React.createElement(
      "div",
      { className: "mt-5 grid grid-cols-5 gap-2" },
      [1, 2, 3, 4, 5].map((item) =>
        React.createElement("span", {
          key: item,
          className: "h-2 rounded-full bg-gradient-to-r from-caramel to-gold shadow-[0_0_18px_rgba(212,168,117,0.22)]",
        }),
      ),
    ),
  );
}

const root = ReactDOM.createRoot(document.getElementById("reviews-root"));
root.render(React.createElement(ReviewsApp));

const menuToggle = document.querySelector("[data-menu-toggle]");
const mobileMenu = document.querySelector("[data-mobile-menu]");

menuToggle.addEventListener("click", () => {
  const isOpen = mobileMenu.classList.toggle("is-open");
  menuToggle.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
});

mobileMenu.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    mobileMenu.classList.remove("is-open");
    menuToggle.setAttribute("aria-label", "Open navigation");
  });
});
