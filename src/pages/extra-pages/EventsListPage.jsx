// import React, { useEffect, useState } from 'react';
// import {
//   Box,
//   Typography,
//   Button,
//   TextField,
//   Paper,
//   IconButton,
//   InputAdornment,
//   Tooltip,
//   Chip,
//   Stack,
//   Grid,
//   Card,
//   CardContent,
//   CardActions,
//   Divider,
//   Pagination,
//   CircularProgress
// } from '@mui/material';
// import {
//   Add as AddIcon,
//   Search as SearchIcon,
//   Visibility as VisibilityIcon,
//   Edit as EditIcon,
//   Delete as DeleteIcon,
//   Event as EventIcon,
//   Business as InstituteIcon,
//   AccountTree as DeptIcon,
//   CalendarMonth as DateIcon,
//   Groups as GroupsIcon
// } from '@mui/icons-material';
// import { getAllEvents } from '../../api/Events';
// import { useNavigate } from 'react-router';

// function Events() {
//   const [data, setData] = useState([]);
//   const navigate = useNavigate();
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     setLoading(true)
//     getAllEvents((res)=>{
//       setData(Array.isArray(res)?res:[]);
//       setLoading(false)
//     });
//   }, []);

//   if (loading) {
//           return (
//             <Box
//               sx={{
//                 background: 'linear-gradient(to bottom right, #ecfdf5, #ffffff, #ecfeff)',
//                 minHeight: '100vh',
//                 display: 'flex',
//                 justifyContent: 'center',
//                 alignItems: 'center'
//               }}
//             >
//               <CircularProgress size={60} />
//             </Box>
//           );
//         }

//   return (
//     <Box sx={{ pt: 12, px: { xs: 2, md: 4 }, bgcolor: '#f4f6f8', minHeight: '100vh', pb: 6 }}>
      
//       {/* Page Header */}
//       <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
//         <Typography variant="h5" sx={{ fontWeight: 700, color: '#1a2027', display: 'flex', alignItems: 'center', gap: 1 }}>
//           <EventIcon color="primary" />
//           Events
//         </Typography>
//         <Button 
//           variant="contained" 
//           startIcon={<AddIcon />} 
//           sx={{ borderRadius: 2, textTransform: 'none', px: 3, fontWeight: 'bold' }}
//           onClick={() => navigate('add')}
//         >
//           Add Event
//         </Button>
//       </Box>

//       {/* Search Section */}
//       <Paper sx={{ p: 2, mb: 4, borderRadius: 3, boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>
//         <TextField
//           placeholder="Search event details..."
//           variant="outlined"
//           size="small"
//           sx={{ width: { xs: '100%', md: '400px' } }}
//           InputProps={{
//             startAdornment: (
//               <InputAdornment position="start">
//                 <SearchIcon fontSize="small" />
//               </InputAdornment>
//             ),
//           }}
//         />
//       </Paper>

//       {/* Cards Grid using .map() */}
//       <Grid container spacing={12}>
//         {data.map(({ id, name, type, institute, department, date, participants, coordinator }) => (
//           <Grid item xs={12} sm={6} lg={4} key={id}>
//             <Card 
//               sx={{ 
//                 height: '100%',
//                 width:'130%',
//                 borderRadius: 6,
//                 transition: 'all 0.3s ease',
//                 '&:hover': { transform: 'translateY(-5px)', boxShadow: '0 12px 30px rgba(0,0,0,0.12)' }
//               }}
//             >
//               <CardContent sx={{ pb: 1 }}>
//                 <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
//                   <Typography variant="caption" sx={{ fontWeight: 800, color: 'primary.main', bgcolor: '#e3f2fd', px: 1, borderRadius: 1 }}>
//                     ID #{id}
//                   </Typography>
//                   <Chip label={type} size="small" variant="outlined" color="primary" sx={{ fontWeight: 600, fontSize: '0.7rem' }} />
//                 </Box>

//                 <Typography variant="h6" sx={{ fontWeight: 700, mb: 2, color: '#2c3e50', minHeight: '3.5rem' }}>
//                   {name}
//                 </Typography>

//                 <Divider sx={{ mb: 2 }} />

//                 <Stack spacing={2}>
//                   {/* Local combined helper items */}
//                   {[
//                     { icon: <InstituteIcon fontSize="small" />, val: institute, lab: "Institute" },
//                     { icon: <DeptIcon fontSize="small" />, val: department, lab: "Dept" },
//                     { icon: <DateIcon fontSize="small" />, val: date, lab: "Date" }
//                   ].map((item, idx) => (
//                     <Box key={idx} sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
//                       <Box sx={{ color: 'primary.main', display: 'flex' }}>{item.icon}</Box>
//                       <Box>
//                         <Typography variant="caption" color="text.disabled" sx={{ display: 'block', lineHeight: 1 }}>{item.lab}</Typography>
//                         <Typography variant="body2" sx={{ fontWeight: 600 }}>{item.val}</Typography>
//                       </Box>
//                     </Box>
//                   ))}
                  
//                   <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 1 }}>
//                     <Stack direction="row" spacing={0.5} alignItems="center">
//                       <GroupsIcon fontSize="small" color="action" />
//                       <Typography variant="body2" sx={{ fontWeight: 700 }}>{participants}</Typography>
//                     </Stack>
//                     <Typography variant="caption" sx={{ fontStyle: 'italic' }}>
//                       By: {coordinator}
//                     </Typography>
//                   </Box>
//                 </Stack>
//               </CardContent>

//               <CardActions sx={{ justifyContent: 'center', gap: 1, pb: 2 }}>
//                 <Tooltip title="View"><IconButton size="small" sx={{ color: 'primary.main', bgcolor: '#f5f5f5' }}><VisibilityIcon fontSize="small" /></IconButton></Tooltip>
//                 <Tooltip title="Edit"><IconButton size="small" sx={{ color: 'success.main', bgcolor: '#f5f5f5' }}><EditIcon fontSize="small" /></IconButton></Tooltip>
//                 <Tooltip title="Delete"><IconButton size="small" sx={{ color: 'error.main', bgcolor: '#f5f5f5' }}><DeleteIcon fontSize="small" /></IconButton></Tooltip>
//               </CardActions>
//             </Card>
//           </Grid>
//         ))}
//       </Grid>

//       {/* Pagination Container */}
//       <Box sx={{ mt: 5, display: 'flex', justifyContent: 'center' }}>
//         <Pagination count={10} color="primary" sx={{ p: 1, bgcolor: 'white', borderRadius: 50, boxShadow: '0 2px 10px rgba(0,0,0,0.05)' }} />
//       </Box>
//     </Box>
//   );
// }

// export default Events;


import React, { useEffect, useState } from 'react';
import {
  Box,
  Typography,
  Button,
  TextField,
  Paper,
  IconButton,
  InputAdornment,
  Tooltip,
  Chip,
  Stack,
  Grid,
  Card,
  CardContent,
  CardActions,
  Divider,
  Pagination,
  CircularProgress
} from '@mui/material';
import {
  Add as AddIcon,
  Search as SearchIcon,
  Visibility as VisibilityIcon,
  Edit as EditIcon,
  Delete as DeleteIcon,
  Event as EventIcon,
  Business as InstituteIcon,
  AccountTree as DeptIcon,
  CalendarMonth as DateIcon,
  Groups as GroupsIcon
} from '@mui/icons-material';
import { getAllEvents } from '../../api/Events';
import { useNavigate } from 'react-router';

function Events() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  // ================= PAGINATION =================
  const [page, setPage] = useState(1);
  const ITEMS_PER_PAGE = 6;

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  // ================= API =================
  useEffect(() => {
    setLoading(true);
    getAllEvents((res) => {
      setData(Array.isArray(res) ? res : []);
      setLoading(false);
    });
  }, []);

  // ================= PAGINATED DATA =================
  const paginatedData = data.slice(
    (page - 1) * ITEMS_PER_PAGE,
    page * ITEMS_PER_PAGE
  );

  const totalPages = Math.ceil(data.length / ITEMS_PER_PAGE);

  // ================= LOADING =================
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
    <Box sx={{ pt: 12, px: { xs: 2, md: 4 }, bgcolor: '#f4f6f8', minHeight: '100vh', pb: 6 }}>

      {/* Header */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
        <Typography variant="h5" sx={{ fontWeight: 700, display: 'flex', alignItems: 'center', gap: 1 }}>
          <EventIcon color="primary" />
          Events
        </Typography>

        <Button
          variant="contained"
          startIcon={<AddIcon />}
          sx={{ borderRadius: 2, textTransform: 'none', px: 3, fontWeight: 'bold' }}
          onClick={() => navigate('add')}
        >
          Add Event
        </Button>
      </Box>

      {/* Search */}
      <Paper sx={{ p: 2, mb: 4, borderRadius: 3 }}>
        <TextField
          placeholder="Search event details..."
          size="small"
          sx={{ width: { xs: '100%', md: '400px' } }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon fontSize="small" />
              </InputAdornment>
            )
          }}
        />
      </Paper>

      {/* Cards */}
      <Grid container spacing={12}>
        {paginatedData.map(({ id, name, type, institute, department, date, participants, coordinator }) => (
          <Grid item xs={12} sm={6} lg={4} key={id}>
            <Card
              sx={{
                height: '100%',
                width: '130%',
                borderRadius: 6,
                transition: '0.3s',
                '&:hover': { transform: 'translateY(-5px)', boxShadow: 6 }
              }}
            >
              <CardContent>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                  <Typography variant="caption" sx={{ fontWeight: 800 }}>
                    ID #{id}
                  </Typography>
                  <Chip label={type} size="small" color="primary" />
                </Box>

                <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
                  {name}
                </Typography>

                <Divider sx={{ mb: 2 }} />

                <Stack spacing={2}>
                  <Box sx={{ display: 'flex', gap: 1 }}>
                    <InstituteIcon fontSize="small" />
                    <Typography>{institute}</Typography>
                  </Box>

                  <Box sx={{ display: 'flex', gap: 1 }}>
                    <DeptIcon fontSize="small" />
                    <Typography>{department}</Typography>
                  </Box>

                  <Box sx={{ display: 'flex', gap: 1 }}>
                    <DateIcon fontSize="small" />
                    <Typography>{date}</Typography>
                  </Box>

                  <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Stack direction="row" spacing={1}>
                      <GroupsIcon fontSize="small" />
                      <Typography>{participants}</Typography>
                    </Stack>
                    <Typography variant="caption">By: {coordinator}</Typography>
                  </Box>
                </Stack>
              </CardContent>

              <CardActions sx={{ justifyContent: 'center' }}>
                <Tooltip title="View"><IconButton><VisibilityIcon /></IconButton></Tooltip>
                <Tooltip title="Edit"><IconButton color="success"><EditIcon /></IconButton></Tooltip>
                <Tooltip title="Delete"><IconButton color="error"><DeleteIcon /></IconButton></Tooltip>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Pagination */}
      <Box sx={{ mt: 5, display: 'flex', justifyContent: 'center' }}>
        <Pagination
          count={totalPages}
          page={page}
          onChange={handlePageChange}
          color="primary"
        />
      </Box>
    </Box>
  );
}

export default Events;