
# Signal Conditioning 
Signal conditioning refers to operations performed on signals to covert them to a forum suitable for interfacing with other elements in the process-control loop. 
- A sensor measures a variable by converting information about that variable into development signal of either or pneumatic nature.
- Signal conditioning is a process of data acquisition, and an instrument called a signal conditioner is used to perform this process. This instrument converts one type of electrical or mechanical signal (input-signal) into another (output-signal).  The purpose is to amplify and convert this signal into an easy to read and compatible form for data-acquisition or machine-control. A signal conditioner helps to provide precise measurements, which are essential for accurate data acquisition and machine-control. These instruments can perform an additional number of different functions.

## Functions of a Signal Conditioner

### Signal Conversion
 
- The main function of a signal conditioner is to pick up the signal and convert it into a higher level of electrical signal. Signal conversion is often used by industrial applications that use a wide range of sensors to perform measurements. Due to the different sensors being employed, the signals generated may need to be converted to be usable for the instruments they are connected too. Any sensor signal is capable of being converted to any standard process signal.

### Linearization
 
- Certain signal conditioners can perform linearization when the signals produced by a sensor do not have a straight-line relationship with the physical measurement. This is the process of interpreting the signal from the software and it is common for thermocouple signals. This method is used to reach higher accuracy because every sensor is not completely linear. The parameters for the linearization are evaluated during the sensor-calibration and mentioned in the calibration protocol of the sensor.

### Amplifying
 
- The next step is signal amplification and the process of increasing the signal for processing or digitization. There are two ways that signal amplification can be performed; by increasing the resolution of the input signal, or by increasing the signal-to-noise ratio. Signal conditioning uses a range of different amplifiers for different purposes, including instrumentation amplifiers, which are optimised for use with DC signals, and are characterized by high input impedance, high common mode rejection ratio (CMRR), and high gain. Another example of a signal conditioner used for amplification would be an isolation amplifier, which is designed to isolate high DC levels from the device while passing small AC or differential signal.

### Filtering
 
- Another important function of a signal conditioner is filtering and this is where the signal frequency spectrum is filtered to only include the valid data and block any noise. The filters can be made from either passive and active components or digital algorithms. A passive filter only uses capacitors, resistors, and inductors with a maximum gain of one. An active filter uses passive components in addition to active components such as operational amplifiers and transistors. State-of-the-art signal conditioners use digital filters because they are easy to adjust and no hardware is required.  A digital filter is a mathematical filter used to manipulate a signal, such as blocking or passing a particular frequency range. They use logic components such as ASICs, FPGAs or in the form of a sequential program with a signal processor.

### Evaluation and Smart-functions
 
- To provide additional benefits for the user and the process, modern signal conditioners have extra functions for signal evaluation and measurement data preprocessing. This helps to monitor and evaluate warning and alarms directly via an electrical switching output rapidly. Additional Smart-functions like an internal calculated channel can handle mathematical functions, like adding of sensor-signals, up to technological operations like a PID-controller. These functions help to get a fast reacting system and reduce the load from the machine control.  

### Interfaces
 
- Signal converters have to transmit the sensor signals via standard interfaces and protocols to the machine control. These interfaces can be analog or digital. Common analog interfaces are voltage (+/-10V) or current signals (+/-20mA) which are easy to handle but every signal needs separate wiring. Modern digital interfaces are designed as Ethernet-based bus interfaces (Profinet, EtherCAT, Ethernet/IP) and allow the connection of several components with only one wire. This reduces the wiring and also allows additional information to be transmitted, such as diagnostic information of the components, which is very important for reducing downtimes and speed up maintenance.

 
 