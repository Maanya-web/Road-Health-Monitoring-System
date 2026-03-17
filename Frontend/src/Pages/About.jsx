import React from "react";
import { Map, Satellite, Activity, Cpu, Database } from "lucide-react";
import { BlockMath, InlineMath } from "react-katex";
import "./about.css";

const About = () => {
  return (
    <div className="about-root">
      <div className="about-shell">
        {/* Hero / Mission */}
        <section className="about-hero">
          <p className="about-kicker">URHMS · Mission</p>
          <h1 className="about-hero-title">
              Securing the Himalayan Lifeline with Geospatial Intelligence
          </h1>
          <p className="about-hero-text">
            The Uttarakhand Road Hazard Monitoring System (URHMS) is an advanced
            geospatial intelligence platform designed to secure the lifeline of
            the Himalayas. By integrating multi-sensor satellite data with
            high-resolution topographic modeling, URHMS provides real-time
            detection and predictive vulnerability assessment for
            Uttarakhand&apos;s critical highway network.
          </p>
        </section>

        {/* Core Pillars grid */}
        <section>
          <div className="about-section-header">
            <h2 className="about-section-title">Core Pillars of Analysis</h2>
            <span className="about-section-line" />
          </div>

          <div className="about-pillars-grid">
            {/* Reactive Detection */}
            <div className="about-card">
              <div className="about-icon-circle">
                <Satellite size={18} />
              </div>
              <h3 className="about-card-title">Reactive Detection</h3>
              <p className="about-card-text">
                URHMS ingests Sentinel‑1 Synthetic Aperture Radar (SAR) and
                Sentinel‑2 optical imagery to detect active floods, snow
                blockages and other disruptions as they occur, even under heavy
                monsoon cloud cover.
              </p>
            </div>

            {/* Predictive Modeling */}
            <div className="about-card">
              <div className="about-icon-circle">
                <Map size={18} />
              </div>
              <h3 className="about-card-title">Predictive Modeling</h3>
              <p className="about-card-text">
                Using SRTM Digital Elevation Models (DEM), URHMS computes
                Slope, Aspect and Topographic Wetness Index (TWI) to anticipate
                where failures are likely to initiate before disasters strike.
              </p>
            </div>

            {/* Infrastructural Health */}
            <div className="about-card">
              <div className="about-icon-circle">
                <Activity size={18} />
              </div>
              <h3 className="about-card-title">Infrastructural Health</h3>
              <p className="about-card-text">
                Continuous tracking of deformation behaviour and soil saturation
                helps assess long‑term embankment integrity and subgrade
                performance along the state&apos;s highway corridors.
              </p>
            </div>
          </div>
        </section>

        {/* Methodology */}
        <section>
          <div className="about-section-header">
            <h2 className="about-section-title">Technical Methodology</h2>
            <span className="about-section-line" />
          </div>

          <div className="about-method-grid">
            {/* Landslide Susceptibility */}
            <div className="about-math-card">
              <h3 className="about-math-title">Landslide Susceptibility</h3>
              <p className="about-math-body">
                URHMS applies the Mohr–Coulomb failure criterion to evaluate
                slope stability. Slope angle and CHIRPS 3‑day cumulative
                rainfall are used to estimate when pore water pressure
                approaches or exceeds the soil&apos;s shear strength.
              </p>
              <p className="about-math-body">Shear strength is approximated as:</p>
              <BlockMath math={"\\tau = c + \\sigma_n \\tan\\phi"} />
              <p className="about-math-note">
                where <InlineMath math="\\tau" /> is shear strength,{" "}
                <InlineMath math="c" /> is cohesion,{" "}
                <InlineMath math="\\sigma_n" /> is effective normal stress, and{" "}
                <InlineMath math="\\phi" /> is the angle of internal friction.
              </p>
            </div>

            {/* Flood Inundation */}
            <div className="about-math-card">
              <h3 className="about-math-title">Flood Inundation</h3>
              <p className="about-math-body">
                Flooded segments are mapped by comparing Sentinel‑1 SAR
                backscatter before and after an event. Water behaves as a
                specular reflector, causing strong attenuation in VV returns
                over inundated pixels.
              </p>
              <p className="about-math-body">URHMS uses a backscatter ratio:</p>
              <BlockMath math={"R_{\\text{flood}} = \\dfrac{\\sigma_{0,\\,\\text{before}}}{\\sigma_{0,\\,\\text{after}}}"} />
              <p className="about-math-note">
                Pixels with <InlineMath math="R_{\\text{flood}}" /> above a
                calibrated threshold are flagged as inundated, even under
                persistent cloud cover.
              </p>
            </div>

            {/* Cryospheric Monitoring */}
            <div className="about-math-card">
              <h3 className="about-math-title">Cryospheric Monitoring</h3>
              <p className="about-math-body">
                Snow cover is monitored using the Normalized Difference Snow
                Index (NDSI), separating snow from clouds and bright rock to
                delineate a dynamic freeze line for high‑altitude routes.
              </p>
              <BlockMath math={"\\text{NDSI} = \\dfrac{Green - SWIR}{Green + SWIR}"} />
              <p className="about-math-note">
                Thresholded NDSI maps feed into hazard layers for snow‑blocked
                passes and approaches.
              </p>
            </div>

            {/* Deformation & Structural Integrity */}
            <div className="about-math-card">
              <h3 className="about-math-title">Deformation &amp; Structural Integrity</h3>
              <p className="about-math-body">
                URHMS incorporates deformation characteristics to monitor
                subgrade settlement, creep and crust performance under
                freeze–thaw and tectonic loading.
              </p>
              <p className="about-math-body">
                Subgrade response is abstracted via the modulus of subgrade reaction:
              </p>
              <BlockMath math={"k = \\dfrac{q}{\\delta}"} />
              <p className="about-math-note">
                where <InlineMath math="q" /> is applied contact pressure and{" "}
                <InlineMath math="\\delta" /> is the resulting deflection. High
                variability in <InlineMath math="k" /> along a corridor signals
                potential differential settlement and structural vulnerability.
              </p>
            </div>
          </div>
        </section>

        {/* Data Sources & Tech Stack */}
        <section>
          <div className="about-section-header">
            <h2 className="about-section-title">Data Sources &amp; Tech Stack</h2>
            <span className="about-section-line" />
          </div>

          <div className="about-data-grid">
            {/* Satellites & Topography */}
            <div className="about-card">
              <div className="about-section-header" style={{ marginBottom: "0.6rem" }}>
                <div className="about-icon-circle">
                  <Satellite size={18} />
                </div>
                <h3 className="about-card-title">Satellites</h3>
              </div>
              <p className="about-card-text">
                Sentinel‑1 (Radar), Sentinel‑2 (Optical), MODIS (Snow fallback)
                and GPM‑IMERG (Precipitation) form the multi‑sensor backbone of
                URHMS.
              </p>

              <div className="about-section-header" style={{ marginTop: "1rem", marginBottom: "0.45rem" }}>
                <div className="about-icon-circle">
                  <Map size={18} />
                </div>
                <h3 className="about-card-title">Topography</h3>
              </div>
              <p className="about-card-text">
                NASA SRTM GL1 (30&nbsp;m resolution) provides the elevation
                baseline for slope, aspect and terrain‑driven indices.
              </p>
            </div>

            {/* Engine & Frontend */}
            <div className="about-card">
              <div className="about-section-header" style={{ marginBottom: "0.6rem" }}>
                <div className="about-icon-circle">
                  <Cpu size={18} />
                </div>
                <h3 className="about-card-title">Engine</h3>
              </div>
              <p className="about-card-text">
                Hazard analytics are powered by Google Earth Engine (GEE) cloud
                computing, enabling at‑scale processing of historical archives
                and near‑real‑time imagery.
              </p>

              <div className="about-section-header" style={{ marginTop: "1rem", marginBottom: "0.45rem" }}>
                <div className="about-icon-circle">
                  <Database size={18} />
                </div>
                <h3 className="about-card-title">Frontend</h3>
              </div>
              <p className="about-card-text">
                URHMS is built with React.js, Tailwind CSS and Leaflet for
                interactive, map‑centric visualization of risk layers and
                highway‑level insights.
              </p>
            </div>
          </div>
        </section>

        {/* Team / Metadata */}
        <section className="about-team-card">
          <h2 className="about-team-title">Team &amp; Context</h2>
          <p className="about-team-row">
            <span className="about-team-label">Team Code:</span> N26‑058
          </p>
          <p className="about-team-row">
            <span className="about-team-label">Developers:</span> Shiv Patel,
            Maanya Shah, Dhruv Singh
          </p>
          <p className="about-team-row">
            <span className="about-team-label">Project Context:</span> Inter‑IIT
            Civil Conclave 2026
          </p>
        </section>

        {/* Disclaimer */}
        <section className="about-disclaimer">
          <p>
            This is a research prototype. Ground-truth verification with
            NDMA/BRO reports is required for operational use.
          </p>
        </section>
      </div>
    </div>
  );
};

export default About;

