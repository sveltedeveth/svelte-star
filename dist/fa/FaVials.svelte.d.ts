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
export type FaVialsProps = typeof __propDef.props;
export type FaVialsEvents = typeof __propDef.events;
export type FaVialsSlots = typeof __propDef.slots;
export default class FaVials extends SvelteComponentTyped<FaVialsProps, FaVialsEvents, FaVialsSlots> {
}
export {};
