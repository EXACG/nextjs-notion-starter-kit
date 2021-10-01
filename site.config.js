module.exports = {
  // where it all starts -- the site's root Notion page (required)
  rootNotionPageId: 'e336c46b89c347fb8ae020b5fd8cc978',

  // basic site info (required)
  name: '梦之圈-D',
  domain: 'exacgd.notion.site',
  author: '梦羽',

  // open graph metadata (optional)
  description: '梦之圈的分站 编号:D',
  socialImageTitle: 'Transitive Bullshit',
  socialImageSubtitle: 'Hello World! 👋',

  // social usernames (optional)
  twitter: null,
  github: null,
  linkedin: null,

  // default notion icon and cover images for site-wide consistency (optional)
  // page-specific values will override these site-wide defaults
  defaultPageIcon: null, // URL
  defaultPageCover: null, // URL
  defaultPageCoverPosition: 0.5,

  // image CDN host to proxy all image requests through (optional)
  // NOTE: this requires you to set up an external image proxy
  imageCDNHost: null,

  // Utteranc.es comments via GitHub issue comments (optional)
  utterancesGitHubRepo: null,

  // whether or not to enable support for LQIP preview images (optional)
  // NOTE: this requires you to set up Google Firebase and add the environment
  // variables specified in .env.example
  isPreviewImageSupportEnabled: false
}
