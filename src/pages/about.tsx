import React from "react"

import Avatar from "~components/Avatar"
import Center from "~components/Center"
import Layout from "~components/Layout"

const About: React.FC = () => (
  <Layout>
    <Center>
      <Avatar size="5rem" />
    </Center>
    <p>
      소프트웨어 엔지니어 조황목입니다.
    </p>
    <p>
      직업이 고통이 되지 않도록 환경을 지속해서 개선하며, 시간이 지난 후에도
      스스로 이해할 수 있는 소프트웨어를 만들기 위해 노력합니다.
    </p>
  </Layout>
)

export default About
