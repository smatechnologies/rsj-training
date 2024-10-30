---
sidebar_label: 'Run JobFile'
---

# Episys: Run JobFile

* This is the sub-tpye that is used to run Batch Jobs via RSJ.

![RSJ Sub-Type](../static/imgbasic/RunJobFile.png)

| Field | Required / Optional | Description |
| --- | --- | --- |
| SYM Number | Required | The SYM# parameter is required. It tells RSJ which SYM to run the job in. The SYM number can be in either of the following formats: 000 or SYM00. |
| Episys Job | Required | The Job Name parameter is required. It tells RSJ the name of the Symitar Batch Job to Run |
| Restart Point | Optional | The restart_point parameter is optional. It tells RSJ the name of the restart point to look for tin a Symitar Batch File |
| Edit File | Optional | The name and path to the file that RSJ will move into EDITFILE. If an Edit File is specified the Multi-Thread check box isn’t available . |
| Multi-Thread Check Box | Optional | Allows RSJ to run multiple jobs at a time. Not available if an Edit File is specified. |
| Delete Edit File Check Box | Optional | Tells RSJ to delete the Edit File if specified after the Batch Job has run. |

:::tip Best Practice

It is best practice to store the path to RSJ in a **Global Property**, 

* **RSJPath** = ```/ops/bin```

and to store the SYM### as a **Schedule Instance**,

* **SYM** = ```000```

:::