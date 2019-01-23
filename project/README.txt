***************************ABOUT THE PROJECT********************************
This project was written in plain Javascript, HTML, and CSS. 
For the 'backend', the XMLHTTPRequest library was used to communicate with the 
USPS API and retrieve the information needed to validate addresses. 
****************************************************************************

***************************HOW TO RUN CODE********************************
To run this code, simply make sure you are connected to the internet, 
and double click to open the index.html file. 

Enter the information you want to validate within the text boxes and click the 
submit button and you should see a response. Depending on what you input will 
determine what the API returns. 
***************************************************************************

***************************SAMPLE OUTPUTS**********************************
Inside the SampleOutputs folder, you will see screenshots of some test cases
that we ran ourselves.  

-----------------------------------
screenshot1.png 

INPUT:
Street: Address: one infinite loop 
City: cupertino 
State: california 
Zip Code: 95014

OUTPUT: 
1 INFINITE LOOP CUPERTINO CA, 95014

PURPOSE: Tested that a correct address 
would return a correct response. 
-----------------------------------
screenshot2.png 
INPUT:
Street Address: <script>
City: cupertino 
State: california 
Zip Code: 95014

OUTPUT: 
XML Syntax Error: Please check the XML request to see if it can be parsed.(B) USPSCOM::DoAuth

PURPOSE: Tested that entering <script>
would return Syntax Error message.  
------------------------------------
screenshot3.png

INPUT:
Street: Address: one infinine loop 
City: cupertino 
State: california 
Zip Code: 95014

OUTPUT: 
Address Not Found. clsAMS

PURPOSE: Tested that a completely
incorrect address would return
address not found message. 
-------------------------------------
screenshot4.png

INPUT:
Street: one infinite loop
City: cupertino
State: texas
Zip Code: 95014

OUTPUT: 
1 INFINITE LOOP CUPERTINO CA, 95014

PURPOSE: Tested that a slighty incorrect
address would return a corrected response. 
-------------------------------------

***************************************************************************
