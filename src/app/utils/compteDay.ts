export class DateManage {
    formatDate = (param: Date): string => {
      const date = new Date(param)
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, '0');
      const day = String(date.getDate()).padStart(2, '0');
      return `${year}-${month}-${day}`;
    };
    calculateDateDifference(startDate: Date, endDate: Date): number {
      
      const start = new Date(this.formatDate(startDate))
      const end = new Date(this.formatDate(endDate))
      const differenceInMs = Math.abs(end.getTime() - start.getTime());
      const differenceInDays = Math.ceil(differenceInMs / (1000 * 60 * 60 * 24));
  
      
      return differenceInDays;
    }
  }