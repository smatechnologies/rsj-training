---
sidebar_label: 'Exercise 9'
---

# RSJ Exercise 9

## Exercise 9: Find Prompts

## Objective

To define a find_prompts job

## Summary

To create an adhoc find_prompts job in the SMAUtility that will find all the prompts in a batch job.

## Instructions

#### Locate the Schedule

1. Open **Studio**
2. Select **SMAUtility** in the **Schedule List**,
3. Click **View**.

#### Define the Backup and Prune Job

4. In the side panel on the right, select **Add Job**.
5. On the **Master Job Definition** screen,
  * In the **Name** field, enter ```SYMITAR FIND PROMPTS```.
  * In the **Job Type** drop down, select **UNIX**.
  * In the **Machine** drop down, select **SYMITAR**.
   * In the **User ID** drop down, select **0/0**
   * In the **Start Image** field, enter ```[[RSJPATH]]/backup_and_prune [[JI.SYM]] <BATCHJOB NAME>```
  * Click **Save**.
6. Click the **Lock** icon to enter **Admin Mode**.
7. In the **Documentation** section, add some documentation.
8. In the **Frequency** section, click **ADD**.
  * In the **Name** field, enter ```ONREQUEST```
  * In the **When to Schedule**, select **On Request**
  * In the **Request Date**, pick a date in the past
  * Click **Save**
9. Click **Save**.
0. Click **Back**.

#### Add the Job to  the Schedule

1. Open **Operations**
2. Click on **Processes** in the top right corner
3. In **Date** section, validate that today's date is selected
4. In **Schedule** section, right-click on ** SMAUtility**
5. In **Schedule Selection** panel, click **+**
  * In the **Add Job** pop-up, select the **SYMITAR FIND PROMPTS** job
  * Click **Next**
  * Select **On Hold** then click **Next**
  * Click **Submit** and **Close** 

:::info

When you create this job in your environment, you will add the job to the daily when searching for prompts. Then you will modify the **Start Image** to replace ```<BATCHJOB NAME>``` with the name of the batch job that is being ran in the RSJ job. Then you will run the job and the prompts will be listed in order of nested jobs in the batch file. **Every job that has a prompt with a @ as the value will need to have an Answer Prompt and Reset Prompt jobs created.**

:::