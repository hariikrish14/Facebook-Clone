import React from "react";

const contacts = [
  { id: 1, name: "Charlie", profile: "/Images/chathanprofile.png", online: true },
  { id: 2, name: "Venu sir", profile: "/Images/venusircontacts.png", online: true },
  { id: 3, name: "Prakash", profile: "/Images/pralkashcontact.webp", online: false },
  { id: 4, name: "Johny", profile: "/Images/johnycontacts.jpg", online: true },
  { id: 5, name: "Moothon", profile: "/Images/moothoncontacts.jpg", online: false },
];

// Suggestions like in Facebook (Sponsored / Birthdays) but for Travel / Blood Donation
const suggestions = [
  {
    id: "s1",
    name: "Travel Adventures",
    img: "https://images.pexels.com/photos/21014/pexels-photo.jpg", // sample travel image from Pexels :contentReference[oaicite:6]{index=6}
  },
  {
    id: "s2",
    name: "Donate Blood Today",
    img: "https://images.pexels.com/photos/1170979/pexels-photo-1170979.jpeg", // sample blood donation image :contentReference[oaicite:7]{index=7}
  },
];

function Contacts() {
  return (
    <div className="contacts">
      <h3 className="contacts-header">Contacts</h3>
      <ul className="contacts-list">
        {contacts.map((c) => (
          <li key={c.id} className="contact-item">
            <div className="profile-pic">
              <img src={c.profile} alt={c.name} />
              {c.online && <span className="online-dot"></span>}
            </div>
            <span className="contact-name">{c.name}</span>
          </li>
        ))}
      </ul>

      <hr style={{ margin: "16px 0", border: "0.5px solid #ddd" }} />

      <div className="suggestions-section">
        <h4 className="contacts-header">Suggestions</h4>
        <ul className="contacts-list">
          {suggestions.map((s) => (
            <li key={s.id} className="contact-item">
              <div className="profile-pic">
                <img src={s.img} alt={s.name} />
              </div>
              <span className="contact-name">{s.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Contacts;
