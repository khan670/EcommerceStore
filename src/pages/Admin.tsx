const Admin = () => {
  return (
    <>
      <div className="p-3">
        <img src="/logo-1.png" alt="" />
      </div>
      <div className="flex gap-4 p-4">
        <div className="bg-color-text-body p-5 rounded-lg">
          <img
            src="/fashion-1.png"
            width={120}
            height={120}
            alt=""
            className="rounded-full object-cover"
          />
        </div>
        <div className="flex-1 bg-color-heading">dashboard content</div>
      </div>
    </>
  );
};

export default Admin;
