// components/admin/adminnavbar.jsx
import React from 'react';
import { VStack, Text, Link, HStack } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';
import { RiFunctionAddFill } from "react-icons/ri";
import { FaTableList } from "react-icons/fa6";

const AdminNavbar = () => {
  return (
    <VStack spacing={6} align="stretch">
      <Text fontSize="3xl" fontWeight="bold">MATRIC SERVICES</Text>


      <NavLink to="/admin/addworkshop">
      <HStack ><RiFunctionAddFill fontSize={'2rem'} /><Text fontSize="2xl">Add Projects</Text></HStack>
      </NavLink>

      <NavLink to="/admin/addproduct">
      <HStack ><FaTableList fontSize={'2rem'} /><Text fontSize="2xl">Add Product</Text></HStack>
      </NavLink>

      <NavLink to="/admin/projecttable">
      <HStack ><FaTableList fontSize={'2rem'} /><Text fontSize="2xl">Project Table</Text></HStack>
      </NavLink>
    </VStack>
  );
};

export default AdminNavbar;
