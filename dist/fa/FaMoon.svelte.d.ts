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
export type FaMoonProps = typeof __propDef.props;
export type FaMoonEvents = typeof __propDef.events;
export type FaMoonSlots = typeof __propDef.slots;
export default class FaMoon extends SvelteComponentTyped<FaMoonProps, FaMoonEvents, FaMoonSlots> {
}
export {};
