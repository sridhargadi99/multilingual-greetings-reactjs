import {Component} from 'react'

import LanguageList from '../LanguageList'

import {
  MainContainer,
  MainHeading,
  ListContainer,
  ImageContainer,
} from './styledComponents'

const languageGreetingsList = [
  {
    id: 'bfdf40eb-eec9-4a66-a493-752fe689f0d0',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/english-greetings-img.png',
    buttonText: 'English',
    imageAltText: 'english',
  },
  {
    id: '0ceda891-2a0c-49e2-8c62-68e78180bac6',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/tamil-greetings-img.png',
    buttonText: 'Tamil',
    imageAltText: 'tamil',
  },
  {
    id: '89537778-7a46-4c58-988c-0adc931d087c',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/telugu-greetings-img.png',
    buttonText: 'Telugu',
    imageAltText: 'telugu',
  },
]

class MultilingualGreetings extends Component {
  state = {
    activeId: languageGreetingsList[0].id,
  }

  changeId = id => this.setState({activeId: id})

  render() {
    const {activeId} = this.state
    const idDetails = languageGreetingsList.filter(
      eachList => eachList.id === activeId,
    )
    const {imageUrl, imageAltText} = idDetails[0]

    return (
      <MainContainer>
        <MainHeading>Multilingual Greetings</MainHeading>
        <ListContainer>
          {languageGreetingsList.map(eachList => (
            <LanguageList
              eachList={eachList}
              changeId={this.changeId}
              key={eachList.id}
              activeButton={eachList.id === activeId}
            />
          ))}
        </ListContainer>
        <ImageContainer src={imageUrl} alt={imageAltText} />
      </MainContainer>
    )
  }
}

export default MultilingualGreetings
