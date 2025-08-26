

document.getElementById("calcBtn").addEventListener("click", function() 
{
    let selection = document.getElementById("animal").value;
    
    let years = document.getElementById("years").value;
    let months = document.getElementById("months").value;
    let days = document.getElementById("days").value;

    let humanYears = 0;

    let totalYears = 0;
    totalYears += Number(years);
    totalYears += Number(months) / 12;
    totalYears += Number(days) / 365;

    if (selection == "dog")
    {
        if (totalYears <= 2) 
        {
            humanYears = totalYears * 12;
        } 
        else 
        {
            humanYears = 24 + (totalYears - 2) * 4.66;
        }
    }
    else if (selection == "cat")
    {
        if (totalYears <= 1) 
        {
            humanYears = 15 * totalYears;
        } 
        else if (totalYears <= 2) 
        {
            humanYears = 15 + (totalYears - 1) * 9;
        } 
        else 
        {
            humanYears = 24 + (totalYears - 2) * 3.29;
        }
    }
    else if (selection == "goldfish")
    {
        humanYears = totalYears * 6.15
    }
    else if (selection == "parakeet")
    {
        if (totalYears <= 1) 
        {
            humanYears = totalYears * 15;
        } 
        else if (totalYears <= 2) 
        {
            humanYears = 15 + (totalYears - 1) * 5;
        } 
        else 
        {
            humanYears = 20 + (totalYears - 2) * 4.61;
        }
    }
    else if (selection == "canary")
    {
        if (totalYears <= 1) 
        {
            humanYears = totalYears * 15;
        } 
        else if (totalYears <= 2) 
        {
            humanYears = 15 + (totalYears - 1) * 9;
        } 
        else 
        {
            humanYears = 24 + (totalYears - 2) * 4;
        }
    }
    else if (selection == "cockatiel")
    {
        if (totalYears <= 1) 
        {
            humanYears = totalYears * 15;
        } 
        else if (totalYears <= 2) 
        {
            humanYears = 15 + (totalYears - 1) * 9;
        } 
        else 
        {
            humanYears = 24 + (totalYears - 2) * 3.29;
        }
    }
    else if (selection == "rabbit")
    {
        if (totalYears <= 1) 
        {
            humanYears = totalYears * 16;
        } 
        else if (totalYears <= 2) 
        {
            humanYears = 16 + (totalYears - 1) * 8;
        } 
        else 
        {
            humanYears = 24 + (totalYears - 2) * 5.6;
        }
    }
    else if (selection == "hamster")
    {
        if (totalYears <= 1) 
        {
            humanYears = totalYears * 19;
        } 
        else if (totalYears <= 2) 
        {
            humanYears = 19 + (totalYears - 1) * 5;
        } 
        else 
        {
            humanYears = 24 + (totalYears - 2) * 22.4;
        }
    }
    else if (selection == "gp")
    {
        if (totalYears <= 1) 
        {
            humanYears = totalYears * 18;
        } 
        else if (totalYears <= 2) 
        {
            humanYears = 18 + (totalYears - 1) * 6;
        } 
        else 
        {
            humanYears = 24 + (totalYears - 2) * 10.18;
        }
    }
    else if (selection == "turtle")
    {
        if (totalYears <= 1) 
        {
            humanYears = totalYears * 7;
        } 
        else if (totalYears <= 2) 
        {
            humanYears = 7 + (totalYears - 1) * 7;
        } 
        else 
        {
            humanYears = 14 + (totalYears - 2) * 2.64;
        }
    }
    else if (selection == "bf")
    {
        if (totalYears <= 1) 
        {
            humanYears = totalYears * 20;
        } 
        else if (totalYears <= 2) 
        {
            humanYears = 20 + (totalYears - 1) * 8;
        } 
        else 
        {
            humanYears = 28 + (totalYears - 2) * 14.85;
        }
    }
    else if (selection == "angelfish")
    {
        if (totalYears <= 1) 
        {
            humanYears = totalYears * 15;
        } 
        else if (totalYears <= 2) 
        {
            humanYears = 15 + (totalYears - 1) * 9;
        } 
        else 
        {
            humanYears = 24 + (totalYears - 2) * 5.09;
        }
    }
    else if (selection == "cockatoo")
    {
        if (totalYears <= 1) 
        {
            humanYears = totalYears * 15;
        } 
        else if (totalYears <= 2) 
        {
            humanYears = 15 + (totalYears - 1) * 9;
        } 
        else 
        {
            humanYears = 24 + (totalYears - 2) * 1.01;
        }
    }
    else if (selection == "macaw")
    {
        if (totalYears <= 1) 
        {
            humanYears = totalYears * 15;
        } 
        else if (totalYears <= 2) 
        {
            humanYears = 15 + (totalYears - 1) * 9;
        } 
        else 
        {
            humanYears = 24 + (totalYears - 2) * 1.01;
        }
    }
    else if (selection == "lovebird")
    {
        if (totalYears <= 1) 
        {
            humanYears = totalYears * 15;
        } 
        else if (totalYears <= 2) 
        {
            humanYears = 15 + (totalYears - 1) * 9;
        } 
        else 
        {
            humanYears = 24 + (totalYears - 2) * 4.14;
        }
    }
    else if (selection == "chinchilla")
    {
        if (totalYears <= 1) 
        {
            humanYears = totalYears * 15;
        } 
        else if (totalYears <= 2) 
        {
            humanYears = 15 + (totalYears - 1) * 9;
        } 
        else 
        {
            humanYears = 24 + (totalYears - 2) * 4.48;
        }
    }
    else if (selection == "ferret")
    {
        if (totalYears <= 1) 
        {
            humanYears = totalYears * 15;
        } 
        else if (totalYears <= 2) 
        {
            humanYears = 15 + (totalYears - 1) * 9;
        } 
        else 
        {
            humanYears = 24 + (totalYears - 2) * 6.22;
        }
    }
    else if (selection == "gerbil")
    {
        if (totalYears <= 1) 
        {
            humanYears = totalYears * 19;
        } 
        else if (totalYears <= 2) 
        {
            humanYears = 19 + (totalYears - 1) * 5;
        } 
        else 
        {
            humanYears = 24 + (totalYears - 2) * 16;
        }
    }
    else if (selection == "mouse")
    {
        if (totalYears <= 1) 
        {
            humanYears = totalYears * 19;
        } 
        else if (totalYears <= 2) 
        {
            humanYears = 19 + (totalYears - 1) * 5;
        } 
        else 
        {
            humanYears = 24 + (totalYears - 2) * 22.4;
        }
    }
    else if (selection == "rat")
    {
        if (totalYears <= 1) 
        {
            humanYears = totalYears * 19;
        } 
        else if (totalYears <= 2) 
        {
            humanYears = 19 + (totalYears - 1) * 5;
        } 
        else 
        {
            humanYears = 24 + (totalYears - 2) * 18.66;
        }
    }
    else if (selection == "lg")
    {
        if (totalYears <= 1) 
        {
            humanYears = totalYears * 12;
        } 
        else if (totalYears <= 2) 
        {
            humanYears = 12 + (totalYears - 1) * 6;
        } 
        else 
        {
            humanYears = 18 + (totalYears - 2) * 3.54;
        }
    }
    else if (selection == "bd")
    {
        if (totalYears <= 1) 
        {
            humanYears = totalYears * 18;
        } 
        else if (totalYears <= 2) 
        {
            humanYears = 18 + (totalYears - 1) * 6;
        } 
        else 
        {
            humanYears = 24 + (totalYears - 2) * 4.14;
        }
    }
    else if (selection == "cs")
    {
        if (totalYears <= 1) 
        {
            humanYears = totalYears * 12;
        } 
        else if (totalYears <= 2) 
        {
            humanYears = 12 + (totalYears - 1) * 6;
        } 
        else 
        {
            humanYears = 18 + (totalYears - 2) * 3.54;
        }
    }
    else if (selection == "bp")
    {
        if (totalYears <= 1) 
        {
            humanYears = totalYears * 12;
        } 
        else if (totalYears <= 2) 
        {
            humanYears = 12 + (totalYears - 1) * 6;
        } 
        else 
        {
            humanYears = 18 + (totalYears - 2) * 2.25;
        }
    }
    else if (selection == "tortoise")
    {
        if (totalYears <= 1) 
        {
            humanYears = totalYears * 15;
        } 
        else if (totalYears <= 2) 
        {
            humanYears = 15 + (totalYears - 1) * 9;
        } 
        else 
        {
            humanYears = 24 + (totalYears - 2) * 0.62;
        }
    }
    else if (selection == "frog")
    {
        if (totalYears <= 1) 
        {
            humanYears = totalYears * 12;
        } 
        else if (totalYears <= 2) 
        {
            humanYears = 12 + (totalYears - 1) * 8;
        } 
        else 
        {
            humanYears = 20 + (totalYears - 2) * 7.05;
        }
    }
    else if (selection == "salamander")
    {
        if (totalYears <= 1) 
        {
            humanYears = totalYears * 12;
        } 
        else if (totalYears <= 2) 
        {
            humanYears = 12 + (totalYears - 1) * 8;
        } 
        else 
        {
            humanYears = 20 + (totalYears - 2) * 3.42;
        }
    }
    else if (selection == "hc")
    {
        if (totalYears <= 1) 
        {
            humanYears = totalYears * 14;
        } 
        else if (totalYears <= 2) 
        {
            humanYears = 14 + (totalYears - 1) * 8;
        } 
        else 
        {
            humanYears = 22 + (totalYears - 2) * 4.64;
        }
    }
    else if (selection == "sg")
    {
        if (totalYears <= 1) 
        {
            humanYears = totalYears * 15;
        } 
        else if (totalYears <= 2) 
        {
            humanYears = 15 + (totalYears - 1) * 9;
        } 
        else 
        {
            humanYears = 24 + (totalYears - 2) * 4.48;
        }
    }
    else if (selection == "hedgehog")
    {
        if (totalYears <= 1) 
        {
            humanYears = totalYears * 20;
        } 
        else if (totalYears <= 2) 
        {
            humanYears = 20 + (totalYears - 1) * 10;
        } 
        else 
        {
            humanYears = 30 + (totalYears - 2) * 10;
        }
    }
    else if (selection == "axolotl")
    {
        if (totalYears <= 1) 
        {
            humanYears = totalYears * 15;
        } 
        else if (totalYears <= 2) 
        {
            humanYears = 15 + (totalYears - 1) * 9;
        } 
        else 
        {
            humanYears = 24 + (totalYears - 2) * 4.14;
        }
    }
    else if (selection == "kf")
    {
        if (totalYears <= 1) 
        {
            humanYears = totalYears * 12;
        } 
        else if (totalYears <= 2) 
        {
            humanYears = 12 + (totalYears - 1) * 8;
        } 
        else 
        {
            humanYears = 20 + (totalYears - 2) * 1.84;
        }
    }
    else if (selection == "sff")
    {
        if (totalYears <= 1) 
        {
            humanYears = totalYears * 20;
        } 
        else if (totalYears <= 2) 
        {
            humanYears = 20 + (totalYears - 1) * 15;
        } 
        else 
        {
            humanYears = 35 + (totalYears - 2) * 12.85;
        }
    }
    else if (selection == "agp")
    {
        if (totalYears <= 1) 
        {
            humanYears = totalYears * 12;
        } 
        else if (totalYears <= 2) 
        {
            humanYears = 12 + (totalYears - 1) * 8;
        } 
        else 
        {
            humanYears = 20 + (totalYears - 2) * 1.09;
        }
    }
    else if (selection == "ap")
    {
        if (totalYears <= 1) 
        {
            humanYears = totalYears * 12;
        } 
        else if (totalYears <= 2) 
        {
            humanYears = 12 + (totalYears - 1) * 8;
        } 
        else 
        {
            humanYears = 20 + (totalYears - 2) * 1.09;
        }
    }
    else if (selection == "conure")
    {
        if (totalYears <= 1) 
        {
            humanYears = totalYears * 15;
        } 
        else if (totalYears <= 2) 
        {
            humanYears = 15 + (totalYears - 1) * 9;
        } 
        else 
        {
            humanYears = 24 + (totalYears - 2) * 2.03;
        }
    }
    else if (selection == "finch")
    {
        if (totalYears <= 1) 
        {
            humanYears = totalYears * 15;
        } 
        else if (totalYears <= 2) 
        {
            humanYears = 15 + (totalYears - 1) * 9;
        } 
        else 
        {
            humanYears = 24 + (totalYears - 2) * 6.58;
        }
    }
    else if (selection == "cd")
    {
        if (totalYears <= 1) 
        {
            humanYears = totalYears * 15;
        } 
        else if (totalYears <= 2) 
        {
            humanYears = 15 + (totalYears - 1) * 9;
        } 
        else 
        {
            humanYears = 24 + (totalYears - 2) * 4.14;
        }
    }
    else if (selection == "pigeon")
    {
        if (totalYears <= 1) 
        {
            humanYears = totalYears * 15;
        } 
        else if (totalYears <= 2) 
        {
            humanYears = 15 + (totalYears - 1) * 9;
        } 
        else 
        {
            humanYears = 24 + (totalYears - 2) * 4.14;
        }
    }
    else if (selection == "budgerigar")
    {
        if (totalYears <= 1) 
        {
            humanYears = totalYears * 15;
        } 
        else if (totalYears <= 2) 
        {
            humanYears = 15 + (totalYears - 1) * 9;
        } 
        else 
        {
            humanYears = 24 + (totalYears - 2) * 6.22;
        }
    }
    else if (selection == "cockroach")
    {
        if (totalYears <= 1) 
        {
            humanYears = totalYears * 50;
        } 
        else if (totalYears <= 2) 
        {
            humanYears = 50 + (totalYears - 1) * 50;
        }
        else
        {
            humanYears = 100 + (totalYears - 2) * 50;
        }
    }
    else if (selection == "tarantula")
    {
        if (totalYears <= 1) 
        {
            humanYears = totalYears * 15;
        } 
        else if (totalYears <= 2) 
        {
            humanYears = 15 + (totalYears - 1) * 5;
        } 
        else 
        {
            humanYears = 20 + (totalYears - 2) * 2.66;
        }
    }
    else if (selection == "scorpion")
    {
        if (totalYears <= 1) 
        {
            humanYears = totalYears * 15;
        } 
        else if (totalYears <= 2) 
        {
            humanYears = 15 + (totalYears - 1) * 7;
        } 
        else 
        {
            humanYears = 22 + (totalYears - 2) * 8.28;
        }
    }
    else if (selection == "iguana")
    {
        if (totalYears <= 1) 
        {
            humanYears = totalYears * 15;
        } 
        else if (totalYears <= 2) 
        {
            humanYears = 15 + (totalYears - 1) * 5;
        } 
        else 
        {
            humanYears = 20 + (totalYears - 2) * 3.42;
        }
    }
    else if (selection == "gecko")
    {
        if (totalYears <= 1) 
        {
            humanYears = totalYears * 15;
        } 
        else if (totalYears <= 2) 
        {
            humanYears = 15 + (totalYears - 1) * 5;
        } 
        else 
        {
            humanYears = 20 + (totalYears - 2) * 4;
        }
    }
    else if (selection == "si")
    {
        if (totalYears <= 1) 
        {
            humanYears = totalYears * 50;
        } 
        else if (totalYears <= 2) 
        {
            humanYears = 50 + (totalYears - 1) * 50;
        } 
        else 
        {
            humanYears = 100 + (totalYears - 2) * 50;
        }
    }
    else if (selection == "pm")
    {
        humanYears = totalYears * 100
    }

    document.getElementById("resultText").innerHTML = humanYears.toFixed(2);
}
);
