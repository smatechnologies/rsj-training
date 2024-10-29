---
sidebar_label: 'RSJ Reports'
---

# RSJ Reports

* Every job that is ran via RSJ creates an RSJ Report
* These files are stored in the ```opcon_reports``` directoy within the SYM that the job was executed in
* These files are used when searching for SEQ numbers
* The ```opcon_reports``` directory is maintained by the RSJBankup_Prune job in the SMAUtility schedule
* The structure of the ```opcon_reports``` directory is:
  * ```/SYM/SYM###/opcon_reports/JOB.NAME```
  * Where JOB.NAME is the name of the Batch File that is executed byt RSJ. 