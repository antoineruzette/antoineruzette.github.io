// Function to display publications
function displayPublications() {
  const publications = [
    {
      authors: "Ruzette, AA; Kozlova, N; Cruz, KA; Muranen, T; Nørrelykke, SF",
      year: 2025,
      title: "An image analysis pipeline to quantify the spatial distribution of cell markers in stroma-rich tumors",
      journal: "bioRxiv",
      url: "https://www.biorxiv.org/content/10.1101/2025.04.28.650414v1",
      image: "img/ruzette2025.png"
    },
    {
      authors: "Kozlova, N; Ruzette, AA; ...; Nørrelykke, SF; Scully, R; Muranen, T",
      year: 2025,
      title: "A novel DNA repair protein, N-Myc downstream regulated gene 1 (NDRG1), links stromal tumour microenvironment to chemoresistance",
      journal: "bioRxiv",
      url: "https://www.biorxiv.org/content/10.1101/2025.01.22.634323v1",
      image: "img/kozlova2025.png"
    },
    {
      authors: "Van Dieren, L; Ruzette, AA; ...; Lellouch, AG",
      year: 2025,
      title: "Computational modeling of superparamagnetic nanoparticle-based (affinity) diagnostics",
      journal: "Frontiers in Bioengineering and Biotechnology",
      url: "https://www.frontiersin.org/journals/bioengineering-and-biotechnology/articles/10.3389/fbioe.2024.1500756/full",
      image: "img/vandieren2025.png"
    },
    {
      authors: "Ruzette, AA; Dai, C; Konstantinopoulos, K; Gowani, R; Garner, RM; Megason, SG",
      year: 2023,
      title: "Cell-based modeling of multicellular systems with deformable meshes and regulatory networks in 3D",
      journal: "Open-source software",
      url: "https://github.com/megasonlab/Goo",
      image: "img/goo-illustration.png"
    },
  ];
  
  const publicationsContainer = document.getElementById('publications-container');
  publicationsContainer.innerHTML = ''; // Clear existing content
  
  // Sort publications by year (newest first)
  publications.sort((a, b) => b.year - a.year);
  
  publications.forEach(entry => {
    const div = document.createElement('div');
    div.className = 'col-md-4 mb-4';
    
    // Format authors and highlight Ruzette
    const authors = entry.authors.split('; ').map(author => {
      if (author.includes('Ruzette')) {
        return `<strong style="background: linear-gradient(transparent 80%, #0b6efd87 40%);">${author}</strong>`;
      }
      return author;
    }).join('; ');
    
    // Create HTML content with card structure
    div.innerHTML = `
      <div class="card h-100 publication-card">
        <div class="background-image publication-image" style="background-image: url(${entry.image})">
          <img src="img/spacer-portrait.png">
        </div>
        <div class="card-body">
          <h4 class="card-title">${entry.title}</h4>
          <p class="card-text text-muted">${authors} (${entry.year})</p>
          <p class="card-text"><small class="text-muted">${entry.journal}</small></p>
        </div>
        <div class="card-footer">
          <a href="${entry.url}" class="btn btn-sm btn-light"><i class="bi-journal-text"></i> Read Paper</a>
        </div>
      </div>
    `;
    
    publicationsContainer.appendChild(div);
  });
}

// Load publications when the page loads
document.addEventListener('DOMContentLoaded', displayPublications); 