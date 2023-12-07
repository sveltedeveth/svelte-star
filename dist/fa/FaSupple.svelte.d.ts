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
export type FaSuppleProps = typeof __propDef.props;
export type FaSuppleEvents = typeof __propDef.events;
export type FaSuppleSlots = typeof __propDef.slots;
export default class FaSupple extends SvelteComponentTyped<FaSuppleProps, FaSuppleEvents, FaSuppleSlots> {
}
export {};
