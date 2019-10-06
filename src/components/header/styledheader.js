import styled from 'styled-components';
import { SearchItem, SearchInput, Icon, IconBody} from '../../components/homeComponents/styedHome'

export const HeaderContainer = styled.div`
  height: 50px;
  ${'' /* height: 38px; */}
  width: 100%;
  padding: 1px;
  box-sizing: border-box;
  display: flex;
  ${'' /* background-color: #262626 */}
`

export const Logo = styled.h4`
  width: 100px;
  margin: 7px;
  padding: 7px;
  background-color: rgba(0, 0, 0, 0.65);
  color: white;
  font-family: 'Bitter', serif;
  font-weight: 500;
`

export const Logo1 = styled.label`
  font-family: 'Bitter', serif;
  margin: 7px;
  padding: 7 px;
  color: white;
`

export const SearchItem1 = styled(SearchItem)`
  padding: 5px;
  margin: 0 0 0 auto;
`

export const SearchInput1 = styled(SearchInput)`
  width: 150px;
  font-size: 12px;
`

export const Icon1 = styled(Icon)`
  height: 20px;
  width: 20px;
  padding: 5px 0 0 10px;
`

export const IconBody1 = styled(IconBody)`
`

