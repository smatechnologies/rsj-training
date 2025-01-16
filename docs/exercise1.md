---
sidebar_label: 'Exercise 1'
---

# RSJ Exercise 1

## Exercise 1: Architecture Set-up

## Objective

To define a new UNIX agent and path to RSJ.

## Summary

Define a new UNIX Agent called Symitar and define a new Global Property with the path to where RSJ would be installed.

## Instructions

#### Adding the Machine

1. In **Library** > **Administration**, select **Agents**.
2. Click the **Add** button.
  * In the **Name** field, enter ```SYMITAR```.
  * In the **Documentation** field, enter in some documentation.
    * _Example: This machine will run all the Symitar jobs._
  * In the **Type** drop-down list, select **UNIX**.
3. Click **Save**.

#### Define the General Settings

4. Expand the **General Settings** section.
  * In the **IP Address** field, enter in the IP Address assigned to you by the instructor.
  * In the **Socket Number** field, enter the port number ```3100```.

#### Define the Communication Settings

5. Expand the **Communication Settings** section.
  * In the **JORS Port Number** field, enter ```3110```.

#### Define the File Transfer Settings

6. Expand the **File Transfer Settings** section.
  * In the **File Transfer Role** field, select **Both** from the drop down menu.
  * In the **File Transfer Port Number (Non-TLS)** field, enter ```3110```.
  * In the **Support non-TLS for SMAFT Agent Communications** field, select **True** from the drop down menu.
  * In the **Support non-TLS for SMAFT Server Communications** field, select **True** from the drop down menu.
  * Click **Save**.
7. Close **Operations**.

:::info

We are **NOT** going to start communication to this agent. This is because we do not have a SYMITAR machine in this environment. All the jobs that we are going to be creating are for educational purposes but will not be ran in this environment.

:::

#### Define RSJ Global Property

8. In the **Library** > **Administration**, select **Global Properties**.
9. Click the **Add** button.
  * In the **Name** field, enter ```RSJPATH```.
  * In the **Value** field, enter ```/ops/bin```.
  * Add this **Documentation** to the Global Property
    * _Example: This Global Property stores the path to where RSJ is installed on the SYMITAR Host._
  * Click the **Save** button.
10. Close **Library**.

