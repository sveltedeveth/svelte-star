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
export type FaNeuterProps = typeof __propDef.props;
export type FaNeuterEvents = typeof __propDef.events;
export type FaNeuterSlots = typeof __propDef.slots;
export default class FaNeuter extends SvelteComponentTyped<FaNeuterProps, FaNeuterEvents, FaNeuterSlots> {
}
export {};
