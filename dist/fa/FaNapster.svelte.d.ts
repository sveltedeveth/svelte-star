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
export type FaNapsterProps = typeof __propDef.props;
export type FaNapsterEvents = typeof __propDef.events;
export type FaNapsterSlots = typeof __propDef.slots;
export default class FaNapster extends SvelteComponentTyped<FaNapsterProps, FaNapsterEvents, FaNapsterSlots> {
}
export {};
