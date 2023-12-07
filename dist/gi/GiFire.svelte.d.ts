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
export type GiFireProps = typeof __propDef.props;
export type GiFireEvents = typeof __propDef.events;
export type GiFireSlots = typeof __propDef.slots;
export default class GiFire extends SvelteComponentTyped<GiFireProps, GiFireEvents, GiFireSlots> {
}
export {};
