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
export type MdAirplayProps = typeof __propDef.props;
export type MdAirplayEvents = typeof __propDef.events;
export type MdAirplaySlots = typeof __propDef.slots;
export default class MdAirplay extends SvelteComponentTyped<MdAirplayProps, MdAirplayEvents, MdAirplaySlots> {
}
export {};
