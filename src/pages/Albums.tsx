import { useState } from "react";
import { Navbar, Page, List, ListItem, Block, theme } from "framework7-react";

export const Albums = () => {
  const items: any[] = [];
  for (let i = 1; i <= 10000; i += 1) {
    items.push({
      title: `Item ${i}`,
      subtitle: `Subtitle ${i}`,
    });
  }
  const [vlData, setVlData] = useState({
    items: [],
    topPosition: 0,
  });

  const searchAll = (query: any, searchItems: any) => {
    const found = [];
    for (let i = 0; i < searchItems.length; i += 1) {
      if (
        searchItems[i].title.toLowerCase().indexOf(query.toLowerCase()) >= 0 ||
        query.trim() === ""
      )
        found.push(i);
    }
    return found; // return array with mathced indexes
  };
  const renderExternal = (_: any, newData: any) => {
    setVlData({ ...newData });
  };
  return (
    <Page>
      <Navbar title="Virtual List"></Navbar>
      <Block>
        <p>
          Virtual List allows to render lists with huge amount of elements
          without loss of performance. And it is fully compatible with all
          Framework7 list components such as Search Bar, Infinite Scroll, Pull
          To Refresh, Swipeouts (swipe-to-delete) and Sortable.
        </p>
        <p>Here is the example of virtual list with 10 000 items:</p>
      </Block>
      <List
        strong
        outlineIos
        insetMd
        dividersIos
        className="searchbar-not-found"
      >
        <ListItem title="Nothing found" />
      </List>
      <List
        strong
        outlineIos
        insetMd
        dividersIos
        className="searchbar-found"
        virtualList
        virtualListParams={{
          items,
          searchAll,
          renderExternal,
          height: theme.ios ? 63 : theme.md ? 73 : 77,
        }}
      >
        <ul>
          {vlData.items.map((item: any, index) => (
            <ListItem
              key={index}
              mediaItem
              link={`/albums/${index}`}
              title={item.title}
              subtitle={item.subtitle}
              style={{ top: `${vlData.topPosition}px` }}
              virtualListIndex={items.indexOf(item)}
            />
          ))}
        </ul>
      </List>
    </Page>
  );
};
