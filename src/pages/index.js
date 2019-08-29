import React from "react"

import Layout from "~components/Layout"

export default () => {
  console.log(String.raw`
                    _ _
     ___ _ __  _ __(_) |_ ___ _   _  ___   _ __ ___   ___
    / __| '_ \| '__| | __/ _ \ | | |/ _ \ | '_ ' _ \ / _ \
    \__ \ |_) | |  | | ||  __/ |_| |  __/_| | | | | |  __/
    |___/ .__/|_|  |_|\__\___|\__, |\___(_)_| |_| |_|\___|
        |_|                   |___/
  `)
  return (
    <Layout>
      spriteye.me
    </Layout>
  )
}
