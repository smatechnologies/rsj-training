---
sidebar_label: 'Find Prompts'
---

# Find Prompts

* A program that will find all possible user prompts in a nested Symitar job. 
* This program facilitates the conversion of a Symitar job file into OpCon.

### find_prompt Syntax

```/ops/bin/find_prompts SYM### job_file```

| Parameter |	Required / Optional | Description |
| --- | --- | --- |
| ### | Required | Defines the Episys "SYM" where the control file resides. The value should be a three-digit number or an OpCon token that resolves to a three-digit number. |
| job_file | Required | Defines the name of the jobfile that is being quered for prompts. |

:::tip Best Practice
To put a version of this job in SMAUtility  with an OnRequest frequency.
Manually add it when creating a new Answer Prompts job to get all prompts.
In the Start Image: ```/ops/bin/find_prompts SYM000 [[JI.JOBNAME]]```
:::
