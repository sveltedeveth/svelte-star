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
export type FaSwimmerProps = typeof __propDef.props;
export type FaSwimmerEvents = typeof __propDef.events;
export type FaSwimmerSlots = typeof __propDef.slots;
export default class FaSwimmer extends SvelteComponentTyped<FaSwimmerProps, FaSwimmerEvents, FaSwimmerSlots> {
}
export {};
