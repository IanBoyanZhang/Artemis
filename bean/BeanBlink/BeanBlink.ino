/* 
  This sketch uses the Bean library to blink the on-board RGB LED. 
  
  Notes:
    - This is not a low-power sketch 
    - A Bean with a low battery might show a faint blue and green LED color
  
  This example code is in the public domain.
*/

static int8_t temp = 0;

void setup() {
  Serial.begin();
}

void loop() {
  int8_t newTemp = Bean.getTemperature();

  if (newTemp != temp)
  {
    temp = newTemp;
    Serial.print("Temparture is ");
    Serial.print(temp);
    Serial.println(" degrees Celsium");
  }
  // Turn the Bean's LED red
  Bean.sleep(1000);
}
