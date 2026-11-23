const base = {
  width: 22,
  height: 22,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.75,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  'aria-hidden': true,
}

export function IconApi(props) {
  return (
    <svg {...base} {...props}>
      <path d="M4 9h16" />
      <path d="M4 15h16" />
      <path d="M10 4 8 20" />
      <path d="M16 4l-2 16" />
    </svg>
  )
}

export function IconNetwork(props) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="12" r="2.5" />
      <path d="M12 4.5v3" />
      <path d="M12 16.5v3" />
      <path d="M4.5 12h3" />
      <path d="M16.5 12h3" />
      <path d="m6.5 6.5 2.1 2.1" />
      <path d="m15.4 15.4 2.1 2.1" />
      <path d="m17.5 6.5-2.1 2.1" />
      <path d="m8.6 15.4-2.1 2.1" />
    </svg>
  )
}

export function IconConsole(props) {
  return (
    <svg {...base} {...props}>
      <rect x="3.5" y="4.5" width="17" height="15" rx="2" />
      <path d="m7.5 10 2.5 2-2.5 2" />
      <path d="M12.5 14H16" />
    </svg>
  )
}

export function IconCode(props) {
  return (
    <svg {...base} {...props}>
      <path d="m8 8-4 4 4 4" />
      <path d="m16 8 4 4-4 4" />
      <path d="m13.5 6-3 12" />
    </svg>
  )
}

export function IconInspect(props) {
  return (
    <svg {...base} {...props}>
      <path d="M4 8V5.5A1.5 1.5 0 0 1 5.5 4H8" />
      <path d="M16 4h2.5A1.5 1.5 0 0 1 20 5.5V8" />
      <path d="M20 16v2.5a1.5 1.5 0 0 1-1.5 1.5H16" />
      <path d="M8 20H5.5A1.5 1.5 0 0 1 4 18.5V16" />
      <circle cx="11" cy="11" r="3" />
      <path d="m14.5 14.5 4 4" />
    </svg>
  )
}

export function IconResponsive(props) {
  return (
    <svg {...base} {...props}>
      <rect x="3.5" y="5" width="11" height="9" rx="1.5" />
      <rect x="15.5" y="9" width="5" height="9" rx="1.2" />
      <path d="M7 17.5h3" />
    </svg>
  )
}

export function IconDownload(props) {
  return (
    <svg {...base} {...props}>
      <path d="M12 4v10" />
      <path d="m8 10 4 4 4-4" />
      <path d="M5 18h14" />
    </svg>
  )
}

export function IconTabs(props) {
  return (
    <svg {...base} {...props}>
      <rect x="3.5" y="5.5" width="17" height="13" rx="2" />
      <path d="M3.5 9.5h17" />
      <path d="M7 5.5v4" />
      <path d="M12 5.5v4" />
    </svg>
  )
}

export function IconIncognito(props) {
  return (
    <svg {...base} {...props}>
      <path d="M4 11c1.5-3 4-5 8-5s6.5 2 8 5" />
      <circle cx="8.5" cy="14.5" r="2.5" />
      <circle cx="15.5" cy="14.5" r="2.5" />
      <path d="M11 14.5h2" />
    </svg>
  )
}

export function IconBookmark(props) {
  return (
    <svg {...base} {...props}>
      <path d="M7 4.5h10a1 1 0 0 1 1 1V20l-6-3.2L6 20V5.5a1 1 0 0 1 1-1Z" />
    </svg>
  )
}

export function IconSettings(props) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="12" r="3" />
      <path d="M12 3.5v2.2M12 18.3v2.2M4.9 7.1l1.6 1.6M17.5 15.3l1.6 1.6M3.5 12h2.2M18.3 12h2.2M4.9 16.9l1.6-1.6M17.5 8.7l1.6-1.6" />
    </svg>
  )
}

export function IconCustomize(props) {
  return (
    <svg {...base} {...props}>
      <path d="M12 4.5 14.2 9l4.8.4-3.7 3.2 1.1 4.7L12 15.2 7.6 17.3l1.1-4.7-3.7-3.2L9.8 9 12 4.5Z" />
    </svg>
  )
}

export function IconGithub(props) {
  return (
    <svg {...base} {...props} fill="currentColor" stroke="none">
      <path d="M12 2.2a9.8 9.8 0 0 0-3.1 19.1c.5.1.7-.2.7-.5v-1.7c-2.8.6-3.4-1.2-3.4-1.2-.4-1.1-1.1-1.4-1.1-1.4-.9-.6.1-.6.1-.6 1 0 1.5 1 1.5 1 .9 1.5 2.4 1.1 3 .8.1-.7.4-1.1.6-1.3-2.3-.3-4.7-1.1-4.7-5a3.9 3.9 0 0 1 1-2.7c-.1-.3-.4-1.3.1-2.7 0 0 .8-.3 2.8 1a9.6 9.6 0 0 1 5 0c2-1.3 2.8-1 2.8-1 .5 1.4.2 2.4.1 2.7a3.9 3.9 0 0 1 1 2.7c0 3.9-2.4 4.7-4.7 5 .4.3.7.9.7 1.9v2.8c0 .3.2.6.7.5A9.8 9.8 0 0 0 12 2.2Z" />
    </svg>
  )
}

export function IconExternal(props) {
  return (
    <svg {...base} width={18} height={18} {...props}>
      <path d="M14 10v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <path d="M10 14 20 4" />
      <path d="M14 4h6v6" />
    </svg>
  )
}

export function IconWindows(props) {
  return (
    <svg {...base} {...props} fill="currentColor" stroke="none">
      <path d="M3 5.5 11 4.4v7.1H3V5.5Zm8.8-.2L21 3.5v8H11.8V5.3ZM3 13.5h8v7.1L3 19.5v-6Zm8.8 0H21v8l-9.2-1.3v-6.7Z" />
    </svg>
  )
}

export function IconMenu(props) {
  return (
    <svg {...base} {...props}>
      <path d="M4 7h16" />
      <path d="M4 12h16" />
      <path d="M4 17h16" />
    </svg>
  )
}

export function IconClose(props) {
  return (
    <svg {...base} {...props}>
      <path d="M6 6l12 12" />
      <path d="M18 6 6 18" />
    </svg>
  )
}

const MAP = {
  api: IconApi,
  network: IconNetwork,
  console: IconConsole,
  code: IconCode,
  inspect: IconInspect,
  responsive: IconResponsive,
  download: IconDownload,
  tabs: IconTabs,
  incognito: IconIncognito,
  bookmark: IconBookmark,
  settings: IconSettings,
  customize: IconCustomize,
}

export function FeatureIcon({ name, ...props }) {
  const Comp = MAP[name] || IconCode
  return <Comp {...props} />
}
