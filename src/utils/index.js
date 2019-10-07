
/**
 * Update the searchQuery field in the address context
 * @param {object} e - the event that called this function
 * @param {function} updateAddressData - function for updating the address context
 */
  export const updateSearchQuery = (e, updateAddressData) => {
    const { value } = e.target;
    updateAddressData(prevState => ({...prevState, searchQuery: value}))
    e.preventDefault();
  };

  /**
   * Function for connecting to the address Api
   * @param {object} addressData - the address context state
   * @param {function} updateAddressData - function for updating the context
   */
  export const getSearchResults = async (addressData, updateAddressData) => {

    const {searchQuery, page, itemsPerPage} = addressData;
    const start = (page-1)*itemsPerPage

    updateAddressData(prevState => ({...prevState, queryResult: {}, error: '' }));
    updateAddressData(prevState => ({...prevState, queryResult: {} }));
    const response = await fetch(`https://geodata.nationaalgeoregister.nl/locatieserver/v3/suggest?fq=type:adres&q=${searchQuery}&start=${start}&rows=${itemsPerPage}&fq=*:*`);
    const addresses = await response.json();
    const { docs } = addresses.response;
    if (docs && !docs.length) {
      return updateAddressData(prevState => ({...prevState, error: 'No result found' }));
    }
    updateAddressData(prevState => ({...prevState, queryResult: {...addresses.response}}));
  }
  