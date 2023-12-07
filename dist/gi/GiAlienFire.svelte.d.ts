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
export type GiAlienFireProps = typeof __propDef.props;
export type GiAlienFireEvents = typeof __propDef.events;
export type GiAlienFireSlots = typeof __propDef.slots;
export default class GiAlienFire extends SvelteComponentTyped<GiAlienFireProps, GiAlienFireEvents, GiAlienFireSlots> {
}
export {};
