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
export type GiTomahawkProps = typeof __propDef.props;
export type GiTomahawkEvents = typeof __propDef.events;
export type GiTomahawkSlots = typeof __propDef.slots;
export default class GiTomahawk extends SvelteComponentTyped<GiTomahawkProps, GiTomahawkEvents, GiTomahawkSlots> {
}
export {};
