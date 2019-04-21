import React from 'react';
import firebase from 'react-native-firebase';
import { View, Text, TouchableOpacity } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { Post } from '../index';
import computedDate from '../../functions/computedDate';

import styles from './styles';

class Issues extends React.Component {
  state = {
    posts: [],
  }

  componentDidMount() {
    this.searchPosts();
  }

  searchPosts = async () => {
    await firebase.firestore().collection('posts').onSnapshot((ref) => {
      const posts = ref.docs.map((item) => {
        const id = item.id;
        const data = item.data();
        const createdAt = computedDate(item.data().created_at);

        return { id, ...data, createdAt };
      });

      this.setState({ posts });
    });
  }

  render() {
    const { posts } = this.state;

    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.text}>Minhas dúvidas</Text>

          <TouchableOpacity style={styles.button}>
            <Icon style={styles.icon} name="chevron-right" />
          </TouchableOpacity>
        </View>

        {
          posts.map(post => (
            <Post
              key={post.id}
              title={post.title}
              date={post.createdAt}
              status={post.active}
              course={post.category}
            />
          ))
        }
      </View>
    );
  }
}

export default Issues;
