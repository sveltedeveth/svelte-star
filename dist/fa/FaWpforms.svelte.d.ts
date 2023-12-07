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
export type FaWpformsProps = typeof __propDef.props;
export type FaWpformsEvents = typeof __propDef.events;
export type FaWpformsSlots = typeof __propDef.slots;
export default class FaWpforms extends SvelteComponentTyped<FaWpformsProps, FaWpformsEvents, FaWpformsSlots> {
}
export {};
