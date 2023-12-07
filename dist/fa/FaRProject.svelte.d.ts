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
export type FaRProjectProps = typeof __propDef.props;
export type FaRProjectEvents = typeof __propDef.events;
export type FaRProjectSlots = typeof __propDef.slots;
export default class FaRProject extends SvelteComponentTyped<FaRProjectProps, FaRProjectEvents, FaRProjectSlots> {
}
export {};
