
/** @jsxImportSource @emotion/react */import { Fragment } from "react"
import { Fragment_39a4cee5eee02a4bdb3bcce3c3d0b404 } from "/utils/stateful_components"
import { isTrue } from "/utils/state"
import Error from "next/error"
import { useClientSideRouting } from "/utils/client_side_routing"
import NextHead from "next/head"



export default function Component() {
  const routeNotFound = useClientSideRouting()

  return (
    <Fragment>
  <Fragment_39a4cee5eee02a4bdb3bcce3c3d0b404/>
  <Fragment>
  {isTrue(routeNotFound) ? (
  <Fragment>
  <Error statusCode={404}/>
</Fragment>
) : (
  <Fragment>
  
</Fragment>
)}
</Fragment>
  <NextHead>
  <title>
  {`404 - Not Found`}
</title>
  <meta content={`The page was not found`} name={`description`}/>
  <meta content={`favicon.ico`} property={`og:image`}/>
</NextHead>
</Fragment>
  )
}
