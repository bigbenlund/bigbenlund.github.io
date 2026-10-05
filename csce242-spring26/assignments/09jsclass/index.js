class Vacation {
  constructor(title, type, description, todo, image, map) {
    this.title = title;
    this.type = type;               
    this.description = description;
    this.todo = todo;  
    this.image = image;
    this.map = map;
  }

  /* Card Functions */
  getCard() {
    const card = document.createElement("section");
    
    card.classList.add("card");
    card.appendChild(this.getCardHeader());
    card.appendChild(this.getCardImage());
   
    card.addEventListener("click", () => showModal(this));
    return card;
  }

  getCardHeader() {
    const header = document.createElement("div");
    header.classList.add("card-header");
    header.innerHTML = `<h3>${this.title}</h3><p>${this.type} Vacation</p>`;
    return header;
  }

  getCardImage() {
    const img = document.createElement("img");
    img.src = this.image;
    img.alt = this.title;
    return img;
  }

  getModalHTML() {
    return `
      <span class="modal-close" onclick="closeModal()">&times;</span>
      <div class="modal-layout">
        ${this.getMapHTML()}
        <div class="modal-info">
          <h2>${this.title}</h2>
          <p><strong>Type:</strong> ${this.type}</p>
          <p><strong>Description:</strong> ${this.description}</p>
          <p><strong>Things To Do:</strong> ${this.todo.join(", ")}</p>
        </div>
      </div>
    `;
  }

  getMapHTML() {
    return `<iframe class="modal-map" src="${this.map}" loading="lazy"
              referrerpolicy="no-referrer-when-downgrade" allowfullscreen></iframe>`;
  }
}

function mapUrl(query) {
  return `https://www.google.com/maps?q=${encodeURIComponent(query)}&output=embed`;
}

/* Vacation Items */
const vacations = [
  new Vacation(
    "Asheville",
    "Mountain",
    "A mountain city in western North Carolina surrounded by the Blue Ridge Mountains, known for its art scene, craft breweries, and nearby hiking.",
    [
      "Tour the Biltmore Estate",
      "Drive the Blue Ridge Parkway",
      "Visit the River Arts District",
      "Hike Craggy Gardens",
      "Walk downtown and tour the breweries"
    ],
    "images/asheville.jpeg",
    mapUrl("Asheville, NC")
  ),
  new Vacation(
    "Boone",
    "Mountain",
    "A college town in the High Country of North Carolina with cool summers, skiing in winter, and easy access to some of the highest peaks in the Blue Ridge.",
    [
      "Hike Grandfather Mountain",
      "Cross the Mile High Swinging Bridge",
      "Ski or snowboard at Appalachian Ski Mtn",
      "Visit Howard Knob Park",
      "Watch the outdoor drama Horn in the West"
    ],
    "images/boone.jpeg",
    mapUrl("Boone, NC")
  ),
  new Vacation(
    "Hot Springs",
    "Mountain",
    "A small trail town on the French Broad River where the Appalachian Trail runs down the main street, with natural mineral springs.",
    [
      "Soak at Hot Springs Resort and Spa",
      "Hike a section of the Appalachian Trail",
      "Raft or tube the French Broad River",
      "Hike Lover's Leap Trail",
      "Camp at Rock Creek or Pisgah National Forest"
    ],
    "images/hotsprings.jpeg",
    mapUrl("Hot Springs, NC")
  ),
  new Vacation(
    "Table Rock",
    "Mountain",
    "A granite mountain in the Blue Ridge foothills of South Carolina with a state park, a lake, and a trail to a panoramic summit.",
    [
      "Hike the Table Rock Summit Trail",
      "Swim and kayak at Pinnacle Lake",
      "Picnic at the park shelters",
      "Camp in the state park",
      "Drive the Cherokee Foothills Scenic Highway"
    ],
    "images/tablerock.jpg",
    mapUrl("Table Rock State Park, SC")
  ),
  new Vacation(
    "Sunset Beach",
    "Beach",
    "A quiet barrier island on the southern tip of North Carolina's coast, with a wide beach, a pier, and marsh creeks between the island and the mainland.",
    [
      "Walk across the Kindred Spirit Mailbox trail on Bird Island",
      "Fish from the Sunset Beach Pier",
      "Kayak the tidal creeks",
      "Collect shells at low tide",
      "Watch the sunset from the pier"
    ],
    "images/sunsetbeach.png",
    mapUrl("Sunset Beach, NC")
  ),
  new Vacation(
    "Edisto Beach",
    "Beach",
    "A low-key South Carolina sea island with a state park, uncrowded beaches, and some of the best shelling on the East Coast.",
    [
      "Hunt for shells and fossils on the beach",
      "Hike and camp at Edisto Beach State Park",
      "Kayak the ACE Basin",
      "Bike the island roads",
      "Eat fresh shrimp at a local seafood shack"
    ],
    "images/edisto.jpg",
    mapUrl("Edisto Beach, SC")
  ),
  new Vacation(
    "Oak Island",
    "Beach",
    "A North Carolina beach town facing south, so the sun rises and sets over the water. Wide beaches and a long fishing pier.",
    [
      "Fish from the Oak Island Pier",
      "Tour the Oak Island Lighthouse",
      "Walk Caswell Beach",
      "Visit Fort Caswell",
      "Take a day trip to Southport"
    ],
    "images/oakisland.jpg",
    mapUrl("Oak Island, NC")
  ),
  new Vacation(
    "Pawleys Island",
    "Beach",
    "One of the oldest summer resorts on the South Carolina coast, known for its rope hammocks, historic beach houses, and a quiet, low-development beach.",
    [
      "Relax at the public beach access points",
      "Visit Brookgreen Gardens",
      "Hike or kayak at Huntington Beach State Park",
      "Crab at the Pawleys Island creek",
      "Eat at a Murrells Inlet seafood restaurant"
    ],
    "images/pawley.png",
    mapUrl("Pawleys Island, SC")
  )
];

 /* Modal functions */
function renderGallery(list) {
  const gallery = document.getElementById("gallery");
  list.forEach(vacation => gallery.appendChild(vacation.getCard()));
}

function showModal(vacation) {
  document.getElementById("modal-content").innerHTML = vacation.getModalHTML();
  document.getElementById("modal-w3").style.display = "flex";
}

function closeModal() {
  document.getElementById("modal-w3").style.display = "none";
}

renderGallery(vacations);
