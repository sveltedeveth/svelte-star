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
export type GiGlassBallProps = typeof __propDef.props;
export type GiGlassBallEvents = typeof __propDef.events;
export type GiGlassBallSlots = typeof __propDef.slots;
export default class GiGlassBall extends SvelteComponentTyped<GiGlassBallProps, GiGlassBallEvents, GiGlassBallSlots> {
}
export {};
