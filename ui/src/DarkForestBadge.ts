import { Abstract } from '@darkforest_eth/types';
import { css, html, LitElement, nothing, svg, TemplateResult, unsafeCSS } from 'lit';
import { classMap } from 'lit/directives/class-map.js';
import dfstyles from './styles';

export type BadgeType = Abstract<string, 'BadgeType'>;

export const BadgeType = {
  Dfdao: 'Dfdao' as BadgeType,
} as const;

export type BadgeElement = {
  name: string;
  description: string;
  badge: TemplateResult<2>;
  color:
    | 'gold'
    | 'silver'
    | 'bronze'
    | 'red'
    | 'yellow'
    | 'orange'
    | 'green'
    | 'blue'
    | 'indigo'
    | 'violet';
};

export class DarkForestBadge extends LitElement {
  // Not part of LitElement but let's tack on the tagName for easier registration
  static tagName = 'df-badge';

  // Defining element styles without a decorator
  // These are injected into the shadowRoot so they aren't applied globally
  static styles = [
    css`
      :host {
        width: 100%;
        height: 100%;
        display: block;
      }

      div {
        background: gray;
        margin: auto;
        border: 1px solid white;
        box-shadow: 3px 3px 5px black; 
        border-radius: 50%;
        padding: 5px;
      }

      svg {
        width: inherit;
        height: inherit;
      }

      path {
        fill: var(--df-icon-color, ${unsafeCSS(dfstyles.colors.text)});
      }

      .small {
        height: 50px;
        width: 50px;
      }

      .medium {
        height: 80px;
        width: 80px;
      }
      .large {
        height: 120px;
        width: 120px;
      }
      
      .gold {
        background: ${unsafeCSS(dfstyles.colors.dfgold)}
      }
      .silver {
        background: ${unsafeCSS(dfstyles.colors.dfsilver)}
      }
     .bronze {
        background: ${unsafeCSS(dfstyles.colors.dfbronze)}
      }
     .red{
        background: ${unsafeCSS(dfstyles.colors.dfred)}
      }
     .orange{
        background: ${unsafeCSS(dfstyles.colors.dforange)}
      }
     .yellow{
        background: ${unsafeCSS(dfstyles.colors.dfyellow)}
      }
     .green{
        background: ${unsafeCSS(dfstyles.colors.dfgreen)}
      }
     .blue{
        background: ${unsafeCSS(dfstyles.colors.dfblue)}
      }
     .indigo {
        background: ${unsafeCSS('#4B0082')}
      }
     .violet {
        background: ${unsafeCSS(dfstyles.colors.dfpurple)}
      }

 
      .
    `,
  ];

  // Defining element properties without a decorator
  static properties = {
    type: {
      type: String,
    },
    size: {
      type: String,
    },
  };

  // Properties defined above will have a getter/setter created on the component,
  // but we want to define their type and/or defaults on the component
  type?: BadgeType;
  size: 'small' | 'medium' | 'large' = 'medium';

  render() {
    const badgeElement = getBadgeElement(this.type);
    if (!badgeElement) return nothing;
    const classes = {
      small: this.size === 'small',
      medium: this.size === 'medium',
      large: this.size === 'large',
      gold: badgeElement.color == 'gold',
      silver: badgeElement.color == 'silver',
      bronze: badgeElement.color == 'bronze',
      red: badgeElement.color == 'red',
      orange: badgeElement.color == 'orange',
      yellow: badgeElement.color == 'yellow',
      green: badgeElement.color == 'green',
      blue: badgeElement.color == 'blue',
      indigo: badgeElement.color == 'indigo',
      violet: badgeElement.color == 'violet',
    };

    return html`<div class=${classMap(classes)}>${badgeElement.badge}</div> `;
  }
}

export function getBadgeElement(badge: BadgeType | undefined): BadgeElement | undefined {
  switch (badge) {
    case BadgeType.Dfdao:
      return Dfdao;
    default:
      console.warn(`Invalid icon name: ${badge}`);
      return undefined;
  }
}
/*
  Each Icon SVG below contains the entire definition.
  This is so each can have custom x/y/viewBox properties

  For example: The WithdrawIcon needs `viewBox="0 0 16 16"`
*/

const Dfdao: BadgeElement = {
  name: 'dfdao',
  description: ':|',
  color: 'violet',
  badge: svg`
  
<svg
xmlns:dc="http://purl.org/dc/elements/1.1/"
xmlns:cc="http://creativecommons.org/ns#"
xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
xmlns:svg="http://www.w3.org/2000/svg"
xmlns="http://www.w3.org/2000/svg"
xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
version="1.1"
id="svg2"
xml:space="preserve"
width="1280"
height="746.66669"
viewBox="0 0 1280 746.66669"
sodipodi:docname="dfdao logo.ai"><metadata
  id="metadata8"><rdf:RDF><cc:Work
      rdf:about=""><dc:format>image/svg+xml</dc:format><dc:type
        rdf:resource="http://purl.org/dc/dcmitype/StillImage" /></cc:Work></rdf:RDF></metadata><defs
  id="defs6"><clipPath
    clipPathUnits="userSpaceOnUse"
    id="clipPath18"><path
      d="M 1.749,279.999 C 1.749,129.775 215.869,7.994 480,7.994 v 0 c 264.131,0 478.252,121.781 478.252,272.005 v 0 c 0,150.224 -214.121,272.006 -478.252,272.006 v 0 C 215.869,552.005 1.749,430.223 1.749,279.999"
      id="path16" /></clipPath><clipPath
    clipPathUnits="userSpaceOnUse"
    id="clipPath30"><path
      d="M 169.137,280.001 C 169.137,129.776 302.962,7.996 468.044,7.996 v 0 c 165.082,0 298.907,121.78 298.907,272.005 v 0 c 0,150.224 -133.825,272.005 -298.907,272.005 v 0 c -165.082,0 -298.907,-121.781 -298.907,-272.005"
      id="path28" /></clipPath><clipPath
    clipPathUnits="userSpaceOnUse"
    id="clipPath42"><path
      d="m 348.482,280.001 c 0,-150.225 53.53,-272.005 119.562,-272.005 v 0 c 66.033,0 119.563,121.78 119.563,272.005 v 0 c 0,150.224 -53.53,272.005 -119.563,272.005 v 0 c -66.032,0 -119.562,-121.781 -119.562,-272.005"
      id="path40" /></clipPath><clipPath
    clipPathUnits="userSpaceOnUse"
    id="clipPath54"><path
      d="M 0,560 H 960 V 0 H 0 Z"
      id="path52" /></clipPath></defs><sodipodi:namedview
  pagecolor="#ffffff"
  bordercolor="#666666"
  borderopacity="1"
  objecttolerance="10"
  gridtolerance="10"
  guidetolerance="10"
  inkscape:pageopacity="0"
  inkscape:pageshadow="2"
  inkscape:window-width="640"
  inkscape:window-height="480"
  id="namedview4" /><g
  id="g10"
  inkscape:groupmode="layer"
  inkscape:label="dfdao logo"
  transform="matrix(1.3333333,0,0,-1.3333333,0,746.66667)"><g
    id="g12"><g
      id="g14"
      clip-path="url(#clipPath18)"><g
        id="g20"
        transform="translate(946.8306,279.9991)"><path
          d="m 0,0 c 0,-69.218 -49.438,-134.143 -134.302,-182.409 -84.531,-48.077 -202.074,-78.175 -332.529,-78.175 v -22.842 c 133.676,0 255.259,30.792 343.822,81.162 C -34.781,-152.084 22.842,-81.007 22.842,0 Z m -466.831,-260.584 c -130.455,0 -247.997,30.098 -332.528,78.175 C -884.223,-134.143 -933.661,-69.218 -933.661,0 h -22.842 c 0,-81.007 57.622,-152.084 145.851,-202.264 88.562,-50.37 210.145,-81.162 343.821,-81.162 z M -933.661,0 c 0,69.218 49.438,134.143 134.302,182.409 84.531,48.077 202.073,78.176 332.528,78.176 v 22.842 c -133.676,0 -255.259,-30.793 -343.821,-81.162 C -898.881,152.084 -956.503,81.007 -956.503,0 Z m 466.83,260.585 c 130.455,0 247.998,-30.099 332.529,-78.176 C -49.438,134.143 0,69.218 0,0 h 22.842 c 0,81.007 -57.623,152.084 -145.851,202.265 -88.563,50.369 -210.146,81.162 -343.822,81.162 z"
          style="fill:#ffffff;fill-opacity:1;fill-rule:nonzero;stroke:none"
          id="path22" /></g></g></g><g
    id="g24"><g
      id="g26"
      clip-path="url(#clipPath30)"><g
        id="g32"
        transform="translate(755.5303,280.0006)"><path
          d="m 0,0 c 0,-142.927 -127.674,-260.584 -287.486,-260.584 v -22.842 c 170.352,0 310.328,125.904 310.328,283.426 z m -287.486,-260.584 c -159.812,0 -287.487,117.657 -287.487,260.584 h -22.841 c 0,-157.522 139.976,-283.426 310.328,-283.426 z M -574.973,0 c 0,142.927 127.675,260.585 287.487,260.585 v 22.841 C -457.838,283.426 -597.814,157.522 -597.814,0 Z m 287.487,260.585 C -127.674,260.585 0,142.927 0,0 h 22.842 c 0,157.522 -139.976,283.426 -310.328,283.426 z"
          style="fill:#ffffff;fill-opacity:1;fill-rule:nonzero;stroke:none"
          id="path34" /></g></g></g><g
    id="g36"><g
      id="g38"
      clip-path="url(#clipPath42)"><g
        id="g44"
        transform="translate(576.1862,280.0006)"><path
          d="m 0,0 c 0,-73.912 -13.191,-140.279 -34.054,-187.741 -10.438,-23.747 -22.572,-42.251 -35.468,-54.659 -12.839,-12.355 -25.872,-18.184 -38.62,-18.184 v -22.842 c 20.268,0 38.689,9.392 54.458,24.566 15.713,15.12 29.343,36.451 40.541,61.927 C 9.268,-145.948 22.842,-76.313 22.842,0 Z m -108.142,-260.584 c -12.748,0 -25.781,5.829 -38.62,18.184 -12.896,12.408 -25.03,30.912 -35.468,54.659 -20.863,47.462 -34.054,113.829 -34.054,187.741 h -22.842 c 0,-76.313 13.574,-145.948 35.985,-196.933 11.198,-25.476 24.828,-46.807 40.541,-61.927 15.769,-15.174 34.19,-24.566 54.458,-24.566 z M -216.284,0 c 0,73.912 13.191,140.279 34.054,187.741 10.438,23.747 22.572,42.251 35.468,54.659 12.839,12.355 25.872,18.185 38.62,18.185 v 22.841 c -20.268,0 -38.689,-9.392 -54.458,-24.566 -15.713,-15.12 -29.343,-36.451 -40.541,-61.927 C -225.552,145.948 -239.126,76.313 -239.126,0 Z m 108.142,260.585 c 12.748,0 25.781,-5.83 38.62,-18.185 12.896,-12.408 25.03,-30.912 35.468,-54.659 C -13.191,140.279 0,73.912 0,0 h 22.842 c 0,76.313 -13.574,145.948 -35.985,196.933 -11.198,25.476 -24.828,46.807 -40.541,61.927 -15.769,15.174 -34.19,24.566 -54.458,24.566 z"
          style="fill:#ffffff;fill-opacity:1;fill-rule:nonzero;stroke:none"
          id="path46" /></g></g></g><g
    id="g48"><g
      id="g50"
      clip-path="url(#clipPath54)"><g
        id="g56"
        transform="translate(107.861,361.2681)"><path
          d="m 0,0 c 0,1.775 -0.259,3.143 -0.776,4.104 -0.444,0.962 -1.22,1.664 -2.33,2.108 -1.109,0.443 -2.588,0.702 -4.437,0.776 -1.774,0.074 -3.993,0.111 -6.655,0.111 v -170.377 c 2.662,0 4.881,0.037 6.655,0.111 1.849,0.074 3.328,0.333 4.437,0.776 1.11,0.444 1.886,1.147 2.33,2.108 0.517,0.961 0.776,2.329 0.776,4.104 z m 14.198,-156.179 c 0,-4.437 -0.813,-7.876 -2.44,-10.316 -1.627,-2.366 -3.772,-4.104 -6.434,-5.213 -2.662,-1.109 -5.694,-1.775 -9.095,-1.997 -3.402,-0.148 -6.877,-0.222 -10.427,-0.222 H -28.396 V 17.748 h 14.198 c 3.55,0 7.025,-0.111 10.427,-0.333 3.401,-0.148 6.433,-0.777 9.095,-1.886 2.662,-1.109 4.807,-2.884 6.434,-5.324 C 13.385,7.839 14.198,4.437 14.198,0 Z"
          style="fill:#ffffff;fill-opacity:1;fill-rule:nonzero;stroke:none"
          id="path58" /></g><g
        id="g60"
        transform="translate(273.0071,368.3672)"><path
          d="M 0,0 H 17.748 V 10.649 H -14.198 V -181.026 H 0 v 99.387 10.649 z"
          style="fill:#ffffff;fill-opacity:1;fill-rule:nonzero;stroke:none"
          id="path62" /></g><g
        id="g64"
        transform="translate(472.5276,361.2681)"><path
          d="m 0,0 c 0,1.775 -0.259,3.143 -0.776,4.104 -0.444,0.962 -1.22,1.664 -2.33,2.108 -1.109,0.443 -2.588,0.702 -4.437,0.776 -1.774,0.074 -3.993,0.111 -6.655,0.111 v -170.377 c 2.662,0 4.881,0.037 6.655,0.111 1.849,0.074 3.328,0.333 4.437,0.776 1.11,0.444 1.886,1.147 2.33,2.108 0.517,0.961 0.776,2.329 0.776,4.104 z m 14.198,-156.179 c 0,-4.437 -0.813,-7.876 -2.44,-10.316 -1.627,-2.366 -3.772,-4.104 -6.434,-5.213 -2.662,-1.109 -5.694,-1.775 -9.095,-1.997 -3.402,-0.148 -6.877,-0.222 -10.427,-0.222 H -28.396 V 17.748 h 14.198 c 3.55,0 7.025,-0.111 10.427,-0.333 3.401,-0.148 6.433,-0.777 9.095,-1.886 2.662,-1.109 4.807,-2.884 6.434,-5.324 C 13.385,7.839 14.198,4.437 14.198,0 Z"
          style="fill:#ffffff;fill-opacity:1;fill-rule:nonzero;stroke:none"
          id="path66" /></g><g
        id="g68"
        transform="translate(675.7847,187.3416)"><path
          d="M 0,0 H 14.198 L 3.55,191.674 H -17.748 L -28.396,0 h 14.198 l 3.55,99.387 3.549,85.188 3.55,-85.188 z"
          style="fill:#ffffff;fill-opacity:1;fill-rule:nonzero;stroke:none"
          id="path70" /></g><g
        id="g72"
        transform="translate(875.3049,205.0882)"><path
          d="m 0,0 c 0,-0.887 -0.111,-2.514 -0.333,-4.881 -0.222,-2.292 -0.998,-4.658 -2.329,-7.099 -1.331,-2.44 -3.439,-4.584 -6.323,-6.433 -2.884,-1.923 -6.988,-2.884 -12.312,-2.884 -5.324,0 -9.429,0.961 -12.312,2.884 -2.884,1.849 -4.992,3.993 -6.323,6.433 -1.331,2.441 -2.108,4.807 -2.329,7.099 -0.222,2.367 -0.333,3.994 -0.333,4.881 v 156.179 c 0,0.592 0.037,1.479 0.111,2.662 0.074,1.183 0.295,2.477 0.665,3.882 0.37,1.479 0.999,2.958 1.886,4.437 0.887,1.553 2.107,2.958 3.66,4.215 1.553,1.257 3.55,2.256 5.99,2.995 2.44,0.814 5.435,1.22 8.985,1.22 3.549,0 6.544,-0.406 8.985,-1.22 2.44,-0.739 4.437,-1.738 5.99,-2.995 1.552,-1.257 2.773,-2.662 3.66,-4.215 0.887,-1.479 1.516,-2.958 1.886,-4.437 0.369,-1.405 0.591,-2.699 0.665,-3.882 C -0.037,157.658 0,156.771 0,156.179 Z m -28.396,0 c 0,-0.887 0.037,-1.96 0.111,-3.217 0.074,-1.183 0.333,-2.329 0.776,-3.438 0.444,-1.11 1.147,-2.071 2.108,-2.884 0.961,-0.74 2.329,-1.11 4.104,-1.11 1.775,0 3.143,0.37 4.104,1.11 0.961,0.813 1.664,1.774 2.108,2.884 0.443,1.109 0.702,2.255 0.776,3.438 0.074,1.257 0.111,2.33 0.111,3.217 v 156.179 c 0,0.887 -0.037,1.849 -0.111,2.884 -0.074,1.035 -0.333,1.96 -0.776,2.773 -0.444,0.887 -1.147,1.627 -2.108,2.219 -0.961,0.591 -2.329,0.887 -4.104,0.887 -1.775,0 -3.143,-0.296 -4.104,-0.887 -0.961,-0.592 -1.664,-1.332 -2.108,-2.219 -0.443,-0.813 -0.702,-1.738 -0.776,-2.773 -0.074,-1.035 -0.111,-1.997 -0.111,-2.884 z"
          style="fill:#ffffff;fill-opacity:1;fill-rule:nonzero;stroke:none"
          id="path74" /></g><path
        d="m 109.355,277.012 h 340.754 v 16.737 H 109.355 Z"
        style="fill:#ffffff;fill-opacity:1;fill-rule:nonzero;stroke:none"
        id="path76" /><path
        d="M 485.978,277.012 H 832.71 v 16.737 H 485.978 Z"
        style="fill:#ffffff;fill-opacity:1;fill-rule:nonzero;stroke:none"
        id="path78" /><path
        d="m 874.557,277.012 h 83.694 v 16.737 h -83.694 z"
        style="fill:#ffffff;fill-opacity:1;fill-rule:nonzero;stroke:none"
        id="path80" /><path
        d="M 7.726,277.012 H 91.42 v 16.737 H 7.726 Z"
        style="fill:#ffffff;fill-opacity:1;fill-rule:nonzero;stroke:none"
        id="path82" /></g></g></g></svg>
`,
};
