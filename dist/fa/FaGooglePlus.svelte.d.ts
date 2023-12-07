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
export type FaGooglePlusProps = typeof __propDef.props;
export type FaGooglePlusEvents = typeof __propDef.events;
export type FaGooglePlusSlots = typeof __propDef.slots;
export default class FaGooglePlus extends SvelteComponentTyped<FaGooglePlusProps, FaGooglePlusEvents, FaGooglePlusSlots> {
}
export {};
