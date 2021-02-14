import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Curse of Strahd</title>
        <link
          href="https://fonts.googleapis.com/css?family=Spectral:100,300,400,700,900"
          rel="stylesheet"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        ></meta>
      </Head>
      <div>
        <header className="header" style={{}}>
          <div className="text-box">
            <h1 className="heading-primary">
              <span className="heading-primary-first">Curse of</span>
              <span className="heading-primary-second">Strahd</span>
              <span className="heading-primary-third">campaign homepage</span>
            </h1>
            <Link href="/login">
              <span className="btn btn-purple btn-animated">Sign In</span>
            </Link>
          </div>
          <div className="cloud-container">
            <div className="cloud-left cloud-back"></div>
            <div className="cloud-left cloud-mid"></div>
            <div className="cloud-left cloud-front"></div>
          </div>
          <div className="cloud-container">
            <div className="cloud-right cloud-back"></div>
            <div className="cloud-right cloud-mid"></div>
            <div className="cloud-right cloud-front"></div>
          </div>
          <div className="cloud-container">
            <div className="cloud-third cloud-back"></div>
            <div className="cloud-third cloud-mid"></div>
            <div className="cloud-third cloud-front"></div>
          </div>
        </header>
      </div>
      <svg width="0" height="0">
        <filter id="filter-back">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.012"
            numOctaves="4"
            seed="7"
          />
          <feDisplacementMap in="SourceGraphic" scale="170" />
        </filter>
        <filter id="filter-mid">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.012"
            numOctaves="2"
            seed="6"
          />
          <feDisplacementMap in="SourceGraphic" scale="150" />
        </filter>
        <filter id="filter-front">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.012"
            numOctaves="2"
            seed="0"
          />
          <feDisplacementMap in="SourceGraphic" scale="100" />
        </filter>
      </svg>
    </>
  );
}
