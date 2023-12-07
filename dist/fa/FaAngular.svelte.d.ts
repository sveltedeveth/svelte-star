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
export type FaAngularProps = typeof __propDef.props;
export type FaAngularEvents = typeof __propDef.events;
export type FaAngularSlots = typeof __propDef.slots;
export default class FaAngular extends SvelteComponentTyped<FaAngularProps, FaAngularEvents, FaAngularSlots> {
}
export {};
