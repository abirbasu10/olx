import { Component, OnInit } from '@angular/core';
import * as Chartist from 'chartist';
import { CompanyVesselCount } from '../company_vessel_count'
import { CompanyCrewNationality } from '../company_crew_nationality'
import { ORDERS,VESSELCOUNT,COMPANY_CREW_NATIONALITIES, CREW_NATIONALITY } from '../comany_mock_data';
import { CompanyDetails,ProfileFields, Review,VerifyCompanyDocument } from '../../classDefinition';
import { DefaultCompany,VERIFYCOMPANYDOCUMENT } from '../../application_mock_Data';

@Component({
  selector: 'app-company-dashboard',
  templateUrl: './company-dashboard.component.html',
  styleUrls: ['./company-dashboard.component.scss']
})

export class CompanyDashboardComponent implements OnInit {

  defaultCompany:CompanyDetails=DefaultCompany;
  profileFieldLength : number = this.defaultCompany.profileFields.length

  color = 'primary';
  mode = 'determinate';
  value = this.checkProfileStrength()
  //bufferValue = 75;

  orders:any[];
  vesselcount:CompanyVesselCount;
  totalVessel:number;
  crewNationalities:CompanyCrewNationality;
  totalCrew:number;
  

  docVerificationStatus : boolean = false
  constructor() { }

  checkDocVerificationStatus(){
    var count = 0
    var lengthOfDoc = VERIFYCOMPANYDOCUMENT.length
    for(let doc of VERIFYCOMPANYDOCUMENT)
    {
      if(doc.status)
      {
        count++
      }
      if(doc.status==null)
      this.docVerificationStatus = null;

      if(doc.status==false)
      this.docVerificationStatus = false;
    }
    
    if(lengthOfDoc == count){
      
    this.docVerificationStatus = true;
    }
  }

  
  checkProfileStrength(){
    var strength = 0
    var count=0
    for(let i = 0; i<this.profileFieldLength; ++i)
    {
      if(this.defaultCompany.profileFields[i].fieldName.toLowerCase().indexOf('document') == -1)
      {    
        if(this.defaultCompany.profileFields[i].verifyStatus)
            {
              count++
            }
      }      
      else
      {
        for(let doc of VERIFYCOMPANYDOCUMENT)
        {
          if(doc.status)
          count++
        }
      }
       
    }
    strength = (count/this.profileFieldLength)*100
    
    return strength

  }

  startAnimationForLineChart(chart){
      let seq: any, delays: any, durations: any;
      seq = 0;
      delays = 80;
      durations = 500;

      chart.on('draw', function(data) {
        if(data.type === 'line' || data.type === 'area') {
          data.element.animate({
            d: {
              begin: 600,
              dur: 700,
              from: data.path.clone().scale(1, 0).translate(0, data.chartRect.height()).stringify(),
              to: data.path.clone().stringify(),
              easing: Chartist.Svg.Easing.easeOutQuint
            }
          });
        } else if(data.type === 'point') {
              seq++;
              data.element.animate({
                opacity: {
                  begin: seq * delays,
                  dur: durations,
                  from: 0,
                  to: 1,
                  easing: 'ease'
                }
              });
          }
      });

      seq = 0;
  };
  startAnimationForBarChart(chart){
      let seq2: any, delays2: any, durations2: any;

      seq2 = 0;
      delays2 = 80;
      durations2 = 500;
      chart.on('draw', function(data) {
        if(data.type === 'bar'){
            seq2++;
            data.element.animate({
              opacity: {
                begin: seq2 * delays2,
                dur: durations2,
                from: 0,
                to: 1,
                easing: 'ease'
              }
            });
        }
      });

      seq2 = 0;
  };

  
  ngOnInit() {

    if(VERIFYCOMPANYDOCUMENT.length == 1)
      this.checkDocVerificationStatus()
  

      
      this.orders=ORDERS;
      this.vesselcount=VESSELCOUNT[0];
      this.totalVessel=0;

      this.crewNationalities=COMPANY_CREW_NATIONALITIES[0];
      this.totalCrew=0

      for(let vc of this.vesselcount.type_count)
      {
        this.totalVessel=this.totalVessel+vc.count;
      }

      for(let cr of this.crewNationalities.nation_count)
      {
        this.totalCrew=this.totalCrew+cr.count;
      }

      /* ----------==========     Daily Sales Chart initialization For Documentation    ==========---------- */
      /* const dataDailySalesChart: any = {
          labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
          series: [
              [12, 17, 7, 17, 23, 18, 38]
          ]
      };

     const optionsDailySalesChart: any = {
          lineSmooth: Chartist.Interpolation.cardinal({
              tension: 0
          }),
          low: 0,
          high: 50, 
          chartPadding: { top: 0, right: 0, bottom: 0, left: 0},
      }

      var dailySalesChart = new Chartist.Line('#dailySalesChart', dataDailySalesChart, optionsDailySalesChart);

      this.startAnimationForLineChart(dailySalesChart); */
      /* ----------==========     Emails Subscription Chart initialization    ==========---------- */

      var dataCompanyPurchase1 = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        series: [
          [282, 468, 400, 500]

        ]
      };
      var optionsCompanyPurchase = {
          axisX: {
              showGrid: false
          },
          low: 0,
          high: 1000,
          chartPadding: { top: 0, right: 5, bottom: 0, left: 0}
      };
      var responsiveOptions: any[] = [
        ['screen and (max-width: 640px)', {
          seriesBarDistance: 5,
          axisX: {
            labelInterpolationFnc: function (value) {
              return value[0];
            }
          }
        }]
      ];
      var dataCompanyPurchase = new Chartist.Bar('#dataCompanyPurchase', dataCompanyPurchase1, optionsCompanyPurchase, responsiveOptions);

      //start animation for the Purchase By Company Chart
      this.startAnimationForBarChart(dataCompanyPurchase);


      /* ----------==========     Completed Tasks Chart initialization    ==========---------- */

      const dataCompletedTasksChart: any = {
          labels: ['Jurong Port', 'Port of Singapore', 'Port of Madras', 'Port of Arnala', 'Port of Bombay'],
          series: [
              [230, 750, 450, 300, 280]
          ]
      };

     const optionsCompletedTasksChart: any = {
          lineSmooth: Chartist.Interpolation.cardinal({
              tension: 0
          }),
          low: 0,
          high: 1000, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
          chartPadding: { top: 0, right: 0, bottom: 0, left: 0}
      }
 
      var completedTasksChart = new Chartist.Line('#completedTasksChart', dataCompletedTasksChart, optionsCompletedTasksChart);

      // start animation for the Completed Tasks Chart - Line Chart
      this.startAnimationForLineChart(completedTasksChart);



      /* ----------==========     Emails Subscription Chart initialization    ==========---------- */

      var dataEmailsSubscriptionChart = {
        labels: ['GreatShip', 'SeaHorse', 'Night King', 'Oceans 20'],
        series: [
          [542, 443, 320, 780]

        ]
      };
      var optionsEmailsSubscriptionChart = {
          axisX: {
              showGrid: false
          },
          low: 0,
          high: 1000,
          chartPadding: { top: 0, right: 5, bottom: 0, left: 0}
      };
      var responsiveOptions: any[] = [
        ['screen and (max-width: 640px)', {
          seriesBarDistance: 5,
          axisX: {
            labelInterpolationFnc: function (value) {
              return value[0];
            }
          }
        }]
      ];
      var emailsSubscriptionChart = new Chartist.Bar('#emailsSubscriptionChart', dataEmailsSubscriptionChart, optionsEmailsSubscriptionChart, responsiveOptions);

      //start animation for the Emails Subscription Chart
      this.startAnimationForBarChart(emailsSubscriptionChart);
  }

}
