const SideNav = () => {
  return (
    <div className='sidenav'>
      <div className='buttons-container'>
        <div className='buttons red'></div>
        <div className='buttons green'></div>
      </div>
      <div className='user-img'>
        <img
          src='https://images.unsplash.com/photo-1593085512500-5d55148d6f0d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80'
          alt='Minion'
        />
      </div>
      <div>+</div>
    </div>
  );
};

export default SideNav;
