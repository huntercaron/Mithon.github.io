// modules
import { h, Component, render } from "https://unpkg.com/preact?module"
import htm from "https://unpkg.com/htm?module"

// of course we don't need preact here
// but let me have fun ty

const html = htm.bind(h)

function ListItem(props) {
    const { text, subText, link } = props

    return html`
        <li>
            <span className="bullet"> → </span>
            <a href=${link} target="_blank" rel="noopener noreferrer">
                ${text}
            </a>
            ${subText && html` — ${subText}`}
        </li>
    `
}

const app = html`
    <main>
        <header>
            <h1>Hunter Caron</h1>
        </header>

        <div>
            <section>
                <p>Designer & sometimes a developer.</p>

                <p>
                    I build things for people striving to succeed in what makes
                    them uniquely brilliant.
                </p>
            </section>

            <section>
                <h3>Experience</h3>
                <ul>
                    <${ListItem}
                        text="Framer"
                        subText="Current"
                        link="https://www.framer.com/"
                    />
                    <${ListItem}
                        text="Messenger"
                        subText="2018 - 2019"
                        link="http://facebook.design/"
                    />
                    <${ListItem}
                        text="Messenger (Intern)"
                        subText="2017"
                        link="http://facebook.design/"
                    />
                    <${ListItem}
                        text="Format"
                        subText="2016 – 2017"
                        link="https://format.com/"
                    />
                    <${ListItem}
                        text="Konrad Group"
                        subText="2016"
                        link="http://www.konradgroup.com/"
                    />
                </ul>
            </section>

            <section>
                <h3>Contact</h3>
                <ul>
                    <${ListItem}
                        text="Email"
                        link="mailto:huntercaron.design@icloud.com"
                    />
                    <${ListItem}
                        text="Twitter"
                        link="https://twitter.com/huntercaron"
                    />
                    <${ListItem}
                        text="Instagram"
                        link="https://www.instagram.com/hunterhcaron/"
                    />
                    <${ListItem}
                        text="Github"
                        link="https://github.com/huntercaron"
                    />
                </ul>
            </section>
        </div>
    </main>
`
render(app, document.getElementById("root"))
