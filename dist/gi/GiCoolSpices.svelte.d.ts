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
export type GiCoolSpicesProps = typeof __propDef.props;
export type GiCoolSpicesEvents = typeof __propDef.events;
export type GiCoolSpicesSlots = typeof __propDef.slots;
export default class GiCoolSpices extends SvelteComponentTyped<GiCoolSpicesProps, GiCoolSpicesEvents, GiCoolSpicesSlots> {
}
export {};
