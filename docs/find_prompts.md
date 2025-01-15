---
sidebar_label: 'Find Prompts'
---

# Find Prompts

* A program that will find all possible user prompts in a nested Symitar job. 
* This program facilitates the conversion of a Symitar job file into OpCon.

### find_prompt Syntax

```/ops/bin/find_prompts SYM### job_file```

* **###:** Defines the Episys "SYM" where the control file resides. The value should be a three-digit number or an OpCon token that resolves to a three-digit number. |
* **job_file:** Defines the name of the jobfile that is being quered for prompts. |

:::tip Best Practice

To put a version of this job in SMAUtility  with an OnRequest frequency. Manually add it when creating a new Answer Prompts job to get all prompts. In the Start Image: ```/ops/bin/find_prompts SYM000 [[JI.JOBNAME]]```

:::

### Output Example

:::tip Example

```
SMAUTILITY PROMPTS 
INFO Thu Nov 21 09:31:02 2019 find_prompts VERSION=XX.XX.XXXX= 
INFO Thu Nov 21 09:31:02 2019 Copyright@ SMA XXXX= 
INFO Thu Nov 21 09:31:02 2019 This code may not be transferred/lent/copied outside your organization without SMA approval= 
INFO Thu Nov 21 09:31:02 2019 SYM=222= 
INFO Thu Nov 21 09:31:02 2019 File=GL.TRANREG= 
Prompt in GL.TRANREG line 5 Effective Start Date: @ 
Prompt in GL.TRANREG line 6 Effective End Date: @ 
Prompt in GL.TRANREG line 7 Branch List: @ 
Prompt in GL.TRANREG line 9 Low GL Account Number: @ 
Prompt in GL.TRANREG line 10 Low GL Account Suffix: @ 
Prompt in GL.TRANREG line 11 High GL Account Number: @ 
Prompt in GL.TRANREG line 12 High GL Account Suffix: @ 
Prompt in GL.TRANREG line 13 Print Accounts with No Activity?: @ 

TYPE: STDOUT 
JOB_NAME: find_prompts 
JOB_NUMBER:  
JOB_ID: FINDPROMPTS  
SCHEDULE_DATE: 
SCHEDULE_NAME: 
SCHEDULE_FREQ: 
START_IMAGE: /ops/bin/find_prompts 222 GL.TRANREG 
JOB_GROUP_ID/USER_ID: 
JOB_EXECUTION_METHOD: 
JOB_START_DATE: 
JOB_START_TIME: 
JOB_END_DATE: 
JOB_END_TIME: 
JOB_EXIT_VALUE: 0
```

:::
