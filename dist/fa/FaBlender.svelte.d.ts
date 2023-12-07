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
export type FaBlenderProps = typeof __propDef.props;
export type FaBlenderEvents = typeof __propDef.events;
export type FaBlenderSlots = typeof __propDef.slots;
export default class FaBlender extends SvelteComponentTyped<FaBlenderProps, FaBlenderEvents, FaBlenderSlots> {
}
export {};
