const Organization = ({ organization }) => {
  return (
    <div>
      {organization.map((org) => {
        return <div key={org.name}>{org.name}</div>;
      })}
    </div>
  );
};

export default Organization;
