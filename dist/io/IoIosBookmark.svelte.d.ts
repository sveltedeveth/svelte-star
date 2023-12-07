import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type IoIosBookmarkProps = typeof __propDef.props;
export type IoIosBookmarkEvents = typeof __propDef.events;
export type IoIosBookmarkSlots = typeof __propDef.slots;
export default class IoIosBookmark extends SvelteComponentTyped<IoIosBookmarkProps, IoIosBookmarkEvents, IoIosBookmarkSlots> {
}
export {};
