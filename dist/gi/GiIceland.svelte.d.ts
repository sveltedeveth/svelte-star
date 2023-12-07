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
export type GiIcelandProps = typeof __propDef.props;
export type GiIcelandEvents = typeof __propDef.events;
export type GiIcelandSlots = typeof __propDef.slots;
export default class GiIceland extends SvelteComponentTyped<GiIcelandProps, GiIcelandEvents, GiIcelandSlots> {
}
export {};
