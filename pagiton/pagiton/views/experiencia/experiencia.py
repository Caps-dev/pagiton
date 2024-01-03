import reflex as rx
from pagiton.styles.styles import Spacer
from pagiton.styles.colors import color


def experiencia() -> rx.component:
    return rx.vstack(rx.heading("Experiencia"), rx.unordered_list(
        rx.list_item(
            rx.vstack(
                rx.text("Nov 2023 - Actualmente", as_="b",
                        font_size=Spacer.SMALL.value),
                rx.heading(
                    "Tecnico - One Way Technologies", size="lg", color="#5ced73"),
                rx.text("Como Técnico, me especializo en monitorear, montar y mantener equipos en redes. Construyo racks con dispositivos Huawei y xfusion, trabajando en equipos pequeños y realizando mantenimientos. Utilizo herramientas específicas para llevar a cabo estas tareas. Mi responsabilidad principal es el mantenimiento de equipos y redes, interactuando directamente con los clientes para garantizar su satisfacción durante estos procesos."), align_items="start"), margin=Spacer.DEFAULT.value, font_size=Spacer.DEFAULT.value),
        rx.list_item(
            rx.vstack(
                rx.text("oct, 2022 - dic 2022", as_="b",
                        font_size=Spacer.SMALL.value),
                rx.heading(
                    "Practicante de Soporte Técnico - Centenario Internacional", size="lg", color="#5ced73"),
                rx.text("Durante mi tiempo en la empresa, proporcioné soporte completo: resolví problemas de impresoras, gestioné cuentas en Active Directory, configuré sistemas de telefonía IP y generé informes con Power BI. Además, apoyé las operaciones con un sistema ERP y resolví problemas de conectividad e Internet. Esta experiencia fue crucial para mi desarrollo en tecnología."), align_items="start"), margin=Spacer.DEFAULT.value, font_size=Spacer.DEFAULT.value),
        padding=Spacer.BIG.value), background_color=color.secondary.value, margin=Spacer.DEFAULT.value)
