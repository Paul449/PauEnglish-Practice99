//Export Art Icon
function ArtIcon(){
    return(<>
         <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 64 64" height='35px' width='35px'>
    <defs>
      <linearGradient id="b" x1="32" y1="52.19" x2="32" y2="11" gradientUnits="userSpaceOnUse">
        <stop offset="0" stopColor="#54a5ff" />
        <stop offset="1" stopColor="#8ad3fe" />
      </linearGradient>
      <linearGradient id="a" x1="18.27" y1="41.92" x2="26.08" y2="41.92" gradientTransform="rotate(40.81 22.175 41.923)" gradientUnits="userSpaceOnUse">
        <stop offset="0" stopColor="#fe9661" />
        <stop offset="1" stopColor="#ffb369" />
      </linearGradient>
      <linearGradient id="c" x1="11.78" y1="30.92" x2="18.57" y2="30.92" gradientTransform="rotate(85.81 15.177 30.915)" xlinkHref="#a" />
      <linearGradient id="d" x1="18.82" y1="20.92" x2="27.53" y2="20.92" gradientTransform="rotate(22.38 23.18 20.917)" xlinkHref="#a" />
      <linearGradient id="e" x1="31.67" y1="18.92" x2="40.67" y2="18.92" xlinkHref="#a" />
      <linearGradient id="f" x1="49" y1="46" x2="49" y2="7" xlinkHref="#a" />
    </defs>
    <path
      d="M32 11C18.19 11 7 20.4 7 32c0 9.32 7.23 17.22 17.23 20A6.12 6.12 0 0 0 32 46.1a6.1 6.1 0 0 1 6.1-6.1h12.65a6 6 0 0 0 6-4.85C59.06 21.77 46.57 11 32 11zm5.5 25a4.5 4.5 0 1 1 4.5-4.5 4.49 4.49 0 0 1-4.5 4.5z"
      style={{ fill: 'url(#b)' }}
    />
    <ellipse
      cx="22.17"
      cy="41.92"
      rx="3.39"
      ry="4.5"
      transform="rotate(-40.81 22.172 41.91)"
      style={{ fill: 'url(#a)' }}
    />
    <ellipse
      cx="15.17"
      cy="30.92"
      rx="4.5"
      ry="3.39"
      transform="rotate(-85.81 15.173 30.917)"
      style={{ fill: 'url(#c)' }}
    />
    <ellipse
      cx="23.17"
      cy="20.92"
      rx="4.5"
      ry="3.39"
      transform="rotate(-22.38 23.176 20.921)"
      style={{ fill: 'url(#d)' }}
    />
    <ellipse
      cx="36.17"
      cy="18.92"
      rx="4.5"
      ry="3.39"
      style={{ fill: 'url(#e)' }}
    />
    <path
      d="M49.08 46A2.93 2.93 0 0 1 46 42.92L47.94 8a1.06 1.06 0 0 1 2.12 0L52 42.92A2.92 2.92 0 0 1 49.08 46z"
      style={{ fill: 'url(#f)' }}
    />
    <path
      d="M53 50c0 2.21-2 7-5 7 0-4-3-4.58-3-7a4 4 0 0 1 8 0z"
      style={{ fill: '#eb7f58' }}
    />
  </svg>
    
    </>)
}
export default ArtIcon;