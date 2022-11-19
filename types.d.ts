export interface PostType {
    caption: string;
    video: {
      asset: {
        _id: string;
        url: string;
      };
    };
    _id: string;
    postedBy: {
      _id: string;
      userName: string;
      image: string;
    };
    likes: {
      postedBy: {
        _id: string;
        userName: string;
        image: string;
      };
    }[];
    comments: {
      comment: string;
      _key: string;
      postedBy: {
        _ref: string;
      };
    }[];
    userId: string;
    image: {
      asset: {
        _id: string;
        url: string;
      };
    };
}
  
export interface IUser {
    _id: string;
    _type: string;
    userName: string;
    image: string;
}