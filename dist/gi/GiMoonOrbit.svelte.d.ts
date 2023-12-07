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
export type GiMoonOrbitProps = typeof __propDef.props;
export type GiMoonOrbitEvents = typeof __propDef.events;
export type GiMoonOrbitSlots = typeof __propDef.slots;
export default class GiMoonOrbit extends SvelteComponentTyped<GiMoonOrbitProps, GiMoonOrbitEvents, GiMoonOrbitSlots> {
}
export {};
