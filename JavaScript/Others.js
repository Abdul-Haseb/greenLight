const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");
const closeBtn = document.getElementById("close-btn");
const mobileLinks = document.querySelectorAll(".mobile-link");

menuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
  mobileMenu.classList.toggle("flex");
});

closeBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});

mobileLinks.forEach((link) => {
  link.addEventListener("click", () => {
    mobileMenu.classList.add("hidden"); // Always hide when link is clicked
  });
});

const cardData = [
  {
    title: "Cagney`s",
    description: "Booking System  |  Hospitality",
    image: "/images/website1.png",
  },
  {
    title: "FPC Solutions",
    description: "E-Commerce   |   Industrial",
    image: "/images/website2.png",
  },
  {
    title: "Mamma Post Natal",
    description: "Brochure  |   Fitness",
    image: "/images/website3.png",
  },
  {
    title: "Cagney`s",
    description: "Booking System  |  Hospitality",
    image: "/images/website1.png",
  },
  {
    title: "FPC Solutions",
    description: "E-Commerce   |   Industrial",
    image: "/images/website2.png",
  },
  {
    title: "Mamma Post Natal",
    description: "Brochure  |   Fitness",
    image: "/images/website3.png",
  },
  {
    title: "Cagney`s",
    description: "Booking System  |  Hospitality",
    image: "/images/website1.png",
  },
  {
    title: "FPC Solutions",
    description: "E-Commerce   |   Industrial",
    image: "/images/website2.png",
  },
  {
    title: "Mamma Post Natal",
    description: "Brochure  |   Fitness",
    image: "/images/website3.png",
  },
  // ... (more repeated entries can be kept or trimmed)
];

const testimonials = [
  {
    rating: 5,
    title: "- Alex P, Small Business Owner",
    description:
      "Green Light Digital took my website to the next level in record time! The design options were fantastic, and the customization process was so smooth. Now, my site looks polished and professional, and I didn’t have to break the bank. Highly recommend!",
  },
  {
    rating: 4,
    title: "- Jenna R, Small Business Owner",
    description:
      "The Green Light team is incredible! They guided me through every step of the process, from selecting a template to launching my site. I now have a beautiful, functional website that perfectly represents my brand. Couldn’t be happier!",
  },
  {
    rating: 5,
    title: "- Ray T, Small Business Owner",
    description:
      "Working with Green Light Digital was the best decision for my business. They made web design easy, fast, and affordable, while still giving me a custom feel. My site is stylish and efficient, and the customer support was outstanding!",
  },
  {
    rating: 5,
    title: "- Alex P, Small Business Owner",
    description:
      "Green Light Digital took my website to the next level in record time! The design options were fantastic, and the customization process was so smooth. Now, my site looks polished and professional, and I didn’t have to break the bank. Highly recommend!",
  },
  {
    rating: 4,
    title: "- Jenna R, Small Business Owner",
    description:
      "The Green Light team is incredible! They guided me through every step of the process, from selecting a template to launching my site. I now have a beautiful, functional website that perfectly represents my brand. Couldn’t be happier!",
  },
  {
    rating: 5,
    title: "- Ray T, Small Business Owner",
    description:
      "Working with Green Light Digital was the best decision for my business. They made web design easy, fast, and affordable, while still giving me a custom feel. My site is stylish and efficient, and the customer support was outstanding!",
  },
];

// ==================== GREEN LIGHT PROS ====================
const greenLightPros = [
  {
    title: "Family In Action",
    description:
      "We donate 1% of our profits to this vital charity, helping families in need.",
    image: "/images/familyInAction.png",
  },
  {
    title: "Learning Support",
    description:
      "We train and employ young adults with disabilities to build confidence, develop web skills, and earn a meaningful income.",
    image: "/images/learningSupport.png",
  },
  {
    title: "Community support",
    description:
      "We create free websites for businesses in need, keeping them online and operational during challenging times.",
    image: "/images/communitySupport.png",
  },
  {
    title: "Family In Action",
    description:
      "We donate 1% of our profits to this vital charity, helping families in need.",
    image: "/images/familyInAction.png",
  },
  {
    title: "Learning Support",
    description:
      "We train and employ young adults with disabilities to build confidence, develop web skills, and earn a meaningful income.",
    image: "/images/learningSupport.png",
  },
  {
    title: "Community support",
    description:
      "We create free websites for businesses in need, keeping them online and operational during challenging times.",
    image: "/images/communitySupport.png",
  },
];

const followUs = [
  {
    image: "/images/followUsImg1.png",
  },
  {
    image: "/images/followUsImg2.png",
  },
  {
    image: "/images/followUsImg3.png",
  },
  {
    image: "/images/followUsImg4.png",
  },
];

// ==================== RENDER FUNCTIONS ====================
function createCard({ title, description, image, rating }, type = "website") {
  const cardElement = document.createElement("div");

  if (type === "testimonial") {
    cardElement.className = `
      w-[310px] sm:w-[350px] md:w-[400px] lg:w-[464px]
      flex-shrink-0
      bg-primary
      text-white
      rounded-testimonial
      shadow-md
      mx-auto
      p-6 md:p-8 lg:p-12 xl:px-testimonialx xl:py-testimonialy
      mb-4
    `;

    // Generate star rating HTML
    const starHtml = Array.from(
      { length: 5 },
      (_, i) =>
        `<img src="/images/star.svg" alt="star" class="inline-block w-5 h-5 mr-1 ${
          i >= rating ? "opacity-30" : ""
        }" />`
    ).join("");

    cardElement.innerHTML = `
      <div class="pb-3">${starHtml}</div>
      <p class="text-sm md:text-base lg:text-lg xl:text-[19px] pb-3">${description}</p>
      <p class="text-sm md:text-base lg:text-lg xl:text-[19px]">${title}</p>
    `;
  } else if (type === "greenlight") {
    cardElement.className = `
      w-[310px] sm:w-[350px] max-h-[510px] md:w-[400px] lg:w-[528px]
      flex-shrink-0
      bg-white
      rounded-md
      shadow-md
      mx-auto
    `;
    cardElement.innerHTML = `
      <img src="${image}" alt="${title}" class="w-full md:h-[368px] object-cover rounded-md mb-4 bg-[#EDEFBB]" />
      <h3 class="text-[20px] sm:text-[24px] md:text-[25px] font-extrabold mb-2 text-primary">${title}</h3>
      <p class="text-[#232323] text-sm sm:text-base">${description}</p>
    `;
  } else if (type === "followUs") {
    cardElement.className = `
      w-[310px] sm:w-[360px]  md:w-[410px] md:h-[410px]
      bg-white
      mx-auto
      flex-shrink-0
      rounded-xl

    `;
    cardElement.innerHTML = `
      <img src="${image}" alt="${title}" class="w-full h-full  object-cover rounded-[19px] bg-primary mb-4 " />
    `;
  } else {
    cardElement.className = `
      w-[310px] h-[358px] sm:w-[350px] md:w-[400px] lg:w-[464px]
      flex-shrink-0
    `;
    cardElement.innerHTML = `
      <img src="${image}" alt="${title}" class="w-full h-auto object-cover rounded-md mb-4" />
      <h3 class="text-[20px] sm:text-[24px] md:text-[25px] xl:text-[29px] font-[900] mb-2">${title}</h3>
      <p class="text-[#232323] text-sm">${description}</p>
    `;
  }

  return cardElement;
}

function renderCards(data, containerId, type = "website") {
  const container = document.getElementById(containerId);
  if (!container) return;

  data.forEach((item) => {
    const card = createCard(item, type);
    container.appendChild(card);
  });
}

// ==================== RENDER TO DOM ====================
renderCards(cardData, "websiteCards", "website");
renderCards(testimonials, "testimonialsCards", "testimonial");
renderCards(greenLightPros, "greenLightCards", "greenlight");
renderCards(followUs, "followUsCards", "followUs");

// ==================== SCROLL FUNCTIONALITY ====================
const scrollContainerWebsite = document.getElementById("websiteCards");
const scrollContainerTestimonials =
  document.getElementById("testimonialsCards");
const scrollLeftBtn = document.getElementById("scrollLeft");
const scrollRightBtn = document.getElementById("scrollRight");
const testimonialScrollLeftBtn = document.getElementById(
  "testimonialScrollLeft"
);
const testimonialScrollRightBtn = document.getElementById(
  "testimonialScrollRight"
);

// Generic function to scroll any container
function scrollCards(container, direction = "right") {
  const card = container.querySelector("div");
  if (!card) return;

  const style = window.getComputedStyle(card);
  const marginRight = parseInt(style.marginRight || 0);
  const marginLeft = parseInt(style.marginLeft || 0);
  const gap = 16; // Tailwind gap-4
  const scrollAmount = card.offsetWidth + gap + marginLeft + marginRight;

  container.scrollBy({
    left: direction === "right" ? scrollAmount : -scrollAmount,
    behavior: "smooth",
  });
}

// Websites Section
scrollLeftBtn?.addEventListener("click", () =>
  scrollCards(scrollContainerWebsite, "left")
);
scrollRightBtn?.addEventListener("click", () =>
  scrollCards(scrollContainerWebsite, "right")
);

// Testimonial scroll buttons
testimonialScrollLeftBtn?.addEventListener("click", () =>
  scrollCards(scrollContainerTestimonials, "left")
);
testimonialScrollRightBtn?.addEventListener("click", () =>
  scrollCards(scrollContainerTestimonials, "right")
);
