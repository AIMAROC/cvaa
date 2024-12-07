import React, { useState, useEffect } from 'react';
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
  CardActions,
  CardMedia, 
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
  ListItemButton,
  useMediaQuery,
  Fade,
  Grow,
  LinearProgress,
  Link,
  Tooltip
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
  Email as EmailIcon,
  LinkedIn as LinkedInIcon,
  GitHub as GitHubIcon,
  Twitter as TwitterIcon,
  Launch as LaunchIcon,
  LocationOn as LocationIcon,
  Phone as PhoneIcon,
  Mail as MailIcon,
  ArrowForward as ArrowForwardIcon,
  Star as StarIcon,
  Check as CheckIcon,
  Facebook as FacebookIcon
} from '@mui/icons-material';

const Portfolio = () => {
  // State management
  const [darkMode, setDarkMode] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [currentSection, setCurrentSection] = useState('home');
  const [loading, setLoading] = useState(true);
  const isMobile = useMediaQuery('(max-width:600px)');
  const isTablet = useMediaQuery('(max-width:960px)');

  // Theme configuration
  const theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
      primary: {
        main: '#3f51b5',
        light: '#757de8',
        dark: '#002984',
      },
      secondary: {
        main: '#f50057',
        light: '#ff4081',
        dark: '#c51162',
      },
      background: {
        default: darkMode ? '#121212' : '#f5f5f5',
        paper: darkMode ? '#1e1e1e' : '#ffffff',
      },
      accent: {
        main: '#00bcd4',
        light: '#33c9dc',
        dark: '#008394',
      },
    },
    typography: {
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
      h1: {
        fontSize: '3.5rem',
        fontWeight: 700,
        [useMediaQuery('(max-width:600px)')]: {
          fontSize: '2.5rem',
        },
      },
      h2: {
        fontSize: '2.8rem',
        fontWeight: 600,
        marginBottom: '1rem',
      },
      h3: {
        fontSize: '2.2rem',
        fontWeight: 500,
      },
      h4: {
        fontSize: '1.8rem',
        fontWeight: 500,
      },
      h5: {
        fontSize: '1.4rem',
        fontWeight: 500,
      },
      h6: {
        fontSize: '1.2rem',
        fontWeight: 500,
      },
      subtitle1: {
        fontSize: '1.1rem',
        lineHeight: 1.6,
      },
      body1: {
        fontSize: '1rem',
        lineHeight: 1.7,
      },
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: 8,
            textTransform: 'none',
            padding: '8px 24px',
            fontSize: '1rem',
          },
        },
      },
      MuiCard: {
        styleOverrides: {
          root: {
            borderRadius: 12,
            transition: 'transform 0.2s ease-in-out',
            '&:hover': {
              transform: 'translateY(-4px)',
            },
          },
        },
      },
      MuiChip: {
        styleOverrides: {
          root: {
            borderRadius: 6,
          },
        },
      },
    },
    shape: {
      borderRadius: 12,
    },
    transitions: {
      duration: {
        shortest: 150,
        shorter: 200,
        short: 250,
        standard: 300,
        complex: 375,
        enteringScreen: 225,
        leavingScreen: 195,
      },
    },
  });

  // Navigation configuration
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

  // Personal Information
  const personalInfo = {
    name: 'Ayoub Abraich',
    title: 'Data Scientist | AI Research Engineer',
    location: 'Evry, France',
    email: 'abraich.jobs@gmail.com',
    phone: '+33 (0) XXX-XXX-XXX',
    linkedin: 'https://linkedin.com/in/ayoubabraich',
    github: 'https://github.com/ayoubabraich',
    bio: `I am a highly accomplished Data Scientist and AI Research Engineer with a proven track record of delivering impactful solutions in Natural Language Processing (NLP) and Deep Learning. Holding a Master's degree in Data Science and with over four years of experience, I specialize in causal inference, domain adaptation, and cutting-edge research. My proficiency in Python, PyTorch, and TensorFlow, combined with a relentless drive, allows me to contribute to pioneering projects and push the boundaries of AI.`,
  };

  // Loading effect
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  // Scroll handling
  useEffect(() => {
    const handleScroll = () => {
      const sections = navigation.map(nav => nav.id);
      const scrollPosition = window.scrollY + 100;

      const currentSectionIndex = sections.findIndex(section => {
        const element = document.getElementById(section);
        if (!element) return false;
        const offsetTop = element.offsetTop;
        const offsetBottom = offsetTop + element.offsetHeight;
        return scrollPosition >= offsetTop && scrollPosition < offsetBottom;
      });

      if (currentSectionIndex !== -1) {
        setCurrentSection(sections[currentSectionIndex]);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Continue with the component structure...