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
export type FaTextHeightProps = typeof __propDef.props;
export type FaTextHeightEvents = typeof __propDef.events;
export type FaTextHeightSlots = typeof __propDef.slots;
export default class FaTextHeight extends SvelteComponentTyped<FaTextHeightProps, FaTextHeightEvents, FaTextHeightSlots> {
}
export {};
