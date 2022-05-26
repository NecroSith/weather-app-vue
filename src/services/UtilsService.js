export default class UtilsService {
  convertHPaToMmHSt(hPa) {
    const perOne = 0.7501;

    return hPa * perOne;
  }
}
