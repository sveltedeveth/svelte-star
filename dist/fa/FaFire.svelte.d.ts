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
export type FaFireProps = typeof __propDef.props;
export type FaFireEvents = typeof __propDef.events;
export type FaFireSlots = typeof __propDef.slots;
export default class FaFire extends SvelteComponentTyped<FaFireProps, FaFireEvents, FaFireSlots> {
}
export {};
