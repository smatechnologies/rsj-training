---
sidebar_label: 'Exercise 2'
---

# RSJ Exercise 2

## Exercise 2: Multi-Threaded RSJ Job

## Objective

Create a multi-threaded RSJ job.

## Summary

Create a schedule that will have a single multi-threaded RSJ job in it.

## Instructions

#### Create the Schedule

1. In **Library** > **Administration**, select **Master Schedules**.
2. Click the **Add** button.
3. On the **Master Schedule Definition** screen:
  * In the **Schedule Name** field, enter ```Multi-Threaded RSJ Schedule```.
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
8. Select **Multi-Threaded RSJ Schedule** in the **Schedule List**,
9. Click **View**.

#### Create the Multi-Threaded RSJ Job

10. Select **Add Job** button in the side menu.
11. On the **Master Job Definition** screen,
  * In the **Name** field, enter ```RSJ BATCHJOB.1```.
  * In the **Job Type** drop down, select **UNIX**.
  * In the **Machine** drop down, select **SYMITAR**.
  * In the **Job Sub-Type** section, click the blue **Edit** button.
  * In the **Job Sub-Type** pop-up window, select **Episys: Run JobFile**
    * In the **RSJ Path** field, verify that **[[RSJPATH]]** is showing.
    * In the **SYM Number** field, enter ```[[SI.SYM]]```.
    * In the **Episys Job** field, enter ```BATCHJOB.1```.
    * Check the box for **Multi-thread**.
    * Click **Save**
  * In the **User ID** drop down, select **0/0**
  * Click **Save**.
12. Click the **Lock** icon to enter **Admin Mode**.
13. In the **Documentation** section, add some documentation.
14. In the **Frequency** section, add the **Example Mon-Sun-O** Frequency.
15. Click **Save**.
16. Click **Back**.
17. Close **Studio** and **Library**.
