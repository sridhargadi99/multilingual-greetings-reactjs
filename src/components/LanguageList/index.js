import {EachListContainer, EachButton} from './styledComponents'

const LanguageList = props => {
  const {eachList, changeId, activeButton} = props
  const {id, buttonText} = eachList
  const onClickChangeId = () => changeId(id)
  return (
    <EachListContainer>
      <EachButton
        type="button"
        onClick={onClickChangeId}
        activeButton={activeButton}
      >
        {buttonText}
      </EachButton>
    </EachListContainer>
  )
}

export default LanguageList
