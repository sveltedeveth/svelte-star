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
export type GiLightProjectorProps = typeof __propDef.props;
export type GiLightProjectorEvents = typeof __propDef.events;
export type GiLightProjectorSlots = typeof __propDef.slots;
export default class GiLightProjector extends SvelteComponentTyped<GiLightProjectorProps, GiLightProjectorEvents, GiLightProjectorSlots> {
}
export {};
