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
export type GiSwordmanProps = typeof __propDef.props;
export type GiSwordmanEvents = typeof __propDef.events;
export type GiSwordmanSlots = typeof __propDef.slots;
export default class GiSwordman extends SvelteComponentTyped<GiSwordmanProps, GiSwordmanEvents, GiSwordmanSlots> {
}
export {};
