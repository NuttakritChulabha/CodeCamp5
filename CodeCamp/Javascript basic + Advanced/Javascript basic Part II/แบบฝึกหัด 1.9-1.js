// 1.9.  แบบฝึกหัด
// 1. คำสั่งต่อไปนี้จะแสดงค่าเป็นอะไร

            alert( null || 2 || undefined );                //  alert(2)
            alert( alert(1) || 2 || alert(3) );             //  ทำ alert(1) และจบที่ alert(2)
            alert( 1 && null && 2 );                        //  alert(null) 
            alert( alert(1) && alert(2) );                  //  ทำ alert(1) และจบที่ undefined
            alert( null || 2 && 3 || 4 );                   //  alert(3)