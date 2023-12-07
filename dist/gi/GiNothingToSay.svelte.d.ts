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
export type GiNothingToSayProps = typeof __propDef.props;
export type GiNothingToSayEvents = typeof __propDef.events;
export type GiNothingToSaySlots = typeof __propDef.slots;
export default class GiNothingToSay extends SvelteComponentTyped<GiNothingToSayProps, GiNothingToSayEvents, GiNothingToSaySlots> {
}
export {};
