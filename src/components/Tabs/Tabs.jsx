export const Tabs = ({ tabs, activeTabId, onTabSelected }) => (
  <>
    <div className="tabs is-boxed">
      <ul>
        {
          tabs.map(tab => {

            return (

              <li
                key={tab.id}
                className={tab.id === activeTabId ? 'is-active' : ''}
                data-cy="Tab">
                <a
                  href={`#${tab.id}`}
                  data-cy="TabLink"
                  onClick={
                    () => {
                      if (tab.id !== activeTabId) {
                        onTabSelected(tab.id);
                      }
                    }}
                >
                  {tab.title}
                </a>
              </li>
            )
          })}

      </ul>
    </div >
    <div className="block" data-cy="TabContent">
      {activeTabId.content}
    </div>
  </>
);
