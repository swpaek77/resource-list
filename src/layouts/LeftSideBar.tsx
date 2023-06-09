import { css } from "@emotion/react";
import { shallow } from "zustand/shallow";

import AddButton from "@/components/AddButton";
import Resource from "@/components/Resource";
import { useResourceStore } from "@/stores/ResourceStore";

const LeftSideBar = () => {
  const [resourceList, selectedResource] = useResourceStore(state => [state.resourceList, state.selectedResource], shallow);

  return (
    <div css={sidebarStyle}>
      <div css={topStyle}>
        <AddButton text="URL 추가" type="URL" />
        <AddButton text="이미지 추가" type="IMG" />
      </div>

      <div css={mainStyle}>
        {resourceList.map(resource => (
          <Resource key={resource.id} resource={resource} isSelected={resource.id === selectedResource?.id} />
        ))}
      </div>
    </div>
  );
};

const sidebarStyle = css`
  flex: 0 0 281px;
  border-right: 1px solid #c4c4c4;
`;

const topStyle = css`
  display: flex;
  justify-content: space-between;
  position: relative;
  z-index: 1;
  padding: 10px;
  background: #ffffff;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
`;

const mainStyle = css`
  overflow-y: auto;
  height: calc(100% - 50px);
`;

export default LeftSideBar;
