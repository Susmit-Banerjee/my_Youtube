import { Dislike, LikeSVG, UserSvg } from "../assets/SVG";
import { commentsData } from "../utils/config";

/**
 * * ****** N-level Nested Comments *******
 */

const CommentCard = ({ data }) => {
  const { name, text, likes } = data;
  return (
    <div className="my-2 p-1 flex gap-4 border lg:border-2 rounded-lg border-gray-200">
      <div>
        <UserSvg width="30px" height="30px" />
      </div>
      <div>
        <p className="text-sm font-semibold">{name}</p>
        <p className="text-sm">{text}</p>
        <div className="flex py-1">
          <LikeSVG width="20" height="20" />
          <p className="ml-1 mr-4 text-xs">{likes}</p>
          <Dislike width="20" height="20" />
        </div>
      </div>
    </div>
  );
};

const CommentsList = ({ comments }) =>
  comments.map((comment,index) => (
    <div key={comment?.id }>
      <CommentCard data={comment} />
      <div className="pl-3 border-l lg:pl-6 lg:border-l-2 border-l-gray-200">
        <CommentsList comments={comment?.replies} />
      </div>
    </div>
  ));

const CommentsContainer = () => {
  return (
    <div>
      <CommentsList comments={commentsData} />
    </div>
  );
};
export default CommentsContainer;
