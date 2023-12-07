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
export type FaMarsProps = typeof __propDef.props;
export type FaMarsEvents = typeof __propDef.events;
export type FaMarsSlots = typeof __propDef.slots;
export default class FaMars extends SvelteComponentTyped<FaMarsProps, FaMarsEvents, FaMarsSlots> {
}
export {};
