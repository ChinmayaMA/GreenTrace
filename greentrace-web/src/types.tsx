export interface Company {
    id: number;
    name: string;
    country: string;
    industry: string;
    createdAt: string;
  }
  
  
  export interface Report {
    id: number;
    companyId: number;
    reportType: string;
    data: string;
    createdAt: string;
  }
  