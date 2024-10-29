---
sidebar_label: 'What is RSJ?'
---

# What is RSJ?

* Stands for ‘Run Symitar Job’
* Is a connector that is run via a UNIX Agent on a Symitar Host
* Allows CUs and CUSOs to automate running Symitar Batch Files
* Provides the ability to Multi-Thread processes

## Command Line Syntax

* In order to use RSJ to execute Symitar Batch Jobs, you have to call RSJ in the command line:

```/ops/bin/RSJ -E<editfile_name> -d -D SYM### JobName restart_point```

| Command Line Parameter |	Required / Optional | Description |
| --- | --- | --- |
| -E<editfile_name> | Optional | The –E parameter is optional. It specifies the path and name of the file to move into the /SYM/SYMnnn/EDITFILE.DATA There is no space between the –E and the editfile_name. If an EDITFILE is specified, RSJ will automatically run the job in single_thread mode. |
| -D | Optional | It causes RSJ to delete the contents of /SYM/SYMnnn/opcon_reports/job_name_to_run before running the job. If the –D switch is not present on the command line; the directory will not be deleted before running the job. |
| -d | Optional |  It causes RSJ to delete the –E. Eeditfile_name upon successful completion of the job. If the –d switch is not present on the command line, the editfile_name file will not be deleted. |
| SYM# | Required | The SYM# parameter is required. It tells RSJ which SYM to run the job in. The SYM number can be in either of the following formats: 000 or SYM000. |
| JobName | Required | The JobName parameter is required. It tells RSJ the name of the Symitar Batch Job to run. |
| restart_point | Optional | The restart_point parameter is optional. It tells RSJ the name of a restart point to look for in a Symitar Batch Jobfile. For more information, refer to RESTART_POINT. |

:::tip Examples

Here are some command line examples:

* ```/ops/bin/RSJ 000 GOODNIGHT```
* ```/ops/bin/RSJ -E/SYM/SYM000/LETTERSPECS/ACH.FILE -d 000 ACH ```

:::

## Single versus Multi-Thread

* RSJ defaults to single threaded mode, meaning only one job can run at a time.
* RSJ allows users the ability to run multiple Batch Files at one time.
* Multi-Threaded will is not available when and EditFile is specified.
* Multi-Threaded will block the EditFile directory from being used while multiple jobs are executing. 