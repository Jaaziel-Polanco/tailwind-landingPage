import React from "react"
import Header from "./Components/Header"
import Target from "./Components/Target"
import TargetMini from "./Components/TargetMini"
import { Footer } from "./Components/Footer"

function App() {
  const target ={
    title: [
      "Grow Together",
      "Flowing Conversations",
      "Your Users"],
    info: [
      "Generate meaningful discussions with your audience and build a strong, loyal community. Think of the insightful conversations you miss out on with a feedback form.",
      "You wouldn't paginate a conversation in real life, so why do it online? Our threads have just-in-time loading for a more natural flow.",
      "It takes no time at all to integrate Huddle with your app's authentication solution. This means, once signed in to your app, your users can start chatting immediately."
    ],
    images: [
      "grow-together.svg",
      "flowing-conversation.svg",
      "your-users.svg"
    ]
  }

  return (
    <>
    <Header/>

    <section className="desktop:px-24">
    <Target img={target.images[0]} title={target.title[0]} info={target.info[0]} />
    <Target img={target.images[1]} title={target.title[1]} info={target.info[1]} />
    <Target img={target.images[2]} title={target.title[2]} info={target.info[2]} />
    </section>

    <TargetMini/>
    <Footer/>
    </>
  )
}

export default App
