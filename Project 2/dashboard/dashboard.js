const scpRecords = [

{
    number: "SCP-1025",
    name: "The Encyclopedis of Common Diseases",
    objectClass: "Safe",
    image: "c:/Users/user/OneDrive/Desktop/Project 2/scp-pages/Safe/SCP-1025/scp-1025.png",
    page: "c:/Users/user/OneDrive/Desktop/Project 2/scp-pages/Safe/SCP-1025/scp-1025.html"
  },

{
    number: "SCP-1193",
    name: "Buried Giant",
    objectClass: "Safe",
    image: "",
    page: "c:/Users/user/OneDrive/Desktop/Project 2/scp-pages/Safe/SCP-1193/scp-1193.html"
  },

{
    number: "SCP-1281",
    name: "The Harbinger",
    objectClass: "Safe",
    image: "c:/Users/user/OneDrive/Desktop/Project 2/scp-pages/Safe/SCP-1281/scp-1281.png",
    page: "c:/Users/user/OneDrive/Desktop/Project 2/scp-pages/Safe/SCP-1281/scp-1281.html"
  },

{
    number: "SCP-1562",
    name: "Tunnel Slide",
    objectClass: "Safe",
    image: "c:/Users/user/OneDrive/Desktop/Project 2/scp-pages/Safe/SCP-1562/scp-1562.png",
    page: "c:/Users/user/OneDrive/Desktop/Project 2/scp-pages/Safe/SCP-1562/scp-1562.html"
  },

{
    number: "SCP-1689",
    name: "Bag of Holding Potatoes",
    objectClass: "Safe",
    image: "c:/Users/user/OneDrive/Desktop/Project 2/scp-pages/Safe/SCP-1689/scp-1689.png",
    page: "c:/Users/user/OneDrive/Desktop/Project 2/scp-pages/Safe/SCP-1689/scp-1689.html"
  },

{
    number: "SCP-999",
    name: "Tickle Monster",
    objectClass: "Safe",
    image: "c:/Users/user/OneDrive/Desktop/Project 2/scp-pages/Safe/SCP-999/scp-999-225x225.png",
    page: "c:/Users/user/OneDrive/Desktop/Project 2/scp-pages/Safe/SCP-999/scp-999.html"
  },

{
    number: "SCP-3515",
    name: "Unearth",
    objectClass: "Safe",
    image: "c:/Users/user/OneDrive/Desktop/Project 2/scp-pages/Safe/SCP-3515/scp-3515.png",
    page: "c:/Users/user/OneDrive/Desktop/Project 2/scp-pages/Safe/SCP-3515/scp-3515.html"
  },

{
    number: "SCP-XXX",
    name: "Imaginary Library",
    objectClass: "Safe",
    image: "c:/Users/user/OneDrive/Desktop/Project 2/scp-pages/Safe/SCP-XXX/scp-XXX.png",
    page: "c:/Users/user/OneDrive/Desktop/Project 2/scp-pages/Safe/SCP-XXX/scp-XXX.html",
  },

{
    number: "SCP-2264",
    name: "In the Court of Alagadda",
    objectClass: "Safe",
    image: "",
    page: "c:/Users/user/OneDrive/Desktop/Project 2/scp-pages/Safe/SCP-2264/scp-2264.html"
  },

{
    number: "SCP-5555",
    name: "Made in Heaven",
    objectClass: "Safe",
    image: "",
    page: "c:/Users/user/OneDrive/Desktop/Project 2/scp-pages/Safe/SCP-5555/scp-5555.html"
  },

{
    number: "SCP-2432",
    name: "███████████████ (Level 3 needed)",
    objectClass: "Euclid",
    image: "",
    page: ""
  },

{
    number: "SCP-2571",
    name: "███████████████ (Level 3 needed)",
    objectClass: "Euclid",
    image: "",
    page: ""
  },

{
    number: "SCP-2728",
    name: "███████████████ (Level 3 needed)",
    objectClass: "Euclid",
    image: "",
    page: ""
  },

{
    number: "SCP-3001",
    name: "███████████████ (Level 3 needed)",
    objectClass: "Euclid",
    image: "",
    page: ""
  },

{
    number: "SCP-3034",
    name: "███████████████ (Level 3 needed)",
    objectClass: "Euclid",
    image: "",
    page: ""
  },

{
    number: "SCP-3109",
    name: "███████████████ (Level 3 needed)",
    objectClass: "Euclid",
    image: "",
    page: ""
  },

{
    number: "SCP-3211",
    name: "███████████████ (Level 3 needed)",
    objectClass: "Euclid",
    image: "",
    page: ""
  },

{
    number: "SCP-5005",
    name: "███████████████ (Level 3 needed)",
    objectClass: "Euclid",
    image: "",
    page: ""
  },

{
    number: "SCP-6670",
    name: "███████████████ (Level 3 needed)",
    objectClass: "Euclid",
    image: "Redacted",
    page: ""
  },

{
    number: "SCP-093",
    name: "███████████████ (Level 3 needed)",
    objectClass: "Euclid",
    image: "",
    page: ""
  },

{
    number: "█████",
    name: "Not of a high enough level to see these entries (level 4 needed)",
    objectClass: "Keter",
    image: "",
    page: ""
  },

 {
    number: "█████",
    name: "Not of a high enough level to see these entries (Level 4 needed)",
    objectClass: "Thaumiel",
    image: "",
    page: ""
  },   

{
    number: "█████",
    name: "Not of a high enough level to see these entries (Level 4 needed)",
    objectClass: "Neutralized",
    image: "",
    page: ""
  },   
  
{
    number: "█████",
    name: "Not of a high enough level to see these entries (Level 6 needed)",
    objectClass: "Apollyon",
    image: "",
    page: ""
  },     

]

/* =========================================
   ELEMENT REFERENCES
   ========================================= */

const scpGrid = document.getElementById("scpGrid");
const searchInput = document.getElementById("searchInput");
const totalSCPs = document.getElementById("totalSCPs");
const emptyMessage = document.getElementById("emptyMessage");

const sidebar = document.getElementById("sidebar");
const menuToggle = document.getElementById("menuToggle");

const scpModal = document.getElementById("scpModal");
const closeModalButton = document.getElementById("closeModal");

const modalNumber = document.getElementById("modalNumber");
const modalName = document.getElementById("modalName");
const modalClass = document.getElementById("modalClass");
const modalDescription = document.getElementById("modalDescription");
const modalContainment = document.getElementById("modalContainment");

let currentFilter = "All";


/* =========================================
   HELPER FUNCTIONS
   ========================================= */

function escapeHTML(value = "") {
    return String(value).replace(/[&<>"']/g, character => ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#039;"
    })[character]);
}

function getClassSlug(objectClass = "") {
    return objectClass.toLowerCase().replace(/[^a-z0-9]+/g, "-");
}

function getClassColor(objectClass = "") {
    const colors = {
        Safe: "safe",
        Euclid: "euclid",
        Keter: "keter",
        Thaumiel: "thaumiel",
        Neutralized: "neutralized",
        Apollyon: "apollyon"
    };

    return colors[objectClass] || "unknown";
}


/* =========================================
   IMAGE HANDLING
   ========================================= */

function createSCPImage(imagePath, name, className) {
    const image = document.createElement("img");

    image.className = "scp-card-image";
    image.src = imagePath || "";
    image.alt = `${name} image`;
    image.loading = "lazy";

    image.onerror = function () {
        this.style.display = "none";

        const placeholder = document.createElement("div");
        placeholder.className = "scp-image-placeholder";
        placeholder.innerHTML = `
            <span class="placeholder-symbol">?</span>
            <span>IMAGE UNAVAILABLE</span>
            <small>${escapeHTML(className)} CLASSIFIED FILE</small>
        `;

        this.parentElement.appendChild(placeholder);
    };

    return image;
}


/* =========================================
   SCP CARD CREATION
   ========================================= */

function createSCPCard(scp) {
    const card = document.createElement("article");

    const classSlug = getClassSlug(scp.objectClass);
    const classColor = getClassColor(scp.objectClass);

    card.className = `scp-card ${classSlug}-card`;
    card.tabIndex = 0;
    card.setAttribute("role", "button");
    card.setAttribute("aria-label", `Open ${scp.number}: ${scp.name}`);

    card.innerHTML = `
        <div class="scp-card-image-container">
            <span class="scp-card-number">
                ${escapeHTML(scp.number)}
            </span>
        </div>

        <div class="scp-card-content">
            <div class="scp-card-heading">
                <h3>${escapeHTML(scp.name)}</h3>
                <span class="scp-class-badge ${classColor}">
                    ${escapeHTML(scp.objectClass)}
                </span>
            </div>

            <p class="scp-card-description">
                ${escapeHTML(scp.description)}
            </p>

            <div class="scp-card-footer">
                <span>CLASSIFIED DOCUMENT</span>
                <span class="scp-open-label">ACCESS FILE →</span>
            </div>
        </div>
    `;

    const imageContainer = card.querySelector(
        ".scp-card-image-container"
    );

    imageContainer.appendChild(
        createSCPImage(scp.image, scp.name, scp.objectClass)
    );

    card.addEventListener("click", () => {
    if (scp.page) {
        window.location.href = scp.page;
    }
    });

    card.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();

        if (scp.page) {
            window.location.href = scp.page;
        }
    }
    });

    return card;
}


/* =========================================
   DISPLAY SCP RECORDS
   ========================================= */

function displaySCPs(records) {
    if (!scpGrid) return;

    scpGrid.innerHTML = "";

    records.forEach(scp => {
        scpGrid.appendChild(createSCPCard(scp));
    });

    if (totalSCPs) {
        totalSCPs.textContent = records.length;
    }

    if (emptyMessage) {
        emptyMessage.style.display =
            records.length === 0 ? "block" : "none";
    }
}


/* =========================================
   SEARCH AND FILTER
   ========================================= */

function filterSCPs() {
    if (typeof scpRecords === "undefined") {
        console.error("scpRecords array was not found.");
        return;
    }

    const searchTerm = searchInput
        ? searchInput.value.trim().toLowerCase()
        : "";

    const filteredRecords = scpRecords.filter(scp => {
        const matchesSearch =
            scp.number.toLowerCase().includes(searchTerm) ||
            scp.name.toLowerCase().includes(searchTerm) ||
            scp.objectClass.toLowerCase().includes(searchTerm) ||
            scp.description.toLowerCase().includes(searchTerm);

        const matchesClass =
            currentFilter === "All" ||
            scp.objectClass.toLowerCase() ===
            currentFilter.toLowerCase();

        return matchesSearch && matchesClass;
    });

    displaySCPs(filteredRecords);
}


/* =========================================
   FILTER BUTTONS
   ========================================= */

document.querySelectorAll(".filter-btn").forEach(button => {
    button.addEventListener("click", () => {
        document.querySelectorAll(".filter-btn").forEach(btn => {
            btn.classList.remove("active");
        });

        button.classList.add("active");

        currentFilter = button.dataset.filter || "All";

        filterSCPs();
    });
});


/* =========================================
   SEARCH INPUT
   ========================================= */

if (searchInput) {
    searchInput.addEventListener("input", filterSCPs);
}


/* =========================================
   SCP CLASSIFIED FILE MODAL
   ========================================= */

function openSCPFile(scp) {
    if (!scpModal) return;

    modalNumber.textContent = scp.number;
    modalName.textContent = scp.name;
    modalClass.textContent = scp.objectClass;
    modalDescription.textContent = scp.description;
    modalContainment.textContent = scp.containment;

    modalClass.className =
        `modal-class-badge ${getClassColor(scp.objectClass)}`;

    // Create or reuse the modal image container.
    const modalContent = scpModal.querySelector(".modal-content");

    let imageContainer = document.getElementById("modalImageContainer");

    if (!imageContainer && modalContent) {
        imageContainer = document.createElement("div");
        imageContainer.id = "modalImageContainer";
        imageContainer.className = "modal-image-container";

        // Place the image before the SCP description.
        modalDescription.parentElement.before(imageContainer);
    }

    if (imageContainer) {
        imageContainer.innerHTML = "";

        imageContainer.appendChild(
            createSCPImage(scp.image, scp.name, scp.objectClass)
        );
    }

    scpModal.classList.add("show");
    scpModal.setAttribute("aria-hidden", "false");
    document.body.classList.add("modal-open");

    if (closeModalButton) {
        closeModalButton.focus();
    }
}


function closeSCPFile() {
    if (!scpModal) return;

    scpModal.classList.remove("show");
    scpModal.setAttribute("aria-hidden", "true");
    document.body.classList.remove("modal-open");
}


if (closeModalButton) {
    closeModalButton.addEventListener("click", closeSCPFile);
}


// Close when clicking outside the modal content.
if (scpModal) {
    scpModal.addEventListener("click", event => {
        if (event.target === scpModal) {
            closeSCPFile();
        }
    });
}


// Close with Escape.
document.addEventListener("keydown", event => {
    if (event.key === "Escape") {
        closeSCPFile();
    }
});


/* =========================================
   MOBILE SIDEBAR
   ========================================= */

if (menuToggle && sidebar) {
    menuToggle.addEventListener("click", () => {
        sidebar.classList.toggle("active");
        menuToggle.classList.toggle("active");

        const isOpen = sidebar.classList.contains("active");

        menuToggle.setAttribute("aria-expanded", String(isOpen));
    });
}


// Close sidebar when a navigation link is selected.
document.querySelectorAll(".sidebar a").forEach(link => {
    link.addEventListener("click", () => {
        if (sidebar) sidebar.classList.remove("active");
        if (menuToggle) {
            menuToggle.classList.remove("active");
            menuToggle.setAttribute("aria-expanded", "false");
        }
    });
});


/* =========================================
   ACTIVE NAVIGATION LINKS
   ========================================= */

document.querySelectorAll(".sidebar a").forEach(link => {
    link.addEventListener("click", () => {
        document.querySelectorAll(".sidebar a").forEach(item => {
            item.classList.remove("active");
        });

        link.classList.add("active");
    });
});


/* =========================================
   INITIALISE DASHBOARD
   ========================================= */

document.addEventListener("DOMContentLoaded", () => {
    if (typeof scpRecords !== "undefined") {
        displaySCPs(scpRecords);
    } else {
        console.error(
            "NISR DATABASE ERROR: Add your scpRecords array to dashboard.js."
        );
    }

    if (scpModal) {
        scpModal.setAttribute("aria-hidden", "true");
    }
});
