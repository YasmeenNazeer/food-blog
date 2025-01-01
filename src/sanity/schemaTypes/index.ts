import { type SchemaTypeDefinition } from 'sanity'
import landingPage from './landingPage-section/landingPage'
import hero from './landingPage-section/hero'
import cardSection from './landingPage-section/cardSection'
import aboutPage from './about-section/aboutPage'
import about from './about-section/about'


export const schema: { types: SchemaTypeDefinition[] } = {
  types: [landingPage,hero,cardSection,aboutPage,about],
}
