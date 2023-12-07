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
export type FaGooglePlayProps = typeof __propDef.props;
export type FaGooglePlayEvents = typeof __propDef.events;
export type FaGooglePlaySlots = typeof __propDef.slots;
export default class FaGooglePlay extends SvelteComponentTyped<FaGooglePlayProps, FaGooglePlayEvents, FaGooglePlaySlots> {
}
export {};
