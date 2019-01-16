var temp;
      for (var  i = 1; i < arr.length; i++)
{
            for(var  j = i ; j > 0 ; j--)
            {
//  Swapping Code
               if(arr[j] < arr[j-1]){
                  temp = arr[j];
                  arr[j] = arr[j-1];
                  arr[j-1] = temp;
                }
      //  Swapping Code
            }
       }
