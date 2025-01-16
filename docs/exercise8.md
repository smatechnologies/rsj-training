---
sidebar_label: 'Exercise 8'
---

# RSJ Exercise 8

## Exercise 8: Backup and Prune

## Objective

To define a backup and prune job

## Summary

To add a multi-instance backup and prune job in the SMAUtility schedule.

## Instructions

#### Locate the Schedule

1. Open **Studio**
2. Select **SMAUtility** in the **Schedule List**,
3. Click **View**.

#### Define the Backup and Prune Job

4. In the side panel on the right, select **Add Job**.
5. On the **Master Job Definition** screen,
  * In the **Name** field, enter ```SYMITAR BACKUP_PRUNE```.
  * In the **Job Type** drop down, select **UNIX**.
  * Check the box to **Allow Multi-Instance**
  * In the **Machine** drop down, select **SYMITAR**.
   * In the **User ID** drop down, select **0/0**
   * In the **Start Image** field, enter ```[[RSJPATH]]/backup_and_prune SYM[[JI.SYM]] 7 30```
  * Click **Save**.
6. Click the **Lock** icon to enter **Admin Mode**.
7. In the **Documentation** section, add some documentation.
8. In the **Frequency** section, add the **Example Mon-Sun-O** Frequency.
9. In the **Instance Properties**,
  * Click the green **+ Add New Property Set**
    * Click the green **+** button
    * In the **Name** field, enter ```SYM```
    * In the **Value** field, enter ```000```
    * Click the blue **Check Mark** button.
  * Click the green **+ Add New Property Set**
    * Click the green **+** button
    * In the **Name** field, enter ```SYM```
    * In the **Value** field, enter ```042```
    * Click the blue **Check Mark** button.
10. Click **Save**.
11. Click **Back**.

#### Build the Schedule

12. Open **Operations**
13. Click on **Schedule Build** in the top right corner
14. In the **To** and **From** fields, make sure it is today's date
15. For **Schedule Build**, leave it as **On Hold**
16. In the **Schedule List**, select **SMAUtility**
17. Click **Build**

#### Validate Multiple Jobs Were Built 

18. Expand the date tree until you get to a schedule name.
19. Click on **SMAUtitily**
20. In **Processes** screen, in **Job** sections validate that you have 2 versions of the backup and prune job.
  * _Note: You should see one job with a _000 and another with _042._
21. Close **Operations**, **Library**, and **Studio**.