---
sidebar_label: 'Exercise 4'
---

# RSJ Exercise 4

# Exercise 4: Answer Prompts Job

## Objective

Define a your first Answer Prompts job.

## Summary

Create an Answers Prompts schedule to answers promts that are in the Batch File that needs to run.

## Instructions

#### Create a Schedule Date Property

1. In **Library** > **Administration**, select **Global Properties**.
2. Click **Add**.
  * In the **Name** field, enter ```$SCHEUDLE DATEmm/dd/yyyy```.
  * In the ** Value** field, enter ```mm/dd/yyyy```.
  * Click **Save**.
3. Click **Back**.

#### Create the Schedule
4. In **Library** > **Administration**, select **Master Schedules**.
5. Click the **Add** button.
6. On the **Master Schedule Definition** screen:
  * In the **Schedule Name** field, enter ```Answer Prompts Schedule```.
  * Add **Documentation** to your Schedule.
  * Monday through Sunday are working days
  * Use the Master Holiday Calendar.
  * **Auto Build** 7 days in advance for 1 days
  * **Auto Delete** 7 days ago
7. Click **Save** 

#### Define the Schedule Instance Property

8. Click the **Lock** icon to enter **Admin Mode**.
9. Expand **Instance Definition**
  * Click **Add New Property Set**
  * In the **Name** field, enter ```SYM```.
  * In the **Value** field, enter ```000```.
  * Click the **Green Check Mark**.
10. Click **Save**.
11. Click **Back**.
12. Select **Answer Prompts Schedule** in the **Schedule List**,
13. Click **View**.

#### Create the Answer Prompt Job

14. Select **Add Job** button in the side menu.
15. On the **Master Job Definition** screen,
  * In the **Name** field, enter ```Answer Prompt Job```.
  * In the **Job Type** drop down, select **UNIX**.
  * In the **Machine** drop down, select **SYMITAR**.
  * In the **Job Sub-Type** section, click the blue **Edit** button.
  * In the **Job Sub-Type** pop-up window, select **Episys: Answer Prompts  **
    * In the **RSJ Path** field, verify that **[[RSJPATH]]** is showing.
    * In the **SYM Number** field, enter ```[[SI.SYM]]```.
    * In the **Episys Job** field, enter ```BATCHJOB.3```.
    * Verify that **Update First Match Only** is checked.
    * In the **Prompts** section, click **+ Add Item**.
      * In the **Prompt** field, enter ```Effective Date```
      * In the **Responce** field, enter ```[[$SCHEDULE DATEmm/dd/yyyy]]```
    * Click **Save**
  * In the **User ID** drop down, select **0/0**
  * Click **Save**.
16. Click the **Lock** icon to enter **Admin Mode**.
17. In the **Documentation** section, add some documentation.
18. In the **Frequency** section, add the **Example Mon-Sun-O** Frequency.
19. Click **Save**.
20. Click **Back**.

#### Create the RSJ Job

21. Select **Add Job** button in the side menu.
22. On the **Master Job Definition** screen,
  * In the **Name** field, enter ```RSJ BATCHJOB.3```.
  * In the **Job Type** drop down, select **UNIX**.
  * In the **Machine** drop down, select **SYMITAR**.
  * In the **Job Sub-Type** section, click the blue **Edit** button.
  * In the **Job Sub-Type** pop-up window, select **Episys: Run JobFile**
    * In the **RSJ Path** field, verify that **[[RSJPATH]]** is showing.
    * In the **SYM Number** field, enter ```[[SI.SYM]]```.
    * In the **Episys Job** field, enter ```BATCHJOB.3```.
    * Click **Save**
  * In the **User ID** drop down, select **0/0**
  * Click **Save**.
23. Click the **Lock** icon to enter **Admin Mode**.
24. In the **Documentation** section, add some documentation.
25. In the **Frequency** section, add the **Example Mon-Sun-O** Frequency.
26. Click **Save**.
27. Click **Back**.

#### Create the Reset Prompt Job

28. Select **Add Job** button in the side menu.
29. On the **Master Job Definition** screen,
  * In the **Name** field, enter ```Reset Prompt Job```.
  * In the **Job Type** drop down, select **UNIX**.
  * In the **Machine** drop down, select **SYMITAR**.
  * In the **Job Sub-Type** section, click the blue **Edit** button.
  * In the **Job Sub-Type** pop-up window, select **Episys: Answer Prompts  **
    * In the **RSJ Path** field, verify that **[[RSJPATH]]** is showing.
    * In the **SYM Number** field, enter ```[[SI.SYM]]```.
    * In the **Episys Job** field, enter ```BATCHJOB.3```.
    * Verify that **Update First Match Only** is checked.
    * In the **Prompts** section, click **+ Add Item**.
      * In the **Prompt** field, enter ```Effective Date```
      * In the **Responce** field, enter ```@```.
  * In the **User ID** drop down, select **0/0**
  * Click **Save**.
30. Click the **Lock** icon to enter **Admin Mode**.
31. In the **Documentation** section, add some documentation.
32. In the **Frequency** section, add the **Example Mon-Sun-O** Frequency.
33. Click **Save**.
34. Click **Back**.

#### Add Dependencies

35. In **Studio** utilizing the **drag and drop** method, add dependencies between the 3 jobs so they run in the following order:
  * Answer Prompt Job &rarr; RSJ BATCHJOB.3 &rarr; Reset Prompt Job
