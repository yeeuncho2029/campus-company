import { useState, useEffect } from "react";
import "./App.css";

function NavBar() {
  return (
    <header className="navbar">
      <h2 className="brand">
        <span className="logo" aria-hidden="true">
         <span className="circle circle-one"></span>
         <span className="circle circle-two"></span>
        </span>

        Campus Company
      </h2>

      <nav aria-label="Main navigation">
        <a href="#discover">Discover</a>
      </nav>
    </header>
  );
}
function ProfileCard({
  name,
  year,
  activity,
  interests,
  availability,
  image,
  selectedYear
}) {
  const [isSaved, setIsSaved] = useState(false);

  function handleSave() {
    setIsSaved((previousValue) => !previousValue);
  }

  return (
    <article
      className="profile-card"
      hidden={selectedYear !== "All years" && selectedYear !== year}
    >
  {image && (
    <img className="profile-photo" src={image} alt={name} />
  )}

  <h2>{name}</h2>
      <p>{year}</p>

      <h3>{activity}</h3>
      <p className="interests">{interests}</p>
      <p>Available: {availability}</p>
      
      <button
        type="button"
        onClick={handleSave}
        aria-pressed={isSaved}
      >
        {isSaved ? "Saved ✓" : "Save"}
      </button>
    </article>
  );
}
function App() {
  const [selectedYear, setSelectedYear] = useState("All years");
  useEffect(() => {
    document.title = "Campus Company | Discover";
  }, []);

  return (
    <div>
      <NavBar />

      <main id="discover">
        <h1>Find someone to do things with.</h1>

        <p>
          Meet Northwestern students looking for company
          for everyday plans.
        </p>
<div className="year-filter">
  <label htmlFor="year-filter">Filter by year: </label>

  <select
    id="year-filter"
    value={selectedYear}
    onChange={(event) => setSelectedYear(event.target.value)}
  >
    <option value="All years">All years</option>
    <option value="Freshman">Freshman</option>
    <option value="Sophomore">Sophomore</option>
    <option value="Junior">Junior</option>
    <option value="Senior">Senior</option>
  </select>
</div>
<section className="profile-grid" aria-label="Student profiles">
  <ProfileCard
    name="Alex"
    year="Freshman"
    activity="Explore Chicago together"
    interests="Exploring · Photography"
    availability="Weekends"
    image="/alex.png"
    selectedYear={selectedYear}
  />

  <ProfileCard
    name="Jamie"
    year="Sophomore"
    activity="A cafe study buddy"
    interests="Cafés · Music"
    availability="Mondays"
    image="/jamie.png"
    selectedYear={selectedYear}
  />

  <ProfileCard
    name="Sam"
    year="Junior"
    activity="A walking buddy"
    interests="Walks · Outdoors"
    availability="Weekends"
    image="/sam.png"
    selectedYear={selectedYear}
  />

  <ProfileCard
    name="Jordan"
    year="Sophomore"
    activity="Try new restaurants"
    interests="Food · Cafés"
    availability="Fridays"
    image="/jordan.png"
    selectedYear={selectedYear}
  />

  <ProfileCard
    name="Taylor"
    year="Senior"
    activity="A library study partner"
    interests="Studying · Books"
    availability="Weekdays"
    image="/taylor.png"
    selectedYear={selectedYear}
  />

  <ProfileCard
    name="Olivia"
    year="Freshman"
    activity="Attend campus events"
    interests="Events · Music"
    availability="Weekdays"
    image="/olivia.png"
    selectedYear={selectedYear}
  />
</section>
      </main>

      <footer>
        <p>Find company for everyday Northwestern life.</p>
      </footer>
    </div>
  );
}

export default App;