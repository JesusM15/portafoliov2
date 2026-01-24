import React from 'react';
import './SunSphere.css';

const SunSphere = () => {
  return (
    <div className="sun-sphere">
      <div className="sun-core">
        <div className="sun-surface">
          <div className="sun-glow"></div>
          <div className="sun-pulse"></div>
          <div className="sun-rays">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="ray" style={{ '--ray-index': i }}></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SunSphere;
