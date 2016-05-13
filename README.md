# Store Hour Formatting Exercise

## Purpose

The purpose of this problem is to dynamically reproduce the store hour display style that is commonly seen on the front door of businesses.


## Examples

### The basic example is when every day has a unique time

Monday: 1:00 - 5:00  
Tuesday: 2:00 - 5:00  
Wednesday: 3:00 -5:00  
...

### Then we want to group days together

Monday: 1:00 - 5:00  
Tuesday, Wednesday: 2:00 - 5:00  
...

But we shouldn't group days that aren't consecutive

Monday: 1:00 - 5:00  
Tuesday: 2:00 - 5:00  
Wednesday: 1:00 - 5:00  
...

### Multiple days get grouped diferently

Monday: 1:00 - 5:00  
Tuesday - Thursday: 2:00 - 5:00  
...

## Other further considerations

- Some days may be missing from the provided list
- The days may be out of order
- Some days may have a time range but be inactive
