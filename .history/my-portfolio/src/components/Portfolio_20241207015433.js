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
  // ... continuing from part 1

  // Skills data
  const skills = {
    'Programming Languages': [
      { name: 'Python', level: 95 },
      { name: 'R', level: 90 },
      { name: 'JavaScript', level: 85 },
      { name: 'C++', level: 80 },
      { name: 'SQL', level: 85 },
    ],
    'Tools & Frameworks': [
      { name: 'PyTorch', level: 95 },
      { name: 'TensorFlow', level: 90 },
      { name: 'FastAPI', level: 85 },
      { name: 'Docker', level: 85 },
      { name: 'AWS', level: 80 },
      { name: 'Git', level: 90 },
    ],
    'AI & ML': [
      { name: 'Deep Learning', level: 95 },
      { name: 'NLP', level: 90 },
      { name: 'Computer Vision', level: 85 },
      { name: 'Causal Inference', level: 95 },
      { name: 'MLOps', level: 85 },
    ],
  };

  // Experience data
  const experience = [
    {
      title: 'CTO & Co-founder',
      company: 'Deeprof',
      period: '2024 - Present',
      description: [
        'Led the development of an innovative AI-powered educational platform using React, FastAPI, and LLM agents',
        'Implemented personalized learning features including intelligent question-answering, exercise generation, and BAC preparation assistance',
        'Architected scalable backend systems handling 39+ concurrent users with 95% success rate',
        'Developed real-time collaborative learning features and progress tracking systems',
        'Integrated advanced LLM agents for personalized tutoring and automated content generation'
      ],
      technologies: ['React', 'FastAPI', 'LLM', 'AI Agents', 'Python', 'Machine Learning', 'MongoDB']
    },
    
    {
      title: 'AI Research Scientist & PhD Candidate',
      company: 'LaMME, Evry, France',
      period: '04/2020 - 2023',
      description: [
        'Led creation and deployment of advanced deep learning models for causal effects',
        'Conducted pioneering research in causal inference, enhancing predictive accuracy',
        'Published research in prestigious journals and presented at conferences',
        'Mentored junior team members and contributed to knowledge sharing'
      ],
      technologies: ['PyTorch', 'TensorFlow', 'Causal Inference', 'Deep Learning']
    },
    {
      title: 'Data Scientist Freelancer',
      company: 'Malt | Upwork',
      period: '09/2019 - Present',
      description: [
        'Developed end-to-end machine learning solutions for diverse clients',
        'Applied advanced statistical techniques for data analysis',
        'Implemented production-ready ML models and pipelines',
        'Managed client relationships and project deliverables'
      ],
      technologies: ['Python', 'Machine Learning', 'FastAPI', 'Docker']
    }
  ];

  // Drawer component
  const DrawerContent = () => (
    <Box sx={{ pt: 2 }}>
      <Box sx={{ p: 2, textAlign: 'center' }}>
        <Avatar
          src="/api/placeholder/80/80"
          alt={personalInfo.name}
          sx={{ 
            width: 80, 
            height: 80, 
            mx: 'auto',
            mb: 1,
            border: '2px solid',
            borderColor: 'primary.main'
          }}
        />
        <Typography variant="h6" noWrap>
          {personalInfo.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {personalInfo.title}
        </Typography>
      </Box>
      <Divider />
      <List>
        {navigation.map((item) => (
          <ListItemButton
            key={item.id}
            selected={currentSection === item.id}
            onClick={() => {
              setCurrentSection(item.id);
              setMobileOpen(false);
              document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' });
            }}
            sx={{
              borderRadius: 1,
              mx: 1,
              '&.Mui-selected': {
                backgroundColor: 'primary.main',
                color: 'white',
                '&:hover': {
                  backgroundColor: 'primary.dark',
                },
              },
            }}
          >
            <ListItemIcon sx={{ color: currentSection === item.id ? 'white' : 'inherit' }}>
              {item.icon}
            </ListItemIcon>
            <ListItemText primary={item.label} />
          </ListItemButton>
        ))}
      </List>
    </Box>
  );

  // Home Section
  const HomeSection = () => (
    <Box
      id="home"
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        pt: 8,
      }}
    >
      <Fade in={!loading} timeout={1000}>
        <Container maxWidth="md" sx={{ textAlign: 'center' }}>
          <Avatar
            src="/api/placeholder/150/150"
            alt={personalInfo.name}
            sx={{
              width: 150,
              height: 150,
              mx: 'auto',
              mb: 3,
              border: '3px solid',
              borderColor: 'primary.main',
              boxShadow: 3,
            }}
          />
          <Typography variant="h1" gutterBottom>
            {personalInfo.name}
          </Typography>
          <Typography
            variant="h4"
            color="text.secondary"
            gutterBottom
            sx={{ mb: 4 }}
          >
            {personalInfo.title}
          </Typography>
          <Box sx={{ mb: 4 }}>
            <Chip
              icon={<LocationIcon />}
              label={personalInfo.location}
              sx={{ mr: 1, mb: 1 }}
            />
            <Chip
              icon={<MailIcon />}
              label={personalInfo.email}
              sx={{ mr: 1, mb: 1 }}
            />
          </Box>
          <Box sx={{ mt: 4 }}>
            <Button
              variant="contained"
              size="large"
              sx={{ mr: 2, mb: 2 }}
              href="#about"
              endIcon={<ArrowForwardIcon />}
            >
              Learn More
            </Button>
            <Button
              variant="outlined"
              size="large"
              sx={{ mb: 2 }}
              href="#contact"
            >
              Get in Touch
            </Button>
          </Box>
          <Box sx={{ mt: 4 }}>
            <IconButton 
              href={personalInfo.linkedin}
              target="_blank"
              color="primary"
              sx={{ mr: 2 }}
            >
              <LinkedInIcon fontSize="large" />
            </IconButton>
            <IconButton 
              href={personalInfo.github}
              target="_blank"
              color="primary"
              sx={{ mr: 2 }}
            >
              <GitHubIcon fontSize="large" />
            </IconButton>
            <IconButton 
              href={`mailto:${personalInfo.email}`}
              color="primary"
            >
              <MailIcon fontSize="large" />
            </IconButton>
          </Box>
        </Container>
      </Fade>
    </Box>
  );

  // About Section
  const AboutSection = () => (
    <Box
      id="about"
      sx={{
        py: 8,
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography variant="h2" gutterBottom>
              About Me
            </Typography>
            <Typography variant="body1" paragraph>
              {personalInfo.bio}
            </Typography>
            <Box sx={{ mt: 4 }}>
              <Button
                variant="contained"
                size="large"
                href="#experience"
                endIcon={<ArrowForwardIcon />}
              >
                View Experience
              </Button>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper
              elevation={3}
              sx={{
                p: 3,
                borderRadius: 4,
                background: theme.palette.background.paper,
              }}
            >
              {Object.entries(skills).slice(0, 3).map(([category, items]) => (
                <Box key={category} sx={{ mb: 3 }}>
                  <Typography variant="h6" gutterBottom>
                    {category}
                  </Typography>
                  {items.slice(0, 3).map((skill) => (
                    <Box key={skill.name} sx={{ mb: 2 }}>
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                        <Typography variant="body2">{skill.name}</Typography>
                        <Typography variant="body2" color="text.secondary">
                          {skill.level}%
                        </Typography>
                      </Box>
                      <LinearProgress
                        variant="determinate"
                        value={skill.level}
                        sx={{ 
                          height: 6, 
                          borderRadius: 3,
                          backgroundColor: 'rgba(0,0,0,0.1)',
                          '& .MuiLinearProgress-bar': {
                            borderRadius: 3,
                          }
                        }}
                      />
                    </Box>
                  ))}
                </Box>
              ))}
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
  // ... continuing from part 2

  // Education data
  const education = [
    {
      degree: 'PhD in Data Science',
      specialization: 'Deep Learning Applications for Causal Treatment Effect Estimation',
      school: 'Paris-Saclay University',
      period: '09/2020 - 2023',
      highlights: [
        'Research Area: Causal Inference, Survival Analysis, Representation Balancing',
        'Published multiple research papers in prestigious journals',
        'Received PhD Bourse (FMJH and EDMH): €57,000 net over 3 years',
        'FMJH Excellence Bourse: €14,000'
      ]
    },
    {
      degree: "Master's degree in Data Science",
      specialization: 'Finance',
      school: 'Paris-Saclay University',
      period: '09/2018 - 10/2020',
      highlights: [
        'Completed advanced AI coursework in Reinforcement Learning and Deep Learning',
        'Applied GANs for practical data applications',
        'Expertise in Scientific Python and GPU computing'
      ]
    },
    {
      degree: "Bachelor's degree in Applied Mathematics",
      school: "Université d'Evry-Val d'Essonne",
      period: '08/2015 - 09/2018',
      highlights: [
        'CPGE program in Mathematics and Physics',
        'Strong foundation in mathematical principles',
        'Advanced programming skills in C, Python, R'
      ]
    }
  ];

  // Projects data
  const projects = [
    {
      title: 'MaghrebInsights',
      description: 'Analysis platform for Algerian press coverage of Morocco',
      image: '/api/placeholder/400/300',
      tags: ['NLP', 'Data Analysis', 'Python'],
      link: '#',
      highlights: [
        'Developed advanced NLP algorithms',
        'Implemented sentiment analysis',
        'Created interactive visualizations'
      ]
    },
    {
      title: 'PYCAUS',
      description: 'Python package for causal survival analysis with PyTorch',
      image: '/api/placeholder/400/300',
      tags: ['PyTorch', 'Causal Inference', 'Machine Learning'],
      link: '#',
      highlights: [
        'Built on torchtuples package',
        'Implemented survival analysis algorithms',
        'Published as open-source package'
      ]
    },
    {
      title: 'MoroccoHub API',
      description: 'Comprehensive API for accessing Morocco-related data and resources',
      image: '/api/placeholder/400/300',
      tags: ['API', 'FastAPI', 'Python'],
      link: '#',
      highlights: [
        'RESTful API design',
        'Extensive documentation',
        'Real-time data updates'
      ]
    }
  ];

  // Experience Section
  const ExperienceSection = () => (
    <Box
      id="experience"
      sx={{
        py: 8,
        backgroundColor: theme.palette.background.default,
      }}
    >
      <Container maxWidth="lg">
        <Typography variant="h2" gutterBottom>
          Experience
        </Typography>
        <Grid container spacing={4}>
          {experience.map((job, index) => (
            <Grid item xs={12} key={index}>
              <Grow in={!loading} timeout={1000 + index * 200}>
                <Card
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      boxShadow: theme.shadows[10],
                    },
                  }}
                >
                  <CardContent>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
                      <Box>
                        <Typography variant="h5" gutterBottom>
                          {job.title}
                        </Typography>
                        <Typography color="text.secondary">
                          {job.company}
                        </Typography>
                      </Box>
                      <Chip label={job.period} color="primary" variant="outlined" />
                    </Box>
                    <Box sx={{ mb: 2 }}>
                      {job.description.map((point, i) => (
                        <Box key={i} sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                          <CheckIcon sx={{ mr: 1, color: 'primary.main' }} />
                          <Typography variant="body1">
                            {point}
                          </Typography>
                        </Box>
                      ))}
                    </Box>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                      {job.technologies.map((tech, i) => (
                        <Chip
                          key={i}
                          label={tech}
                          size="small"
                          color="secondary"
                          variant="outlined"
                        />
                      ))}
                    </Box>
                  </CardContent>
                </Card>
              </Grow>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );

  // Education Section
  const EducationSection = () => (
    <Box
      id="education"
      sx={{
        py: 8,
        backgroundColor: theme.palette.background.paper,
      }}
    >
      <Container maxWidth="lg">
        <Typography variant="h2" gutterBottom>
          Education
        </Typography>
        <Grid container spacing={4}>
          {education.map((edu, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Grow in={!loading} timeout={1000 + index * 200}>
                <Card
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      boxShadow: theme.shadows[10],
                    },
                  }}
                >
                  <CardContent>
                    <Typography variant="h5" gutterBottom>
                      {edu.degree}
                    </Typography>
                    {edu.specialization && (
                      <Typography color="primary" gutterBottom>
                        {edu.specialization}
                      </Typography>
                    )}
                    <Typography color="text.secondary" gutterBottom>
                      {edu.school}
                    </Typography>
                    <Chip 
                      label={edu.period} 
                      color="primary" 
                      variant="outlined"
                      sx={{ mb: 2 }}
                    />
                    <List dense>
                      {edu.highlights.map((point, i) => (
                        <ListItem key={i}>
                          <ListItemIcon>
                            <StarIcon color="primary" fontSize="small" />
                          </ListItemIcon>
                          <ListItemText primary={point} />
                        </ListItem>
                      ))}
                    </List>
                  </CardContent>
                </Card>
              </Grow>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );

  // Projects Section
  const ProjectsSection = () => (
    <Box
      id="projects"
      sx={{
        py: 8,
        backgroundColor: theme.palette.background.default,
      }}
    >
      <Container maxWidth="lg">
        <Typography variant="h2" gutterBottom>
          Projects
        </Typography>
        <Grid container spacing={4}>
          {projects.map((project, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Grow in={!loading} timeout={1000 + index * 200}>
                <Card
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      boxShadow: theme.shadows[10],
                    },
                  }}
                >
                  <CardMedia
                    component="img"
                    height="200"
                    image={project.image}
                    alt={project.title}
                  />
                  <CardContent>
                    <Typography variant="h5" gutterBottom>
                      {project.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" paragraph>
                      {project.description}
                    </Typography>
                    <Box sx={{ mb: 2 }}>
                      {project.highlights.map((point, i) => (
                        <Box key={i} sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                          <CheckIcon sx={{ mr: 1, color: 'primary.main', fontSize: 'small' }} />
                          <Typography variant="body2">
                            {point}
                          </Typography>
                        </Box>
                      ))}
                    </Box>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                      {project.tags.map((tag, i) => (
                        <Chip
                          key={i}
                          label={tag}
                          size="small"
                          color="secondary"
                          variant="outlined"
                        />
                      ))}
                    </Box>
                  </CardContent>
                  <CardActions sx={{ mt: 'auto', p: 2 }}>
                    <Button
                      size="small"
                      endIcon={<LaunchIcon />}
                      href={project.link}
                      target="_blank"
                    >
                      View Project
                    </Button>
                  </CardActions>
                </Card>
              </Grow>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
   // Publications data
   const publications = [
    {
      title: 'SurvCaus: Representation Balancing for Survival Causal Inference',
      description: 'Individual Treatment Effects (ITE) estimation methods have risen in popularity in the last years. Our paper proposes theoretical guarantees for a representation balancing framework applied to counterfactual inference in a survival setting.',
      date: 'March 2022',
      citations: '10+',
      link: '#',
      tags: ['Causal Inference', 'Deep Learning', 'Survival Analysis']
    },
    {
      title: 'Representation Balancing with Theoretical Guarantees for Survival and Classification Causal Inference',
      description: 'Research paper offering theoretical guarantees for a representation balancing framework that can perform counterfactual inference in survival or classification contexts.',
      date: 'November 2023',
      citations: 'New',
      link: '#',
      tags: ['Multiple Treatments', 'Classification', 'Neural Networks']
    }
  ];

  // Publications Section
  const PublicationsSection = () => (
    <Box
      id="publications"
      sx={{
        py: 8,
        backgroundColor: theme.palette.background.paper,
      }}
    >
      <Container maxWidth="lg">
        <Typography variant="h2" gutterBottom>
          Publications
        </Typography>
        <Grid container spacing={4}>
          {publications.map((pub, index) => (
            <Grid item xs={12} key={index}>
              <Grow in={!loading} timeout={1000 + index * 200}>
                <Card
                  sx={{
                    height: '100%',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      boxShadow: theme.shadows[10],
                    },
                  }}
                >
                  <CardContent>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
                      <Typography variant="h5" gutterBottom>
                        {pub.title}
                      </Typography>
                      <Box sx={{ display: 'flex', gap: 1 }}>
                        <Chip label={pub.date} color="primary" variant="outlined" />
                        <Chip label={`Citations: ${pub.citations}`} color="secondary" variant="outlined" />
                      </Box>
                    </Box>
                    <Typography variant="body1" paragraph>
                      {pub.description}
                    </Typography>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
                      {pub.tags.map((tag, i) => (
                        <Chip
                          key={i}
                          label={tag}
                          size="small"
                          color="primary"
                          variant="outlined"
                        />
                      ))}
                    </Box>
                    <Button
                      variant="contained"
                      endIcon={<LaunchIcon />}
                      href={pub.link}
                      target="_blank"
                    >
                      View Paper
                    </Button>
                  </CardContent>
                </Card>
              </Grow>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );

  // Skills Section with detailed categories
  const SkillsSection = () => (
    <Box
      id="skills"
      sx={{
        py: 8,
        backgroundColor: theme.palette.background.default,
      }}
    >
      <Container maxWidth="lg">
        <Typography variant="h2" gutterBottom>
          Skills
        </Typography>
        <Grid container spacing={4}>
          {Object.entries(skills).map(([category, items], index) => (
            <Grid item xs={12} md={4} key={category}>
              <Grow in={!loading} timeout={1000 + index * 200}>
                <Paper
                  elevation={3}
                  sx={{
                    p: 3,
                    height: '100%',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      boxShadow: theme.shadows[10],
                    },
                  }}
                >
                  <Typography variant="h5" gutterBottom>
                    {category}
                  </Typography>
                  {items.map((skill) => (
                    <Box key={skill.name} sx={{ mb: 2 }}>
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                        <Typography variant="body1">{skill.name}</Typography>
                        <Typography variant="body2" color="text.secondary">
                          {skill.level}%
                        </Typography>
                      </Box>
                      <LinearProgress
                        variant="determinate"
                        value={skill.level}
                        sx={{
                          height: 6,
                          borderRadius: 3,
                          backgroundColor: 'rgba(0,0,0,0.1)',
                          '& .MuiLinearProgress-bar': {
                            borderRadius: 3,
                          }
                        }}
                      />
                    </Box>
                  ))}
                </Paper>
              </Grow>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );

  // Contact Section
  const ContactSection = () => (
    <Box
      id="contact"
      sx={{
        py: 8,
        backgroundColor: theme.palette.background.paper,
      }}
    >
      <Container maxWidth="md">
        <Typography variant="h2" gutterBottom align="center">
          Get in Touch
        </Typography>
        <Typography variant="h5" align="center" color="text.secondary" paragraph>
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
        </Typography>
        <Grid container spacing={4} justifyContent="center" sx={{ mt: 4 }}>
          <Grid item xs={12} md={4}>
            <Paper
              sx={{
                p: 3,
                textAlign: 'center',
                height: '100%',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: theme.shadows[10],
                },
              }}
            >
              <LocationIcon sx={{ fontSize: 40, color: 'primary.main', mb: 2 }} />
              <Typography variant="h6" gutterBottom>
                Location
              </Typography>
              <Typography color="text.secondary">
                {personalInfo.location}
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper
              sx={{
                p: 3,
                textAlign: 'center',
                height: '100%',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: theme.shadows[10],
                },
              }}
            >
              <MailIcon sx={{ fontSize: 40, color: 'primary.main', mb: 2 }} />
              <Typography variant="h6" gutterBottom>
                Email
              </Typography>
              <Link
                href={`mailto:${personalInfo.email}`}
                color="inherit"
                underline="hover"
              >
                {personalInfo.email}
              </Link>
            </Paper>
          </Grid>
        </Grid>
        <Box sx={{ mt: 6, textAlign: 'center' }}>
          <Typography variant="h6" gutterBottom>
            Connect with me
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
            <IconButton
              href={personalInfo.linkedin}
              target="_blank"
              color="primary"
              size="large"
            >
              <LinkedInIcon fontSize="large" />
            </IconButton>
            <IconButton
              href={personalInfo.github}
              target="_blank"
              color="primary"
              size="large"
            >
              <GitHubIcon fontSize="large" />
            </IconButton>
            <IconButton
              href={`mailto:${personalInfo.email}`}
              color="primary"
              size="large"
            >
              <MailIcon fontSize="large" />
            </IconButton>
          </Box>
        </Box>
      </Container>
    </Box>
  );

  // Main component return with layout structure
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ display: 'flex' }}>
        <AppBar
          position="fixed"
          sx={{
            zIndex: (theme) => theme.zIndex.drawer + 1,
            backgroundColor: theme.palette.background.paper,
            color: theme.palette.text.primary,
          }}
        >
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
              {personalInfo.name}
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
            <DrawerContent />
          </Drawer>
          <Drawer
            variant="permanent"
            sx={{
              display: { xs: 'none', sm: 'block' },
              '& .MuiDrawer-paper': { width: 240, boxSizing: 'border-box' },
            }}
            open
          >
            <DrawerContent />
          </Drawer>
        </Box>

        <Box
          component="main"
          sx={{
            flexGrow: 1,
            minHeight: '100vh',
            width: { sm: `calc(100% - 240px)` },
          }}
        >
          <HomeSection />
          <AboutSection />
          <ExperienceSection />
          <EducationSection />
          <ProjectsSection />
          <PublicationsSection />
          <SkillsSection />
          <ContactSection />
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default Portfolio;