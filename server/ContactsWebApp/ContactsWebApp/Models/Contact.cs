﻿
using System.ComponentModel.DataAnnotations;

namespace ContactsWebApp.Models
{
    public class Contact
    {
        [Key]
        private int _id;
        private string _firstName;
        private string _lastName;
        private string _phone;
        private string _address;
        private string _city;
        

        public Contact(int id, string firstName, string lastName, string phone, string address, string city)
        {
            _id = id;
            _firstName = firstName;
            _lastName = lastName;
            _phone = phone;
            _address = address;
            _city = city;
        }

        [Key]
        public int Id
        {
            get { return _id; }
            set { _id = value; }
        }

        public string FirstName
        {
            get { return _firstName; }
            set { _firstName = value; }
        }

        public string LastName
        {
            get { return _lastName; }
            set { _lastName = value; }
        }

        public string Phone
        {
            get { return _phone; }
            set { _phone = value; }
        }

        public string Address
        {
            get { return _address; }
            set { _address = value; }
        }

        public string City
        {
            get { return _city; }
            set { _city = value; }
        }

    }
}
