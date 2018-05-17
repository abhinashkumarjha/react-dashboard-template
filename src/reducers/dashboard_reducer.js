import  { uniqueCustomerAdded, promotionData, totalSalesData, donutChartData, performanceData } from './../seed'

export default function(){
  return{
    "uniqueCustomerAdded":uniqueCustomerAdded,
    "promotionData": promotionData,
    "totalSalesData": totalSalesData,
    "donutChartData": donutChartData,
    "performanceData":performanceData
  }
}
