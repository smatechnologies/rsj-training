---
sidebar_label: 'Find Report From RSJ'
---

# Episys: Find Report from RSJ Output

* Calls an RSJ Utility called **LookForReportInRSJ**
* Scans the Batch Output located in the ```/SYM/SYM###/opcon_reports/<JOB.NAME>``` directory
* Parses the SEQ number out of the Batch Output for a Batch Job that was ran via RSJ
* Can specify an occurrence to search for
* Submits a **$PROPERTY:ADD** event so the **Property Value** will reflect the **SEQ#** found

:::info

This is the primary sub-type to use when looking for an SEQ number.

:::

### Sub-Type

![](../static/imgbasic/FromRSJOutput.png)

* **RSJ Path:** Defines the path to the directory on the UNIX Machine where the RSJ programs are installed.
* **SYM Number:** Defines the Episys "SYM" where the control file resides. The value should be a three-digit number or an OpCon token that resolves to a three-digit number.
* **Episys Job:** Defines the name of the job that ran in Episys through RSJ.
* **Report Name:** Defines the name of the report whose sequence number is of interest.
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
* **USER_TOKEN** = ```ocadm's token```

:::
