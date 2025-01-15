---
sidebar_label: 'Restart Point'
---

# Restart Point

* Allows a user to restart a Batch Job at a specific point
* Primarily used in event of a failure
* Can be utilized in a nested job
* Is specified as a Comment in the Batch Job in the following format ```RESTART_POINT <JOB.NAME>```

### Sub-Type Usage

![RSJ Sub-Type](../static/imgbasic/RunJobFile.png)

* **SYM Number:** The SYM# parameter is required. It tells RSJ which SYM to run the job in. The SYM number can be in either of the following formats: 000 or SYM00.
* **Episys Job:** The Job Name parameter is required. It tells RSJ the name of the Symitar Batch Job to Run
* **Restart Point:** The restart_point parameter is optional. It tells RSJ the name of the restart point to look for tin a Symitar Batch File
* **Edit File:** The name and path to the file that RSJ will move into EDITFILE. If an Edit File is specified the Multi-Thread check box isn’t available .
* **Multi-Thread Check Box:** Allows RSJ to run multiple jobs at a time. Not available if an Edit File is specified.
* **Delete Edit File Check Box:**  Tells RSJ to delete the Edit File if specified after the Batch Job has run.

:::info How To

* Locate the Job File that you want to restart from.

![](../static/imgbasic/jobfile.png)

* Add a comment to specify the restart point. ```RESTART_POINT [Jobfile Name]```

![](../static/imgbasic/comment.png)

* Modify the dailly version of the RSJ job to specify the Jobfile Name

![](../static/imgbasic/RunJobFile.png)

:::