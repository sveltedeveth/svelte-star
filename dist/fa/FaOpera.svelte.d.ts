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
export type FaOperaProps = typeof __propDef.props;
export type FaOperaEvents = typeof __propDef.events;
export type FaOperaSlots = typeof __propDef.slots;
export default class FaOpera extends SvelteComponentTyped<FaOperaProps, FaOperaEvents, FaOperaSlots> {
}
export {};
