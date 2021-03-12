//Aflevering til d. 12.03.2021
//Benjamin Rasmus Albér Gerken
//Slotshaven gymnasium 2.r


//En lampe 


//først skal man lave classen

class Lamp {
  
  // stores the value for light
  // true if light is on
  // false if light is off
  boolean isOn;

  // metode for at tænde for lyset
  void turnOn() {
    isOn = true;
    System.out.println("Light on? " + isOn);

  }

  // metode for at slukke lyset
  void turnOff() {
    isOn = false;
    System.out.println("Light on? " + isOn);
  }
}

class Main {
  public static void main(String[] args) {

    // create objects led and halogen
    Lamp led = new Lamp();
    Lamp halogen = new Lamp();

    // turn on the light by
    // calling method turnOn()
    led.turnOn();

    // turn off the light by
    // calling method turnOff()
    halogen.turnOff();
  }
}
