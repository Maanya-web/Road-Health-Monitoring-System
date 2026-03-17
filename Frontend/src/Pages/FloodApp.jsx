import React from 'react'

const FloodApp = () => {
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <iframe
        title="Floody-Roads App (Google Earth Engine App)"
        src="https://shaped-faculty-465005-t6.projects.earthengine.app/view/floody-road"
        style={{
          width: "100%",
          height: "calc(100vh - 120px)",
          border: "none"
        }}
        loading="lazy"
        referrerPolicy="no-referrer"
        allowFullScreen
      />
    </div>
  )
}

export default FloodApp