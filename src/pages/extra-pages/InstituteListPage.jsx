


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
//   Tooltip
// } from '@mui/material';
// import AddIcon from '@mui/icons-material/Add';
// import SearchIcon from '@mui/icons-material/Search';
// import VisibilityIcon from '@mui/icons-material/Visibility';
// import EditIcon from '@mui/icons-material/Edit';
// import DeleteIcon from '@mui/icons-material/Delete';

// function Institutes() {
//   return (
//     <Box sx={{ pt: 12, px: { xs: 2, md: 6 }, bgcolor: '#f5f5f5', minHeight: '100vh', pb: 6 }}>
      
//       {/* Page Header */}
//       <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
//         <Typography variant="h5" component="h1" sx={{ fontWeight: 'bold', color: '#333' }}>
//           Participating Institutes
//         </Typography>
//         <Button 
//           variant="contained" 
//           startIcon={<AddIcon />} 
//           sx={{ borderRadius: 2, textTransform: 'none', fontWeight: 'bold' }}
//         >
//           Add Institute
//         </Button>
//       </Box>

//       {/* Search Bar */}
//       <Box sx={{ mb: 4 }}>
//         <TextField
//           placeholder="Search institute..."
//           variant="outlined"
//           size="small"
//           sx={{ 
//             width: { xs: '100%', md: '33%' }, 
//             bgcolor: 'white', 
//             borderRadius: 1 
//           }}
//           InputProps={{
//             startAdornment: (
//               <InputAdornment position="start">
//                 <SearchIcon color="action" />
//               </InputAdornment>
//             ),
//           }}
//         />
//       </Box>

//       {/* Institutes Table */}
//       <TableContainer component={Paper} sx={{ borderRadius: 3, boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }}>
//         <Table sx={{ minWidth: 650 }} aria-label="institutes table">
//           <TableHead sx={{ bgcolor: '#eeeeee' }}>
//             <TableRow>
//               <TableCell sx={{ fontWeight: 'bold' }}>Institute Name</TableCell>
//               <TableCell sx={{ fontWeight: 'bold' }}>City</TableCell>
//               <TableCell sx={{ fontWeight: 'bold' }}>Coordinator</TableCell>
//               <TableCell sx={{ fontWeight: 'bold' }}>Contact</TableCell>
//               <TableCell sx={{ fontWeight: 'bold' }} align="center">Participants</TableCell>
//               <TableCell sx={{ fontWeight: 'bold' }} align="center">Actions</TableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             <InstituteRow
//               name="Darshan University"
//               city="Rajkot"
//               coordinator="Mr. Patel"
//               contact="darshan@edu.in"
//               count="120"
//             />
//             <InstituteRow
//               name="Marwadi University"
//               city="Rajkot"
//               coordinator="Ms. Shah"
//               contact="marwadi@edu.in"
//               count="85"
//             />
//             <InstituteRow
//               name="LD College of Engineering"
//               city="Ahmedabad"
//               coordinator="Dr. Mehta"
//               contact="ldce@edu.in"
//               count="60"
//             />
//           </TableBody>
//         </Table>
//       </TableContainer>
//     </Box>
//   );
// }

// /* Reusable Row Component */
// function InstituteRow({ name, city, coordinator, contact, count }) {
//   return (
//     <TableRow sx={{ '&:hover': { bgcolor: '#fafafa' } }}>
//       <TableCell sx={{ fontWeight: 500 }}>{name}</TableCell>
//       <TableCell>{city}</TableCell>
//       <TableCell>{coordinator}</TableCell>
//       <TableCell>{contact}</TableCell>
//       <TableCell align="center">{count}</TableCell>
//       <TableCell align="center">
//         <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1 }}>
//           <Tooltip title="View">
//             <IconButton size="small" color="primary">
//               <VisibilityIcon fontSize="small" />
//             </IconButton>
//           </Tooltip>
//           <Tooltip title="Edit">
//             <IconButton size="small" color="success">
//               <EditIcon fontSize="small" />
//             </IconButton>
//           </Tooltip>
//           <Tooltip title="Delete">
//             <IconButton size="small" color="error">
//               <DeleteIcon fontSize="small" />
//             </IconButton>
//           </Tooltip>
//         </Box>
//       </TableCell>
//     </TableRow>
//   );
// }

// export default Institutes;


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
  CircularProgress
} from '@mui/material';
import {
  Add as AddIcon,
  Search as SearchIcon,
  Visibility as VisibilityIcon,
  Edit as EditIcon,
  Delete as DeleteIcon
} from '@mui/icons-material';
import { getAllInstitute } from '../../api/Institute';
import { useNavigate } from 'react-router';

// Sample Data
// const INSTITUTES_DATA = [
//   { id: 1, name: "Darshan University", city: "Rajkot", coordinator: "Mr. Patel", contact: "darshan@edu.in", partcipant: "120" },
//   { id: 2, name: "Marwadi University", city: "Rajkot", coordinator: "Ms. Shah", contact: "marwadi@edu.in", partcipant: "85" },
//   { id: 3, name: "LD College of Engineering", city: "Ahmedabad", coordinator: "Dr. Mehta", contact: "ldce@edu.in", partcipant: "60" },
// ];

function Institutes() {

  const [data,setData] = useState([])
  const navigate = useNavigate()
  const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      setLoading(true)
      getAllInstitute((res)=>{
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
    <Box sx={{ pt: 12, px: { xs: 2, md: 6 }, bgcolor: '#f5f5f5', minHeight: '100vh', pb: 6 }}>
      
      {/* Header Section */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
        <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#333' }}>
          Participating Institutes
        </Typography>
        <Button 
          variant="contained" 
          startIcon={<AddIcon />} 
          sx={{ borderRadius: 2, textTransform: 'none', fontWeight: 'bold' }}
          onClick={()=> navigate('add')}
        >
          Add Institute
        </Button>
      </Box>

      {/* Search Section */}
      <Box sx={{ mb: 4 }}>
        <TextField
          placeholder="Search institute..."
          size="small"
          sx={{ width: { xs: '100%', md: '33%' }, bgcolor: 'white', borderRadius: 1 }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon color="action" />
              </InputAdornment>
            ),
          }}
        />
      </Box>

      {/* Combined Table Section */}
      <TableContainer component={Paper} sx={{ borderRadius: 3, boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }}>
        <Table sx={{ minWidth: 650 }}>
          <TableHead sx={{ bgcolor: '#eeeeee' }}>
            <TableRow>
              <TableCell sx={{ fontWeight: 'bold' }}>Id</TableCell>
              <TableCell sx={{ fontWeight: 'bold' }}>Institute Name</TableCell>
              <TableCell sx={{ fontWeight: 'bold' }}>City</TableCell>
              <TableCell sx={{ fontWeight: 'bold' }}>Coordinator</TableCell>
              <TableCell sx={{ fontWeight: 'bold' }}>Contact</TableCell>
              <TableCell sx={{ fontWeight: 'bold' }} align="center">Participants</TableCell>
              <TableCell sx={{ fontWeight: 'bold' }} align="center">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {/* Mapping logic combined inside the main component */}
            {data.map((row) => (
              <TableRow key={row.id} sx={{ '&:hover': { bgcolor: '#fafafa' } }}>
                <TableCell>{row.id}</TableCell>
                <TableCell sx={{ fontWeight: 500 }}>{row.name}</TableCell>
                <TableCell>{row.city}</TableCell>
                <TableCell>{row.coordinator}</TableCell>
                <TableCell>{row.contact}</TableCell>
                <TableCell align="center">{row.participant}</TableCell>
                <TableCell align="center">
                  <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1 }}>
                    <Tooltip title="View">
                      <IconButton size="small" color="primary">
                        <VisibilityIcon fontSize="small" />
                      </IconButton>
                    </Tooltip>
                    <Tooltip title="Edit">
                      <IconButton size="small" color="success">
                        <EditIcon fontSize="small" />
                      </IconButton>
                    </Tooltip>
                    <Tooltip title="Delete">
                      <IconButton size="small" color="error">
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

export default Institutes;