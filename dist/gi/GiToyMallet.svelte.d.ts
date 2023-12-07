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
export type GiToyMalletProps = typeof __propDef.props;
export type GiToyMalletEvents = typeof __propDef.events;
export type GiToyMalletSlots = typeof __propDef.slots;
export default class GiToyMallet extends SvelteComponentTyped<GiToyMalletProps, GiToyMalletEvents, GiToyMalletSlots> {
}
export {};
