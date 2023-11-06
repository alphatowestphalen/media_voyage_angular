export class DateUtils {
  dateUtils : Array<string> = [];

  async getDateUtils() : Promise<Array<string>> {
    return this.dateUtils
  }

  setDateUtils(start : string, end : string) {
    this.dateUtils.push(start, end)
  }
}
