---
sidebar_label: 'Find Report From Episys Report'
---

# Episys: Find Report From Episys Report

* Calls an RSJ Utility called **LookForReportSequenceInReports**
* Scans the Batch Output located in the ```/SYM/SYM###/REPORT``` directory
* Parses the SEQ# out of the Batch Output for a Batch Job that were **NOT** ran via RSJ
* Can specify an occurrence to search for
* Submits a **$PROPERTY:ADD** event so the **Property Value** will reflect the **SEQ#** found

### LookForReportSequenceInReports Syntax

```[[RSJPATH]]/LookForReportSequenceInReports SYM### JOB.NAME PROPERTY.NAME UNIX_MSGIN USER "TOKEN” OCCURENCE```

| Parameter |	Required / Optional | Description |
| --- | --- | --- |
| ### | Required | This is the three digit SYM number of where the Batch Job was ran. |
| JOB.NAME | Required | This is the name of the subdiredctory to search. It will be the same name that is used when the RSJ job ran. |
| PROPERTY.NAME | Required | This is the name of the Property that will be updated with the SEQ number found for the Report. |
| UNIX_MSGIN | Required | This is the path to the UNIX MSGIN directory. |
| USER | Required | This is the user id that is submitted via the event that is submitted when the SEQ number is found. |
| TOKEN | Required | This is the token for the user id that is specified in the previous parameter. |
| OCCURENCE | Optional | This is the occurence of the report to search for. If nothing is specified, the first occurence is found. |

:::tip Examples

Here are some command line examples:

* ```/ops/bin/LookForReportSequenceInReports 000 ACH "SEQ.ACH REPORT" [[PATH_UNIX_MSGIN]] [[USER_OCADM]] "[[USER_TOKEN]]”```
* ```/ops/bin/LookForReportSequenceInReports 000 "Teller Totals by Branch" SEQ.GN.AFTER.OFFLINE [[PATH_UNIX_MSGIN]] [[USER_OCADM]] "[[USER_TOKEN]] 3```

:::