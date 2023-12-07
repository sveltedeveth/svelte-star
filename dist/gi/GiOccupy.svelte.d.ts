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
export type GiOccupyProps = typeof __propDef.props;
export type GiOccupyEvents = typeof __propDef.events;
export type GiOccupySlots = typeof __propDef.slots;
export default class GiOccupy extends SvelteComponentTyped<GiOccupyProps, GiOccupyEvents, GiOccupySlots> {
}
export {};
