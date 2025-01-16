---
sidebar_label: 'FTP All Reports in List'
---

# Episys: FTP all Reports in List

* Calls an RSJ Utility called **optical_transfer**
* Takes a list of SEQ numbers and transfers them to another server in one transfer.
* This list is created by a special Symitar repgen that prints just SEQ numbers to an output file.
* FTP must be enabled in order for this utility to work.

### Sub-Type

![](../static/imgbasic/ftpallreportsinlist.png)

* **RSJ Path:** Defines the path to the directory on the UNIX Machine where the RSJ programs are installed.
* **SYM Number:** Defines the Episys "SYM" where the control file resides. The value should be a three-digit number or an OpCon token that resolves to a three-digit number.
* **Report Name:** Defines the name of the report whose sequence number is of interest.
* **FTP User:** Defines the name of the user which the files will be "FTPed" as.
* **FTP Password:** Defines the FTP User's Password. Some special characters have a special meaning to the UNIX shell and may be converted by the shell into other strings (such as '*'). These characters must be 'escaped' with a backslash.
* **Destination Host Name:** Defines the name of the Server the files will be sent to.
* **Port Number:** Defines the FTP Port number to use.
* **Destination Folder:** Defines the directory to place the files on the destination Host machine.
* **Extension:** Defines the optional parameter used to give the reports an extension.

:::tip Best Practice

It is recommened that the values for RSJ Path, SYM Number, FTP User, and FTP Password fields reference Global or Schedule Properties with the appropriate values. 

* **PATH_RSJ** = ```/ops/bin/```
* **SI.SYM** = ```000```
* **FTP_User** = FTP User Name
* **FTP_Password** = FTP User's Password (can be encrypted)

:::

