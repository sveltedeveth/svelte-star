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
export type GiLoveSongProps = typeof __propDef.props;
export type GiLoveSongEvents = typeof __propDef.events;
export type GiLoveSongSlots = typeof __propDef.slots;
export default class GiLoveSong extends SvelteComponentTyped<GiLoveSongProps, GiLoveSongEvents, GiLoveSongSlots> {
}
export {};
