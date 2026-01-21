

// import React from 'react';
// import {
//   Box,
//   Typography,
//   Button,
//   TextField,
//   Paper,
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TableRow,
//   IconButton,
//   InputAdornment,
//   Tooltip,
//   Chip
// } from '@mui/material';
// import AddIcon from '@mui/icons-material/Add';
// import SearchIcon from '@mui/icons-material/Search';
// import VisibilityIcon from '@mui/icons-material/Visibility';
// import EditIcon from '@mui/icons-material/Edit';
// import DeleteIcon from '@mui/icons-material/Delete';
// import BusinessIcon from '@mui/icons-material/Business';

// function Departments() {
//   return (
//     <Box sx={{ pt: 12, px: { xs: 2, md: 6 }, bgcolor: '#f8f9fa', minHeight: '100vh', pb: 6 }}>
      
//       {/* Page Header */}
//       <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
//         <Typography variant="h5" component="h1" sx={{ fontWeight: 'bold', color: '#2c3e50', display: 'flex', alignItems: 'center', gap: 1.5 }}>
//           <BusinessIcon color="primary" />
//           Departments
//         </Typography>
//         <Button 
//           variant="contained" 
//           startIcon={<AddIcon />} 
//           sx={{ 
//             borderRadius: '8px', 
//             textTransform: 'none', 
//             fontWeight: 'bold',
//             boxShadow: '0 4px 12px rgba(25, 118, 210, 0.2)'
//           }}
//         >
//           Add Department
//         </Button>
//       </Box>

//       {/* Search Bar */}
//       <Box sx={{ mb: 4 }}>
//         <TextField
//           placeholder="Search department..."
//           variant="outlined"
//           size="small"
//           sx={{ 
//             width: { xs: '100%', md: '350px' }, 
//             bgcolor: 'white',
//             '& .MuiOutlinedInput-root': { borderRadius: '10px' }
//           }}
//           InputProps={{
//             startAdornment: (
//               <InputAdornment position="start">
//                 <SearchIcon color="disabled" />
//               </InputAdornment>
//             ),
//           }}
//         />
//       </Box>

//       {/* Departments Table */}
//       <TableContainer component={Paper} sx={{ borderRadius: '12px', border: '1px solid #e0e0e0', boxShadow: 'none' }}>
//         <Table sx={{ minWidth: 700 }}>
//           <TableHead sx={{ bgcolor: '#f1f3f5' }}>
//             <TableRow>
//               <TableCell sx={{ fontWeight: 700, color: '#495057' }}>Department Name</TableCell>
//               <TableCell sx={{ fontWeight: 700, color: '#495057' }}>Institute Name</TableCell>
//               <TableCell sx={{ fontWeight: 700, color: '#495057' }}>Coordinator</TableCell>
//               <TableCell sx={{ fontWeight: 700, color: '#495057' }}>Contact</TableCell>
//               <TableCell align="center" sx={{ fontWeight: 700, color: '#495057' }}>Participants</TableCell>
//               <TableCell align="center" sx={{ fontWeight: 700, color: '#495057' }}>Actions</TableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             <DepartmentRow
//               name="Computer Engineering"
//               institute="Darshan University"
//               coordinator="Mr. Patel"
//               contact="comp@darshan.edu.in"
//               count="35"
//             />
//             <DepartmentRow
//               name="Mechanical Engineering"
//               institute="Marwadi University"
//               coordinator="Ms. Shah"
//               contact="mech@marwadi.edu.in"
//               count="25"
//             />
//             <DepartmentRow
//               name="Civil Engineering"
//               institute="LD College of Engineering"
//               coordinator="Dr. Mehta"
//               contact="civil@ldce.edu.in"
//               count="15"
//             />
//           </TableBody>
//         </Table>
//       </TableContainer>
//     </Box>
//   );
// }

// /* Reusable Row Component */
// function DepartmentRow({ name, institute, coordinator, contact, count }) {
//   return (
//     <TableRow hover sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
//       <TableCell sx={{ fontWeight: 600, color: '#333' }}>{name}</TableCell>
//       <TableCell color="textSecondary">{institute}</TableCell>
//       <TableCell>{coordinator}</TableCell>
//       <TableCell sx={{ color: 'primary.main', fontSize: '0.875rem' }}>{contact}</TableCell>
//       <TableCell align="center">
//         <Chip 
//           label={count} 
//           size="small" 
//           sx={{ fontWeight: 'bold', bgcolor: '#e3f2fd', color: '#1976d2' }} 
//         />
//       </TableCell>
//       <TableCell align="center">
//         <Box sx={{ display: 'flex', justifyContent: 'center', gap: 0.5 }}>
//           <Tooltip title="View Details">
//             <IconButton size="small" sx={{ color: '#1976d2' }}>
//               <VisibilityIcon fontSize="small" />
//             </IconButton>
//           </Tooltip>
//           <Tooltip title="Edit">
//             <IconButton size="small" sx={{ color: '#2e7d32' }}>
//               <EditIcon fontSize="small" />
//             </IconButton>
//           </Tooltip>
//           <Tooltip title="Delete">
//             <IconButton size="small" sx={{ color: '#d32f2f' }}>
//               <DeleteIcon fontSize="small" />
//             </IconButton>
//           </Tooltip>
//         </Box>
//       </TableCell>
//     </TableRow>
//   );
// }

// export default Departments;



import React, { useEffect, useState } from 'react';
import {
  Box,
  Typography,
  Button,
  TextField,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  IconButton,
  InputAdornment,
  Tooltip,
  Chip,
  CircularProgress
} from '@mui/material';
import {
  Add as AddIcon,
  Search as SearchIcon,
  Visibility as VisibilityIcon,
  Edit as EditIcon,
  Delete as DeleteIcon,
  Business as BusinessIcon
} from '@mui/icons-material';
import { getAllDepartment } from '../../api/Department';
import { useNavigate } from 'react-router';

//  1. Data Array
// const DEPARTMENTS_DATA = [
//   {
//     id: 1,
//     name: "Computer Engineering",
//     institute: "Darshan University",
//     coordinator: "Mr. Patel",
//     contact: "comp@darshan.edu.in",
//     count: "35"
//   },
//   {
//     id: 2,
//     name: "Mechanical Engineering",
//     institute: "Marwadi University",
//     coordinator: "Ms. Shah",
//     contact: "mech@marwadi.edu.in",
//     count: "25"
//   },
//   {
//     id: 3,
//     name: "Civil Engineering",
//     institute: "LD College of Engineering",
//     coordinator: "Dr. Mehta",
//     contact: "civil@ldce.edu.in",
//     count: "15"
//   }
// ];

function Departments() {

  const [data,setData] = useState([])
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate()

 useEffect(() => {
     setLoading(true)
     getAllDepartment((res)=>{
       setData(Array.isArray(res)?res:[]);
       setLoading(false)
     });
   }, []);
 
   if (loading) {
           return (
             <Box
               sx={{
                 background: 'linear-gradient(to bottom right, #ecfdf5, #ffffff, #ecfeff)',
                 minHeight: '100vh',
                 display: 'flex',
                 justifyContent: 'center',
                 alignItems: 'center'
               }}
             >
               <CircularProgress size={60} />
             </Box>
           );
         }
 

    
  return (
    <Box sx={{ pt: 12, px: { xs: 2, md: 6 }, bgcolor: '#f8f9fa', minHeight: '100vh', pb: 6 }}>
      
      {/* Page Header */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
        <Typography variant="h5" component="h1" sx={{ fontWeight: 'bold', color: '#2c3e50', display: 'flex', alignItems: 'center', gap: 1.5 }}>
          <BusinessIcon color="primary" />
          Departments
        </Typography>
        <Button 
          variant="contained" 
          startIcon={<AddIcon />} 
          sx={{ 
            borderRadius: '8px', 
            textTransform: 'none', 
            fontWeight: 'bold',
            boxShadow: '0 4px 12px rgba(25, 118, 210, 0.2)'
          }}
          onClick={()=> navigate('add')}
        >
          Add Department
        </Button>
      </Box>

      {/* Search Bar */}
      <Box sx={{ mb: 4 }}>
        <TextField
          placeholder="Search department..."
          variant="outlined"
          size="small"
          sx={{ 
            width: { xs: '100%', md: '350px' }, 
            bgcolor: 'white',
            '& .MuiOutlinedInput-root': { borderRadius: '10px' }
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon color="disabled" />
              </InputAdornment>
            ),
          }}
        />
      </Box>

      {/* Departments Table */}
      <TableContainer component={Paper} sx={{ borderRadius: '12px', border: '1px solid #e0e0e0', boxShadow: 'none' }}>
        <Table sx={{ minWidth: 700 }}>
          <TableHead sx={{ bgcolor: '#f1f3f5' }}>
            <TableRow>
              <TableCell sx={{ fontWeight: 700, color: '#495057' }}>DId</TableCell>
              <TableCell sx={{ fontWeight: 700, color: '#495057' }}>Department Name</TableCell>
              <TableCell sx={{ fontWeight: 700, color: '#495057' }}>Institute Name</TableCell>
              <TableCell sx={{ fontWeight: 700, color: '#495057' }}>Coordinator</TableCell>
              <TableCell sx={{ fontWeight: 700, color: '#495057' }}>Contact</TableCell>
              <TableCell align="center" sx={{ fontWeight: 700, color: '#495057' }}>Participants</TableCell>
              <TableCell align="center" sx={{ fontWeight: 700, color: '#495057' }}>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {/* 2. Combined Map Method */}
            {data.map((dept) => (
              <TableRow 
                key={dept.id} 
                hover 
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell>{dept.id}</TableCell>
                <TableCell sx={{ fontWeight: 600, color: '#333' }}>{dept.deptname}</TableCell>
                <TableCell sx={{ color: 'text.secondary' }}>{dept.institutename}</TableCell>
                <TableCell>{dept.coordinator}</TableCell>
                <TableCell sx={{ color: 'primary.main', fontSize: '0.875rem' }}>{dept.contact}</TableCell>
                <TableCell align="center">
                  <Chip 
                    label={dept.participant} 
                    size="small" 
                    sx={{ fontWeight: 'bold', bgcolor: '#e3f2fd', color: '#1976d2' }} 
                  />
                </TableCell>
                <TableCell align="center">
                  <Box sx={{ display: 'flex', justifyContent: 'center', gap: 0.5 }}>
                    <Tooltip title="View Details">
                      <IconButton size="small" sx={{ color: '#1976d2' }}>
                        <VisibilityIcon fontSize="small" />
                      </IconButton>
                    </Tooltip>
                    <Tooltip title="Edit">
                      <IconButton size="small" sx={{ color: '#2e7d32' }}>
                        <EditIcon fontSize="small" />
                      </IconButton>
                    </Tooltip>
                    <Tooltip title="Delete">
                      <IconButton size="small" sx={{ color: '#d32f2f' }}>
                        <DeleteIcon fontSize="small" />
                      </IconButton>
                    </Tooltip>
                  </Box>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}

export default Departments;