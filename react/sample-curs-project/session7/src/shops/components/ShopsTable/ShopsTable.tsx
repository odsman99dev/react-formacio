import "./ShopsTable.scss";
import Button from "@/shared/components/Button";
import { useContext } from "react";
import { ShopsListContext } from "@/shops/context/ShopsListContext";
import { useAppStore } from "@/store";

const ShopsTable = (): React.ReactElement => {
  const shops = useAppStore((state) => state.shops.list);
  const featureShop = useAppStore((state) => state.shops.featureShop);
  const incrementEmployees = useAppStore(
    (state) => state.shops.incrementEmployees
  );
  const decrementEmployees = useAppStore(
    (state) => state.shops.decrementEmployees
  );

  const { filterSize } = useContext(ShopsListContext);

  const onFeatureShop = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    const id = event.currentTarget.dataset.id!;

    featureShop(+id);
  };

  const onIncrementEmployees = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    const id = event.currentTarget.dataset.id!;

    incrementEmployees(+id);
  };

  const onDecrementEmployees = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    const id = event.currentTarget.dataset.id!;

    decrementEmployees(+id);
  };

  return (
    <>
      <p>Filtered: {filterSize}</p>
      <table className="shops-data">
        <thead>
          <tr>
            <th className="shops-data__column--fixed">Image</th>
            <th>Name</th>
            <th>City</th>
            <th># employees</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {shops.map(({ id, name, city, employees, picture }) => (
            <tr key={id}>
              <td className="shops-data__column--fixed">
                <img src={`/pictures/${picture.thumbnail}`} alt={name} />
              </td>
              <td>{name}</td>
              <td>{city}</td>
              <td>
                {employees}{" "}
                <Button
                  variant="outline"
                  onClick={onDecrementEmployees}
                  data-id={id}
                >
                  -
                </Button>{" "}
                <Button
                  variant="outline"
                  onClick={onIncrementEmployees}
                  data-id={id}
                >
                  +
                </Button>
              </td>
              <td>
                <Button variant="outline" onClick={onFeatureShop} data-id={id}>
                  feature
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default ShopsTable;
