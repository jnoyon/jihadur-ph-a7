const Skeleton = () => {
  return (
    <div className="flex flex-col gap-4 bg-white p-5 rounded-md">
      <div className="flex items-center gap-4">
        <div className="skeleton h-16 w-16 shrink-0 rounded-full"></div>
        <div className="flex flex-col gap-4">
          <div className="skeleton h-4 w-20"></div>
          <div className="skeleton h-4 w-28"></div>
        </div>
      </div>
      <div className="skeleton h-32 w-full"></div>
    </div>
  );
};

export default function CardSkeleton() {
  return (
    <div className="grid grid-cols-3 gap-5 w-11/12 mx-auto">
      <Skeleton />
      <Skeleton />
      <Skeleton />
      <Skeleton />
      <Skeleton />
      <Skeleton />
    </div>
  );
}
