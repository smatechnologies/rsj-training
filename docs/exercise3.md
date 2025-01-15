---
sidebar_label: 'Exercise 3'
---

# RSJ Exercise 3

# Exercise 3: Single-Threaded RSJ Job

## Objective

Define a single threaded RSJ job.

## Summary

Create a schedule that will transfer a file to the host and run a single threaded RSJ job to process that file.

## Instructions

#### Create the Schedule

1. In **Library** > **Administration**, select **Master Schedules**.
2. Click the **Add** button.
3. On the **Master Schedule Definition** screen:
  * In the **Schedule Name** field, enter ```Single Threaded RSJ Schedule```.
  * Add **Documentation** to your Schedule.
  * Monday through Sunday are working days
  * Use the Master Holiday Calendar.
  * **Auto Build** 7 days in advance for 1 days
  * **Auto Delete** 7 days ago
  * Click the **Save** button.

#### Define the Schedule Instance Property

4. Click the **Lock** icon to enter **Admin Mode**.
5. Expand **Instance Definition**
  * Click **Add New Property Set**
  * In the **Name** field, enter ```SYM```.
  * In the **Value** field, enter ```000```.
  * Click the **Green Check Mark**.
6. Click **Save**.
7. Click **Back**.
8. Select **Single Threaded RSJ Schedule** in the **Schedule List**,
9. Click **View**.

#### Create the File Transfer Job

10. Select **Add Job** button in the side menu.
11. On the **Master Job Definition** screen,
  * In the **Name** field, enter ```SMAFT FILE2```.
  * In the **Job Type** drop down, select **File Transfer**.
  * On the **Source** side,
    * In the **Machine** drop down, select **SMATraining**.
    * In the **User** field, select **SMATRAINING\SMAUSER**.
    * In the **File** field, enter ```"C:\RSJ_Training\FILE2.txt"```
    * In the **Data Type** field, select **ASCII**.
  * On the **Destination** side,
    * In the **Machine** drop down, select **SYMITAR**.
    * In the **User** field, select **0/0**.
    * In the **File** field, enter ```/SYM/SYM[[SI.SYM]]/DATAFILE/FILE2```
    * In the **Data Type** field, select **ASCII**.
  * Leave the other settings as their default settings.
  * Click **Save**.
12. Click the **Lock** icon to enter **Admin Mode**.
13. In the **Documentation** section, add some documentation.
14. In the **Frequency** section, add the **Example Mon-Sun-O** Frequency.
15. Click **Save**.
16. Click **Back**.

#### Create the Multi-Threaded RSJ Job

17. Select **Add Job** button in the side menu.
18. On the **Master Job Definition** screen,
  * In the **Name** field, enter ```RSJ BATCHJOB.2```.
  * In the **Job Type** drop down, select **UNIX**.
  * In the **Machine** drop down, select **SYMITAR**.
  * In the **Job Sub-Type** section, click the blue **Edit** button.
  * In the **Job Sub-Type** pop-up window, select **Episys: Run JobFile**
    * In the **RSJ Path** field, verify that **[[RSJPATH]]** is showing.
    * In the **SYM Number** field, enter ```[[SI.SYM]]```.
    * In the **Episys Job** field, enter ```BATCHJOB.2```.
    * In the **Edit File** field, enter ```/SYM/SYM[[SI.SYM]]/DATAFILE/FILE2```
    * Click **Save**
  * In the **User ID** drop down, select **0/0**
  * Click **Save**.
19. Click the **Lock** icon to enter **Admin Mode**.
20. In the **Documentation** section, add some documentation.
21. In the **Frequency** section, add the **Example Mon-Sun-O** Frequency.
22. In the **Job Dependency** section,
  * Click the green **+** button
  * In the **Job** field, select **SMAFT FILE2**
  * Click **Save**
23. Click **Save**.
24. Click **Back**.
25. Close **Studio** and **Library**.
