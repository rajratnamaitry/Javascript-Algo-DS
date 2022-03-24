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
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Link from '@mui/material/Link';
import PlayArrowOutlinedIcon from '@mui/icons-material/PlayArrowOutlined';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { Master } from '../class/master';
import AceEditor from 'react-ace';
import 'ace-builds/src-noconflict/mode-javascript'
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/ext-language_tools"
import TreeView from '@mui/lab/TreeView';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import TreeItem from '@mui/lab/TreeItem';
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
    folder?: string,
    subfolder?: string,
    description?: string,
    question?: string,
    name: string
}
// const list = [
//     "binary_heap/Max_Binary_Heap_extract.js",
//     "binary_heap/Max_Binary_Heap_Insert.js",
//     "binary_heap/Priority_Queue.js",
//     "BTS/BST_bfs.js",
//     "BTS/BST_Classes.js",
//     "BTS/BST_dfs.js",
//     "BTS/BST_Find.js",
//     "BTS/BST_Insert.js",
//     "BTS/BST_longest.js",
//     "BTS/BST_remove.js",
//     "BTS/BTS_checkIfBal.js",
//     "divideAndConquer/countZeroes.js",
//     "divideAndConquer/findRotatedIndex.js",
//     "divideAndConquer/sortedFrequency.js",
//     "ds/instance_methods.js",
//     "ds/point_class.js",
//     "ds/student_class.js",
//     "dynamicPrograming/coin.js",
//     "dynamicPrograming/minCoinChange.js",
//     "frequency/autocomplete.js",
//     "frequency/constructNote.js",
//     "frequency/findAllDuplicates.js",
//     "frequency/findPair.js",
//     "frequency/frequencyCounter.js",
//     "graph/dijkstras_version2.js",
//     "graph/graphRemoveVertex.js",
//     "graph/graph_add_edge.js",
//     "graph/graph_add_vertex.js",
//     "graph/graph_BFS.js",
//     "graph/graph_DFS_iterative.js",
//     "graph/graph_DFS_recursive.js",
//     "graph/graph_remove_edge.js",
//     "graph/simplePriorityQueue.js",
//     "graph/weightedGraph.js",
//     "hash/basic_hash.js",
//     "hash/hash_table_keys_and_values.js",
//     "hash/hash_table_set_and_get.js",
//     "hash/improved_hash.js",
//     "recursive/capitalizeFirst.js",
//     "recursive/capitalizeWords.js",
//     "recursive/collectStrings.js",
//     "recursive/collect_odds_pure_recursion.js",
//     "recursive/factorial_recursive.js",
//     "recursive/flattenWrite.js",
//     "recursive/helper_method_recursion.js",
//     "recursive/isPalindrome.js",
//     "recursive/nestedEvenSum.js",
//     "recursive/power.js",
//     "recursive/productArray.js",
//     "recursive/recursiveRange.js",
//     "recursive/reverse.js",
//     "recursive/someRecursive.js",
//     "recursive/stringifyNumbers.js",
//     "search/binary_search.js",
//     "search/linear_search.js",
//     "search/string_search.js",
//     "sort/bubble_unoptimized.js",
//     "sort/InsertionSort.js",
//     "sort/mergeArrays.js",
//     "sort/mergeSort.js",
//     "sort/optimized_bubble.js",
//     "sort/pivot.js",
//     "sort/quicksort.js",
//     "sort/radix_helpers.js",
//     "sort/radix_sort.js",
//     "sort/selectionSort.js",
//     "tree_traversal/Breadth_FIrst_Tree.js",
//     "tree_traversal/Depth_First_Tree.js",
//     "list/dll/DLL_Classes.js",
//     "list/dll/DLL_Get.js",
//     "list/dll/DLL_Insert.js",
//     "list/dll/DLL_Pop.js",
//     "list/dll/DLL_Push.js",
//     "list/dll/DLL_remove.js",
//     "list/dll/DLL_reverse.js",
//     "list/dll/DLL_Set.js",
//     "list/dll/DLL_Shift.js",
//     "list/dll/DLL_Unshift.js",
//     "list/sll/Singly_Linked_List_Push.js",
//     "list/sll/sll_get.js",
//     "list/sll/sll_insert.js",
//     "list/sll/sll_pop.js",
//     "list/sll/sll_remove.js",
//     "list/sll/sll_rotate.js",
//     "list/sll/sll_set.js",
//     "list/stack/Queue.js",
//     "list/stack/Stack pop.js",
//     "list/stack/stackWithQueue.js",
//     "list/stack/Stack_push.js",
//     "trie/addWord.js",
//     "trie/findWord.js",
//     "trie/getWords.js",
//     "trie/removeWord.js"];
//     list.forEach(e=>{
//         master.post('fileList',{
//             name:e,
//             question:'',
//             description:'',
//             url:e
//         }).then(console.log)
//     })
function DashboardContent() {
    const [question, setQuestion] = React.useState<string | undefined>('');
    const [fileList, setFileList] = React.useState([{
            name: "",
            data: [{
                url: "",
                codeProgram: "",
                folder: "",
                subfolder: "",
                description: "",
                question: "",
                name: ""
            }]
        }]);
    const [codeRun, setCodeRun] = React.useState(``);
    const [codeOutput, setCodeOutput] = React.useState(`// output`);
    React.useEffect(() => {
        master.get(TableSchema.fileList).then(d => {
            const data = d.docs
                .map((doc: any) => {
                    return { id: doc.id, ...doc.data() }
                })
            const fre: any = {}
            let newList: any = []
            for (let ob of data) {
                fre[ob.folder] = (fre[ob.folder] || 0) + 1;
            }
            for (let name in fre) {
                newList.push({ name, data: data.filter(e => e.folder == name) });
            }
            if(newList.length == 0){
                newList = [{"name":"general","data":[{"id":"04QhfVS67KVemugNqyyM","description":"","folder":"general","url":"https://firebasestorage.googleapis.com/v0/b/jsalgods.appspot.com/o/countUniqueValues.js?alt=media&token=da501324-e5b5-452c-ac54-0ac24264d8ba","question":"Write program to count Unique Values","name":"countUniqueValues.js"},{"id":"3SQeACRIGPgXN1HjamgI","description":"","folder":"general","name":"fib.js","question":"Write Fib series","url":"/v0/b/jsalgods.appspot.com/o/fib.js?alt=media&token=1aad32ae-58e9-41a8-9006-ed92daf77999"},{"id":"GMegwbuqVOyXXP9Ev5ik","question":"Write program to check valid anagram","folder":"general","name":"anagram.js","url":"https://firebasestorage.googleapis.com/v0/b/jsalgods.appspot.com/o/anagram.js?alt=media&token=65e21496-d994-4520-9bff-3359149696fe","description":""},{"id":"Hnj8SJpWzWOnZ6HneftV","url":"https://firebasestorage.googleapis.com/v0/b/jsalgods.appspot.com/o/minSubArraySum.js?alt=media&token=3480608c-34e3-48a4-8999-64b1e7f1a544","folder":"general","description":"Sliding Window - If there isn't one, return 0 instead.Examples: minSubArrayLen ","name":"minSubArraySum.js","question":"Write a function called minSubArrayLen which accepts two parameters - an array of positive integers and a  * positive integer This function should return the minimal length of a contiguous subarray of which the sum   * is greater than or equal to the integer passed to the function."},{"id":"RVUg6a6akJBOTzK4LdGQ","url":"https://firebasestorage.googleapis.com/v0/b/jsalgods.appspot.com/o/averagePair.js?alt=media&token=36180b72-a2b7-4081-9122-8a40dfb93463","folder":"general","description":"/**  * Multiple Pointers - averagePair  * Write a function called averagePair.  Given a sorted array of integers and a target average,   * determine if there is a pair of values in the array where the average of the pair equals the target average.   * There may be more than one pair that matches the average target.  */","question":"Write program to check valid averagePair","name":"averagePair.js"},{"id":"TU4mK5NZVwzkJGQIrAw3","description":"","question":"write function called maxSubArraySum which  accepts an array of integers and a number called n. the function should calculate the maximum sum of n consecutive elements in the array.","folder":"general","name":"max_sum_naive.js","url":"https://firebasestorage.googleapis.com/v0/b/jsalgods.appspot.com/o/max_sum_naive.js?alt=media&token=c3de5f31-ba34-4add-bc87-d960bd1e07b2"},{"id":"Z2BdVQbrfCWKH7d93Jip","folder":"general","name":"findLongestSubString.js","description":"Sliding Window - findLongestSubstring","url":"https://firebasestorage.googleapis.com/v0/b/jsalgods.appspot.com/o/findLongestSubString.js?alt=media&token=a31120c7-d9cc-4dc8-a2a5-090d70b0001c","question":"Write a function called findLongestSubstring, which accepts a string and returns the length of the longest substring with all distinct characters."},{"id":"aamcwMFvVxvDwKuHybVp","description":"","question":"Write program to get sum zero pair","name":"sum_zero_naive.js","url":"https://firebasestorage.googleapis.com/v0/b/jsalgods.appspot.com/o/sum_zero_naive.js?alt=media&token=eea2e4e0-41f1-4eb7-8bbd-167629486f73","folder":"general"}]},{"name":"search","data":[{"id":"0POcQRGaWsjA2DefXF31","name":"search/string_search.js","question":"","url":"search/string_search.js","folder":"search","description":""},{"id":"2LDzRssv9jMaiLvDQuTt","name":"search/linear_search.js","description":"","question":"","url":"search/linear_search.js","folder":"search"},{"id":"ig75fuFHULyS4cEipPMA","description":"","name":"search/binary_search.js","url":"search/binary_search.js","question":"","folder":"search"}]},{"name":"sort","data":[{"id":"0VMqhPfHZwuLrbjnIGE7","description":"","url":"sort/optimized_bubble.js","folder":"sort","question":"","name":"sort/optimized_bubble.js"},{"id":"4lBbSZOhFC4ueZY2cMz0","url":"sort/mergeArrays.js","name":"sort/mergeArrays.js","folder":"sort","description":"","question":""},{"id":"8oBGcYEtq41Z1c7jYnaN","question":"","description":"","name":"sort/quicksort.js","url":"sort/quicksort.js","folder":"sort"},{"id":"8wmWVtnIss0wcsUSfxrT","folder":"sort","description":"","name":"sort/mergeSort.js","question":"","url":"sort/mergeSort.js"},{"id":"BYbBVbptbbMs1CEsRqFv","url":"sort/InsertionSort.js","name":"sort/InsertionSort.js","question":"","folder":"sort","description":""},{"id":"FWR005YAlanbLVjxDDlk","description":"","name":"sort/radix_sort.js","url":"sort/radix_sort.js","folder":"sort","question":""},{"id":"KYxCPuRdR3wOKHTEjQaV","description":"","url":"sort/pivot.js","folder":"sort","name":"sort/pivot.js","question":""},{"id":"VdaxZSfbYf1HnpHiuwN6","url":"sort/bubble_unoptimized.js","folder":"sort","name":"sort/bubble_unoptimized.js","question":"","description":""},{"id":"XFs2ggyelG5raRHvl76V","folder":"sort","question":"","name":"sort/radix_helpers.js","url":"sort/radix_helpers.js","description":""},{"id":"z6nzMcg5vD7QatG06IEw","url":"sort/selectionSort.js","question":"","name":"sort/selectionSort.js","description":"","folder":"sort"}]},{"name":"BTS","data":[{"id":"27RE0PeoZvDYHMtCgVPP","folder":"BTS","description":"","url":"BTS/BST_Classes.js","question":"","name":"BTS/BST_Classes.js"},{"id":"3brDEZb8Wm7HjHSdCRvq","name":"BTS/BTS_checkIfBal.js","description":"","folder":"BTS","url":"BTS/BTS_checkIfBal.js","question":""},{"id":"CHUOlYXPJvFwp2bJaTxB","url":"BTS/BST_longest.js","name":"BTS/BST_longest.js","folder":"BTS","question":"","description":""},{"id":"G5cFzZCkcyf6JEGyI3hP","name":"BTS/BST_remove.js","folder":"BTS","description":"","question":"","url":"BTS/BST_remove.js"},{"id":"H8heWsjDtkbd7XagPIOb","folder":"BTS","description":"","question":"","url":"BTS/BST_dfs.js","name":"BTS/BST_dfs.js"},{"id":"HxpKyjEAYwG7RvsMeJY0","folder":"BTS","url":"BTS/BST_Insert.js","name":"BTS/BST_Insert.js","question":"","description":""},{"id":"JJmLPdszrlE7LDRWgpEA","url":"BTS/BST_Find.js","name":"BTS/BST_Find.js","question":"","description":"","folder":"BTS"},{"id":"JoQL840DY32JE3g1IuZs","url":"BTS/BST_bfs.js","folder":"BTS","description":"","question":"","name":"BTS/BST_bfs.js"}]},{"name":"recursive","data":[{"id":"493SQlkUQhTCxwaT0unF","description":"","question":"","name":"recursive/capitalizeFirst.js","url":"recursive/capitalizeFirst.js","folder":"recursive"},{"id":"4VNgCnSAuNjHmCpmE8EH","folder":"recursive","name":"recursive/isPalindrome.js","question":"","url":"recursive/isPalindrome.js","description":""},{"id":"5vu4FZFMQyWbJSGF9t7x","url":"recursive/collect_odds_pure_recursion.js","question":"","description":"","name":"recursive/collect_odds_pure_recursion.js","folder":"recursive"},{"id":"A5JOwuQp2UzRZth4KmTw","url":"recursive/power.js","name":"recursive/power.js","description":"","question":"","folder":"recursive"},{"id":"Ghcc1L3EjtEzBPiscjaP","description":"","question":"","name":"recursive/flattenWrite.js","url":"recursive/flattenWrite.js","folder":"recursive"},{"id":"Ixo9zVE2EYP7OUhuR3jG","folder":"recursive","name":"recursive/recursiveRange.js","url":"recursive/recursiveRange.js","description":"","question":""},{"id":"LL60fh90ED8aw0nn6Z9V","folder":"recursive","name":"recursive/collectStrings.js","description":"","question":"","url":"recursive/collectStrings.js"},{"id":"RMmC99UWZscSQ3tLdtx8","url":"recursive/reverse.js","name":"recursive/reverse.js","question":"","description":"","folder":"recursive"},{"id":"XcIx5a5YQ96cKYASBSBu","url":"recursive/factorial_recursive.js","folder":"recursive","question":"","name":"recursive/factorial_recursive.js","description":""},{"id":"eFXT1k7IKuON7vIEFiTS","name":"recursive/someRecursive.js","question":"","url":"recursive/someRecursive.js","description":"","folder":"recursive"},{"id":"lqKQvssHxQZgg4JEU7pA","name":"recursive/productArray.js","url":"recursive/productArray.js","description":"","folder":"recursive","question":""},{"id":"sy9kEgUsN5NMc4yflc7w","description":"","name":"recursive/nestedEvenSum.js","url":"recursive/nestedEvenSum.js","question":"","folder":"recursive"},{"id":"vfDjG5CHFIrKqcmocXyP","url":"recursive/capitalizeWords.js","name":"recursive/capitalizeWords.js","description":"","folder":"recursive","question":""},{"id":"w6sWV0hmgdKsk7agpBse","folder":"recursive","name":"recursive/helper_method_recursion.js","url":"recursive/helper_method_recursion.js","description":"","question":""},{"id":"xDYMSufB95rOxNxC3PgM","description":"","name":"recursive/stringifyNumbers.js","url":"recursive/stringifyNumbers.js","question":"","folder":"recursive"}]},{"name":"dynamicPrograming","data":[{"id":"4aymAqv0sy9n0uWKvyq6","description":"","question":"","url":"dynamicPrograming/coin.js","folder":"dynamicPrograming","name":"dynamicPrograming/coin.js"},{"id":"v19u980CYIEn9xmzPTsR","description":"","name":"dynamicPrograming/minCoinChange.js","url":"dynamicPrograming/minCoinChange.js","question":"","folder":"dynamicPrograming"}]},{"name":"frequency","data":[{"id":"4fMTU2J4qkhAQryLi7G7","question":"","name":"frequency/findPair.js","url":"frequency/findPair.js","folder":"frequency","description":""},{"id":"EcnmB1tYRxvHj1mFWOsH","name":"areThereDuplicates.js","folder":"frequency","url":"https://firebasestorage.googleapis.com/v0/b/jsalgods.appspot.com/o/areThereDuplicate.js?alt=media&token=90340581-5150-4bd1-9a68-008daf0222c0","question":"Write program to check duplicate value in array","description":"Frequency Counter / Multiple Pointers - areThereDuplicates Implement a function called, areThereDuplicates  which accepts a variable number of arguments, and checks whether there are any duplicates among the arguments passed in. You can solve this using the frequency counter pattern OR the multiple pointers pattern."},{"id":"NfTdzfVST6JJ0g4FZ1bh","question":"","description":"","url":"frequency/frequencyCounter.js","name":"frequency/frequencyCounter.js","folder":"frequency"},{"id":"eO3xPp4PyTB2ZoK9VG67","description":"","url":"frequency/findAllDuplicates.js","folder":"frequency","name":"frequency/findAllDuplicates.js","question":""},{"id":"mBAnXNNFijytcuy7vIO4","description":"Use Frequency pattern","folder":"frequency","url":"https://firebasestorage.googleapis.com/v0/b/jsalgods.appspot.com/o/same_naive_solution.js?alt=media&token=d044e90e-5538-4515-9363-00be351ce496","name":"same_naive_solution.js","question":"Write program to check array2 values content squre value of array1"},{"id":"oNpSsuBqp221iU5omfgp","folder":"frequency","description":"","name":"frequency/constructNote.js","question":"","url":"frequency/constructNote.js"},{"id":"uPKexwUehGh0GhFgstLv","question":"","url":"frequency/autocomplete.js","description":"","folder":"frequency","name":"frequency/autocomplete.js"}]},{"name":"divideAndConquer","data":[{"id":"6X78wzcNDTCZcsdHJX8v","question":"","name":"divideAndConquer/countZeroes.js","url":"divideAndConquer/countZeroes.js","folder":"divideAndConquer","description":""},{"id":"9WEhg2z0IYMwjjDCoLdq","url":"divideAndConquer/sortedFrequency.js","folder":"divideAndConquer","name":"divideAndConquer/sortedFrequency.js","question":"","description":""},{"id":"DiEQSPb4JWbJG6qfuaFu","folder":"divideAndConquer","question":"","name":"divideAndConquer/findRotatedIndex.js","description":"","url":"divideAndConquer/findRotatedIndex.js"}]},{"name":"graph","data":[{"id":"7nNRu3hIWCUOSpoDG3Q3","description":"","url":"graph/graph_DFS_recursive.js","folder":"graph","name":"graph/graph_DFS_recursive.js","question":""},{"id":"CvLWVcbnLWzo4RnejnRS","folder":"graph","description":"","name":"graph/graph_BFS.js","question":"","url":"graph/graph_BFS.js"},{"id":"Ela0kOdmy8mA6IZM8UKF","question":"","folder":"graph","name":"graph/simplePriorityQueue.js","description":"","url":"graph/simplePriorityQueue.js"},{"id":"Tj5NUValYmm4EbqqILpF","url":"graph/graph_remove_edge.js","name":"graph/graph_remove_edge.js","description":"","question":"","folder":"graph"},{"id":"eTWETvl1hYZFKXjwvjqa","name":"graph/graph_add_edge.js","folder":"graph","question":"","url":"graph/graph_add_edge.js","description":""},{"id":"hjB7KWxsFuHvfhakLnPs","name":"graph/graph_add_vertex.js","url":"graph/graph_add_vertex.js","description":"","question":"","folder":"graph"},{"id":"kM2l4305r2hdAYU9ZKrQ","question":"","name":"graph/graph_DFS_iterative.js","folder":"graph","description":"","url":"graph/graph_DFS_iterative.js"},{"id":"lX4S2ozVKIZ7MojlqWPh","description":"","name":"graph/graphRemoveVertex.js","url":"graph/graphRemoveVertex.js","question":"","folder":"graph"},{"id":"ovtk2sKNwfOSVVZm2B0y","description":"","folder":"graph","name":"graph/dijkstras_version2.js","url":"graph/dijkstras_version2.js","question":""},{"id":"sbwrIItx0YOrcgvLOhvl","folder":"graph","description":"","name":"graph/weightedGraph.js","question":"","url":"graph/weightedGraph.js"}]},{"name":"list","data":[{"id":"BZ6QTV5AcARodWJdZ5qT","folder":"list","description":"","name":"list/sll/sll_pop.js","question":"","url":"list/sll/sll_pop.js"},{"id":"CxjFny3ZYTEkCfejWyxN","question":"","url":"list/sll/sll_get.js","name":"list/sll/sll_get.js","folder":"list","description":""},{"id":"DIfQURkBHEw7OcaeY56N","url":"list/dll/DLL_Insert.js","name":"list/dll/DLL_Insert.js","folder":"list","description":"","question":""},{"id":"Dkzls3l8QAVGcGRMkTo6","description":"","folder":"list","question":"","name":"list/dll/DLL_Push.js","url":"list/dll/DLL_Push.js"},{"id":"E9oNAIe8cN9hJH4OkmIz","folder":"list","description":"","url":"list/dll/DLL_remove.js","name":"list/dll/DLL_remove.js","question":""},{"id":"ErJz3xIh7yCBDdxDiFlr","url":"list/dll/DLL_Classes.js","description":"","folder":"list","question":"","name":"list/dll/DLL_Classes.js"},{"id":"EzuF9sX3Bn0RZ5cPq2wT","description":"","name":"list/dll/DLL_Set.js","question":"","url":"list/dll/DLL_Set.js","folder":"list"},{"id":"FmqutStUHejCXJLZY1MN","question":"","name":"list/stack/stackWithQueue.js","description":"","folder":"list","url":"list/stack/stackWithQueue.js"},{"id":"IjBtiTUddn2a3KEix0ji","url":"list/dll/DLL_Shift.js","folder":"list","name":"list/dll/DLL_Shift.js","question":"","description":""},{"id":"KwmnJVRiZWgJ8gMzXoHP","url":"list/dll/DLL_Get.js","question":"","description":"","folder":"list","name":"list/dll/DLL_Get.js"},{"id":"NvnHZYFhCRDdoGxgJrfU","url":"list/dll/DLL_Unshift.js","folder":"list","description":"","name":"list/dll/DLL_Unshift.js","question":""},{"id":"QJ1rV8cVX4OGgNMIaaIs","description":"","name":"list/stack/Stack_push.js","folder":"list","question":"","url":"list/stack/Stack_push.js"},{"id":"VPuY3Ag0CrKF14zooBx2","name":"list/sll/sll_remove.js","description":"","folder":"list","url":"list/sll/sll_remove.js","question":""},{"id":"VipQiEpUe9LXojMuyw71","question":"","description":"","folder":"list","subfolder":"SLL","name":"list/sll/Singly_Linked_List_Push.js","url":"list/sll/Singly_Linked_List_Push.js"},{"id":"aT3T74inb3gGlBDCqdZB","subfolder":"DLL","name":"list/dll/DLL_reverse.js","url":"list/dll/DLL_reverse.js","folder":"list","question":"","description":""},{"id":"jQwD3mR691FBdaEU3GZ4","url":"list/sll/sll_insert.js","name":"list/sll/sll_insert.js","subfolder":"SLL","description":"","question":"","folder":"list"},{"id":"phPO30gRmqhDqJQgTeeM","description":"","folder":"list","url":"list/stack/Stack pop.js","question":"","subfolder":"stack","name":"list/stack/Stack pop.js"},{"id":"qNIreXFMRmD77963u2wX","description":"","url":"list/dll/DLL_Pop.js","folder":"list","question":"","name":"list/dll/DLL_Pop.js","subfolder":"DLL"},{"id":"r9acvOTXBni6JNUawDoA","subfolder":"stack","name":"list/stack/Queue.js","folder":"list","question":"","url":"list/stack/Queue.js","description":""},{"id":"vTVuqPeJUE6f0q0rxSQk","description":"","url":"list/sll/sll_set.js","name":"list/sll/sll_set.js","folder":"list","question":"","subfolder":"SLL"},{"id":"zee2UAaZP19de5u7yFGb","name":"list/sll/sll_rotate.js","description":"","question":"","folder":"list","url":"list/sll/sll_rotate.js","subfolder":"SLL"}]},{"name":"trie","data":[{"id":"BbrPJt92SbiO6jxc5Zze","name":"trie/getWords.js","url":"trie/getWords.js","question":"","description":"","folder":"trie"},{"id":"VeCfpukKZ3YIKarzdHne","url":"trie/addWord.js","description":"","question":"","folder":"trie","name":"trie/addWord.js"},{"id":"qDbOrmiuUHAGZ3CKRHV9","name":"trie/removeWord.js","url":"trie/removeWord.js","folder":"trie","description":"","question":""},{"id":"smeNtYnIctemZ2HLHisB","folder":"trie","url":"trie/findWord.js","description":"","name":"trie/findWord.js","question":""}]},{"name":"hash","data":[{"id":"JKePAp00D57nJSLwBZO7","folder":"hash","description":"","name":"hash/basic_hash.js","url":"hash/basic_hash.js","question":""},{"id":"SVUMpvWB2ommBgSBko1z","folder":"hash","url":"hash/hash_table_set_and_get.js","name":"hash/hash_table_set_and_get.js","description":"","question":""},{"id":"YsxXPLA2ZECmggKIOBrO","description":"","name":"hash/improved_hash.js","folder":"hash","question":"","url":"hash/improved_hash.js"},{"id":"sV5hk4quaWbS6rkYZy6T","description":"","url":"hash/hash_table_keys_and_values.js","question":"","folder":"hash","name":"hash/hash_table_keys_and_values.js"}]},{"name":"binary heap","data":[{"id":"LdrobeTBwCWMRFJyNuWt","question":"","folder":"binary heap","name":"binary_heap/Priority_Queue.js","description":"","url":"binary_heap/Priority_Queue.js"},{"id":"UJahAnfrPFxmT6rkL3xJ","name":"binary_heap/Max_Binary_Heap_Insert.js","url":"binary_heap/Max_Binary_Heap_Insert.js","question":"","description":"","folder":"binary heap"},{"id":"WXCm7v8CDAQ2oPXo5QZ0","folder":"binary heap","question":"","name":"binary_heap/Max_Binary_Heap_extract.js","url":"binary_heap/Max_Binary_Heap_extract.js","description":""}]},{"name":"tree traversal","data":[{"id":"YCmmGsgZB5FssQ2fj8v6","question":"","folder":"tree traversal","name":"tree_traversal/Depth_First_Tree.js","url":"tree_traversal/Depth_First_Tree.js","description":""},{"id":"pPrJqe0xm15eAVwh24Km","question":"","url":"tree_traversal/Breadth_FIrst_Tree.js","name":"tree_traversal/Breadth_FIrst_Tree.js","description":"","folder":"tree traversal"}]},{"name":"DS","data":[{"id":"ZwjGcGQZ8LBZmpnxRAhP","folder":"DS","name":"ds/point_class.js","question":"","description":"","url":"ds/point_class.js"},{"id":"qmjl2iNbzhqD2eLLolHJ","url":"ds/instance_methods.js","description":"","question":"","folder":"DS","name":"ds/instance_methods.js"},{"id":"zovPojbWvYqFr4Xj2rNe","question":"","folder":"DS","description":"","name":"ds/student_class.js","url":"ds/student_class.js"}]}];
            }
            console.log(newList)
            setExpanded('panel3');
            setFileList(newList)
        })
    }, [master]);
    const runFn = () => {
        const output = eval(codeRun);
        console.log('codeRun', codeRun)
        console.log(output, codeOutput)
        setCodeOutput(output);
    }
    const getFileContent = (url: any) => {
        fetch('./algo/' + url, {
            mode: 'no-cors',
            headers: {
                'content-type': 'text/html'
            }
        })
            .then(e => e.text())
            .then(e => setCodeRun(e)).catch(console.log);
    }
    const codeEditorChange = (e: string) => {
        setCodeRun(e);
    };
    const [expanded, setExpanded] = React.useState<string | false>(false)
    const handleChange = (isExpanded: boolean, panel: string) => {
        setExpanded(isExpanded ? panel : false)
    }
    return (
        <ThemeProvider theme={mdTheme}>
            <Box sx={{ display: 'flex' }}>
                <CssBaseline />
                <AppBar position="absolute" open={true}>
                    <Toolbar
                        sx={{
                            pr: '24px', // keep right padding when drawer closed
                        }}
                    >
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
                <Drawer variant="permanent" open={true}>
                    <Toolbar
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'flex-end',
                            px: [1],
                        }}
                    >
                    </Toolbar>
                    <Divider />
                    <List component="nav">
                        <TreeView
                            aria-label="file system navigator"
                            defaultCollapseIcon={<ExpandMoreIcon />}
                            defaultExpandIcon={<ChevronRightIcon />}
                            sx={{ height: 240, flexGrow: 1, maxWidth: 400, overflowY: 'auto' }}
                        >
                            {fileList.map((el, index) => (
                                <TreeItem nodeId={""+index} label={el.name}>
                                    {el.data.map((mData:any,cIndex)=>
                                     <TreeItem nodeId={""+cIndex+20 } key={mData.name} label={mData.name} onClick={(e) => {
                                        getFileContent(mData.name);
                                        setQuestion(mData.question)
                                        }} />                                        
                                    )}
                                </TreeItem>
                            ))}
                        </TreeView>
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
                                expanded={expanded === 'panel1'}
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
