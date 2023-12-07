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
export type GiBoatPropellerProps = typeof __propDef.props;
export type GiBoatPropellerEvents = typeof __propDef.events;
export type GiBoatPropellerSlots = typeof __propDef.slots;
export default class GiBoatPropeller extends SvelteComponentTyped<GiBoatPropellerProps, GiBoatPropellerEvents, GiBoatPropellerSlots> {
}
export {};
