import Profile from "./profile.js"
import './gallery.css';

export default function Gallery() {
    return (
      <div className="gallery">
        <h1>Romanos</h1>
        <div className="campoProfile">
            <Profile/>
            <Profile/>
            <Profile/>
        </div>
      </div>
    );
  }