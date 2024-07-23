import { footerGrid } from "@/data";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";

const FotterGrid = () => {
  // Filter gridItems to include only the item with id === 6
  const filteredItems = footerGrid.filter(item => item.id === 6);

  // Assuming there's only one item in filteredItems (id 6)
  const item = filteredItems[0];

  return (
    <div className=" w-full flex justify-center">
      <BentoGrid className="w-full py-20">
        <BentoGridItem
          id={item.id}
          key={item.id}
          title={item.title}
          description={item.description}
          className={` ${item.className}`}
          img={item.img}
          imgClassName={item.imgClassName}
          titleClassName={`text-center ${item.titleClassName}`}
          spareImg={item.spareImg}
        />
      </BentoGrid>
    </div>
  );
};

export default FotterGrid;
