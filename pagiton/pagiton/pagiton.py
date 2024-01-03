"""Welcome to Reflex! This file outlines the steps to create a basic app."""
from rxconfig import config

import reflex as rx
from pagiton.components.navbar import navbar
from pagiton.components.footer import footer
from pagiton.views.header.header import header, header_about
from pagiton.views.contact.contact import contact
from pagiton.styles import styles
from pagiton.styles.colors import color
from pagiton.views.charts.charts import chart_radar
from pagiton.views.about.about import about
from pagiton.views.projects.projects_grid import projects_important_grid


docs_url = "https://reflex.dev/docs/getting-started/introduction"
filename = f"{config.app_name}/{config.app_name}.py"


class State(rx.State):
    """The app state."""

    pass


def index() -> rx.Component:
    return rx.box(navbar(),
                  rx.center(rx.vstack(header(), projects_important_grid(), about(), contact(), max_width=styles.MAX_WIDTH, width="100%",
                            margin_top=styles.Spacer.SMALL.value, margin_bottom=styles.Spacer.BIG.value)),
                  footer())


# Add state and page to the app.
app = rx.App(style=styles.BASE_STYLE)
app.add_page(index)
app.compile()
