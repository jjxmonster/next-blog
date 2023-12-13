import { Category, StrapiObject } from "@/types";
import { useRouter } from "next/navigation";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/dropdown";
import { Button } from "@nextui-org/button";
import clsx from "clsx";
import { link as linkStyles } from "@nextui-org/theme";

interface DropdownCategoriesProps {
  categories: StrapiObject<Category>[];
}

export const DropdownCategories = ({ categories }: DropdownCategoriesProps) => {
  const { push } = useRouter();
  const categoriesDropdown = categories.map(category => (
    <DropdownItem
      onClick={() => push(`/category/${category.attributes.slug}`)}
      key={category.id}
    >
      {category.attributes.name}
    </DropdownItem>
  ));
  return (
    <Dropdown>
      <DropdownTrigger>
        <Button
          color="default"
          variant="light"
          className={clsx(
            linkStyles({ color: "foreground" }),
            "data-[active=true]:text-primary font-light data-[active=true]:font-medium"
          )}
        >
          Category
        </Button>
      </DropdownTrigger>
      <DropdownMenu aria-label="Dropdown Variants">
        {categoriesDropdown}
      </DropdownMenu>
    </Dropdown>
  );
};
