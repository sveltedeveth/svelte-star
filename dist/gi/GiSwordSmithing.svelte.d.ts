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
export type GiSwordSmithingProps = typeof __propDef.props;
export type GiSwordSmithingEvents = typeof __propDef.events;
export type GiSwordSmithingSlots = typeof __propDef.slots;
export default class GiSwordSmithing extends SvelteComponentTyped<GiSwordSmithingProps, GiSwordSmithingEvents, GiSwordSmithingSlots> {
}
export {};
