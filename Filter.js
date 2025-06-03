// Sample data for establishments
const establishments = [
  {
    id: 1,
    name: "Chabati Sousa",
    category: "Restaurant",
    rating: 5,
    address: "Es senia En face Arret de Tramway Es senia Center",
    image: "https://lh3.googleusercontent.com/gps-cs-s/AC9h4nobQZUqL8UW3KaIEZvOP1BsdhbE5BhwcikEUQsVR14f4A4g9X73UOI3ipwqKAIEJFT6rt2gLQmDkqoJiv14iACyHWqCJgI6kd_qQggnxS3PUu41l9XeDVjTSHZIrk0ZUVCphVbl=w533-h240-k-no",
    description: "A fine dining experience with exquisite cuisine and elegant atmosphere."
  },
  {
    id: 2,
    name: "Sabah Café",
    category: "Cafe",
    rating: 4,
    address: "J9WH+H2G, N2A, Es Senia",
    image: "https://lh3.googleusercontent.com/gps-cs-s/AC9h4nrtzyw87B_dUv6J09jHXkrk0yIK_3yiYW4dqciA1H1xp2ZgiPq34abSUiD4VcsuNpff9kk98LOdTM5gyra-Iq1hh_00-Tahtg_RBvM0cpKtBRvgDK6gY4amUX8sZPhm2k0g16s=w408-h306-k-no",
    description: "Authentic French café serving pastries, coffee, and light meals."
  },
  {
    id: 3,
    name: "Hotel Meridien",
    category: "Hotel",
    rating: 5,
    address: "Les Genets Chemin De Wilaya, Route 75, Oran 31000",
    image: "https://lh3.googleusercontent.com/p/AF1QipOGLvAQ_qyepDf7wAlh_xYZqlh5Mab6fWwqCi3w=w408-h272-k-no",
    description: "Luxury accommodations with premium amenities and exceptional service."
  },
  {
    id: 4,
    name: "Boutique TOP+",
    category: "Homme",
    rating: 5,
    address: "Bir El Djir PC3R+WWX",
    image: "https://lh3.googleusercontent.com/gps-cs-s/AC9h4nq5MEuHCq7mFP-Veb6d44A2P2QFg_jCJFEIKLKPW6wg30bUke_LeStQyvvBrMLGSHa3gDCq-W9kgCKiu_UkP0cwEE9IIT-vNHAz5RIae6xqnDCGMff3Z3TKlBIO0eIsNZJaWQ7XmQ=w426-h240-k-no",
    description: "Contemporary men's clothing and accessories for all occasions."
  },
  {
    id: 5,
    name: "Boutique Hayat",
    category: "Femme",
    rating: 5,
    address: "01 Bloc G2 ilot 18 Résidence ENNOUR Bir El Djir",
    image: "https://lh3.googleusercontent.com/gps-cs-s/AC9h4npgk-P5yCfqddG-CjcT6rU_P6pgtyntZb5Sy9W11qOT8oATs4JFvUY5X4Ngzn8h1fjF0oJ0-b2TSAHbNv5zGl7d6mHMxpMYVgWMSEwmMdqz64FGJ4XfbEaK15lcmuj7zCJpjI9cgg=w408-h544-k-no",
    description: "Trendy women's fashion with the latest styles and designer collections."
  },
  {
    id: 6,
    name: "Vista Market",
    category: "Bebe",
    rating: 5,
    address: "Hai ESSALAM EH YACMINE 2 31000 Bir El Djir",
    image: "https://lh3.googleusercontent.com/p/AF1QipNCeyM21eyYMOR-fIwSAPgrhWZ_1zBjXZwGHGcS=w519-h240-k-no",
    description: "Everything for your baby's needs from clothing to toys and nursery items."
  },
  {
    id: 7,
    name: "YALAGO Travels",
    category: "Tourist",
    rating: 3,
    address: "10 Cop Colonel Othmane Essenia, Oran - Algérie",
    image: "https://lh3.googleusercontent.com/p/AF1QipNDqTw4rtgF4SYEXVemWlnkfQzBSiJodJemVKlj=w408-h343-k-no",
    description: "Bienvenue chez Yalago Travels ;Votre partenaire de voyage de confiance — basé à Oran, Algérie"
  },
  {
    id: 8,
    name: "ELNADJAH INFORMATIQURE",
    category: "Autre",
    rating: 2,
    address: "Es senia En Face UGMO",
    image: "https://lh3.googleusercontent.com/gps-cs-s/AC9h4npePjKNEA2pFIOpLtuZUqNrmp2yYbD14DF1y8X2_CmHcvlgyX5pZLOBuG5i-5FWsjZtqeR8lj8h1YAYs9-ygaFRfYOxJXq-k-h4JI8Ls_iKRa9PCpOEH-5IWUNMS8zOiOdQrI3_SQ=w408-h272-k-no",
    description: "Materiauex Informatique PC, Disque Dur, Carte mémoire ....."
  },
  {
    id: 9,
    name: "Snack Boulvard",
    category: "Restaurant",
    rating: 4,
    address: "M92F+HG6, N2A, Es Senia",
    image: "https://lh3.googleusercontent.com/gps-cs-s/AC9h4nowCDJncIkU93Gxxs-Tf2IGiAix2B8c_MttggBxzXZqeiSDzxTchpXTGxyFO7JQEp_8J6Y6liPy9JCdWtytXVggdyecIP1IOROCpW3tTQVM43ctOUwzBd6qGqEvb5Ayb7QPmxO4jA=w662-h298-k-no",
    description: "Tacos, Pizza, Snack, Hamburgers & Others"
  },
  {
    id: 10,
    name: "Hotel Prisident",
    category: "Hotel",
    rating: 3,
    address: "Es senia M94F+79F",
    image: "https://lh3.googleusercontent.com/gps-cs-s/AC9h4nq3SdZGNELAbAB_6eINxTIXXEODAqcEHBGfjIwwMKd464j2bPsfKJmRJmSQqD_4FT4665EGfYn7I0yyc_CDyYN-jQe2ANy3o0js0cj9OupelpB7dAMm_q-Ugj4S0CgJ4JLRcfn3=w519-h240-k-no",
    description: "Spacious suites with premium amenities for an comfortable stay."
  },
  {
    id: 11,
    name: "Café del Mar",
    category: "Cafe",
    rating: 5,
    address: "PCJ8+P6F, Bir El Djir",
    image: "https://lh3.googleusercontent.com/gps-cs-s/AC9h4nqEexFb6JhIUgmt0gKduljpj6kD_af-gc_fHMNcgG47KTdRRHqlJxdD0YgjHMnGrsUXcVgyarEe6vbfOAVzNnm5-ZsxgyHG1kFobY99g9b1VO4wuvaBx3SjoWRPV9Om1SQ9s9gi5w=w224-h298-k-no",
    description: "Cozy coffee shop with specialty brews and homemade pastries."
  },
  {
    id: 12,
    name: "JOY",
    category: "Homme",
    rating: 4,
    address: "31045 Rue Bouazza Abdallah, Oran",
    image: "https://lh3.googleusercontent.com/gps-cs-s/AC9h4nqH6DF2jcEVxrlI-OmFi7FiBY66EDn3TWxTaa1RN3Cq2cxb2Po52d6nF6llXwxzLDILByOQOYJeZwB8xTQFbozGuubzeiRIe65uQspQeiI8hPd4MeBbQfmZlPgf3zt3Pq3txAPofA=w408-h306-k-no",
    description: "Fine tailored suits and formal wear for the modern gentleman. Homme & Enfant Avec des meilleurs Prix"
  }
];

// DOM Elements
const filterSidebar = document.getElementById('filterSidebar');
const filterBtn = document.getElementById('filterBtn');
const closeFilterBtn = document.getElementById('closeFilterBtn');
const overlay = document.getElementById('overlay');
const itemsGrid = document.getElementById('itemsGrid');
const noResults = document.getElementById('noResults');
const searchInput = document.getElementById('searchInput');
const categoryTabs = document.querySelectorAll('.tab');
const applyFiltersBtn = document.getElementById('applyFilters');
const resetFiltersBtn = document.getElementById('resetFilters');
const categoryCheckboxes = document.querySelectorAll('input[name="category"]');
const ratingCheckboxes = document.querySelectorAll('input[name="rating"]');
const nearbyToggle = document.getElementById('nearbyToggle');

// Current filter state
let currentFilters = {
  categories: Array.from(categoryCheckboxes).map(cb => cb.value),
  ratings: Array.from(ratingCheckboxes).map(cb => parseInt(cb.value)),
  nearby: false,
  searchTerm: '',
  activeTab: 'all'
};

// Initialize the page
function init() {
  renderItems(filterItems());
  setupEventListeners();
}

// Set up event listeners
function setupEventListeners() {
  // Mobile filter toggle
  filterBtn.addEventListener('click', () => {
    filterSidebar.classList.add('active');
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  });

  closeFilterBtn.addEventListener('click', closeFilterSidebar);
  overlay.addEventListener('click', closeFilterSidebar);

  // Search input
  searchInput.addEventListener('input', debounce(() => {
    currentFilters.searchTerm = searchInput.value.trim().toLowerCase();
    renderItems(filterItems());
  }, 300));

  // Category tabs
  categoryTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      categoryTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      currentFilters.activeTab = tab.dataset.category;
      renderItems(filterItems());
    });
  });

  // Apply filters button
  applyFiltersBtn.addEventListener('click', () => {
    // Update filter state from checkboxes
    currentFilters.categories = Array.from(categoryCheckboxes)
      .filter(cb => cb.checked)
      .map(cb => cb.value);
    
    currentFilters.ratings = Array.from(ratingCheckboxes)
      .filter(cb => cb.checked)
      .map(cb => parseInt(cb.value));
    
    currentFilters.nearby = nearbyToggle.checked;
    
    renderItems(filterItems());
    
    if (window.innerWidth <= 768) {
      closeFilterSidebar();
    }
  });

  // Reset filters button
  resetFiltersBtn.addEventListener('click', () => {
    // Reset all checkboxes to checked
    categoryCheckboxes.forEach(cb => cb.checked = true);
    ratingCheckboxes.forEach(cb => cb.checked = true);
    nearbyToggle.checked = false;
    
    // Reset filter state
    currentFilters = {
      categories: Array.from(categoryCheckboxes).map(cb => cb.value),
      ratings: Array.from(ratingCheckboxes).map(cb => parseInt(cb.value)),
      nearby: false,
      searchTerm: searchInput.value.trim().toLowerCase(),
      activeTab: currentFilters.activeTab
    };
    
    renderItems(filterItems());
  });
}

// Close the filter sidebar (mobile)
function closeFilterSidebar() {
  filterSidebar.classList.remove('active');
  overlay.classList.remove('active');
  document.body.style.overflow = '';
}

// Filter items based on current filters
function filterItems() {
  return establishments.filter(item => {
    // Filter by search term
    if (currentFilters.searchTerm && !item.name.toLowerCase().includes(currentFilters.searchTerm) && 
        !item.category.toLowerCase().includes(currentFilters.searchTerm)) {
      return false;
    }
    
    // Filter by active tab
    if (currentFilters.activeTab !== 'all' && currentFilters.activeTab !== 'more') {
      if (item.category !== currentFilters.activeTab) {
        return false;
      }
    } else if (currentFilters.activeTab === 'more') {
      // "More" tab shows categories not in the main tabs
      const mainCategories = Array.from(categoryTabs)
        .filter(tab => tab.dataset.category !== 'all' && tab.dataset.category !== 'more')
        .map(tab => tab.dataset.category);
      
      if (mainCategories.includes(item.category)) {
        return false;
      }
    }
    
    // Filter by selected categories
    if (!currentFilters.categories.includes(item.category)) {
      return false;
    }
    
    // Filter by rating
    let ratingMatch = false;
    for (const rating of currentFilters.ratings) {
      if (rating === 5 && item.rating === 5) {
        ratingMatch = true;
        break;
      } else if (rating === 4 && item.rating === 4) {
        ratingMatch = true;
        break;
      } else if (rating === 3 && item.rating < 4) {
        ratingMatch = true;
        break;
      }
    }
    
    if (!ratingMatch) {
      return false;
    }
    
    // For demonstration, we'll assume nearby is just another filter
    // In a real app, this would use geolocation
    if (currentFilters.nearby) {
      // Simulate nearby filter (even IDs are "nearby")
      return item.id % 2 === 0;
    }
    
    return true;
  });
}

// Render filtered items to the grid
function renderItems(items) {
  itemsGrid.innerHTML = '';
  
  if (items.length === 0) {
    noResults.style.display = 'block';
    return;
  }
  
  noResults.style.display = 'none';
  
  items.forEach((item, index) => {
    const itemElement = document.createElement('div');
    itemElement.className = 'grid-item';
    itemElement.style.animationDelay = `${index * 0.05}s`;
    itemElement.dataset.id = item.id;
    
    // Generate star rating HTML
    let starsHtml = '';
    for (let i = 1; i <= 5; i++) {
      if (i <= item.rating) {
        starsHtml += '<i class="fas fa-star"></i>';
      } else {
        starsHtml += '<i class="far fa-star"></i>';
      }
    }
    
    itemElement.innerHTML = `
      <div class="item-image" style="background-image: url('${item.image}')"></div>
      <div class="item-content">
        <span class="item-category">${item.category}</span>
        <h3 class="item-title">${item.name}</h3>
        <div class="item-rating">${starsHtml}</div>
        <div class="item-address">
          <i class="fas fa-map-marker-alt"></i>
          ${item.address}
        </div>
      </div>
    `;
    
    // Make the item clickable
    itemElement.addEventListener('click', () => {
      handleItemClick(item);
    });
    
    itemsGrid.appendChild(itemElement);
  });
}

// Handle item click
function handleItemClick(item) {
  // Create modal for item details
  const modal = document.createElement('div');
  modal.className = 'item-modal';
  
  // Generate star rating HTML
  let starsHtml = '';
  for (let i = 1; i <= 5; i++) {
    if (i <= item.rating) {
      starsHtml += '<i class="fas fa-star"></i>';
    } else {
      starsHtml += '<i class="far fa-star"></i>';
    }
  }
  
  modal.innerHTML = `
    <div class="modal-content">
      <div class="modal-header">
        <h2>${item.name}</h2>
        <button class="close-modal-btn">&times;</button>
      </div>
      <div class="modal-image" style="background-image: url('${item.image}')"></div>
      <div class="modal-body">
        <div class="modal-category-rating">
          <span class="modal-category">${item.category}</span>
          <div class="modal-rating">${starsHtml}</div>
        </div>
        <div class="modal-address">
          <i class="fas fa-map-marker-alt"></i> ${item.address}
        </div>
        <p class="modal-description">${item.description}</p>
      </div>
      <div class="modal-footer">
        <button class="filter-by-category-btn">Show all ${item.category}</button>
      </div>
    </div>
  `;
  
  document.body.appendChild(modal);
  
  // Prevent body scrolling when modal is open
  document.body.style.overflow = 'hidden';
  
  // Add animation class after a small delay to trigger animation
  setTimeout(() => {
    modal.classList.add('active');
  }, 10);
  
  // Close modal when clicking the close button
  const closeBtn = modal.querySelector('.close-modal-btn');
  closeBtn.addEventListener('click', () => {
    closeModal(modal);
  });
  
  // Close modal when clicking outside the content
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeModal(modal);
    }
  });
  
  // Filter by this category when clicking the filter button
  const filterBtn = modal.querySelector('.filter-by-category-btn');
  filterBtn.addEventListener('click', () => {
    // Set only this category as checked
    categoryCheckboxes.forEach(cb => {
      cb.checked = cb.value === item.category;
    });
    
    // Update filter state
    currentFilters.categories = [item.category];
    
    // Find and activate the corresponding tab if it exists
    const categoryTab = Array.from(categoryTabs).find(tab => tab.dataset.category === item.category);
    if (categoryTab) {
      categoryTabs.forEach(tab => tab.classList.remove('active'));
      categoryTab.classList.add('active');
      currentFilters.activeTab = item.category;
    } else {
      // If no specific tab, set to "all" and let the category filter work
      categoryTabs.forEach(tab => tab.classList.remove('active'));
      const allTab = Array.from(categoryTabs).find(tab => tab.dataset.category === 'all');
      if (allTab) allTab.classList.add('active');
      currentFilters.activeTab = 'all';
    }
    
    // Render filtered items
    renderItems(filterItems());
    
    // Close the modal
    closeModal(modal);
  });
}

// Close modal function
function closeModal(modal) {
  modal.classList.remove('active');
  setTimeout(() => {
    document.body.removeChild(modal);
    document.body.style.overflow = '';
  }, 300); // Match the CSS transition time
}

// Debounce function for search input
function debounce(func, delay) {
  let timeout;
  return function() {
    const context = this;
    const args = arguments;
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(context, args), delay);
  };
}

// Initialize the page when DOM is loaded
document.addEventListener('DOMContentLoaded', init);

