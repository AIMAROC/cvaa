import React, { useState } from 'react';
import { 
  ThemeProvider, 
  createTheme, 
  CssBaseline, 
  Container, 
  Box, 
  Typography, 
  Grid, 
  Card, 
  CardContent, 
  IconButton,
  Chip,
  Paper,
  Button,
  Avatar,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Switch,
  AppBar,
  Toolbar,
  Drawer,
  ListItemButton
} from '@mui/material';
import { 
  Brightness4,
  Brightness7,
  Menu as MenuIcon,
  Home as HomeIcon,
  Person as PersonIcon,
  Work as WorkIcon,
  School as SchoolIcon,
  Code as CodeIcon,
  Article as ArticleIcon,
  Build as BuildIcon,
  Language as LanguageIcon,
  Email as EmailIcon
} from '@mui/icons-material';

const Portfolio = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [currentSection, setCurrentSection] = useState('home');

  const theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
      primary: {
        main: '#3f51b5',
      },
      secondary: {
        main: '#f50057',
      },
      background: {
        default: darkMode ? '#121212' : '#f5f5f5',
        paper: darkMode ? '#1e1e1e' : '#ffffff',
      },
    },
    typography: {
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
      h1: {
        fontSize: '2.5rem',
        fontWeight: 600,
      },
      h4: {
        fontSize: '1.75rem',
        fontWeight: 500,
      },
    },
  });

  const navigation = [
    { id: 'home', label: 'Home', icon: <HomeIcon /> },
    { id: 'about', label: 'About', icon: <PersonIcon /> },
    { id: 'experience', label: 'Experience', icon: <WorkIcon /> },
    { id: 'education', label: 'Education', icon: <SchoolIcon /> },
    { id: 'projects', label: 'Projects', icon: <CodeIcon /> },
    { id: 'publications', label: 'Publications', icon: <ArticleIcon /> },
    { id: 'skills', label: 'Skills', icon: <BuildIcon /> },
    { id: 'contact', label: 'Contact', icon: <EmailIcon /> },
  ];

  const skills = {
    'Programming Languages': ['Python', 'R', 'JavaScript', 'C++', 'Java', 'SQL', 'HTML/CSS'],
    'Tools & Frameworks': ['PyTorch', 'TensorFlow', 'FastAPI', 'Flask', 'Docker', 'AWS', 'Azure', 'Git'],
    'Knowledge Areas': ['Machine Learning', 'Deep Learning', 'NLP', 'Computer Vision', 'Causal Inference', 'MLOps'],
  };

  const projects = [
    {
      title: 'MaghrebInsights',
      description: 'Analyse de la Propagande Algérienne: Presse vs Maroc 🇲🇦',
      tags: ['NLP', 'Data Analysis']
    },
    {
      title: 'SCRIBDOWN',
      description: 'Efficient PDF downloader for SCRIBD using Python and FastAPI',
      tags: ['Python', 'FastAPI', 'Web Scraping']
    },
    {
      title: 'PYCAUS',
      description: 'Python package for causal survival analysis with PyTorch',
      tags: ['PyTorch', 'Causal Inference', 'Machine Learning']
    }
  ];

  const experience = [
    {
      title: 'AI Research Scientist & PhD Candidate',
      company: 'LaMME, Evry, France',
      period: '04/2020 - 2023',
      description: [
        'Led creation of advanced deep learning models for causal effects',
        'Conducted pioneering research in causal inference',
        'Published research in prestigious journals'
      ]
    },
    {
      title: 'Data Scientist Freelancer',
      company: 'Malt | Upwork, Paris, France',
      period: '09/2019 - Present',
      description: [
        'Implemented end-to-end ML solutions',
        'Designed predictive models for optimization',
        'Led client projects from conception to deployment'
      ]
    }
  ];

  const drawer = (
    <Box sx={{ pt: 2 }}>
      <List>
        {navigation.map((item) => (
          <ListItemButton
            key={item.id}
            selected={currentSection === item.id}
            onClick={() => {
              setCurrentSection(item.id);
              setMobileOpen(false);
            }}
          >
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.label} />
          </ListItemButton>
        ))}
      </List>
    </Box>
  );

  const renderSection = () => {
    switch (currentSection) {
      case 'home':
        return (
          <Box sx={{ textAlign: 'center', mt: 8 }}>
            <Avatar
              sx={{ width: 200, height: 200, mx: 'auto', mb: 3 }}
              alt="Ayoub Abraich"
              src="/api/placeholder/200/200"
            />
            <Typography variant="h1" gutterBottom>
              Ayoub Abraich
            </Typography>
            <Typography variant="h4" color="text.secondary" gutterBottom>
              Data Scientist | AI Research Engineer
            </Typography>
            <Box sx={{ mt: 4 }}>
              <Button variant="contained" size="large" sx={{ mr: 2 }}>
                View CV
              </Button>
              <Button variant="outlined" size="large">
                Contact Me
              </Button>
            </Box>
          </Box>
        );

      case 'skills':
        return (
          <Box>
            <Typography variant="h4" gutterBottom>Skills</Typography>
            <Grid container spacing={3}>
              {Object.entries(skills).map(([category, items]) => (
                <Grid item xs={12} md={4} key={category}>
                  <Paper elevation={3} sx={{ p: 2, height: '100%' }}>
                    <Typography variant="h6" gutterBottom>{category}</Typography>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                      {items.map((skill) => (
                        <Chip
                          key={skill}
                          label={skill}
                          color="primary"
                          variant="outlined"
                        />
                      ))}
                    </Box>
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </Box>
        );

      case 'projects':
        return (
          <Box>
            <Typography variant="h4" gutterBottom>Projects</Typography>
            <Grid container spacing={3}>
              {projects.map((project, index) => (
                <Grid item xs={12} md={4} key={index}>
                  <Card sx={{ height: '100%' }}>
                    <CardContent>
                      <Typography variant="h6" gutterBottom>
                        {project.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary" paragraph>
                        {project.description}
                      </Typography>
                      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                        {project.tags.map((tag) => (
                          <Chip
                            key={tag}
                            label={tag}
                            size="small"
                            color="secondary"
                            variant="outlined"
                          />
                        ))}
                      </Box>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Box>
        );

      case 'experience':
        return (
          <Box>
            <Typography variant="h4" gutterBottom>Experience</Typography>
            <Grid container spacing={3}>
              {experience.map((job, index) => (
                <Grid item xs={12} key={index}>
                  <Card>
                    <CardContent>
                      <Typography variant="h6">
                        {job.title}
                      </Typography>
                      <Typography color="text.secondary" gutterBottom>
                        {job.company} | {job.period}
                      </Typography>
                      <List>
                        {job.description.map((point, i) => (
                          <ListItem key={i}>
                            <ListItemText primary={point} />
                          </ListItem>
                        ))}
                      </List>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Box>
        );

      default:
        return null;
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ display: 'flex' }}>
        <AppBar position="fixed">
          <Toolbar>
            <IconButton
              color="inherit"
              edge="start"
              onClick={() => setMobileOpen(!mobileOpen)}
              sx={{ mr: 2, display: { sm: 'none' } }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
              Portfolio
            </Typography>
            <IconButton onClick={() => setDarkMode(!darkMode)} color="inherit">
              {darkMode ? <Brightness7 /> : <Brightness4 />}
            </IconButton>
          </Toolbar>
        </AppBar>
        
        <Box
          component="nav"
          sx={{ width: { sm: 240 }, flexShrink: { sm: 0 } }}
        >
          <Drawer
            variant="temporary"
            open={mobileOpen}
            onClose={() => setMobileOpen(false)}
            ModalProps={{ keepMounted: true }}
            sx={{
              display: { xs: 'block', sm: 'none' },
              '& .MuiDrawer-paper': { width: 240 },
            }}
          >
            {drawer}
          </Drawer>
          <Drawer
            variant="permanent"
            sx={{
              display: { xs: 'none', sm: 'block' },
              '& .MuiDrawer-paper': { width: 240, boxSizing: 'border-box' },
            }}
            open
          >
            {drawer}
          </Drawer>
        </Box>

        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 3,
            width: { sm: `calc(100% - 240px)` },
            mt: 8
          }}
        >
          {renderSection()}
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default Portfolio;