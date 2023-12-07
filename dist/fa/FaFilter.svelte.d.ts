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
export type FaFilterProps = typeof __propDef.props;
export type FaFilterEvents = typeof __propDef.events;
export type FaFilterSlots = typeof __propDef.slots;
export default class FaFilter extends SvelteComponentTyped<FaFilterProps, FaFilterEvents, FaFilterSlots> {
}
export {};
