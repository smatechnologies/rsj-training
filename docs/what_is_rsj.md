---
sidebar_label: 'What is RSJ?'
---

# What is RSJ?

* Stands for ‘Run Symitar Job’
* Is a connector that is run via a UNIX Agent on a Symitar Host
* Allows CUs and CUSOs to automate running Symitar Batch Files
* Provides the ability to Multi-Thread processes

## Single versus Multi-Thread

* RSJ defaults to single threaded mode, meaning only one job can run at a time.
* RSJ allows users the ability to run multiple Batch Files at one time.
* Multi-Threaded will is not available when and EditFile is specified.
* Multi-Threaded will block the EditFile directory from being used while multiple jobs are executing. 