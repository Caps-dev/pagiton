
/** @jsxImportSource @emotion/react */import { Fragment, useCallback, useContext, useRef } from "react"
import { Fragment_39a4cee5eee02a4bdb3bcce3c3d0b404 } from "/utils/stateful_components"
import { Avatar, Box, Button, Center, Flex, Heading, HStack, Image as ChakraImage, Link, ListItem, SimpleGrid, Spacer, Text, UnorderedList, VStack } from "@chakra-ui/react"
import "focus-visible/dist/focus-visible"
import NextLink from "next/link"
import { EventLoopContext } from "/utils/context"
import { Event, refs } from "/utils/state"
import NextHead from "next/head"



export function Button_6f803a3869a4ec0cfb34f215ec8c35e3 () {
  const [addEvents, connectError] = useContext(EventLoopContext);

  const on_click_37e10d6d0e4a3877dd3e215f0a0d4220 = useCallback((_e) => addEvents([Event("_download", {url:`/logo.png`,filename:`logo.png`})], (_e), {}), [addEvents, Event])

  return (
    <Button onClick={on_click_37e10d6d0e4a3877dd3e215f0a0d4220} sx={{"backgroundColor": "transparent", "_hover": {}}}>
  <ChakraImage src={`icon/cv.svg`} sx={{"width": "50px", "height": "50px", "marginTop": "20px"}}/>
</Button>
  )
}

export default function Component() {
  const ref_about = useRef(null); refs['ref_about'] = ref_about;
  const ref_proyectos = useRef(null); refs['ref_proyectos'] = ref_proyectos;

  return (
    <Fragment>
  <Fragment_39a4cee5eee02a4bdb3bcce3c3d0b404/>
  <Box>
  <HStack sx={{"position": "sticky", "textAlign": "right", "background": "#1a1a1a", "width": "100%", "zIndex": "999", "top": "0", "paddingInline": "1em", "paddingBlock": ".5em"}}>
  <ChakraImage src={`logo.png`} sx={{"width": "50px", "height": "auto"}}/>
  <Spacer/>
  <Link as={NextLink} href={``} sx={{"marginInlineEnd": "2px", "textDecoration": "none", "_hover": {}, "color": "#f1f1f1"}}>
  {`Inicio`}
</Link>
  <Link as={NextLink} href={`#proyectos`} sx={{"marginInlineEnd": "2px", "textDecoration": "none", "_hover": {}, "color": "#f1f1f1"}}>
  {`Proyectos`}
</Link>
  <Link as={NextLink} href={`#about`} sx={{"marginInlineEnd": "2px", "textDecoration": "none", "_hover": {}, "color": "#f1f1f1"}}>
  {`Sobre mi`}
</Link>
</HStack>
  <Center>
  <VStack sx={{"maxWidth": "80%", "width": "100%", "marginTop": "0.5em", "marginBottom": "2em"}}>
  <Center>
  <SimpleGrid columns={[1, 1, 2]} spacing={`2em`} sx={{"maxWidth": "890px", "width": "100%"}}>
  <VStack sx={{"backgroundColor": "#1a1a1a", "width": "100%", "paddingInline": "30px", "paddingBlock": "70px"}}>
  <Heading>
  {`Allan Picado`}
</Heading>
  <Text sx={{"color": "#f1f1f1"}}>
  {`Estudiante de Ingeniería Software`}
</Text>
  <Text sx={{"color": "#f1f1f1"}}>
  {`¡Hola! ¡Gracias por visitar mi portafolio! Soy estudiante de Ingeniería de Software en la Universidad de Costa Rica. Mi formación como Técnico Medio en Informática en Redes y cursos de analista de datos, junto con proyectos autodidactas, me impulsan a crear soluciones innovadoras.`}
</Text>
  <Button_6f803a3869a4ec0cfb34f215ec8c35e3/>
</VStack>
  <Avatar name={`Allan Picado`} size={`full`} src={`yo.jpeg`} sx={{"width": "100%"}}/>
</SimpleGrid>
</Center>
  <VStack id={`proyectos`} ref={ref_proyectos} sx={{"backgroundColor": "#1a1a1a", "padding": "20px"}}>
  <Heading>
  {`Proyectos descatados`}
</Heading>
  <SimpleGrid columns={[1, 2, 4]} spacing={`4`}>
  <Box>
  <Link as={NextLink} href={`https://github.com/Caps-dev/Connect-4.git`} isExternal={true} sx={{"margin": "0.5em", "textDecoration": "none", "_hover": {}, "color": "#f1f1f1"}}>
  <Box>
  <Center>
  <ChakraImage src={`Connectfour.png_ssl=1.png`} sx={{"height": "180px"}}/>
</Center>
  <Box sx={{"background": "#1a1a1a", "width": "100%", "marginBottom": "0.5em"}}>
  <VStack>
  <Heading>
  {`Connect 4`}
</Heading>
  <Text sx={{"marginLeft": "0.5em", "color": "#f1f1f1"}}>
  {`¡Creado un juego de Connect 4 en Java con interfaz interactiva usando Swing! Demuestra habilidades en programación y diseño, ¡ofrece diversión y desafíos!`}
</Text>
  <Flex sx={{"width": "100%"}}>
  <Spacer/>
  <Text sx={{"background": "#f1f1f1", "color": "#000000 !important", "marginLeft": "50px", "padding": "0.5em", "margin": "0.5em", "borderRadius": "0.5em"}}>
  {`Programacion`}
</Text>
</Flex>
  <SimpleGrid columns={[4]} spacing={`2`} spacingY={`0.2em`} sx={{"padding": "0.5em"}}>
  <Box>
  <ChakraImage src={`icon/java.svg`} sx={{"height": "30px"}}/>
</Box>
  {``}
  {``}
  {``}
</SimpleGrid>
</VStack>
</Box>
</Box>
</Link>
</Box>
  <Box>
  <Link as={NextLink} href={``} isExternal={true} sx={{"margin": "0.5em", "textDecoration": "none", "_hover": {}, "color": "#f1f1f1"}}>
  <Box>
  <Center>
  <ChakraImage src={`spotify.png`} sx={{"height": "180px"}}/>
</Center>
  <Box sx={{"background": "#1a1a1a", "width": "100%", "marginBottom": "0.5em"}}>
  <VStack>
  <Heading>
  {`Top 100 Spotify`}
</Heading>
  <Text sx={{"marginLeft": "0.5em", "color": "#f1f1f1"}}>
  {`Exploré una base de datos de las canciones mas escuchadas de spotify, aplicando técnicas de análisis de datos para la limpieza de los datos y la creacion de visualizaciones.`}
</Text>
  <Flex sx={{"width": "100%"}}>
  <Spacer/>
  <Text sx={{"background": "#f1f1f1", "color": "#000000 !important", "marginLeft": "60px", "padding": "0.5em", "margin": "0.5em", "borderRadius": "0.5em"}}>
  {`Analisis de datos`}
</Text>
</Flex>
  <SimpleGrid columns={[4]} spacing={`2`} spacingY={`0.2em`} sx={{"padding": "0.5em"}}>
  <Box>
  <ChakraImage src={`excel.png`} sx={{"height": "30px"}}/>
</Box>
  <Box>
  <ChakraImage src={`power bi.png`} sx={{"height": "30px"}}/>
</Box>
  <Box>
  <ChakraImage src={`power bi.png`} sx={{"height": "30px"}}/>
</Box>
  <Box>
  <ChakraImage src={`power bi.png`} sx={{"height": "30px"}}/>
</Box>
</SimpleGrid>
</VStack>
</Box>
</Box>
</Link>
</Box>
</SimpleGrid>
  <Link as={NextLink} href={`https://github.com/Caps-dev?tab=repositories`} isExternal={true} sx={{"textDecoration": "none", "_hover": {}, "color": "#f1f1f1"}}>
  <Button sx={{"background": "#2f2f2f"}}>
  {`Ver más`}
</Button>
</Link>
</VStack>
  <VStack id={`about`} ref={ref_about}>
  <Box sx={{"paddingInline": "2em", "marginBlock": "2em", "backgroundColor": "#1a1a1a", "width": "100%", "paddingBlock": "2em", "display": ["block", "none", "none", "none"]}}>
  <Box>
  <Center>
  <VStack spacing={`2em`}>
  <Heading>
  {`Sobre mi`}
</Heading>
  <Box sx={{"maxWidth": "600px"}}>
  <VStack spacing={`1.5em`}>
  <Text sx={{"color": "#f1f1f1"}}>
  {`Desde que obtuve mi título como Técnico Medio en Informática en Redes en el Colegio, mi pasión por la tecnología ha sido innegable. Mi formación incluyó una práctica profesional en la empresa Centenario Internacional, donde pude aplicar mis conocimientos en un entorno real y adquirir una valiosa perspectiva sobre el mundo laboral.`}
</Text>
  <Text sx={{"color": "#f1f1f1"}}>
  {`Mi recorrido académico continuó al ingresar a la Universidad de Costa Rica en 2023 para estudiar Ingeniería de Software, un emocionante paso que amplió mis horizontes educativos. Simultáneamente, di inicio a mi carrera profesional en el campo tecnológico, lo que ha enriquecido mi comprensión práctica y teórica.`}
</Text>
  <Text sx={{"color": "#f1f1f1"}}>
  {`Además, incursioné en el análisis de datos a través de la plataforma Platzi, explorando cómo estos datos pueden proporcionar ideas valiosas. Cada proyecto en mi portafolio refleja mi dedicación por fusionar la teoría académica con la aplicación práctica, buscando soluciones creativas y eficientes para los desafíos tecnológicos del mundo real.`}
</Text>
  <Text sx={{"color": "#f1f1f1"}}>
  {`Empecé a trabajar en el campo laboral en el transcurso de este último año, ampliando mi experiencia y habilidades más allá del ámbito académico. Cada día, mi entusiasmo crece por las oportunidades que se presentan y las colaboraciones futuras que podré formar. Espero que encuentres inspiración en mi trabajo y que podamos compartir un emocionante viaje hacia el futuro tecnológico juntos.`}
</Text>
</VStack>
</Box>
</VStack>
</Center>
</Box>
</Box>
  <Box sx={{"paddingInline": "4em", "marginBlock": "2em", "backgroundColor": "#1a1a1a", "width": "100%", "paddingBlock": "2em", "display": ["none", "block", "block", "block"]}}>
  <Box>
  <Center>
  <VStack spacing={`2em`}>
  <Heading>
  {`Sobre mi`}
</Heading>
  <Box sx={{"maxWidth": "600px"}}>
  <VStack spacing={`1.5em`}>
  <Text sx={{"color": "#f1f1f1"}}>
  {`Desde que obtuve mi título como Técnico Medio en Informática en Redes en el Colegio, mi pasión por la tecnología ha sido innegable. Mi formación incluyó una práctica profesional en la empresa Centenario Internacional, donde pude aplicar mis conocimientos en un entorno real y adquirir una valiosa perspectiva sobre el mundo laboral.`}
</Text>
  <Text sx={{"color": "#f1f1f1"}}>
  {`Mi recorrido académico continuó al ingresar a la Universidad de Costa Rica en 2023 para estudiar Ingeniería de Software, un emocionante paso que amplió mis horizontes educativos. Simultáneamente, di inicio a mi carrera profesional en el campo tecnológico, lo que ha enriquecido mi comprensión práctica y teórica.`}
</Text>
  <Text sx={{"color": "#f1f1f1"}}>
  {`Además, incursioné en el análisis de datos a través de la plataforma Platzi, explorando cómo estos datos pueden proporcionar ideas valiosas. Cada proyecto en mi portafolio refleja mi dedicación por fusionar la teoría académica con la aplicación práctica, buscando soluciones creativas y eficientes para los desafíos tecnológicos del mundo real.`}
</Text>
  <Text sx={{"color": "#f1f1f1"}}>
  {`Empecé a trabajar en el campo laboral en el transcurso de este último año, ampliando mi experiencia y habilidades más allá del ámbito académico. Cada día, mi entusiasmo crece por las oportunidades que se presentan y las colaboraciones futuras que podré formar. Espero que encuentres inspiración en mi trabajo y que podamos compartir un emocionante viaje hacia el futuro tecnológico juntos.`}
</Text>
</VStack>
</Box>
</VStack>
</Center>
</Box>
</Box>
  <VStack sx={{"backgroundColor": "#1a1a1a", "margin": "1em", "width": "100%", "backgorundColor": "#1a1a1a"}}>
  <Heading sx={{"marginTop": "0.5em"}}>
  {`Experiencia`}
</Heading>
  <Box sx={{"paddingInline": "1em", "maxWidth": "600px", "display": ["block", "none", "none", "none"]}}>
  <UnorderedList>
  <ListItem sx={{"margin": "1em", "fontSize": "1em"}}>
  <VStack alignItems={`start`}>
  <Text as={`b`} sx={{"fontSize": "0.5em", "color": "#f1f1f1"}}>
  {`Nov 2023 - Actualmente`}
</Text>
  <Heading size={`lg`} sx={{"color": "#5ced73"}}>
  {`Tecnico - One Way Technologies`}
</Heading>
  <Text sx={{"color": "#f1f1f1"}}>
  {`Como Técnico, me especializo en monitorear, montar y mantener equipos en redes. Construyo racks con dispositivos Huawei y xfusion, trabajando en equipos pequeños y realizando mantenimientos. Utilizo herramientas específicas para llevar a cabo estas tareas. Mi responsabilidad principal es el mantenimiento de equipos y redes, interactuando directamente con los clientes para garantizar su satisfacción durante estos procesos.`}
</Text>
</VStack>
</ListItem>
  <ListItem sx={{"margin": "1em", "fontSize": "1em"}}>
  <VStack alignItems={`start`}>
  <Text as={`b`} sx={{"fontSize": "0.5em", "color": "#f1f1f1"}}>
  {`oct, 2022 - dic 2022`}
</Text>
  <Heading size={`lg`} sx={{"color": "#5ced73"}}>
  {`Practicante de Soporte Técnico - Centenario Internacional`}
</Heading>
  <Text sx={{"color": "#f1f1f1"}}>
  {`Durante mi tiempo en la empresa, proporcioné soporte completo: resolví problemas de impresoras, gestioné cuentas en Active Directory, configuré sistemas de telefonía IP y generé informes con Power BI. Además, apoyé las operaciones con un sistema ERP y resolví problemas de conectividad e Internet. Esta experiencia fue crucial para mi desarrollo en tecnología.`}
</Text>
</VStack>
</ListItem>
</UnorderedList>
</Box>
  <Box sx={{"paddingInline": "2em", "maxWidth": "600px", "display": ["none", "block", "block", "block"]}}>
  <UnorderedList>
  <ListItem sx={{"margin": "1em", "fontSize": "1em"}}>
  <VStack alignItems={`start`}>
  <Text as={`b`} sx={{"fontSize": "0.5em", "color": "#f1f1f1"}}>
  {`Nov 2023 - Actualmente`}
</Text>
  <Heading size={`lg`} sx={{"color": "#5ced73"}}>
  {`Tecnico - One Way Technologies`}
</Heading>
  <Text sx={{"color": "#f1f1f1"}}>
  {`Como Técnico, me especializo en monitorear, montar y mantener equipos en redes. Construyo racks con dispositivos Huawei y xfusion, trabajando en equipos pequeños y realizando mantenimientos. Utilizo herramientas específicas para llevar a cabo estas tareas. Mi responsabilidad principal es el mantenimiento de equipos y redes, interactuando directamente con los clientes para garantizar su satisfacción durante estos procesos.`}
</Text>
</VStack>
</ListItem>
  <ListItem sx={{"margin": "1em", "fontSize": "1em"}}>
  <VStack alignItems={`start`}>
  <Text as={`b`} sx={{"fontSize": "0.5em", "color": "#f1f1f1"}}>
  {`oct, 2022 - dic 2022`}
</Text>
  <Heading size={`lg`} sx={{"color": "#5ced73"}}>
  {`Practicante de Soporte Técnico - Centenario Internacional`}
</Heading>
  <Text sx={{"color": "#f1f1f1"}}>
  {`Durante mi tiempo en la empresa, proporcioné soporte completo: resolví problemas de impresoras, gestioné cuentas en Active Directory, configuré sistemas de telefonía IP y generé informes con Power BI. Además, apoyé las operaciones con un sistema ERP y resolví problemas de conectividad e Internet. Esta experiencia fue crucial para mi desarrollo en tecnología.`}
</Text>
</VStack>
</ListItem>
</UnorderedList>
</Box>
</VStack>
  <Center>
  <SimpleGrid columns={[1, 2, 3]} spacingY={`2em`} sx={{"marginBlock": "4em"}}>
  <Box>
  <VStack>
  <ChakraImage src={`data.png`} sx={{"width": "150px"}}/>
  <Heading>
  {`Analista de datos`}
</Heading>
  <Text sx={{"color": "#f1f1f1"}}>
  {`| Excel | Power bi | Tableu | Python | SQL |`}
</Text>
</VStack>
</Box>
  <Box>
  <VStack>
  <ChakraImage src={`wifi.png`} sx={{"width": "150px"}}/>
  <Heading>
  {`Redes`}
</Heading>
  <Text sx={{"color": "#f1f1f1"}}>
  {`| CCNA | LINUX | HCIA |`}
</Text>
</VStack>
</Box>
  <Box sx={{"spacing": "4em"}}>
  <VStack>
  <ChakraImage src={`ing.png`} sx={{"width": "80px"}}/>
  <Heading>
  {`Programacion`}
</Heading>
  <Text sx={{"color": "#f1f1f1"}}>
  {`| Python | Java | C++ | HTML | CSS |`}
</Text>
</VStack>
</Box>
</SimpleGrid>
</Center>
</VStack>
  <Center sx={{"margin": "2em", "backgroundColor": "#1a1a1a", "width": "100%", "padding": "1.5em"}}>
  <VStack sx={{"maxWidth": "600px", "width": "100%"}}>
  <Heading>
  {`Contacto`}
</Heading>
  <Box>
  <Center>
  <HStack spacing={`4em`}>
  <VStack>
  <Text sx={{"marginBottom": "14px", "color": "#f1f1f1"}}>
  {`Email`}
</Text>
  <Text sx={{"color": "#f1f1f1"}}>
  {`campisa26@gmail.com`}
</Text>
</VStack>
  <VStack>
  <Text sx={{"color": "#f1f1f1"}}>
  {`LinkedIn`}
</Text>
  <Link as={NextLink} href={`https://www.linkedin.com/in/allan-picado-saenz`} sx={{"textDecoration": "none", "_hover": {}, "color": "#f1f1f1"}}>
  <ChakraImage src={`icon/linkedin.svg`} sx={{"width": "40px"}}/>
</Link>
</VStack>
</HStack>
</Center>
</Box>
</VStack>
</Center>
</VStack>
</Center>
  <HStack sx={{"padding": "1em"}}>
  <Text sx={{"color": "#f1f1f1"}}>
  {`Portafolio 2024`}
</Text>
  <ChakraImage src={`icon/location.svg`} sx={{"width": "20px", "height": "20px"}}/>
  <Text sx={{"color": "#f1f1f1"}}>
  {`San Jose, Costa Rica`}
</Text>
  <Spacer/>
  <Link as={NextLink} href={`https://www.linkedin.com/in/allan-picado-saenz`} isExternal={true} sx={{"textDecoration": "none", "_hover": {}, "color": "#f1f1f1"}}>
  <ChakraImage src={`icon/linkedin.svg`} sx={{"width": "30px", "height": "30px"}}/>
</Link>
  <Link as={NextLink} href={`https://github.com/Caps-dev`} isExternal={true} sx={{"textDecoration": "none", "_hover": {}, "color": "#f1f1f1"}}>
  <ChakraImage src={`icon/github.svg`} sx={{"width": "30px", "height": "30px", "marginLeft": "0.5em"}}/>
</Link>
</HStack>
</Box>
  <NextHead>
  <title>
  {`Reflex App`}
</title>
  <meta content={`A Reflex app.`} name={`description`}/>
  <meta content={`favicon.ico`} property={`og:image`}/>
</NextHead>
</Fragment>
  )
}
