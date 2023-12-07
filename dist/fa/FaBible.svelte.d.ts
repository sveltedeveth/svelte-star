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
export type FaBibleProps = typeof __propDef.props;
export type FaBibleEvents = typeof __propDef.events;
export type FaBibleSlots = typeof __propDef.slots;
export default class FaBible extends SvelteComponentTyped<FaBibleProps, FaBibleEvents, FaBibleSlots> {
}
export {};
