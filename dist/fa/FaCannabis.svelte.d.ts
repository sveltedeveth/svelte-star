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
export type FaCannabisProps = typeof __propDef.props;
export type FaCannabisEvents = typeof __propDef.events;
export type FaCannabisSlots = typeof __propDef.slots;
export default class FaCannabis extends SvelteComponentTyped<FaCannabisProps, FaCannabisEvents, FaCannabisSlots> {
}
export {};
