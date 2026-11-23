export const FEATURES = [
  {
    id: 'api-tester',
    title: 'API Tester',
    description:
      'Send HTTP requests, inspect responses, and keep collections close while you browse.',
    icon: 'api',
  },
  {
    id: 'network-monitor',
    title: 'Network Monitor',
    description:
      'Watch requests as they happen with filters, timing insight, and export-friendly detail.',
    icon: 'network',
  },
  {
    id: 'developer-console',
    title: 'Developer Console',
    description:
      'Read page logs and errors in a dedicated console built into the DevFlow workspace.',
    icon: 'console',
  },
  {
    id: 'js-executor',
    title: 'JavaScript Executor',
    description:
      'Run JavaScript against the active page without leaving the browser window.',
    icon: 'code',
  },
  {
    id: 'element-inspector',
    title: 'Element Inspector',
    description:
      'Inspect the DOM, styles, and layout of page elements with a focused inspector panel.',
    icon: 'inspect',
  },
  {
    id: 'responsive-mode',
    title: 'Responsive Design Mode',
    description:
      'Preview layouts at common device widths to catch responsive issues early.',
    icon: 'responsive',
  },
  {
    id: 'download-manager',
    title: 'Download Manager',
    description:
      'Track downloads, pause and resume transfers, and keep file progress visible.',
    icon: 'download',
  },
  {
    id: 'multi-tab',
    title: 'Multi-tab Browsing',
    description:
      'Work across Chromium-powered tabs with session restoration for everyday browsing.',
    icon: 'tabs',
  },
  {
    id: 'incognito',
    title: 'Incognito Mode',
    description:
      'Open a separate private session when you need browsing without shared session data.',
    icon: 'incognito',
  },
  {
    id: 'bookmarks-history',
    title: 'Bookmarks and History',
    description:
      'Save sites you return to and revisit recent pages from local bookmarks and history.',
    icon: 'bookmark',
  },
  {
    id: 'browser-settings',
    title: 'Browser Settings',
    description:
      'Configure search, startup behavior, website permissions, and other browser preferences.',
    icon: 'settings',
  },
  {
    id: 'customization',
    title: 'Customization',
    description:
      'Personalize the new-tab experience and theme so the workspace feels like yours.',
    icon: 'customize',
  },
]

export const WHY_POINTS = [
  {
    title: 'Tools beside the page',
    description:
      'API testing, network inspection, and debugging live next to your tabs — no context switch to a separate toolkit.',
  },
  {
    title: 'Built for developer workflows',
    description:
      'DevFlow is a desktop browser shaped around how developers actually work: request, inspect, tweak, and verify.',
  },
  {
    title: 'One Windows workspace',
    description:
      'Browse, debug, and manage downloads in a single Electron app with an NSIS installer for Windows x64.',
  },
]

export const SCREENSHOT_SLOTS = [
  {
    id: 'main-browser',
    title: 'Main browser workspace',
    caption: 'Tabs, address bar, and the DevFlow chrome.',
    image: '/screenshots/main-browser.png',
  },
  {
    id: 'api-tester',
    title: 'API Tester',
    caption: 'Request editor and response view.',
    image: '/screenshots/api-tester.png',
  },
  {
    id: 'network-monitor',
    title: 'Network Monitor',
    caption: 'Live request list with detail pane.',
    image: '/screenshots/network-monitor.png',
  },
  {
    id: 'element-inspector',
    title: 'Element Inspector',
    caption: 'DOM tree and style inspection.',
    image: '/screenshots/element-inspector.png',
  },
]
