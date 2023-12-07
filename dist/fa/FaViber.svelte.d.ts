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
export type FaViberProps = typeof __propDef.props;
export type FaViberEvents = typeof __propDef.events;
export type FaViberSlots = typeof __propDef.slots;
export default class FaViber extends SvelteComponentTyped<FaViberProps, FaViberEvents, FaViberSlots> {
}
export {};
