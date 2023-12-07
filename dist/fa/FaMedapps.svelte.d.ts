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
export type FaMedappsProps = typeof __propDef.props;
export type FaMedappsEvents = typeof __propDef.events;
export type FaMedappsSlots = typeof __propDef.slots;
export default class FaMedapps extends SvelteComponentTyped<FaMedappsProps, FaMedappsEvents, FaMedappsSlots> {
}
export {};
