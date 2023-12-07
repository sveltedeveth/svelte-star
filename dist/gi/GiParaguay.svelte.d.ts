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
export type GiParaguayProps = typeof __propDef.props;
export type GiParaguayEvents = typeof __propDef.events;
export type GiParaguaySlots = typeof __propDef.slots;
export default class GiParaguay extends SvelteComponentTyped<GiParaguayProps, GiParaguayEvents, GiParaguaySlots> {
}
export {};
