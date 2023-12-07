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
export type IoMdFootballProps = typeof __propDef.props;
export type IoMdFootballEvents = typeof __propDef.events;
export type IoMdFootballSlots = typeof __propDef.slots;
export default class IoMdFootball extends SvelteComponentTyped<IoMdFootballProps, IoMdFootballEvents, IoMdFootballSlots> {
}
export {};
