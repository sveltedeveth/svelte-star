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
export type GoBrowserProps = typeof __propDef.props;
export type GoBrowserEvents = typeof __propDef.events;
export type GoBrowserSlots = typeof __propDef.slots;
export default class GoBrowser extends SvelteComponentTyped<GoBrowserProps, GoBrowserEvents, GoBrowserSlots> {
}
export {};
