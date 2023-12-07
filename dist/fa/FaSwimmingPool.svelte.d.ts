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
export type FaSwimmingPoolProps = typeof __propDef.props;
export type FaSwimmingPoolEvents = typeof __propDef.events;
export type FaSwimmingPoolSlots = typeof __propDef.slots;
export default class FaSwimmingPool extends SvelteComponentTyped<FaSwimmingPoolProps, FaSwimmingPoolEvents, FaSwimmingPoolSlots> {
}
export {};
