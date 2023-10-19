import { html } from 'htm/preact'
import { OpenFromWeb } from './OpenFromWeb'

export const HomeScreen = () => html`
  <${OpenFromWeb} />
  <div class="home-screen">
    <h2>Bookmarklet</h2>
    <span>
      Drag this link ⇨
      <a
        href="javascript: (() => {
          for (let link of document.links) {
            if (link.href.endsWith('.nii.gz') || link.href.endsWith('.nii')) {
              link.style.color = '#5599dd';
              link.href = 'https://korbinian90.github.io/niivue-vscode/?images=' + link.href;
            }
          }
        })();"
      >
        <b> Niivue-ify </b>
      </a>
      ⇦ to your bookmars bar. When you click the bookmark, all links to NIfTI
      files on the current web page will be redirected to niivue-vscode web.
      Link to test:
      <a href="https://niivue.github.io/niivue-demo-images/mni152.nii.gz">
        <b> MNI </b>
      </a>
    </span>
  </div>
`