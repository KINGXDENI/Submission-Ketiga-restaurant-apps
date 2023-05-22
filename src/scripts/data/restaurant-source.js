import API_ENDPOINT from '../globals/api-endpoint';

class RestauranSource {
  static async daftarResto() {
    const response = await fetch(API_ENDPOINT.LIST_RESTO);
    const responseJson = await response.json();
    return responseJson.restaurants;
  }

  static async Review() {
    const response = await fetch(API_ENDPOINT.REVIEW);
    const responseJson = await response.json();
    return responseJson.results;
  }

  static async detailResto(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    const responseJson = await response.json();
    return responseJson.restaurant;
  }
}

export default RestauranSource;
