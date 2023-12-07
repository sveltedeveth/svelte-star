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
export type FaRegGrimaceProps = typeof __propDef.props;
export type FaRegGrimaceEvents = typeof __propDef.events;
export type FaRegGrimaceSlots = typeof __propDef.slots;
export default class FaRegGrimace extends SvelteComponentTyped<FaRegGrimaceProps, FaRegGrimaceEvents, FaRegGrimaceSlots> {
}
export {};
