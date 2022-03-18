import * as React from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MuiDrawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Link from '@mui/material/Link';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import PlayArrowOutlinedIcon from '@mui/icons-material/PlayArrowOutlined';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Master } from '../class/master';
import AceEditor from 'react-ace';
import 'ace-builds/src-noconflict/mode-javascript'
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/ext-language_tools"
import {
    Accordion,
    AccordionSummary,
    Fab,
    AccordionDetails
} from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
const TableSchema = { fileList: 'fileList' }
const master = new Master('EcnmB1tYRxvHj1mFWOsH')
function Copyright(props: any) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="https://mui.com/">
                Algo and DS
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const drawerWidth: number = 240;

interface AppBarProps extends MuiAppBarProps {
    open?: boolean;
}

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        '& .MuiDrawer-paper': {
            position: 'relative',
            whiteSpace: 'nowrap',
            width: drawerWidth,
            transition: theme.transitions.create('width', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen,
            }),
            boxSizing: 'border-box',
            ...(!open && {
                overflowX: 'hidden',
                transition: theme.transitions.create('width', {
                    easing: theme.transitions.easing.sharp,
                    duration: theme.transitions.duration.leavingScreen,
                }),
                width: theme.spacing(7),
                [theme.breakpoints.up('sm')]: {
                    width: theme.spacing(9),
                },
            }),
        },
    }),
);

const mdTheme = createTheme(
    {
        palette: {
            mode: 'dark',
        },
    }
);
type IfileList = {
    url?: string | undefined,
    codeProgram?: string,
    description?: string,
    question?: string,
    name: string
}

function DashboardContent() {
    const [open, setOpen] = React.useState(true);
    const [question, setQuestion] = React.useState<string | undefined>('');
    const [fileList, setFileList] = React.useState([{
        codeProgram: '',
        description: '',
        question: '',
        name: ''
    }]);
    const [codeRun, setCodeRun] = React.useState(``);
    const [codeOutput, setCodeOutput] = React.useState(`// output`);
    React.useEffect(() => {
        master.get(TableSchema.fileList).then(d => {
            const data = d.docs
                .map((doc: any) => {
                    console.log('doc.id', doc.id)
                    return { id: doc.id, ...doc.data() }
                });
            setFileList(data)
        })
    }, [master]);
    const toggleDrawer = () => {
        setOpen(!open);
    };
    const runFn = () => {
        const output = eval(codeRun);
        console.log('codeRun', codeRun)
        console.log(output, codeOutput)
        setCodeOutput(output);
    }
    const getFileContent = (url: any) => {
        fetch('./algo/'+url, {
            mode: 'no-cors', 
            headers: {
                'content-type': 'text/html'
            }
        })
        .then(e=>{
            console.log('type',e.type)
           return e.text()
        })
        .then(e => {
            console.log('text', e);
            setCodeRun(e)
        }).catch(console.log);
    }
    const codeEditorChange = (e: string) => {
        setCodeRun(e);
    };
    const [expanded, setExpanded] = React.useState<string | false>(false)
    const [formState, setFormState] = React.useState({
        codeProgram: '',
        description: '',
        question: '',
        name: ''
    });
    const handleChange = (isExpanded: boolean, panel: string) => {
        setExpanded(isExpanded ? panel : false)
    }
    const handleSubmit = (event: any) => {
        alert('A name was submitted: ');
        setFormState
        event.preventDefault();
    }
    return (
        <ThemeProvider theme={mdTheme}>
            <Box sx={{ display: 'flex' }}>
                <CssBaseline />
                <AppBar position="absolute" open={open}>
                    <Toolbar
                        sx={{
                            pr: '24px', // keep right padding when drawer closed
                        }}
                    >
                        <IconButton
                            edge="start"
                            color="inherit"
                            aria-label="open drawer"
                            onClick={toggleDrawer}
                            sx={{
                                marginRight: '36px',
                                ...(open && { display: 'none' }),
                            }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography
                            component="h1"
                            variant="h6"
                            color="inherit"
                            noWrap
                            sx={{ flexGrow: 1 }}
                        >
                            Algorithm & Data Structures
                        </Typography>
                    </Toolbar>
                </AppBar>
                <Drawer variant="permanent" open={open}>
                    <Toolbar
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'flex-end',
                            px: [1],
                        }}
                    >
                        <IconButton onClick={toggleDrawer}>
                            <ChevronLeftIcon />
                        </IconButton>
                    </Toolbar>
                    <Divider />
                    <List component="nav">
                        {fileList.map((el: IfileList, index) => (
                            <ListItem button key={el.name} onClick={(e) => {
                                getFileContent(el.name);
                                setQuestion(el.question)
                            }}>
                                <ListItemIcon>
                                </ListItemIcon>
                                <ListItemText primary={el.name} />
                            </ListItem>
                        ))}
                        <Divider sx={{ my: 1 }} />
                    </List>
                </Drawer>
                <Box
                    component="main"
                    sx={{
                        backgroundColor: (theme) =>
                            theme.palette.mode === 'light'
                                ? theme.palette.grey[100]
                                : theme.palette.grey[900],
                        flexGrow: 1,
                        height: '100vh',
                        overflow: 'auto',
                    }}
                >
                    <Toolbar />
                    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
                        <Grid container spacing={3}>
                            {/* Editor */}
                            <Accordion
                                expanded={true}
                                onChange={(event, isExpanded) => handleChange(isExpanded, 'panel1')}>
                                <AccordionSummary
                                    aria-controls='panel1-content'
                                    id='panel1-header'
                                >
                                    <Typography> Editor </Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>
                                        {question}
                                    </Typography>
                                    // Editor
                                    <Grid item xs={12} md={12} lg={12}>
                                        <Paper
                                            sx={{
                                                p: 2,
                                                display: 'flex',
                                                flexDirection: 'column',
                                                width: 899,
                                                height: 440,
                                            }}
                                        >
                                            <AceEditor
                                                width="100%"
                                                height="100%"
                                                wrapEnabled={true}
                                                placeholder="Placeholder Text"
                                                mode="javascript"
                                                theme="monokai"
                                                name="blah1"
                                                onChange={codeEditorChange}
                                                onLoad={runFn}
                                                fontSize={14}
                                                showPrintMargin={false}
                                                showGutter={true}
                                                highlightActiveLine={true}
                                                value={`function onLoad(editor) { 
                                            return "i've loaded"
                                        };
                                        onLoad()`}
                                                setOptions={{
                                                    enableBasicAutocompletion: true,
                                                    enableLiveAutocompletion: true,
                                                    enableSnippets: true,
                                                    showLineNumbers: true,
                                                    tabSize: 3,
                                                }} />
                                        </Paper>
                                    </Grid>
                                    <Fab color="primary" size="small" onClick={runFn}>
                                        <PlayArrowOutlinedIcon />
                                    </Fab >
                                    // Output
                                    <Grid item xs={12} md={12} lg={12}>
                                        <Paper
                                            sx={{
                                                p: 2,
                                                display: 'flex',
                                                flexDirection: 'column',
                                                height: 100,
                                            }}
                                        >
                                            <Typography>Output</Typography>
                                            <AceEditor
                                                width="100%"
                                                height="100%"
                                                wrapEnabled={true}
                                                placeholder="Placeholder Text"
                                                mode="java"
                                                theme="github"
                                                name="blah2"
                                                readOnly={true}
                                                // onLoad={console.log}
                                                // onChange={console.log}
                                                fontSize={10}
                                                showPrintMargin={false}
                                                showGutter={true}
                                                highlightActiveLine={false}
                                                value={codeOutput}
                                                setOptions={{
                                                    enableBasicAutocompletion: true,
                                                    enableLiveAutocompletion: true,
                                                    enableSnippets: true,
                                                    showLineNumbers: true,
                                                    tabSize: 3,
                                                }} />
                                        </Paper>
                                    </Grid>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion
                                expanded={expanded === 'panel3'}
                                onChange={(event, isExpanded) => handleChange(isExpanded, 'panel3')}>
                                <AccordionSummary
                                    aria-controls='panel3-content'
                                    id='panel3-header'
                                    expandIcon={<ExpandMoreIcon />}>
                                    <Typography> Solutions </Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>
                                        <Grid item xs={12} md={12} lg={12}>
                                            <Paper
                                                sx={{
                                                    p: 2,
                                                    display: 'flex',
                                                    flexDirection: 'column',
                                                    width: 899,
                                                    height: 440,
                                                }}
                                            >
                                                <AceEditor
                                                    width="100%"
                                                    height="100%"
                                                    wrapEnabled={true}
                                                    placeholder="Placeholder Text"
                                                    mode="javascript"
                                                    theme="monokai"
                                                    name="blah3"
                                                    fontSize={14}
                                                    readOnly={true}
                                                    showPrintMargin={false}
                                                    showGutter={true}
                                                    highlightActiveLine={true}
                                                    value={codeRun}
                                                    setOptions={{
                                                        enableBasicAutocompletion: true,
                                                        enableLiveAutocompletion: true,
                                                        enableSnippets: true,
                                                        showLineNumbers: true,
                                                        tabSize: 3,
                                                    }} />
                                            </Paper>
                                        </Grid>
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                        </Grid>
                        <Copyright sx={{ pt: 4 }} />
                    </Container>
                </Box>
            </Box>
        </ThemeProvider>
    );
}

export default function Dashboard() {
    return <DashboardContent />;
}
