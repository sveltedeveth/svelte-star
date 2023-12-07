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
export type FaMedrtProps = typeof __propDef.props;
export type FaMedrtEvents = typeof __propDef.events;
export type FaMedrtSlots = typeof __propDef.slots;
export default class FaMedrt extends SvelteComponentTyped<FaMedrtProps, FaMedrtEvents, FaMedrtSlots> {
}
export {};
