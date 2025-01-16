---
sidebar_label: 'Find Batch Report Sequence Nnumber'
---

# Episys: Find Batch Report Sequence Number

:::caution Note

This is a **legacy sub-type** and should only be used if directed by SMA or Jack Henry. In its place it is recommended that you use the sub-type **Find Report from RSJ Output**.

:::

* Calls an RSJ Utility called **LookForBatchOutputSequence**
* Scans the lastest Batch Output located in the ```/SYM/SYM###/opcon_reports/<JOB.NAME>``` directory
* Parses the **SEQ#** out of the **Batch Output for a Batch Job** that was ran via RSJ
* **First instance found ONLY**
* Submits a **$PROPERTY:ADD** event so the **Property Value** will reflect the **SEQ#** found

### Sub-Type

![](../static/imgbasic/BatchOutputSEQNum.png)

* **RSJ Path:** Defines the path to the directory on the UNIX Machine where the RSJ programs are installed.
* **SYM Number:** Defines the Episys "SYM" where the control file resides. The value should be a three-digit number or an OpCon token that resolves to a three-digit number.
* **Episys Job:** Defines the name of the job that ran in Episys through RSJ.
* **Property Name:** Defines the name of the OpCon Property that will have its value set by this job.
* **MSGIN Directory:** Defines the full path to the MSGIN directory on the UNIX machine the job will run on.
* **OpCon User ID:** Defines an OpCon User ID with privileges to "Maintain Global Properties".
* **External Event Password:** Defines the External Event Password for the OpCon User ID specified.
* **Occurrence to Search for:** Defines a numerical value (maximum value 99) that identifies the occurrence of the Report title to search for.

:::tip Best Practice

It is recommened that the values for RSJ Path, SYM Number, MSGIN Directory, OpCon User ID, and External Event Password fields reference Global or Schedule Properties with the appropriate values. 

* **PATH_RSJ** = ```/ops/bin```
* **SI.SYM** = ```000```
* **PATH_UNIX_MSGIN** = ```/usr/local/lsam/MSGIN```
* **USER_OCADM** = ```ocadm```
* **USER_TOKE** = ```ocadm's token```

:::
