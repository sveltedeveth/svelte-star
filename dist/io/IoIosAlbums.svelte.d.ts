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
export type IoIosAlbumsProps = typeof __propDef.props;
export type IoIosAlbumsEvents = typeof __propDef.events;
export type IoIosAlbumsSlots = typeof __propDef.slots;
export default class IoIosAlbums extends SvelteComponentTyped<IoIosAlbumsProps, IoIosAlbumsEvents, IoIosAlbumsSlots> {
}
export {};
