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
export type FaHamsaProps = typeof __propDef.props;
export type FaHamsaEvents = typeof __propDef.events;
export type FaHamsaSlots = typeof __propDef.slots;
export default class FaHamsa extends SvelteComponentTyped<FaHamsaProps, FaHamsaEvents, FaHamsaSlots> {
}
export {};
