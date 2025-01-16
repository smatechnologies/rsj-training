---
sidebar_label: 'Look For Report'
---

# Look For Report

:::caution Note

This utility should only be used if directed by SMA or Jack Henry. It is used in place of **Find Report From Episys Report** and **Find Batch Report Sequence Number**. 

:::

* Does **NOT** have a sub-type
* Scans the Batch Output File or Report located in the ```/SYM/SYM###/REPORT``` directory
* Parses the **SEQ#** out of the **Batch Output for a Batch Job** that were **NOT** ran via RSJ
* Can specify an occurrence to search for
* Submits a **$PROPERTY:ADD** event so the **Property Value** will reflect the **SEQ#** found


### Command Line

```/ops/bin/LookForReport ### "Episys_Job" "Property_Name" MSGIN_Directory Opcon_User_ID External_Event_Token Report_Occurrence```

* **RSJ Path:** Defines the path to the directory on the UNIX Machine where the RSJ programs are installed.
* **###:** Defines the Episys "SYM" where the control file resides. The value should be a three-digit number or an OpCon token that resolves to a three-digit number.
* **Episys_Job:** Defines the name of the job that ran in Episys through RSJ.
* **Property_Name:** Defines the name of the OpCon Property that will have its value set by this job. 
* **MSGIN_Directory:** Defines the full path to the MSGIN directory on the UNIX machine the job will run on.
* **OpCon_User_ID:** Defines an OpCon User ID with privileges to "Maintain Global Properties".
* **External_Event_Token:** Defines the External Event Password for the OpCon User ID specified
* **Report_Occurrence:** Defines a numerical value (maximum value 99) that identifies the occurrence of the Report title to search for.

:::tip Best Practice

It is recommened that the values for RSJ Path, SYM Number, MSGIN Directory, OpCon User ID, and External Event Password fields reference Global or Schedule Properties with the appropriate values. 

* **PATH_RSJ** = ```/ops/bin```
* **SI.SYM** = ```000```
* **PATH_UNIX_MSGIN** = ```/usr/local/lsam/MSGIN```
* **USER_OCADM** = ```ocadm```
* **USER_TOKE** = ```ocadm's token```

:::