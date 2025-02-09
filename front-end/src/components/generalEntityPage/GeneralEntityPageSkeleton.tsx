import { Grid, Stack } from "@mui/material";
import { useEffect } from "react";
import useMeasure from "react-use-measure";
import { PageSkeleton } from "../../pages/PageSkeleton";
import { useAppDispatch } from "../../redux/hooks";
import { setRoutes } from "../../redux/slices/breadCrumbSlice";
import { MyHeader } from "../general/MyHeader";
import {
  OneSecondaryEntity,
  placeholderSecondaryEntity,
} from "../general/OneSecondaryEntity";
import { SecondaryEntitiesList } from "../general/SecondaryEntitiesList";
import { SearchBar } from "../search/SearchBar";
import { TopGeneralEntities } from "./TopGeneralEntities";

export interface GeneralEntityPageSkeletonProps {
  name: string;
  searchName: string;
  keyField?: string;
  headerName?: string;
}

export const GeneralEntityPageSkeleton = ({
  name,
  searchName,
  keyField = "name",
  headerName,
}: GeneralEntityPageSkeletonProps) => {
  const dispatch = useAppDispatch();
  const [ref, bounds] = useMeasure();

  useEffect(() => {
    dispatch(
      setRoutes({
        routes: [
          {
            text: "MovieOn",
            href: "/",
          },
          {
            text: headerName || name,
            href: "#",
          },
        ],
      })
    );
  }, []);

  return (
    <PageSkeleton
      children={
        <>
          <div ref={ref} />
          <Stack spacing={2} width={bounds.width-48}>
            <Grid item xs={12}>
              <MyHeader
                searchProps={{
                  initValue: "",
                  placeholder: `Search for a ${searchName}...`,
                  entityName: name
                    .charAt(0)
                    .toUpperCase()
                    .concat(name.slice(1)),
                }}
              />
            </Grid>
            <TopGeneralEntities
              entityName={name}
              keyField={keyField}
              headerName={headerName || name}
            />
            <SecondaryEntitiesList
              name={name}
              keyField={keyField}
              itemWidth={250}
              component={
                <OneSecondaryEntity
                  {...placeholderSecondaryEntity}
                  width={250}
                />
              }
            />
          </Stack>
        </>
      }
    />
  );
};
