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
export type FaGrimaceProps = typeof __propDef.props;
export type FaGrimaceEvents = typeof __propDef.events;
export type FaGrimaceSlots = typeof __propDef.slots;
export default class FaGrimace extends SvelteComponentTyped<FaGrimaceProps, FaGrimaceEvents, FaGrimaceSlots> {
}
export {};
