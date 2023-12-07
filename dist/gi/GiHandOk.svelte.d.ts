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
export type GiHandOkProps = typeof __propDef.props;
export type GiHandOkEvents = typeof __propDef.events;
export type GiHandOkSlots = typeof __propDef.slots;
export default class GiHandOk extends SvelteComponentTyped<GiHandOkProps, GiHandOkEvents, GiHandOkSlots> {
}
export {};
