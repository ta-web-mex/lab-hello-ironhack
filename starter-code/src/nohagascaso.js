const formatName = (user) => {
    return `${user.firstName} ${user.lastName}`;
  }
 
  const user = {
    firstName: 'Harper',
    lastName: 'Perez',
    avatarUrl: 'https://avatars1.githubusercontent.com/u/2333713?s=460&v=4'
  };
  
  const element = (
    <h2>
      Hello, {formatName(user)}!
    </h2>
   );
   
   const displayAvartar = (user) => {
      if(user.avatarUrl){
        return <img src={user.avatarUrl} />
      } else {
        return <img src='https://avatars1.githubusercontent.com/u/2333713?s=460&v=4' width='300' height='300'/>
      }
   }

      
   const displayNavbar = () => {
      if(user.avatarUrl){
        return <img src={user.avatarUrl} />
      } else {
        return <img src='https://avatars1.githubusercontent.com/u/2333713?s=460&v=4' width='300' height='300'/>
      }
   }