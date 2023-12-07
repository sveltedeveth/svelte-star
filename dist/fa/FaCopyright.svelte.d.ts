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
export type FaCopyrightProps = typeof __propDef.props;
export type FaCopyrightEvents = typeof __propDef.events;
export type FaCopyrightSlots = typeof __propDef.slots;
export default class FaCopyright extends SvelteComponentTyped<FaCopyrightProps, FaCopyrightEvents, FaCopyrightSlots> {
}
export {};
