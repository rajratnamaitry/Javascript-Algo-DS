//Form component
import * as React from 'react';
import AceEditor from 'react-ace';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import 'ace-builds/src-noconflict/mode-javascript'
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/ext-language_tools"
import { Master } from '../class/master';
const  TableSchema = {fileList :'fileList'}
 const master = new Master('EcnmB1tYRxvHj1mFWOsH')
class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      description: '',
      codeProgram: '',
      question: ''
    };

    this.handleChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const target = (typeof event !== 'string') ? event.target : {'name':'codeProgram','value': event};
    const value =  target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
    console.log('Change detected. State updated' + name + ' = ' + value);
  }

  handleSubmit(event) {
    console.log('state',this.state)
    master.post(TableSchema.fileList,this.state).then(d => {
      const data = d.docs
          .map((doc) => {
              console.log('doc.id',doc.id)
              return { id: doc.id, ...doc.data() }
          });
  })
    event.preventDefault();
  }

  render() {

    return (
      <div>
        <form onSubmit={this.handleSubmit} >
          <div className="form-group">
            <label htmlFor="nameImput">Name</label>
            <input type="text" name="name" value={this.state.name} onChange={this.handleChange} className="form-control" id="nameImput" placeholder="Name" />
          </div>
          <div className="form-group">
            <label htmlFor="description">description</label>
            <textarea name="description" type="text" value={this.state.description} onChange={this.handleChange} className="form-control" id="description" ></textarea>
          </div>
          <div className="form-group">
            <label htmlFor="emailImput">question</label>
            <textarea name="question" type="text" value={this.state.question} onChange={this.handleChange} className="form-control" id="questionImput" ></textarea>
          </div>
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
                fontSize={14}
                showPrintMargin={false}
                showGutter={true}
                onChange={this.handleChange}
                highlightActiveLine={true}
                value={this.state.codeProgram}
                setOptions={{
                  enableBasicAutocompletion: true,
                  enableLiveAutocompletion: true,
                  enableSnippets: true,
                  showLineNumbers: true,
                  tabSize: 3,
                }} />
            </Paper>
          </Grid>
          <input type="submit" value="Submit" className="btn btn-primary" />
        </form>
      </div>
    )
  }
}

export default ContactForm;