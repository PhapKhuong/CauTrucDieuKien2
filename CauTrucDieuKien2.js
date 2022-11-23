function calAreaSquare()
    {
        let l = +document.getElementById('input_3').value;
        let areaSquare = l ** 2;
        document.getElementById('result_3').innerText = "Diện tích hình vuông là: " + areaSquare;
    }

function calAreaRec()
    {
        let w = +document.getElementById('input1_4').value;
        let h = +document.getElementById('input2_4').value;
        let areaRec = w * h;
        document.getElementById('result_4').innerText = "Diện tích hình chữ nhật là: " + areaRec;
    }

function calAreaTri()
    {
        let w = +document.getElementById('input1_5').value;
        let h = +document.getElementById('input2_5').value;
        let areaTri = w * h * 0.5;
        document.getElementById('result_5').innerText = "Diện tích hình tam giác vuông là: " + areaTri;
    }

function solveEquation1()
    {
        let a = +document.getElementById('input1_6').value;
        let b = +document.getElementById('input2_6').value;
        let x;

        if (a === 0)
            {
                if (b === 0) document.getElementById('result_6').innerText = "Phương trình vô số nghiệm";
                else document.getElementById('result_6').innerText = "Phương trình vô nghiệm";
            }

        else
            {
                x = -b/a;
                document.getElementById('result_6').innerText = "Nghiệm của phương trình là: " + x;
            }
            
    }

function solveEquation2()
    {
        let a = +document.getElementById('input1_7').value;
        let b = +document.getElementById('input2_7').value;
        let c = +document.getElementById('input3_7').value;
        let delta;

        if (a === 0)
            {
                if (b === 0)
                    {
                        if (c === 0) document.getElementById('result_7').innerText = "Phương trình vô số nghiệm";
                        else document.getElementById('result_7').innerText = "Phương trình vô nghiệm";
                    }
                else 
                    {
                        document.getElementById('result_7').innerText = "Phương trình có 1 nghiệm là: " + -c/b;
                    }
            }
        else
            {
                delta = b**2 - 4*a*c;
                if (delta < 0) document.getElementById('result_7').innerText = "Phương trình vô nghiệm";
                else if (delta === 0) document.getElementById('result_7').innerText = "Phương trình có 1 nghiệm là: " + -b/(2*a);
                else document.getElementById('result_7').innerText = "Phương trình có 2 nghiệm là: " + (-b+delta**0.5)/(2*a) + " và " + (-b-delta**0.5)/(2*a);
            }
    }

function test()
    {
        let age = +document.getElementById('input_8').value;
        if (age > 0 && age < 120) document.getElementById('result_8').innerText = "Đây là tuổi của một người";
        else document.getElementById('result_8').innerText = "Đây không phải là tuổi của một người";
    }


function isTri()
    {
        let a = +document.getElementById('input1_9').value;
        let b = +document.getElementById('input2_9').value;
        let c = +document.getElementById('input3_9').value;
        let t1, t2, t3;
        
        if (a > 0 && b > 0 && c > 0)
            {
                t1 = a + b - c;
                t2 = a + c - b;
                t3 = b + c - a;
                if (t1 > 0 && t2 > 0 && t3 > 0) document.getElementById('result_9').innerText = "Đây là chiều dài 3 cạnh của một tam giác";
                else document.getElementById('result_9').innerText = "Đây không phải chiều dài 3 cạnh của một tam giác";
            }
        else document.getElementById('result_9').innerText = "Đây không phải chiều dài 3 cạnh của một tam giác";
    }


function money()
    {
        let amount = +document.getElementById('input_10').value;
        const p1 = 1678;
        const p2 = 1734;
        const p3 = 2014;
        const p4 = 2536;
        const p5 = 2834;
        const p6 = 2927;
        let payment;

        if (amount <= 50) payment = p1 * amount;
        else if (amount <= 100) payment = p1 * 50 + p2 * (amount - 50);
        else if (amount <= 200) payment = p1 * 50 + p2 * 50 + p3 * (amount - 100);
        else if (amount <= 300) payment = p1 * 50 + p2 * 50 + p3 * 100 + p4 * (amount - 200);
        else if (amount <= 400) payment = p1 * 50 + p2 * 50 + p3 * 100 + p4 * 100 + p5 * (amount - 300);
        else  payment = p1 * 50 + p2 * 50 + p3 * 100 + p4 * 100 + p5 * 100 + p6 * (amount - 400);

        document.getElementById('result_10').innerText = "Số tiền cần phải thanh toán là: " + payment + " đồng";
    }

function individual()
    {
        let taxIncome = +document.getElementById('input_11').value;
        const t1 = 0.05;
        const t2 = 0.1;
        const t3 = 0.15;
        const t4 = 0.2;
        const t5 = 0.25;
        const t6 = 0.3;
        const t7 = 0.35;
        let ind;

        if (taxIncome <= 5000000) ind = t1 * taxIncome;
        else if (taxIncome <= 10000000) ind = t2 * taxIncome - 250000;
        else if (taxIncome <= 18000000) ind = t3 * taxIncome - 750000;
        else if (taxIncome <= 32000000) ind = t4 * taxIncome - 1650000;
        else if (taxIncome <= 52000000) ind = t5 * taxIncome - 3250000;
        else if (taxIncome <= 80000000) ind = t6 * taxIncome - 5850000;
        else ind = t7 * taxIncome - 9850000;

        document.getElementById('result_11').innerText = "Thuế thu nhập cá nhân phải đóng là: " + ind + " đồng";
    }

function interestRate()
    {
        let c = +document.getElementById('input1_12').value;
        let m = +document.getElementById('input2_12').value;
        let ir = +document.getElementById('input3_12').value;
        let fv = c * (1 + ir)**m - c;

        document.getElementById('result_12').innerText = "Số tiền lãi là: " + fv + " đồng";
    }