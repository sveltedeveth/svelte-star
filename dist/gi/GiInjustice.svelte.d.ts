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
export type GiInjusticeProps = typeof __propDef.props;
export type GiInjusticeEvents = typeof __propDef.events;
export type GiInjusticeSlots = typeof __propDef.slots;
export default class GiInjustice extends SvelteComponentTyped<GiInjusticeProps, GiInjusticeEvents, GiInjusticeSlots> {
}
export {};
