export default function Wave() {
  return (
    <>
      <svg
        height="41vw"
        id="svg"
        viewBox="0 0 1440 590"
        xmlns="http://www.w3.org/2000/svg"
        className="transition duration-300 ease-in-out delay-150"
      >
        <defs>
          <linearGradient id="gradient" x1="50%" y1="100%" x2="50%" y2="0%">
            <stop offset="5%" stop-color="#191414"></stop>
            <stop offset="95%" stop-color="#1db954"></stop>
          </linearGradient>
        </defs>
        <path
          d="M 0,600 C 0,600 0,200 0,200 C 109.27272727272728,167.3492822966507 218.54545454545456,134.69856459330143 328,128 C 437.45454545454544,121.30143540669857 547.0909090909091,140.555023923445 622,167 C 696.9090909090909,193.444976076555 737.0909090909091,227.08133971291866 828,235 C 918.9090909090909,242.91866028708134 1060.5454545454545,225.11961722488036 1171,215 C 1281.4545454545455,204.88038277511964 1360.7272727272727,202.44019138755982 1440,200 C 1440,200 1440,600 1440,600 Z"
          stroke="none"
          stroke-width="0"
          fill="url(#gradient)"
          fill-opacity="0.53"
          className="transition-all duration-300 ease-in-out delay-150 path-0"
          transform="rotate(-180 720 300)"
        ></path>
        <defs>
          <linearGradient id="gradient" x1="50%" y1="100%" x2="50%" y2="0%">
            <stop offset="5%" stop-color="#191414"></stop>
            <stop offset="95%" stop-color="#1db954"></stop>
          </linearGradient>
        </defs>
        <path
          d="M 0,600 C 0,600 0,400 0,400 C 69.67464114832538,368.0861244019139 139.34928229665076,336.17224880382776 238,332 C 336.65071770334924,327.82775119617224 464.27751196172244,351.3971291866029 562,386 C 659.7224880382776,420.6028708133971 727.5406698564594,466.2392344497608 824,447 C 920.4593301435406,427.7607655502392 1045.55980861244,343.64593301435406 1153,325 C 1260.44019138756,306.35406698564594 1350.22009569378,353.17703349282294 1440,400 C 1440,400 1440,600 1440,600 Z"
          stroke="none"
          stroke-width="0"
          fill="url(#gradient)"
          fill-opacity="1"
          className="transition-all duration-300 ease-in-out delay-150 path-1"
          transform="rotate(-180 720 300)"
        ></path>
      </svg>
    </>
  );
}
