const { MCPServer } = require('zapier-platform-core');

const triggers = {
  new_task: {
    key: 'new_task',
    noun: 'Task',
    display: {
      label: 'New Task',
      description: 'Triggers when a new task is created.'
    },
    operation: {
      perform: () => {
        return [
          {
            id: 1,
            title: 'Test Task',
            description: 'This is a test task'
          }
        ];
      }
    }
  }
};

const creates = {
  create_task: {
    key: 'create_task',
    noun: 'Task',
    display: {
      label: 'Create Task',
      description: 'Creates a new task.'
    },
    operation: {
      inputFields: [
        {
          key: 'title',
          required: true,
          type: 'string'
        },
        {
          key: 'description',
          required: false,
          type: 'text'
        }
      ],
      perform: (z, bundle) => {
        return {
          id: Math.floor(Math.random() * 1000),
          title: bundle.inputData.title,
          description: bundle.inputData.description
        };
      }
    }
  }
};

const App = {
  version: require('./package.json').version,
  platformVersion: require('zapier-platform-core').version,

  triggers,
  creates,

  beforeRequest: [],
  afterResponse: [],
  resources: {},
  searches: {}
};

const server = new MCPServer(App);
server.listen(9000, () => {
  console.log('Zapier MCP Server is running on port 9000');
});