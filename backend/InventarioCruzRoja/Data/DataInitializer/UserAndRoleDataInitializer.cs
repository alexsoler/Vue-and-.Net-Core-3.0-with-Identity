using InventarioCruzRoja.Models;
using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace InventarioCruzRoja.Data.DataInitializer
{
    public class UserAndRoleDataInitializer
    {
        public static void SeedData(UserManager<ApplicationUser> userManager, RoleManager<IdentityRole> roleManager = null)
        {
            SeedRoles(roleManager);
            SeedUsers(userManager);
        }

        private static void SeedUsers(UserManager<ApplicationUser> userManager)
        {
            if (userManager.FindByEmailAsync("demo@localhost.com").Result == null)
            {
                ApplicationUser user = new ApplicationUser();
                user.UserName = "demo@localhost.com";
                user.Email = "demo@localhost.com";

                IdentityResult result = userManager.CreateAsync(user, "Password").Result;

                //if (result.Succeeded)
                //{
                //    userManager.AddToRoleAsync(user, "User").Wait();
                //}
            }
        }

        private static void SeedRoles(RoleManager<IdentityRole> roleManager)
        {
            //if (!roleManager.RoleExistsAsync("User").Result)
            //{
            //    IdentityRole role = new IdentityRole();
            //    role.Name = "User";
            //    IdentityResult roleResult = roleManager.
            //    CreateAsync(role).Result;
            //}


            //if (!roleManager.RoleExistsAsync("Admin").Result)
            //{
            //    IdentityRole role = new IdentityRole();
            //    role.Name = "Admin";
            //    IdentityResult roleResult = roleManager.
            //    CreateAsync(role).Result;
            //}
        }
    }
}
