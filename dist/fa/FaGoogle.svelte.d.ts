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
export type FaGoogleProps = typeof __propDef.props;
export type FaGoogleEvents = typeof __propDef.events;
export type FaGoogleSlots = typeof __propDef.slots;
export default class FaGoogle extends SvelteComponentTyped<FaGoogleProps, FaGoogleEvents, FaGoogleSlots> {
}
export {};
