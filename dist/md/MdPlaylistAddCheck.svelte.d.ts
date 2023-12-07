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
export type MdPlaylistAddCheckProps = typeof __propDef.props;
export type MdPlaylistAddCheckEvents = typeof __propDef.events;
export type MdPlaylistAddCheckSlots = typeof __propDef.slots;
export default class MdPlaylistAddCheck extends SvelteComponentTyped<MdPlaylistAddCheckProps, MdPlaylistAddCheckEvents, MdPlaylistAddCheckSlots> {
}
export {};
