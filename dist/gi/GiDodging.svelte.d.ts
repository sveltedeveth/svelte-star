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
export type GiDodgingProps = typeof __propDef.props;
export type GiDodgingEvents = typeof __propDef.events;
export type GiDodgingSlots = typeof __propDef.slots;
export default class GiDodging extends SvelteComponentTyped<GiDodgingProps, GiDodgingEvents, GiDodgingSlots> {
}
export {};
