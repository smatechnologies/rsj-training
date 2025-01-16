---
sidebar_label: 'Exercise 6'
---

# RSJ Exercise 6

## Exercise 6: FTP All Reports in List

## Objective

To define an FTP All Reports in List job.

## Summary

Create a job that will transfer all the reports that are generated when the GN.DAILY batch file is executed.

## Instructions

#### Create Properties

1. In the **Library** > **Administration**, select **Global Properties**.
2. Click the **Add** button.
  * In the **Name** field, enter ```USER_SYMFTP```.
  * In the **Value** field, enter ```root```.
  * Add this **Documentation** to the Global Property
    * _Example: This property is used to supply the username for the FTP All Reports in List job._
  * Click the **Save** button.
3. Click the **Add** button.
  * In the **Name** field, enter ```PWD_SYMFTP```.
  * In the **Value** field, enter ```opconxps```.
  * Add this **Documentation** to the Global Property
    * _Example: This property is used to supply the password for the FTP All Reports in List job._
  * Check the **Encryption** check box.
  * Click the **Save** button.
4. Close **Library**.

#### Locate the Schedule

5. Open **Studio**,
6. Select **Single Threaded RSJ Schedule** in the **Schedule List**,
7. Click **View**.

#### Define the LookFor job

8. In the side panel on the right, select **Add Job**.
9. On the **Master Job Definition** screen,
  * In the **Name** field, enter ```SEQ BATCHJOB.2 REPORT```.
  * In the **Job Type** drop down, select **UNIX**.
  * In the **Machine** drop down, select **SYMITAR**.
  * In the **Job Sub-Type** section, click the blue **Edit** button.
  * In the **Job Sub-Type** pop-up window, select **Episys: Find Report from RSJ Output**
    * In the **RSJ Path** field, verify that **[[RSJPATH]]** is showing.
    * In the **SYM Number** field, enter ```[[SI.SYM]]```.
    * In the **Episys Job** field, enter ```BATCHJOB.2```.
    * In the **Report Name** field, enter ```"BATCHJOB.2 REPORT"```
    * In the **Property Name** field, enter ```"SEQ_BATCHJOB.2 REPORT"```
    * In the **MSGIN Directory** field, enter ```[[PATH_UNIXMSGIN]]```.
    * In the **OpCon User ID** field, enter ```[[USER_SEQ_Jobs]]```.
    * In the **External Event Password** field, enter ```[[PWD_SEQ_Jobs]]```.
      * _NOTE: It will show as a masked value._
  * In the **User ID** drop down, select **0/0**
  * Click **Save**.
10. Click the **Lock** icon to enter **Admin Mode**.
11. In the **Documentation** section, add some documentation.
12. In the **Frequency** section, add the **Example Mon-Sun-O** Frequency.
13. In the **Job Dependency** section,
  * Click the green **+** button.
  * In the **Job** field, select **RSJ BATCHJOB.2**.
  * Click **Save**.
14. Click **Save**.
15. Click **Back**.

#### Define the FTP All Reports in List Job

16. In the side panel on the right, select **Add Job**.
17. On the **Master Job Definition** screen,
  * In the **Name** field, enter ```FTP REPORTS BATCHJOB.2```.
  * In the **Job Type** drop down, select **UNIX**.
  * In the **Machine** drop down, select **SYMITAR**.
  * In the **Job Sub-Type** section, click the blue **Edit** button.
  * In the **Job Sub-Type** pop-up window, select **Episys: FTP all Reports in List**
    * In the **RSJ Path** field, verify that **[[RSJPATH]]** is showing.
    * In the **SYM Number** field, enter ```[[SI.SYM]]```.
    * In the **Report Name** field, enter ```"/SYM/SYM[[SI.SYM]]/REPORT/[[SEQ_BATCHJOB.2 REPORT]]"```
    * In the **FTP User** field, enter ```[[USER_SYMFTP]]```
    * In the **FTP Password** field, enter ```[[PWD_SYMFTP]]```
    * In the **Destination Host Name** field, enter ```SMATRAINING```
    * In the **Port Number** field, verify that **21** is showing.
    * In the **Destination Folder** field, enter ```C:/Temp/```
    * In the **Extension** field, enter ```.txt```.
  * In the **User ID** drop down, select **0/0**
  * Click **Save**.
18. Click the **Lock** icon to enter **Admin Mode**.
19. In the **Documentation** section, add some documentation.
20. In the **Frequency** section, add the **Example Mon-Sun-O** Frequency.
21. In the **Job Dependency** section,
  * Click the green **+** button.
  * In the **Job** field, select **SEQ BATCHJOB.2 REPORT**.
  * Click **Save**.
22. Click **Save**.
23. Click **Back**.