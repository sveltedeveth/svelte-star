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
export type GiChiliPepperProps = typeof __propDef.props;
export type GiChiliPepperEvents = typeof __propDef.events;
export type GiChiliPepperSlots = typeof __propDef.slots;
export default class GiChiliPepper extends SvelteComponentTyped<GiChiliPepperProps, GiChiliPepperEvents, GiChiliPepperSlots> {
}
export {};
