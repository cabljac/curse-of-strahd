import Head from "next/head";
import Link from "next/link";
export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css?family=Spectral:100,300,400,700,900"
          rel="stylesheet"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        ></meta>
      </Head>
      <body>
        <header className="header" style={{}}>
          <div className="text-box">
            <h1 className="heading-primary">
              <span className="heading-primary-first">Curse of</span>
              <span className="heading-primary-second">Strahd</span>
              <span class="heading-primary-third">campaign homepage</span>
            </h1>
            <Link href="#">
              <a className="btn btn-purple btn-animated">Sign In</a>
            </Link>
          </div>
          <div class="cloud-container">
            <div class="cloud-left" id="cloud-back"></div>
            <div class="cloud-left" id="cloud-mid"></div>
            <div class="cloud-left" id="cloud-front"></div>
          </div>
          <div class="cloud-container">
            <div class="cloud-right" id="cloud-back"></div>
            <div class="cloud-right" id="cloud-mid"></div>
            <div class="cloud-right" id="cloud-front"></div>
          </div>
          <div class="cloud-container">
            <div class="cloud-third" id="cloud-back"></div>
            <div class="cloud-third" id="cloud-mid"></div>
            <div class="cloud-third" id="cloud-front"></div>
          </div>
        </header>
      </body>
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
    </div>
  );
}
