---
sidebar_label: 'SMA_DEFAULTS'
---

# SMA_DEFAULTS

## What is the SMA_DEFAULTS file?

* Is stored in /SYM/SYM###/BATCH
* Needs to be in every SYM that RSJ runs jobs in
* Holds all of the settings that should be applied to EVERY job ran via RSJ
* Is always printed in the Job Output of EVERY RSJ job
* All of the settings can be placed as a Comment in the Batch File as well

:::danger

This file will be read and executed for all job files to be run. Make sure that reasonable/wanted values are set for error processing. To override these defaults for a single job, you will need to place the desired error processing commands at the start of the job file.

:::

:::tip Best Practice

In the ***SMA_DEFAULTS** files, define the following settings for RSJ:
* Create Reports Links
* Error Levels
* Max Exceptions
* Java Home Directive

:::

## Popular Settings

### CREATE_OPCON_REPORTS_LINKS 

* The default value is "true.”
* This will create symbolic links to Batch Outputs in the opcon_reports directory
* If set to false, symbolic links to Batch Outputs in the opcon_reports directory will NOT be created

#### Syntax

* ```;CREATE_OPCON_REPORTS_LINKS true|false```

### ERROR_LEVELS

* The codes set will cause the RSJ to stop processing the Batch File (nested or not)
* Can be set as a Comment in the Batch File and will override what is in the SMA_DEFAULT file.

#### Syntax

* ```;ERROR_LEVEL <Symitar Exit Codes>```

### MAX_EXCEPTIONS

* The default is 0
* Is the maximum number of exceptions pages that are allowed
* If the number of exception pages goes over this limit, the job will be terminated

#### Syntax

* ```;MAX_EXCEPTIONS #```

### JAVA_HOME

* Can only be set in the SMA_DEFAULTS file
* Points to where Java lives on the host

#### Syntax

* ```;JAVA_HOME <path to java>```

### MINUTES_TO_WAIT_FOR_EDITFILE

* The default is 10 minutes
* If the job to be executed requires an EDITFILE but  an EDITFILE exists, RSJ will wait
* If the time elapses RSJ will move the file into a temporary location as a form of backup

#### Syntax

* ```; MINUTES_TO_WAIT_FOR_EDIT_FILE #```


:::note Example of an SMA_DEFAULTS File

```
;CREATE_OPCON_REPORTS_LINKS false
;ERROR_LEVEL 1-4,6,10-13
;MAX_EXCEPTIONS 999999
;JAVA_HOME "/usr/java7"
;MINUTES_TO_WAIT_FOR_EDITFILE 15
```

:::