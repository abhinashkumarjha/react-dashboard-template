import React, { Component } from 'react';
import { Feed, Icon } from 'semantic-ui-react';

export default function Overview(){
  return(
    <div className="ui grid">
      <div className="five wide column">
        <Feed>
          <Feed.Event>
            <Feed.Label>
              <Icon name='like' />
            </Feed.Label>
            <Feed.Content>
              <Feed.Summary>
                Total Sales<br/> <Feed.User>20000</Feed.User>
              </Feed.Summary>
            </Feed.Content>
          </Feed.Event>
        </Feed>
      </div>
      <div className="six wide column">
        <Feed>
          <Feed.Event>
            <Feed.Label>
              <Icon name='man' />
            </Feed.Label>
            <Feed.Content>
              <Feed.Summary>
                Total transactions<br/> <Feed.User>20000</Feed.User>
              </Feed.Summary>
            </Feed.Content>
          </Feed.Event>
        </Feed>
      </div>
      <div className="five wide column">
        <Feed>
          <Feed.Event>
            <Feed.Label>
              <Icon name='money' />
            </Feed.Label>
            <Feed.Content>
              <Feed.Summary>
                Average transactions<br/> <Feed.User>20000</Feed.User>
              </Feed.Summary>
            </Feed.Content>
          </Feed.Event>
        </Feed>
      </div>
    </div>
  )
}
