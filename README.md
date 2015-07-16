# syrinx

Web application status update dashboard

## patch management

syrinx enables patch management of deployed web applications including 

* grouping deployment environments
* tagging systems with an environment indicator (test, staging, production)
* listing applicable outstanding patches per system
* tracking number of days since a patch was released for a system
* tracking number of days left for deployment of patch based on rules

## rules management

syrinx enables rules to be applied for patch classifications and system environments including

* tagging patches with a classification or inheriting classification from patch release authority
* setting deadlines for applying patches (number of days) based on combination of environment type and patch classification

## reporting

syrinx enables proactive email and browser push notifications for

* patches due in the next 3 days
* patches due tomorrow
* overdue patches
* number of systems out of compliance

as well as a dashboard for on-demand reporting on system status