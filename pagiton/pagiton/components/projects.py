import reflex as rx
from pagiton.styles.styles import Spacer
from pagiton.styles.colors import color


def project(data: dict) -> rx.component:
    if data["area"] == "Programacion":
        margin = "50px"
    elif data["area"] == "Networking":
        margin = "40px"
    else:
        margin = "60px"
    return rx.link(rx.box(rx.image(src=data["imagen"], max_width="300px"), rx.box(rx.vstack(rx.heading(data["titulo"]), rx.text(data["descripcion"], margin_left=Spacer.SMALL.value),  rx.flex(rx.spacer(), rx.text(data["area"], background=color.tercery.value, color="#000000 !important", margin_left=margin, padding=Spacer.SMALL.value, margin=Spacer.SMALL.value, border_radius=Spacer.SMALL.value), width="100%"), rx.responsive_grid(
        rx.box(rx.image(src=data["img1"], max_width="40px")), rx.box(rx.image(src=data["img2"], max_width="40px")), rx.box(
            rx.image(src=data["img3"], max_width="40px")), rx.box(rx.image(src=data["img4"], max_width="40px")), spacing_y=Spacer.VERY_SMALL.value, columns=[4], spacing="2", padding=Spacer.SMALL.value)), background=color.secondary.value, width="100%", margin_bottom=Spacer.SMALL.value)), href=data["url"], margin=Spacer.SMALL.value)
