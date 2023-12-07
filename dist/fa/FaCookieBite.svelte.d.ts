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
export type FaCookieBiteProps = typeof __propDef.props;
export type FaCookieBiteEvents = typeof __propDef.events;
export type FaCookieBiteSlots = typeof __propDef.slots;
export default class FaCookieBite extends SvelteComponentTyped<FaCookieBiteProps, FaCookieBiteEvents, FaCookieBiteSlots> {
}
export {};
