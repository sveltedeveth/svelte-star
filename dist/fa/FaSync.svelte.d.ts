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
export type FaSyncProps = typeof __propDef.props;
export type FaSyncEvents = typeof __propDef.events;
export type FaSyncSlots = typeof __propDef.slots;
export default class FaSync extends SvelteComponentTyped<FaSyncProps, FaSyncEvents, FaSyncSlots> {
}
export {};
