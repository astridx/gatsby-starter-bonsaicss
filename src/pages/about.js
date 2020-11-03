import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

function AboutPage() {
  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `bonsai`, `react`, `bonsaicss`]}
        title="About"
      />

      <h1 style={{ "--ta": "center" }}>bonsai.css</h1>
      <p style={{ "--ta": "center", "--maxw": "450px", "--m": "0 auto 3rem" }}>
        All the versatility with none of the weight
      </p>

      <section>
        <h3 className="primary">Block and Inline Elements</h3>
        <p className="green">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus
          hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet
          vel, dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin
          laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor
          eu nibh. Nullam mollis. Ut justo. Suspendisse potenti.
        </p>
        <p>
          Sed egestas, ante et <a href="#">vulputate volutpat</a>, eros pede
          semper est, vitae luctus metus libero eu augue. Morbi purus libero,
          faucibus adipiscing, commodo quis, gravida id, est. Sed lectus.
          Praesent elementum hendrerit tortor.{" "}
          <em>Sed semper lorem at felis.</em> Vestibulum volutpat, lacus a
          ultrices sagittis, mi neque euismod dui, eu pulvinar nunc sapien
          ornare nisl. <strong>Phasellus pede</strong> arcu, dapibus eu,
          fermentum et, dapibus sed, urna. Morbi interdum mollis sapien. Sed ac
          risus. <small>Phasellus lacinia, magna a ullamcorper laoreet</small>,
          lectus arcu pulvinar risus, vitae facilisis libero dolor a purus. Sed
          vel lacus. Mauris nibh felis, adipiscing varius, adipiscing in,
          lacinia vel, tellus. <code>Suspendisse ac urna.</code> Etiam
          pellentesque mauris ut lectus. <mark>Nunc tellus ante</mark>, mattis
          eget, gravida vitae, ultricies ac, leo. Integer leo pede, ornare a,
          lacinia eu, vulputate vel, nisl.
        </p>
        <blockquote>
          <p>
            Suspendisse mauris. Fusce accumsan mollis eros. Pellentesque a diam
            sit amet mi ullamcorper vehicula. Integer adipiscing risus a sem.
            Nullam quis massa sit amet nibh viverra malesuada. Nunc sem lacus,
            accumsan quis, faucibus non, congue vel, arcu. Ut scelerisque
            hendrerit tellus. Integer sagittis. Vivamus a mauris eget arcu
            gravida tristique.
          </p>
          <footer>
            —Parmenides, <cite>Nunc sem lacus, accumsan quis</cite>
          </footer>
        </blockquote>
      </section>

      <section>
        <h3 className="primary">Headings</h3>
        <h1>Heading Level 1</h1>
        <h2>Heading Level 2</h2>
        <h3>Heading Level 3</h3>
        <h4>Heading Level 4</h4>
        <h5>Heading Level 5</h5>
        <h6>Heading Level 6</h6>
      </section>

      <section>
        <h3 className="primary">Lists</h3>
        <div className="grid" style={{ "--col": "3" }}>
          <ul>
            <li>Unordered list item 1</li>
            <li>
              Unordered list item 2
              <ul>
                <li>Unordered list sub-item 1</li>
                <li>Unordered list sub-item 2</li>
              </ul>
            </li>
            <li>Unordered list item 3</li>
            <li>Unordered list item 4</li>
          </ul>
          <ol>
            <li>Ordered list item 1</li>
            <li>
              Ordered list item 2
              <ol>
                <li>Ordered list sub-item 1</li>
                <li>Ordered list sub-item 2</li>
              </ol>
            </li>
            <li>Ordered list item 3</li>
            <li>Ordered list item 4</li>
          </ol>
        </div>
      </section>

      <section>
        <h3 className="primary">Layout</h3>
        <p>Bonsai.css a multi dimensional, easy to use layout framework. </p>
        <div
          className="grid grid-demo"
          style={{ "--col-xs": "2", "--col-sm": "6", "--gap": "1rem;" }}
        >
          <div style={{ "--sc-sm": "2", "--sr-sm": "2" }}>
            --sc-sm:2 --sr-sm:2
          </div>
          <div style={{ "--sr-sm": "3" }}>--sr-sm:3</div>
          <div style={{ "--sr-sm": "4" }}>--sr-sm:4</div>
          <div style={{ "--sr-sm": "5" }}>--sr-sm:5</div>
          <div style={{ "--sr-sm": "6" }}>--sr-sm:6</div>
          <div style={{ "--sc-sm": "2" }}>--sc-sm:2</div>
          <div style={{ "--sc-sm": "3" }}>--sc-sm:3</div>
          <div style={{ "--sr-sm": "6" }}>--sr-sm:6</div>
          <div style={{ "--sc-sm": "3" }}>--sc-sm:3</div>
          <div style={{ "--sr-sm": "5" }}>--sr-sm:5</div>
          <div style={{ "--sc-sm": "3" }}>--sc-sm:3</div>
          <div style={{ "--sr-sm": "4" }}>--sr-sm:4</div>
          <div style={{ "--sc-sm": "3" }}>--sc-sm:3</div>
          <div style={{ "--sr-sm": "3" }}>--sr-sm:3</div>
          <div style={{ "--sc-sm": "2" }}>--sc-sm:2</div>
          <div style={{ "--sc-sm": "2", "--sr-sm": "2" }}>
            --sc-sm:2 --sr-sm:2
          </div>
        </div>
      </section>

      <section className="section">
        <h3 className="primary">Inputs &amp; Textareas</h3>
        <div className="grid" style={{ "--col": " 2" }}>
          <p>
            <label>
              First Name
              <input type="text" placeholder="John" />
            </label>
          </p>
          <p>
            <label>
              Last Name
              <input type="text" placeholder="Dow" />
            </label>
          </p>
        </div>
        <div className="grid" style={{ "--col": "3" }}>
          <p>
            <label htmlFor="input-date">
              Input with type=date
              <input type="date" id="input-date" />
            </label>
          </p>
          <p>
            <label htmlFor="input-time">
              Input with type=time
              <input type="time" id="input-time" />
            </label>
          </p>
          <p>
            <label>
              Type
              <select name="type">
                <option value="message">Message</option>
                <option value="feature">Feature</option>
                <option value="report">Report</option>
              </select>
            </label>
          </p>
        </div>
        <div className="row">
          <p className="col">
            <label>
              Message
              <textarea placeholder="Greetings..."></textarea>
            </label>
          </p>
        </div>
        <h4 className="primary">Input States</h4>
        <form className="flex">
          <p>
            <label htmlFor="input-text-standard">
              Standard
              <input type="text" />
            </label>
          </p>
          <p>
            <label htmlFor="input-text-disabled">
              Disabled
              <input type="text" disabled="" />
            </label>
          </p>
          <p>
            <label htmlFor="input-text-readonly">
              Read Only
              <input type="text" />
            </label>
          </p>
        </form>
      </section>

      <section>
        <h3 className="primary">Buttons</h3>

        <div>
          <p style={{ "--mb": "0" }}>Button with button tag</p>
          <button>Button</button>
          <button aria-label="add">
            <svg
              aria-hidden="true"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path
                fill="currentColor"
                d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"
              />
            </svg>
            Button
          </button>
          <button disabled>Button Disabled</button>
        </div>

        <div>
          <p style={{ "--mb": "0" }}>Button with link tag</p>
          <a href="#" className="button">
            Button Link
          </a>
          <a href="#" className="button" aria-label="add">
            <svg
              aria-hidden="true"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path
                fill="currentColor"
                d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"
              />
            </svg>
            Button Link
          </a>
          <a href="#" className="button disabled">
            Button Link Disabled
          </a>
        </div>

        <div>
          <p style={{ "--mb": "0" }}>Button Color Variations</p>
          <button className="green">Green</button>
          <button className="orange">Orange</button>
          <button className="red">Red</button>
          <button className="white">White</button>
          <button className="grey">Grey</button>
          <button className="black">Black</button>
        </div>

        <div>
          <p style={{ "--mb": "0" }}>Button Groups (Horizontal)</p>
          <span className="group">
            <button>Button</button>
            <button>Button</button>
            <button>Button</button>
          </span>
          <span className="group">
            <input type="text" placeholder="John" aria-label="Name" />
            <button>Button</button>
            <button>Button</button>
          </span>
          <span className="group">
            <button>Button</button>
            <input type="text" placeholder="John" aria-label="Name" />
          </span>
          <span className="group">
            <button aria-label="upload">
              <svg
                aria-hidden="true"
                focusable="false"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
                className="svg-inline--fa fa-download fa-w-18"
              >
                <path
                  fill="currentColor"
                  d="M528 288h-92.1l46.1-46.1c30.1-30.1 8.8-81.9-33.9-81.9h-64V48c0-26.5-21.5-48-48-48h-96c-26.5 0-48 21.5-48 48v112h-64c-42.6 0-64.2 51.7-33.9 81.9l46.1 46.1H48c-26.5 0-48 21.5-48 48v128c0 26.5 21.5 48 48 48h480c26.5 0 48-21.5 48-48V336c0-26.5-21.5-48-48-48zm-400-80h112V48h96v160h112L288 368 128 208zm400 256H48V336h140.1l65.9 65.9c18.8 18.8 49.1 18.7 67.9 0l65.9-65.9H528v128zm-88-64c0-13.3 10.7-24 24-24s24 10.7 24 24-10.7 24-24 24-24-10.7-24-24z"
                />
              </svg>
            </button>
            <input
              type="text"
              placeholder="filename.txt"
              aria-label="Filename"
            />
          </span>
          <span className="group">
            <input type="text" placeholder="Name" aria-label="Name" />
            <button>Submit</button>
          </span>
        </div>

        <div>
          <p style={{ "--mb": "0" }}>Button Groups (Vertical)</p>
          <span className="group vertical">
            <button>Button</button>
            <button>Button</button>
            <button>Button</button>
            <button>Button</button>
          </span>
          <span className="group vertical">
            <button className="white">Button</button>
            <button className="grey">Button</button>
            <button className="green">Button</button>
          </span>
          <span className="group vertical">
            <input type="text" placeholder="Name" aria-label="Name" />
            <button>Button</button>
          </span>
          <span className="group vertical">
            <button>Button</button>
            <input type="number" placeholder="Quantity" aria-label="Quantity" />
          </span>
        </div>
      </section>

      <section>
        <h3 className="primary">Radios &amp; Checkboxes</h3>
        <div style={{ "--mb": "1rem" }}>
          <div>
            <input type="radio" name="radio" id="radio-1" checked="" />
            <label htmlFor="radio-1">Radio 1</label>
          </div>
          <div>
            <input type="radio" name="radio" id="radio-2" />
            <label htmlFor="radio-2">Radio 2</label>
          </div>
          <div>
            <input type="radio" name="radio" id="radio-3" />
            <label htmlFor="radio-3">Radio 3</label>
          </div>
          <div>
            <input type="radio" name="radio" id="radio-4" disabled="" />
            <label htmlFor="radio-4">Radio 4 (disabled)</label>
          </div>
        </div>
        <div style={{ "--mb": "1rem" }}>
          <div>
            <input type="checkbox" id="checkbox-1" />
            <label htmlFor="checkbox-1">Checkbox</label>
          </div>
          <div>
            <input type="checkbox" id="checkbox-2" checked="" />
            <label htmlFor="checkbox-2">Checked Checkbox</label>
          </div>
          <div>
            <input type="checkbox" id="checkbox-3" disabled="" />
            <label htmlFor="checkbox-3">Disabled Checkbox</label>
          </div>
        </div>
      </section>

      <section>
        <h3 className="primary">Other Form Elements</h3>
        <fieldset>
          <legend>Fieldset</legend>
          <div className="grid" style={{ "--col": "2" }}>
            <p>
              <label>
                Username
                <input type="text" placeholder="John" />
              </label>
            </p>
            <p>
              <label>
                Password
                <input type="password" placeholder="Dow" />
              </label>
            </p>
          </div>
          <button>Submit</button>
        </fieldset>
        <div className="grid" style={{ "--col": "2" }}>
          <div>
            <p>
              <label htmlFor="select">
                Select
                <select id="select">
                  <option value="1">Option 1</option>
                  <option value="2">Option 2</option>
                  <option value="3">Option 3</option>
                  <optgroup label="Subgroup">
                    <option value="4">Option 4</option>
                    <option value="5">Option 5</option>
                  </optgroup>
                </select>
              </label>
            </p>
            <p>
              <label htmlFor="input-file">
                Input File
                <input type="file" />
              </label>
            </p>
            <p>
              <label htmlFor="input-color">
                Input Color
                <input type="color" value="#4a69bd" />
              </label>
            </p>
          </div>
          <div>
            <p>
              <label htmlFor="selectmultiple">
                Multiselect
                <select id="selectmultiple" multiple="">
                  <option value="1">Option 1</option>
                  <option value="2">Option 2</option>
                  <option value="3">Option 3</option>
                  <option value="4">Option 4</option>
                  <option value="5">Option 5</option>
                  <option value="6">Option 6</option>
                  <optgroup label="Subgroup">
                    <option value="7">Option 7</option>
                    <option value="8">Option 8</option>
                  </optgroup>
                </select>
              </label>
            </p>
            <p>
              <label htmlFor="input-range">
                Input Range
                <input type="range" />
              </label>
            </p>
          </div>
        </div>
      </section>

      <section>
        <h3 className="primary">Tags</h3>

        <div>
          <p style={{ "--mb": "0" }}>Tag Variations</p>
          <div className="tag white">white</div>
          <div className="tag green">green</div>
          <div className="tag blue">blue</div>
          <div className="tag orange">orange</div>
          <div className="tag red">red</div>
          <div className="tag grey">grey</div>
          <div className="tag black">black</div>
        </div>

        <div>
          <p style={{ "--mb": "0" }}>Tag Groups (Horizontal)</p>
          <span className="group">
            <span className="tag black">node.js</span>
            <span className="tag primary">12.16.1</span>
          </span>
          <span className="group">
            <span className="tag black">npm</span>
            <span className="tag green">6.14</span>
          </span>
          <span className="group">
            <span className="tag black">git</span>
            <span className="tag white">2.25.1</span>
          </span>
          <span className="group">
            <span className="tag black">node.js</span>
            <span className="tag orange">12.16.1</span>
          </span>
        </div>

        <div>
          <p style={{ "--mb": "0" }}>Tag Groups (Vertical)</p>
          <span className="group vertical">
            <span className="tag black">node.js</span>
            <span className="tag primary">12.16.1</span>
          </span>
          <span className="group vertical">
            <span className="tag black">npm</span>
            <span className="tag green">6.14</span>
          </span>
          <span className="group vertical">
            <span className="tag black">git</span>
            <span className="tag white">2.25.1</span>
          </span>
          <span className="group vertical">
            <span className="tag black">node.js</span>
            <span className="tag orange">12.16.1</span>
          </span>
        </div>
      </section>

      <section className="section">
        <h3 className="primary">Table</h3>
        <table className="accent">
          <caption>Table caption</caption>
          <thead>
            <tr>
              <th scope="row">Column 1</th>
              <th>Column 2</th>
              <th>Column 3</th>
              <th>Column 4</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">Row 1 Value 1</th>
              <td>Row 1 Value 2</td>
              <td>Row 1 Value 3</td>
              <td>Row 1 Value 4</td>
            </tr>
            <tr>
              <th scope="row">Row 2 Value 1</th>
              <td>Row 2 Value 2</td>
              <td>Row 2 Value 3</td>
              <td>Row 2 Value 4</td>
            </tr>
            <tr>
              <th scope="row">Row 3 Value 1</th>
              <td>Row 3 Value 2</td>
              <td>Row 3 Value 3</td>
              <td>Row 3 Value 4</td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <th scope="row">Total 1</th>
              <th>Total 2</th>
              <th>Total 3</th>
              <th>Total 4</th>
            </tr>
          </tfoot>
        </table>
      </section>

      <section>
        <h3 className="primary">Horizontal Rule</h3>
        <hr />
      </section>

      <section>
        <h3 className="primary">Figure &amp; Figcaption</h3>
        <figure>
          <img
            src="https://source.unsplash.com/BUMBTtu09sA/500x300"
            alt="Aliquam erat volutpat"
          />
          <figcaption>Aliquam erat volutpat</figcaption>
        </figure>
      </section>

      <section>
        <h3 className="primary">Details</h3>
        <details>
          <summary>Details/Summary example</summary>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
            placerat velit lorem, feugiat congue lacus laoreet quis. Praesent
            maximus ex nec justo iaculis, in euismod eros dictum. Cras ac lorem
            sit amet purus malesuada blandit. Mauris gravida augue non urna
            sodales porttitor. Etiam ullamcorper luctus ullamcorper. In lobortis
            consequat ante.
          </p>
        </details>
      </section>

      <section>
        <h3 className="primary">Definition Lists</h3>
        <dl>
          <dt>Term 1</dt>
          <dd>Definition for term 1.</dd>

          <dt>Term 2</dt>
          <dd>Definition for term 2.</dd>

          <dt>Term 3</dt>
          <dd>Definition for term 3.</dd>
        </dl>
      </section>
    </Layout>
  );
}

export default AboutPage;
