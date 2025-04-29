const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");
const closeBtn = document.getElementById("close-btn");

menuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
  mobileMenu.classList.toggle("flex");
});

closeBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
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
    title: "Mamma Post Natal",
    description: "Brochure  |   Fitness",
    image: "/images/website3.png",
  },
  {
    title: "Mamma Post Natal",
    description: "Brochure  |   Fitness",
    image: "/images/website3.png",
  },
  {
    title: "Mamma Post Natal",
    description: "Brochure  |   Fitness",
    image: "/images/website3.png",
  },
  {
    title: "Mamma Post Natal",
    description: "Brochure  |   Fitness",
    image: "/images/website3.png",
  },
  {
    title: "Mamma Post Natal",
    description: "Brochure  |   Fitness",
    image: "/images/website3.png",
  },
  {
    title: "Mamma Post Natal",
    description: "Brochure  |   Fitness",
    image: "/images/website3.png",
  },
  {
    title: "Mamma Post Natal",
    description: "Brochure  |   Fitness",
    image: "/images/website3.png",
  },
];

const cardContainer = document.getElementById("websiteCards");

cardData.map((card) => {
  const cardElement = document.createElement("div");
  cardElement.className =
    "w-[310px] h-[358px] sm:w-[350px] md:w-[400px] lg:w-[464px] flex-shrink-0";
  cardElement.innerHTML = `
    <img src="${card.image}" alt="${card.title}" class="w-full h-auto object-cover rounded-md mb-4" />
    <h3 class="text-[20px] sm:text-[24px] md:text-[25px] xl:text-[29px] font-[900]  mb-2">${card.title}</h3>
    <p class="text-[#232323] text-sm">${card.description}</p>
  `;
  cardContainer.appendChild(cardElement);
});

const scrollContainer = document.getElementById("websiteCards");
const scrollLeftBtn = document.getElementById("scrollLeft");
const scrollRightBtn = document.getElementById("scrollRight");

function getCardWidthWithGap() {
  const card = scrollContainer.querySelector("div"); // first card
  if (!card) return 0;

  const cardStyles = window.getComputedStyle(card);
  const marginRight = parseInt(cardStyles.marginRight || 0);
  const marginLeft = parseInt(cardStyles.marginLeft || 0);
  const gap = 16; // Tailwind gap-4 = 16px

  return card.offsetWidth + gap + marginLeft + marginRight;
}

scrollLeftBtn.addEventListener("click", () => {
  scrollContainer.scrollBy({
    left: -getCardWidthWithGap(),
    behavior: "smooth",
  });
});

scrollRightBtn.addEventListener("click", () => {
  scrollContainer.scrollBy({
    left: getCardWidthWithGap(),
    behavior: "smooth",
  });
});

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

const greenLightContainer = document.getElementById("greenLightCards");

greenLightPros.map((card) => {
  const cardElement = document.createElement("div");

  // Use min-height instead of fixed height, add padding and spacing
  cardElement.className =
    "w-[310px] sm:w-[350px] max-h-[510px] md:w-[400px] lg:w-[528px] flex-shrink-0 bg-white rounded-md shadow-md mx-auto ";

  cardElement.innerHTML = `
    <img src="${card.image}" alt="${card.title}" class="w-full md:h-[368px] object-cover rounded-md mb-4 bg-[#EDEFBB]" />
    <h3 class="text-[20px] sm:text-[24px] md:text-[25px] font-extrabold mb-2 text-primary">${card.title}</h3>
    <p class="text-[#232323] text-sm sm:text-base">${card.description}</p>
  `;

  greenLightContainer.appendChild(cardElement);
});
