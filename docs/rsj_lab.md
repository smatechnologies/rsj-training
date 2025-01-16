---
sidebar_label: 'RSJ Lab'
---

# RSJ Lab

## Lab: ACH Originations

## Objective

To create an ACH Originations workflow that run Mon-Sun and will transfer the report that is generated to the OpCon server. 

## Summary

The **ACH.ORIGINATION.FILE** job has **multiple prompts** that need to be answered before the batch job can run. Once the batch job has completed, the report number needs to be located so it can be transfered to the OpCon server.

The **ACH.ORIGINATION.FILE** needs the following prompts supplied with the next working date prior to running the batch file:

  * **Effective Entry Date**
  * **Deposit Settlement Date**
  * **Patment Settlement Date**

We also **want to reset the prompts** after the job runs while we are looking for the SEQ number of the report that needs to go to Axway.

## Instructions

#### Create Property

* Create a **$SCHEUDLE DATE** property with a value of ```mm/dd/yyyy```

#### Create the Schedule and Jobs

* Create an **ACH Origination Schedule** that will have 5 jobs in it.
* Create 2 Answer Prompt jobs
  * One will answer the propmpts listed above with **$SCHEDULE DATEmm/dd/yyyy** property that you created so the **next working date** is supplied.
  * One will reset the prompts back to the default of ```@```
* Create an RSJ to run the ```ACH.ORIGINATION.FILE```
* Create an SEQ job that will find the SEQ number for a report called ```"ACH Origination File"``` and will update the property called ```"SEQ ACH Origination File"```
* Create a transfer job that will move the **ACH Origination File** report from the Symitar Host to the OpCon server in ```C:\TEST```