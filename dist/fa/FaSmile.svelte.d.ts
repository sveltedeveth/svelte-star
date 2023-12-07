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
export type FaSmileProps = typeof __propDef.props;
export type FaSmileEvents = typeof __propDef.events;
export type FaSmileSlots = typeof __propDef.slots;
export default class FaSmile extends SvelteComponentTyped<FaSmileProps, FaSmileEvents, FaSmileSlots> {
}
export {};
