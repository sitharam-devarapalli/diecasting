// <!-- ✅ number count section js  -->
  window.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.ssl-number-value').forEach(el => {
      const target = parseInt(el.getAttribute('data-count'));
      const counter = new countUp.CountUp(el, target);
      if (!counter.error) {
        counter.start();
      } else {
        console.error(counter.error);
      }
    });
  });


  // gallery section effect js 

      const galleryItems = document.querySelectorAll('.gallery-item');
    const galleryContainer = document.getElementById("gallery-container");
    const galleryPerPage = 8;
    const totalPages = Math.ceil(galleryItems.length / galleryPerPage);
    let currentPage = 1;

    const pageIndicator = document.getElementById("page-indicator");
    const pagination = document.getElementById("pagination");

    function applySlideAnimation(direction) {
        // Remove existing animation classes
        galleryContainer.classList.remove("gallery-slide-left", "gallery-slide-right");

        // Trigger reflow to reset animation
        void galleryContainer.offsetWidth;

        // Add new animation class
        galleryContainer.classList.add(direction === "left" ? "gallery-slide-left" : "gallery-slide-right");
    }

    function renderGallery(page, direction = "right") {
        const start = (page - 1) * galleryPerPage;
        const end = start + galleryPerPage;

        // Animate gallery
        applySlideAnimation(direction);

        // Show/hide items
        galleryItems.forEach((item, index) => {
            item.style.display = index >= start && index < end ? 'block' : 'none';
        });

        pageIndicator.innerText = `Page ${page} of ${totalPages}`;
    }

    function renderPagination(page) {
        pagination.innerHTML = "";

        const createPageItem = (p, label = null) => {
            const li = document.createElement("li");
            li.className = `page-item ${p === page ? "active" : ""}`;
            li.innerHTML = `<a class="page-link" href="#">${label || p}</a>`;
            li.addEventListener("click", (e) => {
                e.preventDefault();
                if (p !== currentPage) {
                    const direction = p > currentPage ? "right" : "left";
                    currentPage = p;
                    renderGallery(currentPage, direction);
                    renderPagination(currentPage);
                }
            });
            return li;
        };

        if (page > 1) pagination.appendChild(createPageItem(page - 1, "Previous"));

        const startPage = Math.max(1, page - 1);
        const endPage = Math.min(totalPages, page + 1);

        for (let i = startPage; i <= endPage; i++) {
            pagination.appendChild(createPageItem(i));
        }

        if (page < totalPages) pagination.appendChild(createPageItem(page + 1, "Next Page"));
    }

    // Initial load
    renderGallery(currentPage);
    renderPagination(currentPage);
