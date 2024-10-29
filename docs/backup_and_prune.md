---
sidebar_label: 'Backup and Prune'
---

# Backup And Prune

* **backup_and_prune** is a program that will tar and compress the ```/SYM/SYM###/opcon_reports``` directory. 
* It stores the resulting file in ```/SYM/SYMnnn/opcon_backup``` directory. 
* It also removes old backup files that are located in the ```/SYM/SYMnnn/opcon_reports``` directory.

### backup_and_prune Syntax

 ```/ops/bin/backup_and_prune SYM### [# days_to_keep_reports] [# days_to_keep_backup]```

| Parameter |	Required / Optional | Description |
| --- | --- | --- |
| ### | Required | Defines the Episys "SYM" where the control file resides. The value should be a three-digit number or an OpCon token that resolves to a three-digit number. |
| # days_to_keep_reports | Required | Defines the number of days to keep files in the opcon_report directory |
| # days_to_keep_backup | Required | Defines the number of backup files to keep |


:::tip Best Practice

* To put a version of this job in SMAUtility for every SYM that you run RSJ jobs in. Each instance of the job should be run daily in order to maintain disk space on your host. 

* In the Start Image run:  ```/ops/bin/backup_and_prune SYM000 7 30```
:::