---
sidebar_label: 'Architecture'
---

# Architecture

## UNIX Agent

* In order to use RSJ or the Sub-Types, you have to have a UNIX Agent installed on the host that is going to run your Symitar jobs.
* This Agent is defined in the DB with the name **SYMITAR**
* Most customer have an Agent installed on every Symitar Host in their environment.


## RSJ Install

* RSJ is a package of application that come as a tar file and untaring them on the host will install the package.
* RSJ is typically untared in the /ops/bin directory on the Host.


:::info

For this class, we are going to define a SYMITAR Agent and assume that we have a working host. We will also assume that RSJ is installed. All the jobs that we are going to be creating are for educational purposes but will not be ran in this environment.

:::

## Directory and File Structure

```
/usr
    /local
        /lsam
            /MSGIN
            ...
/ops
    /bin
        RSJ
        ...
/SYM 
    /SYM### 
        /BATCH 
            SMA_DATES.JOB 
            Some_job_name_1 
            ... 
            Some_job_name_n 
        /REPORT 
            00013 000177 000179 000180 000181            
        /opcon_reports
            Batch_Job_Name_1
                BATCH_OUTPUT.xxxxxx
                ...
            Batch_Job_Name_X
                BATCH_OUTPUT.xxxxxx
        /opcon_backups
            xxxxxx.tar
            xxxxxx.tar
        /LETTERSPECS
            SMA_DATES
        /DATAFILE
            FILE2
            ...
```