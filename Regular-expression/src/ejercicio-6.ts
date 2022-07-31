/**
 * Convertir ip a number
 * @param str1 
 * @returns 
 */
export function ipToNumber(str1: string): number {
  const array: string[] = str1.split(".");

  return (parseInt(array[0]) * Math.pow(256, 3)) + 
         (parseInt(array[1]) * Math.pow(256, 2)) +
         (parseInt(array[2]) * Math.pow(256, 1)) + 
         (parseInt(array[3]));
}

/* console.log(ipToNumber("1.0.0.0"));
console.log(ipToNumber("0.1.0.0"));
console.log(ipToNumber("0.0.1.0"));
console.log(ipToNumber("0.0.0.1")); */

/**
 * Rango entre 2 ip
 * @param str1 
 * @param str2 
 * @returns 
 */
export function ipsInRange(str1: string, str2: string): number {
  const ip1: number = ipToNumber(str1);
  const ip2: number = ipToNumber(str2);

  return Math.abs(ip2 - ip1);
}

/* console.log(ipsInRange("10.0.0.0", "10.0.0.50"));
console.log(ipsInRange("10.0.0.0", "10.0.1.0"));
console.log(ipsInRange("20.0.0.10", "20.0.1.0")); */

