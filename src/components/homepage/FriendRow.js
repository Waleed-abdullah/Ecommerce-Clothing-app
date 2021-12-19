import './FriendRow.css';

const FriendRow = ({ friendName }) => {
  return (
    <button disabled={true} className="friendRow">
      {friendName}
    </button>
  );
};

export default FriendRow;
