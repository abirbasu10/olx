import { Component, OnInit } from '@angular/core';
import { MessageList, MessageDetails, MessageThread, CompanyDetails,LogisticFirmList, ProductFilterValue, Advertisement} from "../../classDefinition";
import { MESSAGELIST, MESSAGEDETAILS, LOGISTICFIRMS, DefaultLogisticFirm, COMPANYDETAILS, DefaultCompany, PRODUCTFILTERVALUES, ADVERTISEMENTS} from "../../application_mock_Data";
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Router } from '@angular/router';


@Component({
  selector: 'app-logistics-message-details',
  templateUrl: './logistics-message-details.component.html',
  styleUrls: ['./logistics-message-details.component.css']
})
export class LogisticsMessageDetailsComponent implements OnInit {

  currentAdId:number;
  currentAd:ProductFilterValue;
  currentMsgId:number;
  messageDetails:MessageDetails;
  defaultCompany:CompanyDetails;
  defaultLogistics:LogisticFirmList;
  messageTyped:string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit() {
    this.defaultCompany=DefaultCompany;
    this.defaultLogistics=DefaultLogisticFirm;
    this.getAdDetails();
    //this.currentMsgId=MESSAGELIST[MESSAGELIST.length-1].messageId
    this.insertIfNewThread()
    
    /* console.log("Message List");
    console.log(MESSAGELIST); */
    this.getMessageDetails()
    
    //console.log(this.messageDetails);
  }

  getAdDetails()
  {
    this.currentAdId = +this.route.snapshot.paramMap.get('adId');
    this.currentAd = PRODUCTFILTERVALUES.find(ad=>ad.advertisementDetails.id==this.currentAdId);
    //alert(this.currentAdId)
  }

  insertIfNewThread()
  {
    //alert(this.currentAdId+"  "+this.defaultCompany.id+"  "+this.defaultLogistics.id)
    var isNew=MESSAGELIST.find(msg=>msg.adId==this.currentAdId && 
      msg.senderId==this.defaultCompany.id && msg.receiverId==this.defaultLogistics.id);
      
    //console.log(isNew);
    if(isNew==null || isNew==undefined)
    {
      //alert("new")
      this.currentMsgId=MESSAGELIST[MESSAGELIST.length-1].messageId+1

      MESSAGELIST.push({messageId:this.currentMsgId,adId:this.currentAdId,
        senderId:DefaultLogisticFirm.id,receiverId:DefaultCompany.id})
      
    }
    else
    {
      //alert("old")
      //console.log(MESSAGEDETAILS)
      this.currentMsgId=Number(isNew.messageId);
      //alert(this.currentMsgId)
    }
    //console.log(MESSAGELIST)
    //alert(this.currentMsgId)
  }

  getMessageDetails()
  {
    this.messageDetails=MESSAGEDETAILS.find(msgDet=>msgDet.messageId==this.currentMsgId)
    //console.log(this.messageDetails)
  }

  sendMessage()
  {
    if(this.messageTyped)
    {
      if(this.messageDetails==null || this.messageDetails==undefined)
      {
        MESSAGEDETAILS.push({messageId:this.currentMsgId, msgThread:[{msg:this.messageTyped,senderId:this.defaultLogistics.id, 
          receiverId:this.defaultCompany.id}]})
      }
      else
      {
        this.messageDetails.msgThread.push({msg:this.messageTyped,senderId:this.defaultLogistics.id, 
          receiverId:this.defaultCompany.id})
      }
      
      this.messageTyped="";
      //console.log(MESSAGEDETAILS)
      this.getMessageDetails();
    }
    
  }

}
