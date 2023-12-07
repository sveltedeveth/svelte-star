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
export type FaTextWidthProps = typeof __propDef.props;
export type FaTextWidthEvents = typeof __propDef.events;
export type FaTextWidthSlots = typeof __propDef.slots;
export default class FaTextWidth extends SvelteComponentTyped<FaTextWidthProps, FaTextWidthEvents, FaTextWidthSlots> {
}
export {};
