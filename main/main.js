module.exports = function main(str) {
    var t0 = ['._.','|.|','|_|'];
    var t1 = ['...','..|','..|'];
    var t2 = ['._.','._|','|_.'];
    var t3 = ['._.','._|','._|'];
    var t4 = ['...','|_|','..|'];
    var t5 = ['._.','|_.','._|'];
    var t6 = ['._.','|_.','|_|'];
    var t7 = ['._.','..|','..|'];
    var t8 = ['._.','|_|','|_|'];
    var t9 = ['._.','|_|','..|'];
    for (j = 0; j < 3; j++)
    {
        for (i = 0; i < str.length; i++) 
        { 
            switch(str[i])
            {
                case "0":
                    t=t0[j];
                    break;
                case "1":
                    t=t1[j];
                    break;
                case "2":
                    t=t2[j];
                    break;
                case "3":
                    t=t3[j];
                    break;
                case "4":
                    t=t4[j];
                    break;
                case "5":
                    t=t5[j];
                    break;
                case "6":
                    t=t6[j];
                    break;
                case "7":
                    t=t7[j];
                    break;
                case "8":
                    t=t8[j];
                    break;
                case "9":
                    t=t9[j];
                    break;
            }
            console.log(t);
        }
        console.log("\n");
    }

