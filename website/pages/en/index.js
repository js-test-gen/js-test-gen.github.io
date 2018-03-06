/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require("react");

const CompLibrary = require("../../core/CompLibrary.js");
const MarkdownBlock = CompLibrary.MarkdownBlock; /* Used to read markdown */
const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

const siteConfig = require(process.cwd() + "/siteConfig.js");

function imgUrl(img) {
  return siteConfig.baseUrl + "img/" + img;
}

function docUrl(doc, language) {
  return siteConfig.baseUrl + "docs/" + (language ? language + "/" : "") + doc;
}

function pageUrl(page, language) {
  return siteConfig.baseUrl + (language ? language + "/" : "") + page;
}

class Button extends React.Component {
  render() {
    return (
      <div className="pluginWrapper buttonWrapper">
        <a className="button" href={this.props.href} target={this.props.target}>
          {this.props.children}
        </a>
      </div>
    );
  }
}

Button.defaultProps = {
  target: "_self"
};

const SplashContainer = props => (
  <div className="homeContainer">
    <div className="homeSplashFade">
      <div className="wrapper homeWrapper">{props.children}</div>
    </div>
  </div>
);

const Logo = props => (
  <div className="projectLogo">
    <img src={props.img_src} />
  </div>
);

const ProjectTitle = props => (
  <h2 className="projectTitle">
    {siteConfig.title}
    <small>{siteConfig.tagline}</small>
  </h2>
);

const PromoSection = props => (
  <div className="section promoSection">
    <div className="promoRow">
      <div className="pluginRowBlock">{props.children}</div>
    </div>
  </div>
);

class HomeSplash extends React.Component {
  render() {
    let language = this.props.language || "";
    return (
      <SplashContainer>
        <div className="inner">
          <ProjectTitle />
          <PromoSection>
            <Button href="https://atom.io/packages/js-test-gen-atom">
              Download for atom <img src={imgUrl("Atom_editor_logo.svg")} />
            </Button>
            <Button href="https://marketplace.visualstudio.com/items?itemName=jsTestGen.js-test-gen-vscode">
              Download for vscode
              <img
                style={{ width: "131px", height: "120px" }}
                src={imgUrl("vscode_logo.svg")}
              />
            </Button>
          </PromoSection>
        </div>
      </SplashContainer>
    );
  }
}

const FeatureCallout = props => (
  <div
    className="productShowcaseSection paddingBottom"
    style={{ textAlign: "center" }}
  >
    <h2 style={{ color: "white" }}>
      Generate Unit Test Templates From Existing JS Code
    </h2>
    <div style={{ textAlign: "center", margin: "0 auto", width: "70%" }}>
      <img src={imgUrl("testFileGen.gif")} />
    </div>
    <h2 style={{ color: "white" }}>Generate Tests From Your Selections</h2>
    <div style={{ textAlign: "center", margin: "0 auto", width: "70%" }}>
      <img src={imgUrl("selectionTestGen.gif")} />
    </div>
  </div>
);

class Index extends React.Component {
  render() {
    let language = this.props.language || "";

    return (
      <div>
        <HomeSplash language={language} />
        <div className="featureList">
          <FeatureCallout />
        </div>
      </div>
    );
  }
}

module.exports = Index;
