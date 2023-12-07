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
export type MdPlaylistPlayProps = typeof __propDef.props;
export type MdPlaylistPlayEvents = typeof __propDef.events;
export type MdPlaylistPlaySlots = typeof __propDef.slots;
export default class MdPlaylistPlay extends SvelteComponentTyped<MdPlaylistPlayProps, MdPlaylistPlayEvents, MdPlaylistPlaySlots> {
}
export {};
