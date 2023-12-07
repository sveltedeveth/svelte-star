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
export type GiAirplaneProps = typeof __propDef.props;
export type GiAirplaneEvents = typeof __propDef.events;
export type GiAirplaneSlots = typeof __propDef.slots;
export default class GiAirplane extends SvelteComponentTyped<GiAirplaneProps, GiAirplaneEvents, GiAirplaneSlots> {
}
export {};
