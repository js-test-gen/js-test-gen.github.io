/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/* List of projects/orgs using your project for the users page */
const users = [];

const siteConfig = {
  title: "JS Test Gen" /* title for your website */,
  tagline: "Generate unit test templates for your default/named exports.",
  url: "https://js-test-gen.github.io" /* your website url */,
  baseUrl: "/js-test-gen/" /* base url for your project */,
  projectName: "js-test-gen",
  headerLinks: [{ href: "https://github.com/js-test-gen", label: "GitHub" }],
  users,
  /* path to images for header/footer */
  headerIcon: "img/jsTestGen.png",
  footerIcon: "img/jsTestGen.png",
  favicon: "img/jsTestGen.png",
  /* colors for website */
  colors: {
    primaryColor: "#2B2121",
    secondaryColor: "#987E7E"
  },
  /* custom fonts for website */
  /*fonts: {
    myFont: [
      "Times New Roman",
      "Serif"
    ],
    myOtherFont: [
      "-apple-system",
      "system-ui"
    ]
  },*/
  // This copyright info is used in /core/Footer.js and blog rss/atom feeds.
  copyright: "Copyright © " + new Date().getFullYear() + " Martin O'Grady",
  // organizationName: 'deltice', // or set an env variable ORGANIZATION_NAME
  // projectName: 'test-site', // or set an env variable PROJECT_NAME
  highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks
    theme: "default"
  },
  scripts: ["https://buttons.github.io/buttons.js"],
  // You may provide arbitrary config keys to be used as needed by your template.
  repoUrl: "https://github.com/js-test-gen"
};

module.exports = siteConfig;
