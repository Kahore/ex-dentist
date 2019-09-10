# Project requirements:
## Login, Registration, and Password-recovery
### Login Page 
*	~~It should provide an option for the user to choose what type of user (i.e., Dentist, Lab, Clinician) before entering their registered email and password for authentication.~~
*	~~It should provide a link to the Password-recovery page.~~
*	~~It should provide a link to the Register page if the user chooses "Dentist" as the user-type — otherwise, no need to show the link to the Register page.~~
* Integrate with firebase
###	Registration Page 
*	~~It should highlight to specify that the registration process is only for "Dentist" and NOT for "Lab" or "Clinicians" in a pleasant way.~~
*	~~It should show a link to the Login page. Something like "Already have an account? Login"~~
*	~~It should contain these fields for registration:~~
1.	~~First Name* (first_name)~~
2.	~~Last Name* (last_name)~~
3.	~~GDC Number* (gdc_number)~~
4.	~~Email Address* (email)~~
5.	~~Password* (password)~~
6.	~~Confirm Password* (confirm_password)~~
7.	~~Checkbox - I have read and accept the Terms of Service and Privacy Policy* (term_and_privacy_policy_acceptance)~~
* Integrate with firebase
###	Password-recovery Page 
*	~~It should show a blurb and a text field to enter their registered email address.~~
*	~~The blurb should say, "Enter your registered email address, and we will send an email with the instructions on resetting your password."~~
* Integrate with firebase
## Dentist Area
###	~~Navigation~~
*	~~Navigational items are Dashboard, Patients, Support, and My Account.~~
###	Dashboard 
*	It should display a message asking Dentists to add practices under their profile IF they haven't added already.
*	It should display stats area to show the stats for Total Cases, Cases Completed, Cases Inprogress, Cases Required Attention.
*	It should display Case Order Table
####	Case Order Table 
*	It should contain the following columns: 
1.	Order Date
2.	Patient Name
3.	ID
4.	Treatment
5.	Case Status
6.	Appointment Date
7.	Lab Slip - Icon which generates the lab slip for that case
*	It should provide a Search functionality. So that the Dentist can search a string across all the column data.
*	It should have the ability to do pagination or lazy loading.
*	It should color-code each record in the table. So the Dentist can identify quickly whether the case requires attention from the Dentist or the Lab.
*	When a user clicks on a record, it takes them to the Order Page for that case.
###	Patients 
*	It should show a table with the list of patients
####	Patient table 
*	Table should contain the following columns: 
1.	Patient name (with profile picture)
2.	Treatment (Treatment which they are currently undergoing)
3.	Status
4.	Registration Date
5.	Practice Name
6.	Date of Birth
7.	Actions (Edit, Delete, Archive)
*	It should provide a Search functionality. So that the Dentist can search a string across all the column data.
*	It should also provide filters for All, In Treatment, Not In Treatment, Archived patients. 
*	It should have the ability to do pagination or lazy loading.
*	It should provide a button to add a New Patient. Upon clicking the button, a pop-up window appears, where the Dentist can enter the patient details.
*	When the Dentist clicks on a Patient record, it should take them to the Patient Page.
*	Upon clicking the Edit action, a pop-up window appears similar to the New Patient, where the Dentist can update the patient details.
*	Delete, and Archive action will result in a confirmation pop-up, where the Dentist has to confirm to complete the requested action.
####	New/Edit Patient Pop-up Window 
*	It should contain the following fields: 
1.	First Name* (first_name)
2.	Last Name* (last_name)
3.	Date Of Birth* (date_of_birth)
4.	Email Address* (email)
5.	Gender* (gender)
6.	Profile Picture* - File field (profile_picture)
7.	Practice Centre* - Dropdown with list of practices (practice_centre_id)
###	Patient Page 
*	It should show the Patient details.
*	It should provide a link to edit Patient profile (pop-up).
*	It should provide a link to Add/Edit Clinical Notes (pop-up with a text-area)
*	It should show a table, which contains the details for the Patient's past treatments. When the Dentist clicks on a record, it should take them to the Case Details Page of that treatment.
*	It should show all the available treatments [Design, Refine, Align, Direct, and In-Direct] that apply to the Patient. When the Dentist clicks on a treatment, it should take them to the Case Order Page for that treatment.
###	Case Order Page 
*	It should show the Patient details.
*	It should provide a link to edit Patient profile (pop-up).
*	It should provide a link to Add/Edit Clinical Notes (pop-up with a text-area)
*	It should display the treatment specific form, where the Dentist will provide the details and submits the order for the case. Please note that the treatment form varies for Design, Refine, Align, Direct, and In-Direct treatments.
###	Case Details Page* - There are three versions of this page: A version for the Dentist, a version for the Lab Staff, and one for the Clinicians. 
*	It should show the Patient details.
*	It should provide a link to edit Patient profile (pop-up).
*	It should provide a link to Add/Edit Clinical Notes (pop-up with a text-area)
*	It should display the Case Order details which the Dentist has provided in the Case Order Page.
*	It should provide a way for the Dentist to specify the order status (Dropdown field with the list of order status)
*	It should provide a way for the Dentist to choose the user type that the case will need attention from (Dropdown field with Dentist and Lab Staff as the items).
*	It should provide a button to generate the lab slip document.
*	It should provide a comments section to record the communication between the Dentist and the Lab Staff.
*	Dentists and the Lab Staff should be able to attach files while adding a comment/note in the comment area.
*	It should contain a section with filters to display files uploaded in the comments area by the Dentist, Lab, and Clinician. Options for filters are All, Dentist, Lab, and Clinician. 
*	Thumbnails will represent files in the files area. Each thumbnail will contain a marker to identify the user type uploaded that file.
###	Support Page 
*	It should display a contact form for the Dentist to ask questions.
*	It should display Administration postal address, email, and telephone.
*	It should display Laboratory details - postal address, email, and telephone.
*	It should show the list of downloadable PDF forms.
*	It should display the instructional videos section.
*	It should display FAQ's section.
###	My Account 
*	It should provide functionality for the Dentist to update the personal details
*	It should provide a feature to update the password
*	It should provide a feature to manage the practices of the Dentist.
*	Practice should contain the following fields: 
1.	Practice Name* (name)
2.	Address Line 1* (address_line_1)
3.	Address Line 2 (address_line_2)
4.	City/Town* (city)
5.	State/Region* (region)
6.	Country* (country)
7.	Postcode* (postcode)
8.	Email* (email)
9.	Phone number* (phone)

## Lab-staff Area
###	Navigation 
*	Navigation items are Dashboard, Staffs, and My Account.
### Dashboard 
*	It should display lab-specific stats area to show the stats for Total Cases Orders, Cases Completed, Cases in Review, Sent to Practice, and Cases Required Attention.
*	It should display Case Order Table
####	Case Order Table 
*	It should contain the following columns: 
1.	Order Date
2.	Patient Name
3.	ID
4.	Treatment
5.	Case Status
6.	Appointment Date
7.	Lab Slip - Icon which generates the lab slip for that case
*	It should provide a Search functionality. So that the Lab Staff can search a string across all the column data.
*	It should provide filters for the following: 
1.	All active order
2.	All orders in review
3.	All orders assigned to the Dentist
4.	All orders assigned to the Lab
5.	All orders with clinician alert
*	It should have the ability to do pagination or lazy loading.
*	It should color-code each record in the table. So the Lab Staff can identify quickly whether the case requires attention from the Dentist or the Lab.
*	When a user clicks on a record, it takes them to the Case Details Page.
###	Case Details Page - Lab version 
*	It should show the Patient details.
*	It should provide a link to view Patient profile (pop-up).
*	It should provide a link to view Clinical Notes (pop-up)
*	It should display the Case Order details which the Dentist has provided.
*	It should provide a way for the Lab Staff to specify the order status (Dropdown field with the list of order status)
*	It should provide a way for the Lab Staff to choose the user type that the case will need attention from (Dropdown field with Dentist and Lab Staff as the items).
*	It should provide a button to generate the lab slip document.
*	It should provide a comments section to record the communication between the Dentist and the Lab Staff. 
*	Dentists and the Lab Staff should be able to attach files while adding a comment/note in the comment area.
*	It should also provide a comments section called internal notes to record the communication between the Lab Staff and the Clinician. 
*	Lab Staff and the Clinician should be able to attach files while adding a comment/note in the comment area.
*	It should contain a section with filters to display files uploaded in the comments area by the Dentist, Lab, and Clinician. Options for filters are All, Dentist, Lab, and Clinician. 
*	Thumbnails will represent files in the files area. Each thumbnail will contain a marker to identify the user type uploaded that file.
*	It should provide functionality to alert the Clinician.
###	Staffs Page 
*	It should only be visible to the Lab Admin
*	It should contain staffs table with the following columns: 
1.	First Name
2.	Last Name
3.	Email
4.	User Type (Admin/Staff)
5.	Status (Active/Inactive)
6.	Action (Edit, Delete)
*	Table should contain a simple Search functionality
*	The table should display a button to add New Staff (Pop-up).
###	My Account Page 
*	It should provide functionality for the Lab Staff to update the personal details
*	It should provide a feature to update the password

## Clinicians Area
###	Navigation 
*	Navigation items are Dashboard and My Account.
###	Dashboard 
*	It should display stats area to show the stats for Total Cases Orders, Cases Completed, Cases in progress, and Cases with Clinician Alert.
*	It should display Case Order Table
*	Case Order Table 
*	It should contain the following columns: 
1.	Order Date
2.	Patient Name
3.	ID
4.	Treatment
5.	Case Status
6.	Appointment Date
7.	Lab Slip - Icon which generates the lab slip for that case
*	It should provide a Search functionality. So that the Clinician can search a string across all the column data.
*	It should provide filters for the following: 
1.	All active order
2.	All orders in review
3.	All orders assigned to the Dentist
4.	All orders assigned to the Lab
5.	All orders with clinician alert
*	It should have the ability to do pagination or lazy loading.
*	When a user clicks on a record, it takes them to the Case Details Page.
###	Case Details Page - Similar to the Lab version 
*	It should show the Patient details.
*	It should provide a link to view Patient profile (pop-up).
*	It should provide a link to view Clinical Notes (pop-up)
*	It should display the Case Order details which the Dentist has provided.
*	It should provide a way for the Lab Staff to specify the order status (Dropdown field with the list of order status)
*	It should provide a way for the Lab Staff to choose the user type that the case will need attention from (Dropdown field with Dentist and Lab Staff as the items).
*	It should provide a button to generate the lab slip document.
*	It should display the communication between the Dentist and the Lab Staff.
*	It should also provide a comments section called internal notes to record the communication between the Lab Staff and the Clinician. 
*	Lab Staff and the Clinician should be able to attach files while adding a comment/note in the comment area.
*	It should contain a section with filters to display files uploaded in the comments area by the Dentist, Lab, and Clinician. Options for filters are All, Dentist, Lab, and Clinician. 
*	Thumbnails will represent files in the files area. Each thumbnail will contain a marker to identify the user type uploaded that file.
*	It should provide functionality to alert the Clinician.
###	My Account Page 
*	It should provide functionality for the Lab Staff to update the personal details
*	It should provide a feature to update the password 
