import Showcase from './(Components)/Showcase'
import FeaturedEpisode from './(Components)/FeaturedEpisode'
import Subscribe from './(Components)/Subscribe'
import Footer from './(Components)/Footer'

export default function Page() {
  return (
    <div>
      <Showcase/>
      <FeaturedEpisode />
      <Subscribe />
      <Footer />
      
    </div>
  )
}
