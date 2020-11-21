import React from "react";

import Input from "@components/Input/Input";
import debounce from "@utils/helpers/debounce";
import Tracks from "@components/Tracks/Tracks";
import formatNumber from "@utils/numbers/format";
import Paginator from "@components/Paginator/Paginator";
import { StyledContainer, StyledSearchContainer } from "./SearchTracks.styled";

const SearchTracks = ({ tracks, total, limit, onPageChange, onSearch }) => {
  const debouncedOnSearch = debounce(onSearch, 150);

  return (
    <StyledContainer>
      <StyledSearchContainer>
        <Input
          placeholder={`Busca una canción entre ${formatNumber(total)}`}
          onChange={(e) => {
            e.persist();
            debouncedOnSearch(e?.target.value);
          }}
        />
      </StyledSearchContainer>
      <Tracks tracks={tracks} />
      <Paginator
        onPageChange={({ selected }) => onPageChange(selected)}
        pageCount={total / limit}
      />
    </StyledContainer>
  );
};

export default SearchTracks;
