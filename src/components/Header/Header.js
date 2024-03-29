import React, { Component } from 'react';
import QuestListContext from '../../contexts/QuestListContext';
import './Header.css'

export default class Header extends Component {
  static defaultProps = {
    questId: null,
  }

  static contextType = QuestListContext

  getQuestById = id => {
    return this.context.questList.filter(quest => quest.id === id)[0]
  }

  getQuestName = id => {
    return this.getQuestById(id).quest_name
  }

  getQuestDesc = id => {
    return this.getQuestById(id).quest_desc
  }

  setHeader() {
    let headText = {}

    switch(this.props.type) {
      case 'user':
        headText = { h1: 'Profile', span: `View your quests and progress` };
        break;
      case 'quest':
        headText = this.props.questId ? { 
          h1: this.getQuestName(this.props.questId), 
          span: this.getQuestDesc(this.props.questId),
        } : { h1: 'Questify', span: 'Turn your mundane tasks into epic quests!' };
        break;
      case 'demo':
        headText = { h1: 'Demo', span: 'See what Questify looks like!' };
        break;
      case 'login':
        headText = { h1: 'Log In', span: 'Turn your mundane tasks into epic quests!' };
        break;
      case 'register' :
          headText = { h1: 'Register', span: 'Turn your mundane tasks into epic quests!' };
          break;
      default:
        headText = { h1: 'Questify', span: 'Turn your mundane tasks into epic quests!' };
    }

    return (
      <header>
        <h1>{headText.h1}</h1>
        <span>{headText.span}</span>
      </header>
    )
  }

  render() {
    return (
      this.setHeader()
    )
  }
}