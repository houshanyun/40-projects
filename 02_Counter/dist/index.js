"use strict";
const count = document.querySelector('.count');
const btnGroups = document.querySelectorAll('.btn');
let c = Number(count.innerHTML);
const changeColor = (i) => {
    if (i > 0) {
        count.style.color = '#44bd32';
    }
    else if (i < 0) {
        count.style.color = '#e84118';
    }
    else {
        count.style.color = '#2f3640';
    }
};
for (let btn of btnGroups) {
    btn.addEventListener('click', () => {
        switch (btn.innerHTML) {
            case 'Decrease':
                c--;
                break;
            case 'Increase':
                c++;
                break;
            case 'Reset':
                c = 0;
                break;
            default:
                break;
        }
        changeColor(c);
        count.innerHTML = c.toString();
    });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE1BQU0sS0FBSyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFtQixDQUFBO0FBQ2hFLE1BQU0sU0FBUyxHQUFHLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQWtDLENBQUE7QUFFcEYsSUFBSSxDQUFDLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQTtBQUMvQixNQUFNLFdBQVcsR0FBRyxDQUFDLENBQVMsRUFBRSxFQUFFO0lBQ2hDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRTtRQUNULEtBQUssQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLFNBQVMsQ0FBQTtLQUM5QjtTQUFNLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRTtRQUNoQixLQUFLLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxTQUFTLENBQUE7S0FDOUI7U0FBTTtRQUNMLEtBQUssQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLFNBQVMsQ0FBQTtLQUM5QjtBQUNILENBQUMsQ0FBQTtBQUNELEtBQUssSUFBSSxHQUFHLElBQUksU0FBUyxFQUFFO0lBQ3pCLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsR0FBRyxFQUFFO1FBQ2pDLFFBQVEsR0FBRyxDQUFDLFNBQVMsRUFBRTtZQUNyQixLQUFLLFVBQVU7Z0JBQ2IsQ0FBQyxFQUFFLENBQUE7Z0JBQ0gsTUFBTTtZQUNSLEtBQUssVUFBVTtnQkFDYixDQUFDLEVBQUUsQ0FBQTtnQkFDSCxNQUFNO1lBQ1IsS0FBSyxPQUFPO2dCQUNWLENBQUMsR0FBRyxDQUFDLENBQUE7Z0JBQ0wsTUFBTTtZQUNSO2dCQUNFLE1BQU07U0FDVDtRQUNELFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQTtRQUNkLEtBQUssQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFBO0lBQ2hDLENBQUMsQ0FBQyxDQUFBO0NBQ0gifQ==