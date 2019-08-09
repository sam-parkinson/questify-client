import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import QuestListContext from '../../contexts/QuestListContext';
import TaskListContext from '../../contexts/TaskListContext';
import './QuestListItem.css';

/*
  TODO:
    Implement percentage tracking function
*/

export default class QuestListItem extends Component {
  static contextType = QuestListContext

  handleSelectQuest = (id) => {
    this.context.selected = id
  }

  render() {
    const { quest, url, urlAdd } = this.props;
    return (
      <li className='quest_card'>
        <h2>
          <Link 
            to={`${url}/${urlAdd}`}
            onClick={() => {this.handleSelectQuest(quest.id)}}
          >
            {quest.quest_name}
          </Link>
        </h2>
        <p>{quest.quest_desc}</p>
        <Progress 
          completed={quest.completed_tasks}
          total={quest.total_tasks}
        />
      </li>
    )
  }
}

class Progress extends Component {  
  static defaultProps = {
    tasks: {},
    completed: '',
    total: '',
  }

  static contextType = TaskListContext

  makeProgressBar = (total, completed) => {
    const filledArray = []
    const emptyArray = []

    for (let i = 0; i < completed; i++) {
      filledArray[i] = <li className='filled' key={i}>f</li>
    }

    if (total - completed > 0) {
      for (let i = 0; i < (total - completed); i++) {
        emptyArray[i] = <li className='empty' key={-(i+1)}>e</li>
      }
    }  
    
    return ( total > 0 
      ? <ul className='progress_bar'>
          {filledArray}
          {emptyArray}
        </ul>
      : <p>No tasks added yet!</p>
    )
  }

  render() {
    return(
      <div>
        <p>Progress:</p>
        <p>{this.props.completed} out of {this.props.total}</p>
        {this.makeProgressBar(this.props.total, this.props.completed)}
      </div>
    )
  }
}