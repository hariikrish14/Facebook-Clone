import React, { useRef } from "react";

const Stories = () => {
  const storiesRef = useRef(null);

  const stories = [
    { id: 1, name: "Create Story", image: "/Images/chandraProfilepic.jpg", create: true },
    { id: 2, name: "Charlie", image: "/Images/charliestory.png", profile: "/Images/charliedqpfofile.png" },
    { id: 3, name: "Sunny", image: "/Images/sunnystory.png", profile: "/Images/sunnylokah.webp" },
    { id: 4, name: "Jango", image: "/Images/jangostory.png", profile: "/Images/jangoprofile.png" },
    { id: 5, name: "Venu Sir", image: "/Images/venustory.png", profile: "/Images/venusircontacts.png" },
    { id: 6, name: "Nijil", image: "/Images/naijilstory.png", profile: "/Images/nijilprofile.png" },
    
  ];

  const scrollLeft = () => {
    storiesRef.current.scrollBy({ left: -200, behavior: "smooth" });
  };

  const scrollRight = () => {
    storiesRef.current.scrollBy({ left: 200, behavior: "smooth" });
  };

  return (
    <div className="stories-wrapper">
      <button className="scroll-btn left" onClick={scrollLeft}>
        <img src="/Images/icons8-left-arrow-96.png" alt="left" />
      </button>

      <div className="stories" ref={storiesRef}>
        {stories.map((story) => (
          <div key={story.id} className="story-card">
            <img src={story.image} alt={story.name} className="story-bg" />

            {story.create ? (
              <div className="create-overlay">
                <div className="plus-btn">+</div>
                <p>Create Story</p>
              </div>
            ) : (
              <>
                <img src={story.profile} alt="profile" className="story-profile" />
                <p className="story-name">{story.name}</p>
              </>
            )}
          </div>
        ))}
      </div>

      <button className="scroll-btn right" onClick={scrollRight}>
        <img src="/Images/icons8-right-arrow-96.png" alt="right" />
      </button>
    </div>
  );
};

export default Stories;
