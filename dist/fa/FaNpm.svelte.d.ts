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
export type FaNpmProps = typeof __propDef.props;
export type FaNpmEvents = typeof __propDef.events;
export type FaNpmSlots = typeof __propDef.slots;
export default class FaNpm extends SvelteComponentTyped<FaNpmProps, FaNpmEvents, FaNpmSlots> {
}
export {};
