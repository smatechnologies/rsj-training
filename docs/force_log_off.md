---
sidebar_label: 'Force Logoff'
---

# ForceLogOff

* **ForceLogOff** will automatically log off any users that are logged into a specific SYM.

### ForceLogOff Syntax

```/ops/bin/ForceLogOff SYM###```

| Parameter |	Required / Optional | Description |
| --- | --- | --- |
| ### | Required | Defines the Episys "SYM" where the control file resides. The value should be a three-digit number or an OpCon token that resolves to a three-digit number. |

:::tip Best Practice

* To put a version of this job in GOODNIGHT.

* In the Start Image: ```/ops/bin/ForceLogOff 000```
:::

:::caution

**If user(s) are running any Episys jobs interactively, running this command can lock up the database requiring a reload of the sym.**
:::