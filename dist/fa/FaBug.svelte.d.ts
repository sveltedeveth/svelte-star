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
export type FaBugProps = typeof __propDef.props;
export type FaBugEvents = typeof __propDef.events;
export type FaBugSlots = typeof __propDef.slots;
export default class FaBug extends SvelteComponentTyped<FaBugProps, FaBugEvents, FaBugSlots> {
}
export {};
