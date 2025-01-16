---
sidebar_label: 'Answer Prompts'
---

# Episys: Answer Prompts

* Calls an RSJ Utility called **update_scf**
* It updates a Batch Control File with answers to one or more prompts
* Prompts can be found by utilizing a utility called **find_prompts**

### Update_scf Syntax

* ```/ops/bin/update_scf -f/SYM/SYM[[SI.SYM]]/BATCH/JOB.NAME "Prompt1:Answer1" "Prompt2:Answer2"```

| Parameter |	Required / Optional | Description |
| --- | --- | --- |
| -f | Required | Specify the path and the file of the batch file to update |
| -s | Optional | Will only update the first matching prompt, otherwise all matching prompts will be updated |
| PromptX:AnswerX | Required | Surrounded in quotes, Defines the text for a Prompt and Response the Episys job will require. |

:::tip Examples

Here are some command line examples:

* ```/ops/bin/update_scf -f/SYM/SYM[[SI.SYM]]/BATCH/CC.LATE/FEE "Effective Date:[[$SCHEDULE DATE MMDDYY]]" "Date:047"```
* ```/ops/bin/update_scf -f/SYM/SYM[[SI.SYM]]/BATCH/DRAFTS "Effective Date:[[$SCHEDULE DATE MMDDYY]]"```

:::