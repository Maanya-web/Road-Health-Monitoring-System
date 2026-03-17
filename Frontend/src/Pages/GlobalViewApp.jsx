import React from 'react'

const GlobalViewApp = () => {
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <iframe
        title="Global Parameter View (Google Earth Engine App)"
        src="https://shaped-faculty-465005-t6.projects.earthengine.app/view/global-view"
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

export default GlobalViewApp